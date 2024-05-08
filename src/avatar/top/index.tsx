import * as React from 'react'

import Eyepatch from './Eyepatch'
import Hat from './Hat'
import Hijab from './Hijab'
import LongHairBigHair from './LongHairBigHair'
import LongHairBob from './LongHairBob'
import LongHairBun from './LongHairBun'
import LongHairCurly from './LongHairCurly'
import LongHairCurvy from './LongHairCurvy'
import LongHairDreads from './LongHairDreads'
import LongHairFrida from './LongHairFrida'
import LongHairFro from './LongHairFro'
import LongHairFroBand from './LongHairFroBand'
import LongHairMiaWallace from './LongHairMiaWallace'
import LongHairNotTooLong from './LongHairNotTooLong'
import LongHairShavedSides from './LongHairShavedSides'
import LongHairStraight from './LongHairStraight'
import LongHairStraight2 from './LongHairStraight2'
import LongHairStraightStrand from './LongHairStraightStrand'
import NoHair from './NoHair'
import ShortHairDreads01 from './ShortHairDreads01'
import ShortHairDreads02 from './ShortHairDreads02'
import ShortHairFrizzle from './ShortHairFrizzle'
import ShortHairShaggyMullet from './ShortHairShaggyMullet'
import ShortHairShortCurly from './ShortHairShortCurly'
import ShortHairShortFlat from './ShortHairShortFlat'
import ShortHairShortRound from './ShortHairShortRound'
import ShortHairShortWaved from './ShortHairShortWaved'
import ShortHairSides from './ShortHairSides'
import ShortHairTheCaesar from './ShortHairTheCaesar'
import ShortHairTheCaesarSidePart from './ShortHairTheCaesarSidePart'
import Turban from './Turban'
import WinterHat1 from './WinterHat1'
import WinterHat2 from './WinterHat2'
import WinterHat3 from './WinterHat3'
import WinterHat4 from './WinterHat4'
import { TopProps } from './top-props'

const Top: React.FC<TopProps> = ({ children, type, facialHairColor, facialHairType, hairColor }: TopProps) => {
  if (!type) return <LongHairStraight key='LongHairStraight'>{children}</LongHairStraight>;
  return {
    'NoHair': <NoHair key='NoHair' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</NoHair>,
    'Eyepatch': <Eyepatch key='Eyepatch'></Eyepatch>,
    'Hat': <Hat key='Hat' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</Hat>,
    'Hijab': <Hijab key='Hijab' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</Hijab>,
    'Turban': <Turban key='Turban' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</Turban>,
    'WinterHat1': <WinterHat1 key='WinterHat1' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</WinterHat1>,
    'WinterHat2': <WinterHat2 key='WinterHat2' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</WinterHat2>,
    'WinterHat3': <WinterHat3 key='WinterHat3' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</WinterHat3>,
    'WinterHat4': <WinterHat4 key='WinterHat4' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</WinterHat4>,
    'LongHairBigHair': <LongHairBigHair key='LongHairBigHair' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</LongHairBigHair>,
    'LongHairBob': <LongHairBob key='LongHairBob' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</LongHairBob>,
    'LongHairBun': <LongHairBun key='LongHairBun' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</LongHairBun>,
    'LongHairCurly': <LongHairCurly key='LongHairCurly' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</LongHairCurly>,
    'LongHairCurvy': <LongHairCurvy key='LongHairCurvy' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</LongHairCurvy>,
    'LongHairDreads': <LongHairDreads key='LongHairDreads' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</LongHairDreads>,
    'LongHairFrida': <LongHairFrida key='LongHairFrida' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</LongHairFrida>,
    'LongHairFro': <LongHairFro key='LongHairFro' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</LongHairFro>,
    'LongHairFroBand': <LongHairFroBand key='LongHairFroBand' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</LongHairFroBand>,
    'LongHairNotTooLong': <LongHairNotTooLong key='LongHairNotTooLong' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</LongHairNotTooLong>,
    'LongHairShavedSides': <LongHairShavedSides key='LongHairShavedSides' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</LongHairShavedSides>,
    'LongHairMiaWallace': <LongHairMiaWallace key='LongHairMiaWallace' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</LongHairMiaWallace>,
    'LongHairStraight': <LongHairStraight key='LongHairStraight' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</LongHairStraight>,
    'LongHairStraight2': <LongHairStraight2 key='LongHairStraight2' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</LongHairStraight2>,
    'LongHairStraightStrand': <LongHairStraightStrand key='LongHairStraightStrand' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</LongHairStraightStrand>,
    'ShortHairDreads01': <ShortHairDreads01 key='ShortHairDreads01' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</ShortHairDreads01>,
    'ShortHairDreads02': <ShortHairDreads02 key='ShortHairDreads02' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</ShortHairDreads02>,
    'ShortHairFrizzle': <ShortHairFrizzle key='ShortHairFrizzle' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</ShortHairFrizzle>,
    'ShortHairShaggyMullet': <ShortHairShaggyMullet key='ShortHairShaggyMullet' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</ShortHairShaggyMullet>,
    'ShortHairShortCurly': <ShortHairShortCurly key='ShortHairShortCurly' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</ShortHairShortCurly>,
    'ShortHairShortFlat': <ShortHairShortFlat key='ShortHairShortFlat' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</ShortHairShortFlat>,
    'ShortHairShortRound': <ShortHairShortRound key='ShortHairShortRound' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</ShortHairShortRound>,
    'ShortHairShortWaved': <ShortHairShortWaved key='ShortHairShortWaved' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</ShortHairShortWaved>,
    'ShortHairSides': <ShortHairSides key='ShortHairSides' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</ShortHairSides>,
    'ShortHairTheCaesar': <ShortHairTheCaesar key='ShortHairTheCaesar' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</ShortHairTheCaesar>,
    'ShortHairTheCaesarSidePart': <ShortHairTheCaesarSidePart key='ShortHairTheCaesarSidePart' facialHairColor={facialHairColor} facialHairType={facialHairType} hairColor={hairColor}>{children}</ShortHairTheCaesarSidePart>
  }[type];
}

export default Top;