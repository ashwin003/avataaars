import * as PropTypes from 'prop-types';
import * as React from 'react';
import { OptionContext } from './options';
export { default as Avatar, AvatarStyle } from './avatar';
export { Piece } from './Piece';
export { Option, OptionContext, allOptions } from './options';
import { AvatarProps } from './AvatarProps';
export { AvatarProps } from './AvatarProps';
export default class AvatarComponent extends React.Component<AvatarProps> {
    static childContextTypes: {
        optionContext: PropTypes.Requireable<OptionContext>;
    };
    private optionContext;
    getChildContext(): {
        optionContext: OptionContext;
    };
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: AvatarProps): void;
    render(): React.JSX.Element;
    private updateOptionContext;
}
