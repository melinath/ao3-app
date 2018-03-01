import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from '../../styles'
import type { WorkPreview, NavigationState } from '../../types'


type Props = {
	navigation: NavigationState,
}


export default class WorkDetail extends Component<Props> {
	static navigationOptions = ({ navigation }: Props) => {
		const { params } = navigation.state

		return {
			title: params ? params.item.title : 'Work detail',
		}
	}

	render() {
		const { item } = this.props.navigation.state.params
		return (
			<View style={[styles.scene, styles.listItem]}>
				<Text style={styles.listItemHeader}>{item.title}</Text>
				<Text>{item.author}</Text>
			</View>
		)
	}
}
