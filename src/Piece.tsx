import React from 'react';
import { AvatarStyle } from './avatar';
import { default as PieceComponent, PieceProps } from './avatar/piece';


export const Piece: React.FC<PieceProps> = (props: PieceProps) => {
  return <PieceComponent  {...props} avatarStyle={props.avatarStyle as AvatarStyle} />;
}
