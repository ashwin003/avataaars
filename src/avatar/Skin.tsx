import * as React from 'react'

export interface SkinProps {
  maskID: string;
  color?: string;
}

const ColorComponent: React.FC<SkinProps> = ({ maskID, color }: SkinProps) => {
  return (
    <g
      id="Skin/👶🏽-03-Brown"
      mask={`url(#${maskID})`}
      fill={color}>
      <g transform="translate(0.000000, 0.000000)" id="Color">
        <rect x="0" y="0" width="264" height="280" />
      </g>
    </g>
  )
}

const Skin: React.FC<SkinProps> = ({ maskID, color }: SkinProps) => {
  if (!color) return <ColorComponent maskID={maskID} color='#EDB98A' key='Light'></ColorComponent>;
  return {
    'Tanned': <ColorComponent maskID={maskID} color='#FD9841' key='Tanned'></ColorComponent>,
    'Pale': <ColorComponent maskID={maskID} color='#FFDBB4' key='Pale'></ColorComponent>,
    'Yellow': <ColorComponent maskID={maskID} color='#F8D25C' key='Yellow'></ColorComponent>,
    'Light': <ColorComponent maskID={maskID} color='#EDB98A' key='Light'></ColorComponent>,
    'Brown': <ColorComponent maskID={maskID} color='#D08B5B' key='Brown'></ColorComponent>,
    'DarkBrown': <ColorComponent maskID={maskID} color='#AE5D29' key='DarkBrown'></ColorComponent>,
    'Black': <ColorComponent maskID={maskID} color='#614335' key='Black'></ColorComponent>
  }[color];
};

export default Skin;
