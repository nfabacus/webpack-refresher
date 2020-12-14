# Webpack Refresher


1. Install webpack and webpack cli via npm

2. Bundle files in src folder.
   In the root folder, enter `npx webpack` or `npx webpack --watch` for watch mode
   
   This will create a dist folder nad bundle the files automatically into the dist folder.

3. add webpack.config.js
   We can set up webpack devServer in webpack.config.js.
   
   Then, to run the dev server, `npx webpack-dev-server` (for webpack 4) or `npx webpack serve` for webpack 5.
   bundled file will only live in memory.
   
4. To bundle up in dist for real, just do `npx webpack` again.
5. You can have the above commands in scripts in package.json.



### reference
https://www.youtube.com/watch?v=eddzBlXBl3Y