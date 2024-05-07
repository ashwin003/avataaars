import React from 'react'

import Clothe from './clothes'
import Graphics from './clothes/Graphics'
import Accessories from './top/accessories'
import FacialHair from './top/facialHair'
import Top from './top'

import Eyes from './face/eyes'
import Eyebrows from './face/eyebrow'
import Mouth from './face/mouth'
import Nose from './face/nose'
import Skin from './Skin'
import { AvatarProps } from '../AvatarProps'

export enum AvatarStyle {
  Circle = 'Circle',
  Transparent = 'Transparent',
}

export interface PieceProps extends AvatarProps {
  pieceSize?: string
  pieceType?: string
  style?: React.CSSProperties
  viewBox?: string
}

const PieceComponent: React.FC<PieceProps> = (props: PieceProps) => {
  return <svg style={props.style} width={`${props.pieceSize}px`} height={`${props.pieceSize}px`} viewBox={props.viewBox || "0 0 264 280"} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    {props.pieceType === 'top' && <Top />}
    {props.pieceType === 'clothe' && <Clothe />}
    {props.pieceType === 'graphics' && <Graphics maskID="1234" />}
    {(props.pieceType === 'accessories' || props.pieceType === 'accesories') && <Accessories />}
    {props.pieceType === 'facialHair' && <FacialHair />}
    {props.pieceType === 'eyes' && <Eyes />}
    {props.pieceType === 'eyebrows' && <Eyebrows />}
    {props.pieceType === 'mouth' && <Mouth />}
    {props.pieceType === 'nose' && <Nose />}
    {props.pieceType === 'skin' && <Skin maskID="5678" color={props.skinColor ?? '#EDB98A'} />}
  </svg>;
};

export default PieceComponent;
