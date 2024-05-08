import * as React from 'react'

import Clothe from './clothes'
import Graphics from './clothes/Graphics'
import Accessories from './top/accessories'
import FacialHair from './top/facialHair'
import Top from './top'

import Eyes from './face/eyes'
import Eyebrows from './face/eyebrow'
import Mouth from './face/mouth'
import Nose from './face/nose'
import Skin, { SkinProps } from './Skin'
import { AvatarProps } from '../AvatarProps'
import { ClotheProps } from './clothes/type'
import { AccessoriesProps } from './top/accessories/type'
import { TopProps } from './top/top-props'

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

const PieceComponent: React.FC<PieceProps> = ({
  style,
  skinColor,
  clotheType,
  clotheColor,
  graphicType,
  mouthType,
  eyeType,
  eyebrowType,
  topType,
  hairColor,
  facialHairType,
  facialHairColor,
  accessoriesType,
  viewBox,
  pieceType
}: PieceProps) => {
  const skinProps: SkinProps = {
    color: skinColor,
    maskID: '5678'
  };
  const clotheProps: ClotheProps = {
    type: clotheType,
    color: clotheColor,
    graphicType
  };
  const topProps: TopProps = {
    type: topType,
    hairColor,
    facialHairType,
    facialHairColor
  };
  const accessoriesProps: AccessoriesProps = {
    type: accessoriesType
  };
  return <svg style={style} width='100%' height='100%' viewBox={viewBox || "0 0 264 280"} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    {pieceType === 'top' && <Top {...topProps} />}
    {pieceType === 'clothe' && <Clothe {...clotheProps} />}
    {pieceType === 'graphics' && <Graphics maskID="1234" />}
    {(pieceType === 'accessories' || pieceType === 'accesories') && <Accessories {...accessoriesProps} />}
    {pieceType === 'facialHair' && <FacialHair type={facialHairType} color={facialHairColor} />}
    {pieceType === 'eyes' && <Eyes type={eyeType} />}
    {pieceType === 'eyebrows' && <Eyebrows type={eyebrowType} />}
    {pieceType === 'mouth' && <Mouth type={mouthType} />}
    {pieceType === 'nose' && <Nose />}
    {pieceType === 'skin' && <Skin {...skinProps} />}
  </svg>;
};

export default PieceComponent;
