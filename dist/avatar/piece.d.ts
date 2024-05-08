import * as React from 'react';
import { AvatarProps } from '../AvatarProps';
export declare enum AvatarStyle {
    Circle = "Circle",
    Transparent = "Transparent"
}
export interface PieceProps extends AvatarProps {
    pieceSize?: string;
    pieceType?: string;
    style?: React.CSSProperties;
    viewBox?: string;
}
declare const PieceComponent: React.FC<PieceProps>;
export default PieceComponent;
