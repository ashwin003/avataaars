import * as React from 'react';
import { AvatarProps } from '../AvatarProps';
export interface PieceProps extends Omit<AvatarProps, 'avatarStyle'> {
    /** Accepted for API compatibility with Avatar; pieces have no style. */
    avatarStyle?: string;
}
declare const PieceComponent: React.FC<PieceProps>;
export default PieceComponent;
