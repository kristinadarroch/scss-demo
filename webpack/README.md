# Basic HTML5 boilerplate with Webpack for Bootstrap activity

##Description
Use this as a starting point to complete the Bootstrap activity.  It scaffolds out a simple web app with webpack support to bundle up our assets.  The activity instructions will teach you how to install Bootstrap into it as well.

## Setup
- `yarn install`
- `yarn start`  starts up a local server and updates on any JS or SCSS changes.
- `yarn build` to build final files when you are ready to turn in.


## Add package
You will need to add a few packages to get Bootstrap working
- `yarn add [package] --dev` or `yarn add [package]`
- Enter the following: `yarn add jquery bootstrap popper.js`
- `yarn upgrade` - when needed, updates all dependencies to their latest version based on the version range specified in the `package.json` file

## Using Boilerplate

- Import the javascript dependencies into `assets/js/scripts.js`
  - `import $ from "jquery"`;
  - `import bootstrap from 'bootstrap'`;
  - `import popper from 'popper.js'`;
- Import the Bootstrap scss into `styles.scss` to make it available.
