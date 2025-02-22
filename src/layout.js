/** @jsx jsx */
import { jsx, Box, BaseStyles, Flex, useColorMode } from 'theme-ui'
import { Link } from 'gatsby'
import Avatar from './components/avatar'
import Icon from './components/icon'
import Meta from './components/meta'
import { Pod } from './components/blocks'
import { getName, getDescription, getImage } from './util'
import theme from './gatsby-plugin-theme-ui'

const ColorSwitcher = props => {
  const [mode, setMode] = useColorMode()
  return (
    <button
      {...props}
      onClick={e => setMode(mode === 'dark' ? 'light' : 'dark')}
      title="Switch color theme"
      sx={{
        display: 'inline-block',
        appearance: 'none',
        bg: 'transparent',
        color: 'primary',
        p: 1,
        m: 0,
        lineHeight: 0,
        border: 0,
        borderRadius: 9999,
        transition: '.125s ease-in-out',
        transitionProperty: 'box-shadow, color',
        ':hover,:focus': {
          color: 'accent',
          boxShadow: '0 0 0 3px',
          outline: 'none'
        }
      }}
    >
      <svg viewBox="0 0 32 32" width={24} height={24}>
        <circle
          cx={16}
          cy={16}
          r={14}
          fill="none"
          stroke="currentColor"
          strokeWidth={4}
        />
        <path d="M 16 0 A 16 16 0 0 0 16 32 z" fill="currentColor" />
      </svg>
    </button>
  )
}

const Layout = ({ xl, ...props }) => {
  const path = props.location.pathname
  const home = path === '/'
  const base = '@taziksh'
  const name = home ? base : getName(path)
  const counterColor = theme.colors.secondary.replace('#', '%23')

  return (
    <Box
      as="main"
      sx={{
        px: 1,
        fontSize: 1,
        maxWidth: xl ? 'xl' : 'container',
        lineHeight: 'body',
        mx: 'auto'
      }}
    >
      <Meta
        title={home ? base : `${name} – ${base}`}
        name={name}
        description={getDescription(path)}
        image={getImage(path)}
      />
      <header
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: 3,
        }}
      >
        <Link
          to="/"
          sx={{
            fontWeight: 'bold',
            color: 'inherit',
            textDecoration: 'underline',
            textUnderlinePosition: 'under',
            textDecorationStyle: 'wavy',
            textDecorationColor: 'red',
            textDecorationThickness: '7%',
            mr: 'auto'
          }}
        >
          @taziksh
          {!home && ''}
        </Link>
        <ColorSwitcher />
      </header>
      <article>
        <BaseStyles>{props.children}</BaseStyles>
      </article>
      <Flex
        as="footer"
        sx={{
          py: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          a: { color: 'primary', mx: 2 }
        }}
      >
        <a href="https://twitter.com/tazikshahjahan" title="Twitter">
          <Icon glyph="twitter" size={36} />
        </a>
        <a href="https://github.com/taziksh" title="GitHub">
          <Icon glyph="github" size={36} />
        </a>
        <a href="mailto:tshahjah@uwaterloo.ca" title="Email">
          <Icon glyph="email" size={36} />
        </a>
      </Flex>
    </Box>
  )
}

export default Layout
