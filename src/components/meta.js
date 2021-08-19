import React from 'react'
import Helmet from 'react-helmet'

const Meta = ({
  title = '@tazik/notebook',
  name = '@tazik/notebook',
  description = 'Tazik Shahjahan\'s daily blog, Notebook.',
  image = 'https://notebook-cards.lachlanjc.now.sh/Notebook.png?theme=dark'
}) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={name} />
    <meta name="twitter:title" content={name} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={name} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
  </Helmet>
)

export default Meta;
