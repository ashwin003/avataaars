import * as React from 'react'

import lookup from '../lookup'
import { hairColors } from '../palettes'

export interface HairProps {
  maskID: string;
  color?: string;
}

const HairColor: React.FC<HairProps> = ({ maskID, color }: HairProps) => {
  const fill = lookup(hairColors, color, 'BrownDark')
  if (!fill) return null
  return (
    <g
      id='Hair/👶🏽-03-Brown'
      mask={`url(#${maskID})`}
      fill={fill}>
      <g transform='translate(0.000000, 0.000000) ' id='Color'>
        <rect x='0' y='0' width='264' height='280' />
      </g>
    </g>
  )
}

export default HairColor;
