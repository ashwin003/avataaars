import * as React from 'react'

import lookup from './lookup'
import { skinColors } from './palettes'

export interface SkinProps {
  maskID: string;
  color?: string;
}

const Skin: React.FC<SkinProps> = ({ maskID, color }: SkinProps) => {
  const fill = lookup(skinColors, color, 'Light')
  if (!fill) return null
  return (
    <g
      id="Skin/👶🏽-03-Brown"
      mask={`url(#${maskID})`}
      fill={fill}>
      <g transform="translate(0.000000, 0.000000)" id="Color">
        <rect x="0" y="0" width="264" height="280" />
      </g>
    </g>
  )
}

export default Skin;
