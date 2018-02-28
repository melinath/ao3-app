import cheerio from 'react-native-cheerio'

import { extractWorkPreview } from './utils'


export function loadRecentWorks() {
  return async (dispatch, getState) => {
    const recent = getState().works.recent
    // Take no action if already loading.
    if (recent && recent.isLoading) {
      return
    }
    dispatch({
      type: 'LOADING_RECENT_WORKS',
    })
		const response = await fetch('https://archiveofourown.org/works')
		const responseText = await response.text()
		const $ = cheerio.load(responseText)

    const works = []
    $('li.work').each((index, element) => works.push(extractWorkPreview($(element))));

		dispatch({
      type: 'LOADED_RECENT_WORKS',
			works,
		})
  }
}
