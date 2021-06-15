function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(fileName),
  }));
}

const context = require.context("./pages/", true, /\.mdx$/)
const pages = importAll(
	context
);

export const blogPosts = pages.filter(page => page.link.includes("cv"))

export const professionalExperience =  pages.filter(page => page.link.includes("professional-experiences"))
