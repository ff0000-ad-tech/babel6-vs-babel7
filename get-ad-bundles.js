const path = require("path");
const {
  copy,
  readdir,
  readFile,
  writeFile,
  mkdirp,
  stat
} = require("fs-extra");
const { exec } = require("child-process-promise");
const beautify = require("js-beautify").js_beautify;

async function getAdBundles() {
  const adVersions = await readdir(path.resolve("versions"));
  const pathedAdVersions = adVersions.map(version =>
    path.resolve("versions", version)
  );

  const compilePromises = pathedAdVersions.map(async (version, idx) => {
    try {
      const versionName = adVersions[idx];
      const jsonPath = path.resolve("json", `${versionName}.json`);

      // start Webpack compilation while exporting compilation information to json folder
      await exec(
        `cd ${version} && npx webpack --config 'webpack.config.js' --env '{"deploy":{"source":{"size":"300x250","index":"index.html"},"output":{"debug":false,"context":"./3-traffic"},"profile":{"name":"default","adEnvironment":{"id":"default","runPath":"","adPath":""}}},"key":"/default/300x250/index.html"}' --colors --profile --json > ${jsonPath}`
      );

      const bundlePath = path.resolve(
        version,
        "3-traffic/default/300x250/build.bundle.js"
      );

      // copy version bundle to bundles folder
      await copy(
        bundlePath,
        path.resolve("bundles", `${versionName}.bundle.js`)
      );

      // get unminified version of bundle
      const minifiedSrc = await readFile(bundlePath, "utf8");
      await writeFile(
        path.resolve("beautified-bundles", `${versionName}.bundle.js`),
        beautify(minifiedSrc)
      );
    } catch (err) {
      throw new Error(err);
    }
  });

  await Promise.all(compilePromises);
  console.log("Compilations complete");
}

getAdBundles();
