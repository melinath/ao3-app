import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import type { NavigationScreenProp, NavigationStateRoute } from 'react-navigation'

import WorkPreview from '../components/WorkPreview'
import WorksList from '../components/WorksList'
import styles from '../../styles'
import { loadRecentWorks } from '../actions'
import type { WorkPreview as WorkPreviewType } from '../../types'


type Props = {
	works: Array<WorkPreviewType>,
	actions: { [key: string]: () => mixed },
	navigation: NavigationScreenProp<NavigationStateRoute>,
}


const mapStateToProps = (state) => {
	return state.works.recent || {}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		actions: bindActionCreators({
			loadRecentWorks,
		}, dispatch)
	}
}


class Recent extends PureComponent<Props> {
	static navigationOptions = {
		title: 'Recent works',
	}

	constructor(props) {
		super(props);

		(this:any).fetchRecent = this.fetchRecent.bind(this);
	}

	fetchRecent() {
		this.props.actions.loadRecentWorks()
	}

	componentDidMount() {
		this.fetchRecent()
	}

	render() {
		return (
			<View style={styles.scene}>
				<WorksList
					isLoading={this.props.isLoading || false}
					navigation={this.props.navigation}
					onRefresh={this.fetchRecent}
					works={this.props.works}
				/>
			</View>
		)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Recent)
