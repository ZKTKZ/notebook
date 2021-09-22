/** @jsx jsx */
import { jsx, Flex, Heading } from 'theme-ui'
import { palette } from './gatsby-plugin-theme-ui'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from './layout'
import { hasDate, getDate, getName } from './util'
import { filter, orderBy } from 'lodash'
import { format } from 'date-fns'
import React, { Fragment } from 'react';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

const Pods = (props) => {
  return (
    <Flex
    as='p'
    variant='container'
    sx={{
      display: 'flex',
      justifyContent: 'flex-end',
      color: 'secondary',
      mb: 4,
      img: { verticalAlign: 'bottom' }
    }}
  >
    {props.pods.map(({ name, path }, index) => (
      <Link
        to={path}
        sx={{
          textDecoration: 'none',
          px: 3,
          ml: 3,
          border: '2px solid ',
          borderRadius: 'circle',
          fontSize: 2,
          fontWeight: 'bold',
          //!important overrides BaseStyles 
          color: `${props.rainbow[index]} !important`,
          transform: `rotate(${Math.pow(-1, index)*3}deg)`
        }}
      >
        {name}
      </Link>
    ))}
  </Flex>
  )
}

const Posts = (props) => {
  return (
    <Flex
    sx={{
      flexDirection: ['column'],
    }}
  >
  {props.posts.map(({ name, date, path }) => (
    <li
      key={path}
      sx={{
        mb: 1   
      }}
    >
      <Link
        to={path}
        sx={{
          //display: 'flex',
          //flexDirection: ['column-reverse', 'row'],
          textDecoration: 'none',
        }}
      >
        <small
          sx={{
            mt: [1, 0],
            mr: [null, 3],
            fontVariantNumeric: 'tabular-nums',
            color: 'secondary'
          }}
        >
          {date}
        </small>                 
        <strong 
          sx={{ 
            lineHeight: 'title',
          }}
        >
          {name}
        </strong>
      </Link>
    </li>
  ))}
  </Flex>
  )  
}

export const Nav = () => {
  const data = useStaticQuery(pages)
  const nodes = filter(
    data.allSitePage.nodes,
    ({ path }) => path !== '/' && !path.includes('404')
  )

  //palette Object is explicit
  const rainbow = [palette.blue, palette.green, palette.red]
  
  const pods = orderBy(
    nodes.filter(node => {
      const { path } = node
      return !hasDate(path)
    }).map(node => {
      const { path } = node
      node.name = getName(path)
      return node
    }),
    ['name'],
    ['asc']
  )

  const posts = orderBy(
    nodes.filter(node => {
      const { path } = node
      return hasDate(path)
    }).map(node => {
      const { path } = node
      node.name = getName(path)
      node.date = hasDate(path) ? getDate(path) : null
      if (hasDate(path) && node.name === '') {
        const date = new Date(node.date)
        date.setDate(date.getDate() + 1)
        node.name = format(date, 'MMMM dd, yyyy')
      }
      return node
    }),
    ['date', 'name'],
    ['desc', 'desc']
  )

  return (
    <>    
    <Pods pods={pods} rainbow={rainbow}/>
    <ol
      sx={{
        listStyle: 'none',
        p: 0,
        ml: 0
      }}
    >
    <Posts posts={posts}/>

    </ol>
    </>
  )
}

const pages = graphql`
  query Pages {
    allSitePage {
      nodes {
        path
      }
    }
  }
`
