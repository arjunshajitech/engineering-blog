/** Canonical site URL (no trailing slash). Override: SITE_URL=https://example.com npm run build */
const defaultUrl = "https://blog.arjunshaji.me";

module.exports = {
  name: "Zero fluff engineering",
  title: "Zero fluff engineering — engineering blog & tech blogs",
  description:
    "Beginner-friendly tech blogs and engineering blogs: networking, security, systems, and protocols—fluff-free engineering writing you can actually use.",
  /** Used in meta keywords; search engines mainly use title/description—keep this readable. */
  keywords:
    "engineering blog, engineering blogs, tech blogs, fluff-free engineering blog, beginner friendly tech blog, software engineering, systems programming, networking",
  lang: "en",
  author: "Arjun Shaji",
  email: "arjunshajitech@gmail.com",
  url: (process.env.SITE_URL || defaultUrl).replace(/\/$/, ""),
};
