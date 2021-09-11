import React from 'react'
import Helmet from 'react-helmet'

const Meta = ({
  title = '@taziksh',
  name = '@taziksh',
  description = 'Tazik Shahjahan\'s daily blog, Notebook.',
  image = 'https://cdn.buymeacoffee.com/uploads/cover_images/2021/06/d5ff9100d3cdf82ec2ff0dc585adb7d6.jpg@1280w_0e.webp'
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
