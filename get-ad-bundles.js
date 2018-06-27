const path = require("path");
const { copy, readdir, readFile, writeFile, mkdirp } = require("fs-extra");
const { exec } = require("child-process-promise");
const beautify = require("js-beautify").js_beautify;

/* 
- for each repo branch:
    - run compilation
		- take compiled script and consolidate w/in folder on same level as repos
*/

async function getAdBundles() {
  const adVersions = await readdir(path.resolve("versions"));
  const pathedAdVersions = adVersions.map(version =>
    path.resolve("versions", version)
  );

  const compilePromises = pathedAdVersions.map(async (version, idx) => {
    try {
      await exec(
        `cd ${version} && npx webpack --config 'webpack.config.js' --env '{"deploy":{"source":{"size":"300x250","index":"index.html"},"output":{"debug":false,"context":"./3-traffic"},"profile":{"name":"default","adEnvironment":{"id":"default","runPath":"","adPath":""}}},"key":"/default/300x250/index.html"}' --colors --profile --json > stats.json`
      );

      const bundlePath = path.resolve(
        version,
        "3-traffic/default/300x250/build.bundle.js"
      );
      const versionName = adVersions[idx];

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
  console.log("DONEDONE");
}

getAdBundles();
