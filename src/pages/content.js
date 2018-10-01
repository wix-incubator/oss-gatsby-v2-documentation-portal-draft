import React from 'react';
import { graphql } from 'gatsby';

import '@react-website-themes/classy-docs/styles/variables';
import '@react-website-themes/classy-docs/styles/global';

import Article from '@react-website-themes/classy-docs/components/Article';
import Branding from '@react-website-themes/classy-docs/components/Branding';
import Footer from '@react-website-themes/classy-docs/components/Footer';
import Header from '@react-website-themes/classy-docs/components/Header';
import Heading from '@react-website-themes/classy-docs/components/Heading';
import Layout from '@react-website-themes/classy-docs/components/Layout';
import List from '@react-website-themes/classy-docs/components/List';
import Menu from '@react-website-themes/classy-docs/components/Menu';
import Seo from '@react-website-themes/classy-docs/components/Seo';

import GitIcon from 'react-feather/dist/icons/github';
import TwitterIcon from 'react-feather/dist/icons/twitter';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';
import categoryList from 'content/meta/categories';

const ContentPage = props => {
  const {
    data: {
      pages: { edges: rawPages },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteTitle,
    siteDescription,
    siteLanguage,
    gitUrl,
    twitterUrl,
  } = config;

  const pages = rawPages.map(page => page.node);

  return (
    <Layout>
      <Header>
      <a href="/"><img src="/logo.png" alt={`${headerTitle} -- ${headerSubTitle}`} height="70pt"/></a>
        {/*<Branding title={headerTitle} subTitle={headerSubTitle} />*/}
        <Menu items={menuItems} />
        {/*<a href={gitUrl}><GitIcon /></a><a href={twitterUrl}><TwitterIcon /></a>*/}
      </Header>
      <Article>
        <Heading title="Table of content" />
        <List pages={pages} categoryList={categoryList} />
      </Article>
      {/*<Footer links={footerLinksHTML} copyright={copyrightHTML} />*/}
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
      />
    </Layout>
  );
};

export default ContentPage;

export const query = graphql`
  query {
    pages: allMarkdownRemark(
      filter: { fields: { source: { eq: "docs" } } }
      sort: { fields: [fields___prefix] }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            shortTitle
            categories
          }
        }
      }
    }
    hero: markdownRemark(fileAbsolutePath: { regex: "/content/parts/hero/" }) {
      html
    }
    footerLinks: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/footerLinks/" }
    ) {
      html
    }
    copyright: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyright/" }
    ) {
      html
    }
  }
`;
