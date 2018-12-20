module.exports = {
  "globDirectory": "docs/",
  "globPatterns": [
    "**/*.{png,html,json,js}"
  ],
  "swSrc": "./docs/sw-base.js",
  "swDest": "./docs/sw.js",
  "globIgnores": [
    "../workbox-cli-config.js"
  ]
};
