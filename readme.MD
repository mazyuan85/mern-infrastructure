# MERN

## Building -> Bundling + Minification

npm run build -> dist (vite), build (CRA)

* dist folder has compressed stuff which include:
  * CSS and images due to rollup
* dist folder is also gitignored (auto)
* dist folder only changes after `npm run build`

## Changes from Notes

Use `vite` rather than `CRA`

Change from `build` to `dist` folder
Remove `favicon`
use `node --watch server.js` to run Express
change `package.json` to `"type": "commonjs"`

In the future all Express routes should start with `/api`

## Dev

You need 2 running servers:

* Express -> `node --watch server.js`
* React -> `npm run dev`

or you `npm install concurrently --save-dev` and change `package.json`

```js
    "dev": "concurrently 'vite' 'node --watch server.js'",
```

## Proxy

Vite proxy info at <https://vitejs.dev/config/server-options.html#server-proxy>

```js
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3000"
    } 
  }
})
```

## Deployment

setup github repo and connect to cyclic
after you add .env -> add the variables to cyclic

### Add startup script

```json
  "scripts": {
    "start": "node server.js",
  }
```

## IMPORTANT

DO NOT SYNC UP THE CODE!!

## Clean up vite

main.jsx -> remove `index.css`
main.jsx -> fix import for App after the move

src, public -> belongs to React
every JS file outside -> belongs to Express 

## Project 3

Hard - Maps, Calendars, Charts, Component Libary

* User journey
* Wireframe
  * url -> page? 
  * page -> components?
* Data model -> embedded / referencing 
  * Mock in google sheet
    * Each sheet is a Collection = User
    * Each col is a field -ID, Name etc
    * Each row is a document - SSS, Simon, etc

### Styling


#### npm install framework

npm install bootstrap@5.3.0-alpha1
import "bootstrap/dist/css/bootstrap.css";
 <button type="button" className="btn btn-primary">

 Pro: easy
 Cons: stuck with their style, fix a href -> Link

#### index.css

write own css
import "index.css"

Pro: normal css
Cons: easy to clash

#### inline.css

myStyle is on object like { backgroundColor: "yellow" }
<style={myStyle}>

Pro: individual and works
Cons: not css

### CSS module

https://vitejs.dev/guide/features.html#css-modules

Pro: Css and individual
Con: CSS but not JS

#### Component Toolkit

https://bestofjs.org/projects?tags=component&tags=react

Pro: React based
Cons: Stuck with theme? Need know the underlying framework

#### Tailwind

https://tailwindcss.com/

Pro: complete design system for css
Cons: learn tailwind

#### CSS in JS

https://bestofjs.org/projects?tags=css-in-js

Pro: CSS in JS
Con: Complex

## React Router

We will be using 6.0 - 6.3, not 5.x or 6.4 and above

## Over the weekend

* Recap `register` for a user from Unit 2 -> express hash
* Research & Decide on UI / CSS
* Swap sessions wih JWT 
* Recap `fetch` - https://sei-42-materials.vercel.app/docs/unit2/wk05d03/4.3-consuming-3rd-party-apis
