module.exports = {
  tags: ["posts"],
  isPost: true,
  eleventyComputed: {
    description: (data) =>
      data.description ||
      `${data.title} — On ${data.site.name}, a beginner-friendly engineering blog with zero fluff.`,
  },
};
