const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./index.html", "./src/**/*.{js,html}"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = ({ env }) => ({
  plugins: [
    require("autoprefixer"),
    ...(env === "production" ? [purgecss] : []),
  ],
});