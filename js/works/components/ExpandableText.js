import React, { PureComponent } from 'react'
import { TouchableHighlight, Text } from 'react-native'
import type { Node } from 'react'
import type { React$Component } from 'react-native'

type Props = {
  children?: Node,
}

type State = {
  isExpanded: boolean,
}


export default class ExpandableText extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    (this:any).toggleExpand = this.toggleExpand.bind(this);

    (this:any).state = {
      isExpanded: false,
    };
  }

  toggleExpand() {
    this.setState(previousState => ({ isExpanded: !previousState.isExpanded }))
  }

  render() {
    const {
      isExpanded,
    } = this.state

    return (
      <TouchableHighlight
        onPress={this.toggleExpand}
				underlayColor="#007AFF"
      >
        <Text ellipsizeMode="tail" numberOfLines={isExpanded ? null : 2}>
          {this.props.children}
        </Text>
      </TouchableHighlight>
    )
  }
}
