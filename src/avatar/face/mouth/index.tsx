import * as React from 'react'

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
import { MouthProps } from './type'

const Mouth: React.FC<MouthProps> = ({ type }: MouthProps) => {
  if (!type) return <Default key='Default' />;
  return {
    'Concerned': <Concerned key='Concerned' />,
    'Default': <Default key='Default' />,
    'Disbelief': <Disbelief key='Disbelief' />,
    'Eating': <Eating key='Eating' />,
    'Grimace': <Grimace key='Grimace' />,
    'Sad': <Sad key='Sad' />,
    'ScreamOpen': <ScreamOpen key='ScreamOpen' />,
    'Serious': <Serious key='Serious' />,
    'Smile': <Smile key='Smile' />,
    'Tongue': <Tongue key='Tongue' />,
    'Twinkle': <Twinkle key='Twinkle' />,
    'Vomit': <Vomit key='Vomit' />
  }[type];
};

export default Mouth;
