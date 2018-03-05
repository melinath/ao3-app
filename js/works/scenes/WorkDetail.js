import React, { Component } from 'react'
import { Text, View, StatusBar, ScrollView, WebView, StyleSheet } from 'react-native'
import type { NavigationScreenProp, NavigationStateRoute } from 'react-navigation'

import HTMLView from 'react-native-htmlview'

import styles from '../../styles'
import { extractWorkDetail } from '../utils'
import type { WorkPreview, WorkDetail as WorkDetailType } from '../../types'


type NavigationState = {
	params: { item: WorkPreview }
} & NavigationStateRoute


type Props = {
	navigation: NavigationScreenProp<NavigationState>,
}


type State = {
	work?: WorkDetailType,
	isLoading: boolean,
}


export default class WorkDetail extends Component<Props, State> {
	static navigationOptions = { header: null }

	constructor(props: Props) {
		super(props);

		(this:any).state = {
			work: null,
			isLoading: false,
		}
	}

	async loadWork() {
		this.setState({isLoading: true})
		const { item } = this.props.navigation.state.params
		const response = await fetch(`https://archiveofourown.org${item.url}`)
		const responseText = await response.text()

		this.setState({
			work: extractWorkDetail(responseText),
			isLoading: false,
		})
	}

	componentDidMount() {
		this.loadWork()
	}

	render() {
		const { item: paramsItem } = this.props.navigation.state.params
		const { work } = this.state
		return (
			<ScrollView>
				<View style={{ padding: 10 }}>
					<StatusBar hidden={true} />
					<Text style={{ fontSize: 30 }}>{paramsItem.title}</Text>
					<Text>by {paramsItem.authors.map(({ label }) => label).join(', ')}</Text>

					<View style={{ paddingBottom: 10 }}>
						<Text style={{ fontSize: 20 }}>Summary</Text>
						<Text>{paramsItem.summary}</Text>
					</View>

					{work && work.notes && (
						<View style={{ paddingBottom: 10 }}>
							<Text style={{ fontSize: 20 }}>Notes</Text>
							<Text>{work.notes}</Text>
						</View>
					)}
					{work && (
						<View style={{ borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: 'black', paddingTop: 10 }}>
							{work.chapterTitle && <Text style={{ fontSize: 25 }}>{work.chapterTitle}</Text>}
							<HTMLView value={work.content} />
						</View>
					)}
					{work && work.endNotes && (
						<View>
							<Text style={{ fontSize: 20 }}>Notes</Text>
							<Text>{work.endNotes}</Text>
						</View>
					)}
				</View>
			</ScrollView>
		)
	}
}
