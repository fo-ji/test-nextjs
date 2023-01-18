## Docker
```sh
$ docker-compose build
```

## NextJS
```sh
$ docker-compose run --rm app yarn create next-app test-nextjs --ts\
&& mv test-nextjs/* . && mv test-nextjs/.* . && rm -r test-nextjs\
&& mkdir src && mv pages styles src/
```

### install libs
```sh
$ docker-compose up -d
$ docker exec -it app sh
$ yarn add axios msw swr
```

## React-testing-library
1. install
```sh
$ docker-compose up -d
$ docker exec -it app sh
$ yarn add -D jest @testing-library/react @types/jest @testing-library/jest-dom @testing-library/dom babel-jest @testing-library/user-event jest-css-modules jest-environment-jsdom
```
2. add .babelrc
```sh
$ touch .babelrc
```
```json
{
  "presets": ["next/babel"]
}
```
3. edit package.json
```json
{
  "name": "test-nextjs",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest --env=jsdom --verbose"
  },
  "dependencies": {
    "@next/font": "13.1.2",
    "@types/node": "18.11.18",
    "@types/react": "18.0.26",
    "@types/react-dom": "18.0.10",
    "axios": "^1.2.3",
    "eslint": "8.32.0",
    "eslint-config-next": "13.1.2",
    "msw": "^0.49.2",
    "next": "13.1.2",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "swr": "^2.0.0",
    "typescript": "4.9.4"
  },
  "devDependencies": {
    "@testing-library/dom": "^8.20.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^14.4.3",
    "@types/jest": "^29.2.5",
    "babel-jest": "^29.3.1",
    "jest": "^29.3.1",
    "jest-css-modules": "^2.1.0",
    "jest-environment-jsdom": "^29.3.1"
  },
  "jest": {
    "testPathIgnorePatterns": [
      "<rootDir>/.next/",
      "<rootDir>/node_modules/"
    ],
    "moduleNameMapper": {
      "\\.(css)$": "<rootDir>/node_modules/jest-css-modules"
    }
  }
}
```

## TailwindCSS
1. install
```sh
$ docker-compose up -d
$ docker exec -it app sh
$ yarn add tailwindcss@latest postcss@latest autoprefixer@latest
$ npx tailwindcss init -p
```
2. tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```