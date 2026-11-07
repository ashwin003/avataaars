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
import Skin from './Skin'
import { AvatarProps } from '../AvatarProps'

export interface PieceProps extends Omit<AvatarProps, 'avatarStyle'> {
  /** Accepted for API compatibility with Avatar; pieces have no style. */
  avatarStyle?: string
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
  hatColor,
  facialHairType,
  facialHairColor,
  accessoriesType,
  viewBox,
  pieceType,
  pieceSize
}: PieceProps) => {
  const size = pieceSize ? `${pieceSize}px` : '100%'
  return <svg style={style} width={size} height={size} viewBox={viewBox || "0 0 264 280"} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    {pieceType === 'top' && <Top type={topType} hairColor={hairColor} hatColor={hatColor} facialHairType={facialHairType} facialHairColor={facialHairColor} />}
    {pieceType === 'clothe' && <Clothe type={clotheType} color={clotheColor} graphicType={graphicType} />}
    {pieceType === 'graphics' && <Graphics maskID="1234" type={graphicType} />}
    {(pieceType === 'accessories' || pieceType === 'accesories') && <Accessories type={accessoriesType} />}
    {pieceType === 'facialHair' && <FacialHair type={facialHairType} color={facialHairColor} />}
    {pieceType === 'eyes' && <Eyes type={eyeType} />}
    {pieceType === 'eyebrows' && <Eyebrows type={eyebrowType} />}
    {pieceType === 'mouth' && <Mouth type={mouthType} />}
    {pieceType === 'nose' && <Nose />}
    {pieceType === 'skin' && <Skin color={skinColor} maskID="5678" />}
  </svg>;
};

export default PieceComponent;
