# Angular Starter

### Commands

```
# For start dev
npm run ng serve

# For build prod
npm run build:prod
```

### Configs

- [GitFlow](https://danielkummer.github.io/git-flow-cheatsheet/index.ru_RU.html)
  install: `git flow init`

- [Commitizen](https://github.com/commitizen/cz-cli)
  install: `npm install -g commitizen`
  making your repo commitizen-friendly `commitizen init cz-conventional-changelog --save-dev --save-exact`
  add the config.commitizen key to the root of your package.json as shown here:

  ```
  "config": {
      "commitizen": {
      "path": "cz-conventional-changelog"
      }
  }
  ```

  and npm command

  ```
  "commit": "npx git-cz",
  ```

- [Commitlint](https://github.com/conventional-changelog/commitlint)
  install: `npm install --save-dev @commitlint/config-conventional @commitlint/cli`,
  add configs `commitlint.config.js` with:

  ```
  module.exports = {
    extends: ['@commitlint/config-conventional']
  };
  ```

- [Changelog](https://www.npmjs.com/package/conventional-changelog-cli)
  install: `npm install -g conventional-changelog-cli`
  init changelog: `conventional-changelog -p angular -i CHANGELOG.md -s -r 0`,
  add npm command

  ```
  "version": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md",
  ```

- [Prettier](https://prettier.io/)
  install: `npm install --save-dev prettier`

- [TSLint](https://palantir.github.io/tslint/)
  install: `npm install --save-dev tslint`

- [tslint-config-prettier](https://github.com/prettier/tslint-config-prettier)
  install: `npm install --save-dev tslint-config-prettier`
  modify `tslint.json`:

  ```
  {
      "extends": ["tslint:recommended", "tslint-config-prettier"],
  }
  ```

  create `.prettierrc` with:

  ```
  {
      "bracketSpacing": true,
      "printWidth": 120,
      "semi": true,
      "singleQuote": true,
      "tabWidth": 2,
      "useTabs": false
  }
  ```

  and `.prettierignore` with:

  ```
  {
      package.json
      package-lock.json
      yarn.lock
      dist
      README.md
  }
  ```

- [Pretty-Quick](https://www.npmjs.com/package/pretty-quick)
  install: `npm install --save-dev pretty-quick`

- [Husky](https://github.com/typicode/husky)
  install: `npm install --save-dev husky`
  setup hooks in package.json:

  ```
  {
      "husky": {
          "hooks": {
              "pre-commit": "pretty-quick --staged && ng lint",
              "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
              "pre-push": "npm run build:prod"
          }
      },
  }
  ```

  and add npm command:

  ```
  "build:prod": "ng build --prod"
  ```

- Environment
  Add this in .gitignore
  ```
  # env
  /src/environments/environment.ts
  /src/environments/environment.prod.ts
  ```
  And use environment.example.ts, environment.prod.example.ts to deploy

### Libraries

- #### UI frameworks

  - [angular-material](https://material.angular.io/) `ng add @angular/material`
  - [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/) `npm install ngx-bootstrap --save`

- #### Components:

  - [ngx-toastr](https://www.npmjs.com/package/ngx-toastr) `npm i ngx-toastr`
  - [handsontable](https://handsontable.com/docs/7.3.0/frameworks-wrapper-for-angular-installation.html) `npm install handsontable @handsontable/angular`
  - [ngx-datatable](http://swimlane.github.io/ngx-datatable/) `npm i @swimlane/ngx-datatable --save`
  - [ng2-table](https://www.npmjs.com/package/ng2-table) `npm i ng2-table`
  - [ngx-smart-modal](https://www.npmjs.com/package/ngx-smart-modal) `npm i ngx-smart-modal`
  - [ngx-charts](https://github.com/swimlane/ngx-charts) `npm i @swimlane/ngx-charts --save`
  - [ng2-charts](https://www.npmjs.com/package/ng2-charts) `npm i ng2-charts`
  - [angular-calendar](https://www.npmjs.com/package/angular-calendar) `ng add angular-calendar`
  - [ng2-select](https://www.npmjs.com/package/ng2-select) `npm i ng2-select`
  - [ng2-file-upload](https://www.npmjs.com/package/ng2-file-upload) `npm i ng2-file-upload`
  - [ng2-tree](https://www.npmjs.com/package/ng2-tree#clapper-usage) `npm i ng2-tree`
  - [ngx-progressbar](https://www.npmjs.com/package/ngx-progressbar) `npm i ngx-progressbar`
  - [angular-epic-spinners](https://www.npmjs.com/package/angular-epic-spinners) `npm i angular-epic-spinners`
  - [ngx-spinner](https://www.npmjs.com/package/ngx-spinner) `npm i ngx-spinner`
  - [ngx-swiper-wrapper](https://www.npmjs.com/package/ngx-swiper-wrapper) `npm i ngx-swiper-wrapper`
  - [ng5-slider](https://www.npmjs.com/package/ng5-slider) `npm i ng5-slider`
  - [angular-perfect-scrollbar](https://www.npmjs.com/package/ngx-perfect-scrollbar) `npm i ngx-perfect-scrollbar`

- #### Auth:

  - [angular-oauth2-oidc](https://www.npmjs.com/package/angular-oauth2-oidc) `npm i angular-oauth2-oidc`
  - [auth0/angular-jwt](https://www.npmjs.com/package/@auth0/angular-jwt) `npm i @auth0/angular-jwt`

- #### Integrations:

  - [@angular/fire](https://www.npmjs.com/package/@angular/fire) `npm i @angular/fire`

- #### Analytics:

  - [angulartics2](https://www.npmjs.com/package/angulartics2) `npm i angulartics2`

- #### Design:

  - [ngx-skeleton-loader](https://www.npmjs.com/package/ngx-skeleton-loader) `npm i ngx-skeleton-loader`
  - [ng-lazyload-image](https://www.npmjs.com/package/ng-lazyload-image) `npm i ng-lazyload-image`
  - [ng-animate](https://www.npmjs.com/package/ng-animate) `npm i ng-animate`
  - [angular-fontawesome](https://github.com/FortAwesome/angular-fontawesome) `ng add @fortawesome/angular-fontawesome@<version>`

- #### Logic:

  - [ngx-translate](https://github.com/ngx-translate/core) `npm install @ngx-translate/core --save`
  - [ngx-dnd](https://www.npmjs.com/package/@swimlane/ngx-dnd) `npm i @swimlane/ngx-dnd`
  - [ng2-dragula](https://www.npmjs.com/package/ng2-dragula) `npm i ng2-dragula`
  - [ngx-pipes](https://www.npmjs.com/package/ngx-pipes) `npm i ngx-pipes`
  - [ngx-moment](https://www.npmjs.com/package/ngx-moment) `npm i ngx-moment`
  - [ngx-infinite-scroll](https://www.npmjs.com/package/ngx-infinite-scroll) `npm i ngx-infinite-scroll`
  - [ng2-pdf-viewer](https://www.npmjs.com/package/ng2-pdf-viewer) `npm i ng2-pdf-viewer`

- #### SEO:

  - [ngx-meta](https://www.npmjs.com/package/@ngx-meta/core) `npm i @ngx-meta/core`
  - [universal](https://angular.io/guide/universal) `ng add @nguniversal/express-engine --clientProject quizo`

- #### State Manager:

  - [ngrx](https://www.npmjs.com/package/@ngrx/store) `npm i @ngrx/store`
  - [ngxs](https://www.npmjs.com/package/@ngxs/store) `npm i @ngxs/store`
  - [akita](https://www.npmjs.com/package/@datorama/akita) `npm i @datorama/akita`
