# 📥 Test Store Application

## Description

This code base was created to display products in a store from an outside API.

The live site can be viewed [here](https://ib-juniper-test-application.vercel.app/).

## 🌱 Set Up

1. Clone this repo onto your local machine using `git clone git@github.com:itchonib/test-application.git`
2. Ensure you are in the root folder (test-application) by doing `cd test-application`
3. Run the command `yarn` to install all dependicies
4. Run the project with `yarn server`

## Assumptions

1. Any user visiting the page can use the site

## 💡 General Solution Plan

1. Research project set up best practices and create general responsive [design](https://www.figma.com/file/znPk3VztDn1XAvGjhvaZzU/Juniper-Test-Application)
2. Start file set up (organize files) and set up router
3. Build out basic FE component skelton + basic styles
4. Add functionality to components and add unit test
5. Review and refactor and make it better

## ⚖️ Decisions/Tradeoffs

- Vue 3 was used rather than Vue 2 for the sake of being able to try and update the applciation using the composition API in the future
- SCSS was used to better organize styles and the ability nest with BEM naming conventions
- Adding tests did require more work/time, however it will reduce time on future refactors and additional new features

## 📦 Libraries/Packages Used

For packages used for testing please see the testing section.

### Client

The front end was built with Vue 3 and styled using scss files. The following additional packages were added

- [`sass`](https://yarnpkg.com/package/sass) was used to allow use of scss files within vue
- [`sass-loader`](https://yarnpkg.com/package/sass-loader) v10 was used, as updated versions were not compatible
- [`vue-router`](https://yarnpkg.com//package/vue-router) was used to set up routing
- [`axios`](https://yarnpkg.com/package/axios) was used to call to the JSON file

This site was delpoyed using vercel.

## 🧪 Running Tests

- [`vue-jest`](https://yarnpkg.com/package/vue-jest) and [`@vue/test-utils`](https://yarnpkg.com/package/@vue/test-utils) were used to created unit tests for specific components. To run unit tests from the root folder please `yarn test:unit`

## 🔮 Future Steps...

- Add cypress tests and continous integration through github actions
- Learn how to use Vuex Store and new Composition API together to update the app
- Add customer loader to use in the application to display while waiting for the promise to resolve
