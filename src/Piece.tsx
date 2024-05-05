import * as PropTypes from 'prop-types';
import * as React from 'react';
import { AvatarStyle } from './avatar';
import { OptionContext, allOptions } from './options';
import { default as PieceComponent } from './avatar/piece';
import { AvatarProps } from './AvatarProps';


export class Piece extends React.Component<AvatarProps> {
  static childContextTypes = {
    optionContext: PropTypes.instanceOf(OptionContext)
  };
  private optionContext: OptionContext = new OptionContext(allOptions);

  getChildContext() {
    return { optionContext: this.optionContext };
  }

  UNSAFE_componentWillMount() {
    this.updateOptionContext(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps: AvatarProps) {
    this.updateOptionContext(nextProps);
  }

  render() {
    const { avatarStyle, style, pieceType, pieceSize, viewBox } = this.props;
    return <PieceComponent avatarStyle={avatarStyle as AvatarStyle} style={style} pieceType={pieceType} pieceSize={pieceSize} viewBox={viewBox} />;
  }

  private updateOptionContext(props: AvatarProps) {
    const data: { [index: string]: string; } = {};
    for (const option of allOptions) {
      const value = props[option.key];
      if (!value) {
        continue;
      }
      data[option.key] = value;
    }
    this.optionContext.setData(data);
  }
}
