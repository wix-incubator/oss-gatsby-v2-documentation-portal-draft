const base = {
  name: 'Gatsby Doc Portal',
  url: 'https://wix-incubator.github.io/oss-gatsby-v2-documentation-portal-draft',
  repoName: 'oss-gatsby-v2-documentation-portal-draft'
};

const social = {
  github: 'svitlanako',
  twitter: 'svetlana_apr'
}

const config = {
  /* meta tags */
  siteTitle: `${base.name} - a series of GatsbyJS starters`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } is a series starters: Minimal, Equipped, Themed, Website, Blog.`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'a series of starters for GatsbyJS',

  /* url */
  siteUrl: base.url,
  // pathPrefix: '',

  logoUrl:`${base.url}/logo.png`,

  /* social */
  gitUrl: `http://github.com/${social.github}`,
  twitterUrl: `http://twitter.com/${social.twitter}`
};

module.exports = config;
