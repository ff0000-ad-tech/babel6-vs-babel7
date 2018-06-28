# Results

## Background

Testing a 300x250 blank ad built on `tmpl-standard-base` against Webpack 4 configurations with Babel 6 and 7.

The output for each version consists of:

- debug and production bundles
- debug and production stats JSON
- beautified/un-minified production bundles, to make them easier to analyze

## Instructions

Before getting output, you'll need to run `npm install` in each version of the build.

After that, you can run `npm run bundle` from the top-level of this folder to get the output of each version.

## Debug

Babel 7 produces smaller bundles than 6:

- Webpack 4 Compilation using Babel 6: **549.65 KiB**
- Webpack 4 Compilation using Babel 7: **334.98 KiB**

## Production

In production (using Rollup-Babel Webpack loader), Babel 7 produces larger bundles than 6:

- Webpack 4 Compilation using Babel 6: **33.34 KiB**
- Webpack 4 Compilation using Babel 7: **36.9 KiB**

## Next Steps

- Consider disabling or configuring Rollup, since that's a key difference b/w the debug and production configs
- Possibly analyze syntax/architectural differences between debug bundles
