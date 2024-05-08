import * as React from 'react'

export interface ColorProps {
  maskID: string;
  color?: string;
}

const ColorComponent: React.FC<ColorProps> = ({ maskID, color }: ColorProps) => {
  return (
    <g
      id='Color/Facial-Hair'
      mask={`url(#${maskID})`}
      fill={color}>
      <g transform='translate(-32.000000, 0.000000)' id='Color'>
        <rect x='0' y='0' width='264' height='244' />
      </g>
    </g>
  )
}

const Colors: React.FC<ColorProps> = ({ maskID, color }: ColorProps) => {
  if (!color) return <ColorComponent maskID={maskID} color='#4A312C' key='BrownDark' />;
  return {
    'Auburn': <ColorComponent maskID={maskID} color='#A55728' key='Auburn' />,
    'Black': <ColorComponent maskID={maskID} color='#2C1B18' key='Black' />,
    'Blonde': <ColorComponent maskID={maskID} color='#B58143' key='Blonde' />,
    'BlondeGolden': <ColorComponent maskID={maskID} color='#D6B370' key='BlondeGolden' />,
    'Brown': <ColorComponent maskID={maskID} color='#724133' key='Brown' />,
    'BrownDark': <ColorComponent maskID={maskID} color='#4A312C' key='BrownDark' />,
    'Platinum': <ColorComponent maskID={maskID} color='#ECDCBF' key='Platinum' />,
    'Red': <ColorComponent maskID={maskID} color='#C93305' key='Red' />,
    'SilverGray': <ColorComponent maskID={maskID} color='#E8E1E1' key='SilverGray' />
  }[color];
}

export default Colors;