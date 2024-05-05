import * as PropTypes from 'prop-types';
import * as React from 'react';
import { OptionContext } from './options';
import { AvatarProps } from './AvatarProps';
export declare class Piece extends React.Component<AvatarProps> {
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
