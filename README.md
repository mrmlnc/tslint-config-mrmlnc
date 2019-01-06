# :panda_face: tslint-config-mrmlnc

## Introduction

This is the TSLint configuration file used in [@mrmlnc](https://github.com/mrmlnc) projects. Based on [tslint-config-xo](https://github.com/mrmlnc/tslint-config-xo). Adds additional rules from:

  * [tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib)
  * [tslint-consistent-codestyle](https://github.com/ajafff/tslint-consistent-codestyle)
  * [tslint-sonarts](https://github.com/SonarSource/SonarTS)

## Installation

```sh
npm install --save-dev tslint-config-mrmlnc
```

## Usage

Just extend `tslint-config-mrmlnc` in your `tslint.json` file, like so:

```json
{
	"extends": "tslint-config-mrmlnc"
}
```

Don't forget to override any rules if required.
