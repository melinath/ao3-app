import React, { PureComponent } from 'react'
import { View, TextInput, Picker, Switch } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import type { NavigationScreenProp, NavigationStateRoute } from 'react-navigation'

import SearchForm from '../components/SearchForm'
import WorkPreview from '../components/WorkPreview'
import WorksList from '../components/WorksList'
import { loadSearchWorks, clearSearchWorks } from '../actions'
import languages from '../languages'
import styles from '../../styles'
import type { WorkPreview as WorkPreviewType, SearchParams } from '../../types'


type Props = {
	works: Array<WorkPreviewType>,
	actions: { [key: string]: (...arguments: Array<mixed>) => mixed },
	navigation: NavigationScreenProp<NavigationStateRoute>,
}

type State = {
	searchExpanded: boolean,
}


const mapStateToProps = (state) => {
	return state.works.search || {}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		actions: bindActionCreators({
			clearSearchWorks,
			loadSearchWorks,
		}, dispatch)
	}
}


class Search extends PureComponent<Props, State> {
	static navigationOptions = {
		title: 'Search works',
	}

	constructor(props) {
		super(props);

		(this:any).fetchSearch = this.fetchSearch.bind(this);

		this.state = {
			searchExpanded: false,
			searchParams: {},
		}
	}

	componentWillUnmount() {
		this.props.actions.clearSearchWorks()
	}

	fetchSearch(searchParams) {
		this.props.actions.clearSearchWorks()
		this.props.actions.loadSearchWorks(searchParams)
	}

	render() {
		return (
			<View style={styles.scene}>
				<SearchForm
					onSubmit={this.fetchSearch}
				/>
				<WorksList
					isLoading={this.props.isLoading || false}
					navigation={this.props.navigation}
					works={this.props.works}
				/>
			</View>
		)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Search)
