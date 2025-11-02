import { EleventyI18nPlugin } from "@11ty/eleventy";

export default function(eleventyConfig) {
  // Add i18n plugin for multi-language support
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "en",
    errorMode: "allow-fallback"
  });

  // Pass through static assets
  eleventyConfig.addPassthroughCopy({ "public": "." });

  // Global site data
  eleventyConfig.addGlobalData("site", {
    title: "App Growth Toolkit",
    description: "Curated collection of the best tools to help app founders drive revenue and accelerate growth",
    url: "https://hanrw.github.io/app-growth-toolkit/",
    author: "App Founders Community"
  });

  // Date filter for formatting dates
  eleventyConfig.addFilter("date", function(dateObj, format) {
    if (dateObj === "now") {
      dateObj = new Date();
    }

    if (format === "YYYY-MM-DD") {
      return dateObj.toISOString().split('T')[0];
    }

    return dateObj.toISOString();
  });

  return {
    dir: {
      input: "src/11ty",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
}
