import React, { Component } from 'react'
import { FlatList, Button, Text, View } from 'react-native'

import cheerio from 'react-native-cheerio'

import WorkPreview from '../components/WorkPreview'
import { extractWorkPreview } from '../utils'
import styles from '../styles'

export default class Recent extends Component {
	static navigationOptions = {
		title: 'Recent works',
	}


	constructor(props) {
		super(props)

		this.fetchRecent = this.fetchRecent.bind(this)
		this.renderEmpty = this.renderEmpty.bind(this)
		this.renderItem = this.renderItem.bind(this)

		this.state = {
			isLoading: false,
			works: []
		}
	}

	fetchRecent() {
		this.setState({isLoading: true}, () => {
			fetch('https://archiveofourown.org/works')
			.then(response => response.text())
			.then(responseText => {
				const $ = cheerio.load(responseText)
				const works = $('li.work')
				this.setState({
					isLoading: false,
					works: works.map((index, element) => extractWorkPreview($(element))),
				})
			})
		})
	}

	componentDidMount() {
		this.fetchRecent()
	}

	renderEmpty() {
		if (this.state.isLoading) return null
		return (
			<Text style={[styles.paragraph, {paddingTop: 10}]}>
				No works found
			</Text>
		)
	}

	renderItem({ item }) {
		return <WorkPreview item={item} />
	}

	render() {
		return (
			<View style={styles.scenes}>
				<FlatList
					data={this.state.works}
					ListEmptyComponent={this.renderEmpty}
					onRefresh={this.fetchRecent}
					renderItem={this.renderItem}
					refreshing={this.state.isLoading}
				/>
			</View>
		)
	}
}
