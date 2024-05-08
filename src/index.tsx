import * as React from 'react'

import Avatar, { AvatarStyle } from './avatar'

export { default as Avatar, AvatarStyle } from './avatar'
export { Piece } from './Piece'

import { AvatarProps } from './AvatarProps'
export { AvatarProps } from './AvatarProps'

const AvatarComponent: React.FC<AvatarProps> = (props: AvatarProps) => {
  return <Avatar {...props} avatarStyle={props.avatarStyle as AvatarStyle} />
}

export default AvatarComponent;