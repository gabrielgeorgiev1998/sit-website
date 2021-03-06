import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon from '../images/favicon.png';

import sitlogo from '../images/Sit_Logo_New_02.jpg';

function SEO({ description, lang, meta, keywords, title }) {
  const data = useStaticQuery(
    graphql`
      query DefaultSEOQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || data.site.siteMetadata.description;
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `twitter:image`,
          content: sitlogo
        },
        {
          name: `google-site-verification`,
          content: `yLcZPR1CI-yEkBXlhOjUEB9EltHX6ETOQb-pCGJuHQo`
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `)
              }
            : []
        )
        .concat(meta)}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
      ]}
    />
  );
}

SEO.defaultProps = {
  lang: `bg`,
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string
};

export default SEO;
