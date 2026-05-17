const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addCollection("posts", (collectionApi) =>
    collectionApi.getFilteredByGlob("posts/**/*.md").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter("date", (dateObj, format = "MMMM d, yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    if (!dateObj) return "";
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISODate();
  });

  eleventyConfig.addFilter("isoDateTime", (dateObj) => {
    if (!dateObj) return "";
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISO();
  });

  eleventyConfig.addFilter("absoluteUrl", (relativeUrl, baseUrl) => {
    const base = (baseUrl || "").replace(/\/$/, "");
    if (!relativeUrl) return base || "";
    const path = relativeUrl.startsWith("/") ? relativeUrl : `/${relativeUrl}`;
    return `${base}${path}`;
  });

  const md = markdownIt({ 
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  });
  
  eleventyConfig.setLibrary("md", md);

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "includes",
      layouts: "layouts",
      data: "data"
    }
  };
};