import React from 'react'
import { Box, Grid } from 'theme-ui'
import ReactPlayer from 'react-player/lazy'

export const Container = ({ wide, ...props }) => (
  <Box
    {...props}
    sx={{
      maxWidth: wide ? 'wide' : 'container'
    }}
  />
)

export const Tiles = props => (
  <Box
    {...props}
    sx={{
      ul: {
        listStyle: 'none',
        p: 0,
        m: 0,
        display: 'grid',
        gridGap: 4,
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))'
      },
      h2: {
        fontSize: 2
      },
      img: {
        display: 'block',
        width: 128,
        maxWidth: '100%',
        height: 'auto',
        m: 'auto'
      },
      ...props.sx
    }}
  />
)

export const Embed = ({ src, sx, title, ...props }) => (
  <Box
    variant="sheet"
    {...props}
    sx={{ p: 0, maxHeight: 512, width: '100%', mt: [3, 4], ...sx }}
  >
    <iframe
      src={src}
      frameBorder="0"
      onMouseWheel=""
      width="100%"
      height={512}
      title={title}
      style={{ display: 'block', maxWidth: '100%' }}
    />
  </Box>
)

export const YouTube = (props) => (
  <ReactPlayer
    width="100%"
    height={400}
    controls
    config={{ youtube: { playerVars: { showinfo: 1 } } }}
    {...props}
  />
)

export const Player = (props) => (
  <ReactPlayer
    width="100%"
    height={400}
    controls
    {...props}
  />
)

export const Handwriting = props => (
  <Box
    as="figure"
    {...props}
    sx={{
      borderRadius: 8,
      bg: 'smoke',
      p: 1,
      mx: -3
    }}
  />
)

export const Columns = props => (
  <Box
    {...props}
    sx={{
      columnWidth: 256,
      columnGap: 16,
      p: {
        my: 0
      },
      'h2:first-child': {
        mt: 0
      }
    }}
  />
)

export const List = props => (
  <Box
    {...props}
    sx={{
      ul: {
        p: 0,
        m: 0,
        lineHeight: 1,
        listStyle: 'none',
        columnWidth: 256,
        columnGap: 4
      },
      li: {
        mb: 4
      },
      a: {
        fontWeight: 'bold'
      },
      ...props.sx
    }}
  />
)

export const LinkList = props => (
  <Box
    {...props}
    sx={{
      mb: 4,
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        gridGap: 3,
        mb: 4
      },
      li: { mb: 0 },
      p: { my: 0 },
      a: {
        bg: 'primary',
        color: 'background',
        p: 3,
        borderRadius: 6,
        fontWeight: 'bold',
        lineHeight: 'heading',
        textDecoration: 'none',
        display: 'block'
      },
      ...props.sx
    }}
  />
)

const rainbow = {
  red: '#ec3750',
  orange: '#ff8c37',
  yellow: '#f1c40f',
  green: '#33d6a6',
  cyan: '#5bc0de',
  blue: '#338eda',
  purple: '#8067c3'
}

const rainbowKids = {}
Object.entries(rainbow).map(([name, bg], i) => {
  rainbowKids[`&:nth-child(${Object.keys(rainbow).length}n + ${i + 1}) a`] =
    { bg }
})

export const ShortcutsList = props => (
  <LinkList
    {...props}
    sx={{
      li: {
        mb: 0,
        display: 'flex',
        ...rainbowKids,
        p: { my: 0 }
      },
      a: {
        bg: 'primary',
        px: 3,
        py: [3, null, 4],
        borderRadius: 6,
        fontWeight: 'bold',
        lineHeight: 'heading',
        color: 'white',
        textDecoration: 'none',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        svg: {
          m: '-6px',
          mr: 2
        }
      },
      ...props.sx
    }}
  />
)

export const AppList = props => (
  <Grid
    {...props}
    as="section"
    columns="64px 1fr"
    gap={3}
    sx={{
      p: {
        my: 0,
        ':nth-of-type(odd)': {
          lineHeight: 0,
          '> a': {
            display: 'inline-block',
            border: '1px solid rgba(0,0,0,0.125)',
            overflow: 'hidden',
            transition: '0.125s ease-in-out box-shadow, 0.2s ease-out transform',
            borderRadius: 14,
            img: {
              width: 64,
              height: 64,
            },
            ':hover,:focus': {
              boxShadow: '0 2px 6px rgba(0,0,0,0.125)',
              transform: 'scale(1.25) rotate(-3deg)'
            }
          }
        }
      }
    }}
  />
)

export const AppGrid = props => (
  <Grid
    {...props}
    as="section"
    columns="repeat(auto-fit, minmax(96px, 1fr))"
    gap={3}
    sx={{
      justifyContent: 'center',
      textAlign: 'center',
      p: {
        my: 0,
        '> a': {
          color: 'text',
          fontSize: 1,
          lineHeight: 'title',
          transition: '0.125se ease-in-out color',
          img: {
            display: 'inline-block',
            border: '1px solid rgba(0,0,0,0.125)',
            overflow: 'hidden',
            transition: '0.125s ease-in-out box-shadow, 0.2s ease-out transform',
            transformOrigin: 'center bottom',
            width: 96,
            height: 96,
            borderRadius: 20,
            mx: 'auto',
            mb: 2
          },
          display: 'flex',
          flexDirection: 'column',
          textDecoration: 'none',
          ':hover,:focus': {
            color: 'accent',
            img: {
              boxShadow: '0 2px 8px rgba(0,0,0,0.125)',
              transform: 'scale(1.25)'
            }
          }
        }
      }
    }}
  />
)
