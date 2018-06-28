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

const dirs = [
  "beautified-prod-bundles",
  "prod-bundles",
  "prod-json",
  "debug-bundles",
  "debug-json"
];

async function getAdBundles() {
  const adVersions = await readdir(path.resolve("versions"));
  const compileVersionBundlesPromises = adVersions.map(async (version, idx) => {
    try {
      init();
      const compileByModePromises = [
        compileVersion({
          version,
          mode: "prod",
          cmdTemplate: (versionPath, jsonPath) =>
            `cd ${versionPath} && npx webpack --config 'webpack.config.js' --env '{"deploy":{"source":{"size":"300x250","index":"index.html"},"output":{"debug":false,"context":"./3-traffic"},"profile":{"name":"default","adEnvironment":{"id":"default","runPath":"","adPath":""}}},"key":"/default/300x250/index.html"}' --colors --profile --json > ${jsonPath}`,
          relativeBundlePath: "3-traffic/default/300x250/build.bundle.js"
        }),
        compileVersion({
          version,
          mode: "debug",
          cmdTemplate: (versionPath, jsonPath) =>
            `cd ${versionPath} && npx webpack --config 'webpack.config.js' --env '{"deploy":{"source":{"size":"300x250","index":"index.html"},"profile":{"name":""},"output":{"debug":true,"context":"./2-debug"}}}' --colors --profile --json > ${jsonPath}`,
          relativeBundlePath: "2-debug/300x250/build.bundle.js"
        })
      ];

      await Promise.all(compileByModePromises);

      // get unminified version of production bundle
      const prodBundlePath = path.resolve(
        "versions",
        version,
        "3-traffic/default/300x250/build.bundle.js"
      );
      const minifiedSrc = await readFile(prodBundlePath, "utf8");
      await writeFile(
        path.resolve("beautified-prod-bundles", `${version}.bundle.js`),
        beautify(minifiedSrc)
      );
    } catch (err) {
      throw new Error(err);
    }
  });

  await Promise.all(compileVersionBundlesPromises);
  console.log("Compilations complete");
}

async function compileVersion({
  version,
  mode,
  cmdTemplate,
  relativeBundlePath
}) {
  // start Webpack compilation while exporting compilation information to json folder
  const versionPath = path.resolve("versions", version);
  const jsonPath = path.resolve(`${mode}-json/${version}.json`);
  const cmd = cmdTemplate(versionPath, jsonPath);
  await exec(cmd);

  const resolvedBundlePath = path.resolve(
    "versions",
    version,
    relativeBundlePath
  );

  // copy version bundle to bundles folder
  await copy(
    resolvedBundlePath,
    path.resolve(`${mode}-bundles/${version}.bundle.js`)
  );
}

async function init() {
  const mkdirPromises = dirs.map(dir => mkdirp(path.resolve(dir)));
  await Promise.all(mkdirPromises);
}

getAdBundles();
