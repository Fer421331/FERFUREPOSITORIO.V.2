const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./index.html", "./src/**/*.{js,html}"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [require("autoprefixer")],
};