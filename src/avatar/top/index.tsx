import React from 'react'

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
import { Selector } from '../../options'
import { TopProps } from './top-props'

const Top: React.FC<TopProps> = ({ children, type }: TopProps) => {
  return (
    <Selector defaultKey='LongHairStraight' selectedKey={type}>
      <NoHair key='NoHair'>{children}</NoHair>
      <Eyepatch key='Eyepatch'></Eyepatch>
      <Hat key='Hat'>{children}</Hat>
      <Hijab key='Hijab'>{children}</Hijab>
      <Turban key='Turban'>{children}</Turban>
      <WinterHat1 key='WinterHat1'>{children}</WinterHat1>
      <WinterHat2 key='WinterHat2'>{children}</WinterHat2>
      <WinterHat3 key='WinterHat3'>{children}</WinterHat3>
      <WinterHat4 key='WinterHat4'>{children}</WinterHat4>
      <LongHairBigHair key='LongHairBigHair'>{children}</LongHairBigHair>
      <LongHairBob key='LongHairBob'>{children}</LongHairBob>
      <LongHairBun key='LongHairBun'>{children}</LongHairBun>
      <LongHairCurly key='LongHairCurly'>{children}</LongHairCurly>
      <LongHairCurvy key='LongHairCurvy'>{children}</LongHairCurvy>
      <LongHairDreads key='LongHairDreads'>{children}</LongHairDreads>
      <LongHairFrida key='LongHairFrida'>{children}</LongHairFrida>
      <LongHairFro key='LongHairFro'>{children}</LongHairFro>
      <LongHairFroBand key='LongHairFroBand'>{children}</LongHairFroBand>
      <LongHairNotTooLong key='LongHairNotTooLong'>{children}</LongHairNotTooLong>
      <LongHairShavedSides key='LongHairShavedSides'>{children}</LongHairShavedSides>
      <LongHairMiaWallace key='LongHairMiaWallace'>{children}</LongHairMiaWallace>
      <LongHairStraight key='LongHairStraight'>{children}</LongHairStraight>
      <LongHairStraight2 key='LongHairStraight2'>{children}</LongHairStraight2>
      <LongHairStraightStrand key='LongHairStraightStrand'>{children}</LongHairStraightStrand>
      <ShortHairDreads01 key='ShortHairDreads01'>{children}</ShortHairDreads01>
      <ShortHairDreads02 key='ShortHairDreads02'>{children}</ShortHairDreads02>
      <ShortHairFrizzle key='ShortHairFrizzle'>{children}</ShortHairFrizzle>
      <ShortHairShaggyMullet key='ShortHairShaggyMullet'>{children}</ShortHairShaggyMullet>
      <ShortHairShortCurly key='ShortHairShortCurly'>{children}</ShortHairShortCurly>
      <ShortHairShortFlat key='ShortHairShortFlat'>{children}</ShortHairShortFlat>
      <ShortHairShortRound key='ShortHairShortRound'>{children}</ShortHairShortRound>
      <ShortHairShortWaved key='ShortHairShortWaved'>{children}</ShortHairShortWaved>
      <ShortHairSides key='ShortHairSides'>{children}</ShortHairSides>
      <ShortHairTheCaesar key='ShortHairTheCaesar'>{children}</ShortHairTheCaesar>
      <ShortHairTheCaesarSidePart key='ShortHairTheCaesarSidePart'>{children}</ShortHairTheCaesarSidePart>
    </Selector>
  )
}

export default Top;