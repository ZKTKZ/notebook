import React from 'react'
import { Avatar as Base } from 'theme-ui'
import TImage from "../images/T.png"


const Avatar = ({ size = 48, ...props }) => (
  <Base
    {...props}
    size={size}
    src={TImage}
    alt="Tazik's avatar"
    mr={3}
  />
)

export default Avatar
