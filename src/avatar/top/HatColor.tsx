import * as React from 'react'

import lookup from '../lookup'
import { fabricColors } from '../palettes'

export interface ColorProps {
  maskID: string;
  color?: string;
  /** Palette name used when `color` is not set. */
  defaultColor: string;
}

const HatColor: React.FC<ColorProps> = ({ maskID, color, defaultColor }: ColorProps) => {
  const fill = lookup(fabricColors, color, defaultColor)
  if (!fill) return null
  return (
    <g
      id='Color/Palette/Gray-01'
      mask={`url(#${maskID})`}
      fillRule='evenodd'
      fill={fill}>
      <rect id='🖍Color' x='0' y='0' width='264' height='280' />
    </g>
  )
}

export default HatColor;
