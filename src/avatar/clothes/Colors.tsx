import * as React from 'react'

import lookup from '../lookup'
import { fabricColors } from '../palettes'

export interface ColorProps {
  maskID: string;
  color?: string;
}

const Colors: React.FC<ColorProps> = ({ maskID, color }: ColorProps) => {
  const fill = lookup(fabricColors, color, 'Gray01')
  if (!fill) return null
  return (
    <g
      id="Clothes"
      mask={`url(#${maskID})`}
      fillRule='evenodd'
      fill={fill}>
      <rect id='🖍Color' x='0' y='0' width='264' height='110' />
    </g>
  )
}

export default Colors;
