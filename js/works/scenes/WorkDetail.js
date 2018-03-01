import React, { Component } from 'react'
import { Text, View } from 'react-native'
import type { NavigationScreenProp } from 'react-navigation'

import styles from '../../styles'
import type { WorkPreview, NavigationState } from '../../types'


type Props = {
	navigation: NavigationScreenProp<NavigationState>,
}


export default class WorkDetail extends Component<Props> {
	static navigationOptions = ({ navigation }: Props) => {
		const { params } = navigation.state

		return {
			title: params ? params.item.title : 'Work detail',
		}
	}

	render() {
		const { params } = this.props.navigation.state
		if (!params) return null

		const { item } = params
		return (
			<View style={[styles.scene, styles.listItem]}>
				<Text style={styles.listItemHeader}>{item.title}</Text>
				<Text>{item.author}</Text>
			</View>
		)
	}
}
