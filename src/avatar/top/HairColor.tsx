import * as React from 'react'

export interface HairProps {
  maskID: string;
  color?: string;
}

const ColorComponent: React.FC<HairProps> = ({ maskID, color }: HairProps) => {
  return (
    <g
      id='Hair/👶🏽-03-Brown'
      mask={`url(#${maskID})`}
      fill={color}>
      <g transform='translate(0.000000, 0.000000) ' id='Color'>
        <rect x='0' y='0' width='264' height='280' />
      </g>
    </g>
  )
}

const HairColor: React.FC<HairProps> = ({ maskID, color }: HairProps) => {
  if (!color) return <ColorComponent maskID={maskID} key='BrownDark' color='#4A312C' />;
  return {
    'Auburn': <ColorComponent maskID={maskID} key='Auburn' color='#A55728' />,
    'Black': <ColorComponent maskID={maskID} key='Black' color='#2C1B18' />,
    'Blonde': <ColorComponent maskID={maskID} key='Blonde' color='#B58143' />,
    'BlondeGolden': <ColorComponent maskID={maskID} key='BlondeGolden' color='#D6B370' />,
    'Brown': <ColorComponent maskID={maskID} key='Brown' color='#724133' />,
    'BrownDark': <ColorComponent maskID={maskID} key='BrownDark' color='#4A312C' />,
    'PastelPink': <ColorComponent maskID={maskID} key='PastelPink' color='#F59797' />,
    'Blue': <ColorComponent maskID={maskID} key='Blue' color='#000fdb' />,
    'Platinum': <ColorComponent maskID={maskID} key='Platinum' color='#ECDCBF' />,
    'Red': <ColorComponent maskID={maskID} key='Red' color='#C93305' />,
    'SilverGray': <ColorComponent maskID={maskID} key='SilverGray' color='#E8E1E1' />
  }[color];
};

export default HairColor;
