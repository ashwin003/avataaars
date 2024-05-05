import * as PropTypes from 'prop-types'
import * as React from 'react'

import Avatar, { AvatarStyle } from './avatar'
import { OptionContext, allOptions } from './options'

export { default as Avatar, AvatarStyle } from './avatar'
export { Option, OptionContext, allOptions } from './options'

import { AvatarProps } from './AvatarProps'

export default class AvatarComponent extends React.Component<AvatarProps> {
  static childContextTypes = {
    optionContext: PropTypes.instanceOf(OptionContext)
  }
  private optionContext: OptionContext = new OptionContext(allOptions)

  getChildContext() {
    return { optionContext: this.optionContext }
  }

  UNSAFE_componentWillMount() {
    this.updateOptionContext(this.props)
  }

  UNSAFE_componentWillReceiveProps(nextProps: AvatarProps) {
    this.updateOptionContext(nextProps)
  }

  render() {
    const { avatarStyle, style, className } = this.props
    return <Avatar avatarStyle={avatarStyle as AvatarStyle} style={style} className={className} />
  }

  private updateOptionContext(props: AvatarProps) {
    const data: { [index: string]: string } = {}
    for (const option of allOptions) {
      const value = props[option.key]
      if (!value) {
        continue
      }
      data[option.key] = value
    }
    this.optionContext.setData(data)
  }
}
