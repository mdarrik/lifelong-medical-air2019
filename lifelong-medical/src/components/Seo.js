import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

const SEO = ({ lang, description, meta, title }) => {
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | LifeLong Medical`}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en-US`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
