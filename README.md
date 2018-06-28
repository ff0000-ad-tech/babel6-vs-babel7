# Results

## Background

Testing a 300x250 banner built on `tmpl-standard-base`, which renders a few UIImages, against Webpack 4 configurations with Babel 6 and 7.

## Debug

Babel 7 produces smaller bundles than 6:

- Webpack 4 Compilation using Babel 6: **548.14 KiB**
- Webpack 4 Compilation using Babel 7: **333.22 KiB**

## Production

In production (using Rollup-Babel Webpack loader), Babel 7 produces larger bundles than 6:

- Webpack 4 Compilation using Babel 6: **25.66 KiB**
- Webpack 4 Compilation using Babel 7: **29.44 KiB**

## Next Steps

- Consider disabling or configuring Rollup, since that's a key difference b/w the debug and production configs
- Possibly analyze syntax/architectural differences between debug bundles
