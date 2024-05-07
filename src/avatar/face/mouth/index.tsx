import React from 'react'

import Concerned from './Concerned'
import Default from './Default'
import Disbelief from './Disbelief'
import Eating from './Eating'
import Grimace from './Grimace'
import Sad from './Sad'
import ScreamOpen from './ScreamOpen'
import Serious from './Serious'
import Smile from './Smile'
import Tongue from './Tongue'
import Twinkle from './Twinkle'
import Vomit from './Vomit'
import { Selector } from '../../../options'
import { MouthProps } from './type'

const Mouth: React.FC<MouthProps> = ({ type }: MouthProps) => {
  return <Selector defaultKey='Default' selectedKey={type}>
    <Concerned key='Concerned' />
    <Default key='Default' />
    <Disbelief key='Disbelief' />
    <Eating key='Eating' />
    <Grimace key='Grimace' />
    <Sad key='Sad' />
    <ScreamOpen key='ScreamOpen' />
    <Serious key='Serious' />
    <Smile key='Smile' />
    <Tongue key='Tongue' />
    <Twinkle key='Twinkle' />
    <Vomit key='Vomit' />
  </Selector>;
};

export default Mouth;
