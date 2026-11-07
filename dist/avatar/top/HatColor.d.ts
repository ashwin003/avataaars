import * as React from 'react';
export interface ColorProps {
    maskID: string;
    color?: string;
    /** Palette name used when `color` is not set. */
    defaultColor: string;
}
declare const HatColor: React.FC<ColorProps>;
export default HatColor;
