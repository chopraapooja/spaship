# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.10.0](https://github.com/spaship/spaship/compare/v0.9.2...v0.10.0) (2020-04-20)

### Bug Fixes

- **#328:** Added warning message to Deploy UI page. ([#339](https://github.com/spaship/spaship/issues/339)) ([60b6082](https://github.com/spaship/spaship/commit/60b60829fc9cfa9bd0d6404fa7b089d419c513f1)), closes [#328](https://github.com/spaship/spaship/issues/328)
- **#335:** Added catch block to serviceWorker unregister method. ([#336](https://github.com/spaship/spaship/issues/336)) ([893cb96](https://github.com/spaship/spaship/commit/893cb9662fef86e63f3bb1a4748034cba65a2f1e)), closes [#335](https://github.com/spaship/spaship/issues/335)
- **#359:** Jazzed up the Coming Soon message on the Dashboard page. ([#360](https://github.com/spaship/spaship/issues/360)) ([490cf52](https://github.com/spaship/spaship/commit/490cf5297cb71bdd93fd9ff0c05954da4bb01b14)), closes [#359](https://github.com/spaship/spaship/issues/359)

### Features

- **#267:** Added JWT refresh to APIService methods. ([#340](https://github.com/spaship/spaship/issues/340)) ([943ee5f](https://github.com/spaship/spaship/commit/943ee5f5a1d5c037cd25005f7da089118ad34e9c)), closes [#267](https://github.com/spaship/spaship/issues/267)
- **manager:** show application index in real data ([#355](https://github.com/spaship/spaship/issues/355)) ([1c0934a](https://github.com/spaship/spaship/commit/1c0934a2f5110b6e61074bad10296276fbc90065))

# [0.9.0](https://github.com/spaship/spaship/compare/v0.8.1...v0.9.0) (2020-04-14)

### Bug Fixes

- **manager:** remove mock link, add some information to display ([#322](https://github.com/spaship/spaship/issues/322)) ([1d3a927](https://github.com/spaship/spaship/commit/1d3a9275349218391e48b886590e6e52c3ebce32))

### Features

- **manager:** API Key list/create/revoke ([#315](https://github.com/spaship/spaship/issues/315)) ([b6ee36b](https://github.com/spaship/spaship/commit/b6ee36b8125db4ebc7a505d6495f01ba0d46f93f))

# [0.8.0](https://github.com/spaship/spaship/compare/v0.7.0...v0.8.0) (2020-04-09)

### Bug Fixes

- **deps:** update dependency keycloak-js to v9.0.2 ([#276](https://github.com/spaship/spaship/issues/276)) ([bca161b](https://github.com/spaship/spaship/commit/bca161b854186096ad4aeeed1a1f2befca5276ba))

### Features

- **manager:** use config file to replace build environment vars ([#258](https://github.com/spaship/spaship/issues/258)) ([405fc0e](https://github.com/spaship/spaship/commit/405fc0e216316d40f8cce508993ec55617706bcc))

# [0.7.0](https://github.com/spaship/spaship/compare/v0.6.0...v0.7.0) (2020-03-27)

**Note:** Version bump only for package @spaship/manager

# [0.6.0](https://github.com/spaship/spaship/compare/v0.5.0...v0.6.0) (2020-03-26)

### Bug Fixes

- **deps:** pin dependencies ([#226](https://github.com/spaship/spaship/issues/226)) ([0054b53](https://github.com/spaship/spaship/commit/0054b53076f37f445e3f1b3e9b6b1444ee747609))
- **deps:** update dependency @react-keycloak/web to v1.0.5 ([#253](https://github.com/spaship/spaship/issues/253)) ([c59b6b1](https://github.com/spaship/spaship/commit/c59b6b19d06ad550f15952e4f8f9d4b43dcbce2d))
- **manager:** add .htaccess make react browser route work ([#220](https://github.com/spaship/spaship/issues/220)) ([cbfbba9](https://github.com/spaship/spaship/commit/cbfbba956e6d19e2e4eea1160cbc5b18cf0c6aea))
- **manager:** use the default '/' root path to avoid path 404 error ([#221](https://github.com/spaship/spaship/issues/221)) ([3b6d6f4](https://github.com/spaship/spaship/commit/3b6d6f4067c2c79ff3c9cf08256d410bf40769ae))

### Features

- **api:** add jwt and api key validation to the api ([#218](https://github.com/spaship/spaship/issues/218)) ([0d5437f](https://github.com/spaship/spaship/commit/0d5437ff1677d658c6d42f7d06b7d822bd8b7e8d))
- **manager:** add api key page ([#217](https://github.com/spaship/spaship/issues/217)) ([ee04f3c](https://github.com/spaship/spaship/commit/ee04f3cb53bbc7da4c5e119c9ba43611f88dea9b))
- **manager:** add multi api keys support ([#238](https://github.com/spaship/spaship/issues/238)) ([6a29264](https://github.com/spaship/spaship/commit/6a292640855feb1a1396a451aa98518284b4dcbe))

# [0.5.0](https://github.com/spaship/spaship/compare/v0.4.0...v0.5.0) (2020-03-09)

### Features

- add keycloak authentication to SPAship Manager ([#208](https://github.com/spaship/spaship/issues/208)) ([609c499](https://github.com/spaship/spaship/commit/609c49934779bf5942be7fd8d315ea5b374d7b4a))

# [0.4.0](https://github.com/spaship/spaship/compare/v0.3.5...v0.4.0) (2020-03-03)

### Code Refactoring

- rename packages ([#188](https://github.com/spaship/spaship/issues/188)) ([1e739b3](https://github.com/spaship/spaship/commit/1e739b3c08462d95db5af140405683af797b7daa))

### BREAKING CHANGES

- `sync-service` renamed to `api`, `spa-manager` renamed to `manager`, `path-proxy` renamed to `router`

- rename directories

- rename path-proxy within files

- rename sync-service within files

- rename spa-manager within files

- regenerate manager's package-lock

- fix homepage and repository links for renamed packages

- standardize README titles

## [0.3.5](https://github.com/spaship/spa-manager/compare/v0.3.4...v0.3.5) (2019-12-24)

### Bug Fixes

- invalid package.json in spa-manager ([20f8fec](https://github.com/spaship/spa-manager/commit/20f8fec9c969b2f60d63031a11f7f5aa56147573))

## [0.3.4](https://github.com/spaship/spa-manager/compare/v0.3.3...v0.3.4) (2019-10-22)

**Note:** Version bump only for package @spaship/spa-manager

# 0.1.0 (2019-10-18)

### Features

- **file:** add application file update ([5ba53df](https://github.com/spaship/spa-manager/commit/5ba53dfc729f2fec3f85e2686958c7441f063327))
