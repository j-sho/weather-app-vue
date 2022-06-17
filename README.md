# Vue Weather Forecast App

Gives real-time weather of any valid city on Earth.
Created with Vue3, Typescript, Bootstrap, Axios.
Weather data is get from open API https://api.openweathermap.org/

## ToDo

There is a short list of what I would like to work on (if it was a real life project):

- Add tests (jest)
- Add Chart.js with forecast data
- Add dropdown with filter for city entry (handling errors)
- Hide Api key in .env
- Add animated weather icons

## Directory structure

public/ - static assets (index.html)
src/ - source files
src/api - file to get data from api and restructure
src/components - Vue components: Detail description file, to present weather data
src/types - interface of data types

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
