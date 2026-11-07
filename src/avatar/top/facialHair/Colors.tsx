import * as React from 'react'

import lookup from '../../lookup'
import { facialHairColors } from '../../palettes'

export interface ColorProps {
  maskID: string;
  color?: string;
}

const Colors: React.FC<ColorProps> = ({ maskID, color }: ColorProps) => {
  const fill = lookup(facialHairColors, color, 'BrownDark')
  if (!fill) return null
  return (
    <g
      id='Color/Facial-Hair'
      mask={`url(#${maskID})`}
      fill={fill}>
      <g transform='translate(-32.000000, 0.000000)' id='Color'>
        <rect x='0' y='0' width='264' height='244' />
      </g>
    </g>
  )
}

export default Colors;
