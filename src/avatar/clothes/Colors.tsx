import * as React from 'react'

export interface ColorProps {
  maskID: string;
  color?: string;
}

const ColorComponent: React.FC<ColorProps> = ({ maskID, color }: ColorProps) => {
  return (
    <g
      id="Clothes"
      mask={`url(#${maskID})`}
      fillRule='evenodd'
      fill={color}>
      <rect id='🖍Color' x='0' y='0' width='264' height='110' />
    </g>
  )
}

const Colors: React.FC<ColorProps> = ({ maskID, color }: ColorProps) => {
  if (!color) return <ColorComponent maskID={maskID} key='Gray01' color='#E6E6E6' />;
  return {
    'Black': <ColorComponent maskID={maskID} key='Black' color='#262E33' />,
    'Blue01': <ColorComponent maskID={maskID} key='Blue01' color='#65C9FF' />,
    'Blue02': <ColorComponent maskID={maskID} key='Blue02' color='#5199E4' />,
    'Blue03': <ColorComponent maskID={maskID} key='Blue03' color='#25557C' />,
    'Gray01': <ColorComponent maskID={maskID} key='Gray01' color='#E6E6E6' />,
    'Gray02': <ColorComponent maskID={maskID} key='Gray02' color='#929598' />,
    'Heather': <ColorComponent maskID={maskID} key='Heather' color='#3C4F5C' />,
    'PastelBlue': <ColorComponent maskID={maskID} key='PastelBlue' color='#B1E2FF' />,
    'PastelGreen': <ColorComponent maskID={maskID} key='PastelGreen' color='#A7FFC4' />,
    'PastelOrange': <ColorComponent maskID={maskID} key='PastelOrange' color='#FFDEB5' />,
    'PastelRed': <ColorComponent maskID={maskID} key='PastelRed' color='#FFAFB9' />,
    'PastelYellow': <ColorComponent maskID={maskID} key='PastelYellow' color='#FFFFB1' />,
    'Pink': <ColorComponent maskID={maskID} key='Pink' color='#FF488E' />,
    'Red': <ColorComponent maskID={maskID} key='Red' color='#FF5C5C' />,
    'White': <ColorComponent maskID={maskID} key='White' color='#FFFFFF' />
  }[color];
}

export default Colors;