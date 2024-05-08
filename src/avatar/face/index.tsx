import * as React from 'react'

import Eyebrow from './eyebrow'
import Eyes from './eyes'
import Mouth from './mouth'
import Nose from './nose/Default'
import { FaceProps } from './type'

const Face = ({ eyeType, mouthType, eyebrowType }: FaceProps) => {
  return <g id='Face' transform='translate(76.000000, 82.000000)' fill='#000000'>
    <Mouth type={mouthType} />
    <Nose />
    <Eyes type={eyeType} />
    <Eyebrow type={eyebrowType} />
  </g>;
};

export default Face;
