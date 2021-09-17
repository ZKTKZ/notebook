import React from 'react'
import { Avatar as Base } from 'theme-ui'

const Avatar = ({ size = 48, ...props }) => (
  <Base
    {...props}
    size={size}
    src="https://cdn.myanimelist.net/r/360x360/images/characters/14/34899.jpg?s=07c1a0ab44efe1a1386e7caa7a8d4764"
    alt="Tazik's avatar"
    mr={3}
  />
)

export default Avatar
