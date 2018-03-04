import React, { PureComponent } from 'react'
import { Image, View, Text, Button } from 'react-native'
import type { NavigationScreenProp, NavigationStateRoute } from 'react-navigation'


type NavigationState = {
	params?: { symbols: Array<{symbol: {[key: string]: mixed}, description: string}>}
} & NavigationStateRoute


type Props = {
	navigation: NavigationScreenProp<NavigationState>,
}


export default class ModalScreen extends PureComponent<Props> {
  constructor(props:Props) {
    super(props);

    (this:any).close = this.close.bind(this)
  }

  close() {
    this.props.navigation.goBack()
  }

  render() {
    const { params } = this.props.navigation.state

    if (!params) return null

    const { symbols } = params

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ paddingLeft: 20, paddingRight: 20, width: '100%' }}>
          <Text style={{ fontSize: 20, paddingBottom: 10 }}>Symbols</Text>
          {symbols.map(({ symbol, description }, index) => (
            <View key={index} style={{ flexDirection: 'row', paddingBottom: 10 }}>
              <Image source={symbol} />
              <View style={{ paddingLeft: 10, flex: 1 }}>
                {description}
              </View>
            </View>
          ))}
        </View>
        <Button
          onPress={this.close}
          title="Dismiss"
        />
      </View>
    );
  }
}
