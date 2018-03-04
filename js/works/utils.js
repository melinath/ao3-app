import cheerio from 'react-native-cheerio'
import sanitizeHTML from 'sanitize-html'

import type { WorkPreview, WorkDetail } from '../types'


export const extractWorkPreviews = (text: string): Array<WorkPreview> => {
	const $ = cheerio.load(text)

	const works = []
	$('li.work').each((index, element) => {
		const $element = $(element)

		// Create empty to make it unsealed.
		const work = {}
		work.key = $element.attr('id')

		const titleElement = $element.find('h4 a').first()
		work.title = titleElement.text()
		work.url = titleElement.attr('href')

		work.authors = []
		$element.find('h4 a[rel=author]').each((index, author) => {
			const $author = $(author)
			work.authors.push({
				label: $author.text(),
				url: `${$author.attr('href')}/works`,
			})
		})

		work.fandoms = []
		$element.find('.fandoms .tag').each((index, fandom) => {
			const $fandom = $(fandom)
			work.fandoms.push({
				label: $fandom.text(),
				url: $fandom.attr('href'),
			})
		})

		work.rating = $element.find('.required-tags .rating').first().text()
		work.categories = $element.find('.required-tags .category').first().text().split(', ')
		work.iswip = $element.find('.required-tags .iswip').first().text()

		work.publish_date = $element.find('.datetime').first().text()

		work.warnings = []
		$element.find('ul.tags .warnings .tag').each((index, warning) => {
			const $warning = $(warning)
			work.warnings.push({
				label: $warning.text(),
				url: $warning.attr('href'),
			})
		})

		work.relationships = []
		$element.find('ul.tags .relationships .tag').each((index, relationship) => {
			const $relationship = $(relationship)
			work.relationships.push({
				label: $relationship.text(),
				url: $relationship.attr('href'),
			})
		})

		work.characters = []
		$element.find('ul.tags .characters .tag').each((index, character) => {
			const $character = $(character)
			work.characters.push({
				label: $character.text(),
				url: $character.attr('href'),
			})
		})

		work.tags = []
		$element.find('ul.tags .freeforms .tag').each((index, tag) => {
			const $tag = $(tag)
			work.tags.push({
				label: $tag.text(),
				url: $tag.attr('href'),
			})
		})

		work.summary = sanitizeHTML(
			$element.find('.summary').first().html(),
			{
				allowedTags: ['br'],
				allowedAttributes: {},
			},
		).replace(/<br \/>/g, '\n').trim()

		work.language = $element.find('dd.language').first().text()
		work.words = parseInt($element.find('dd.words').first().text().replace(/,/g, ''))
		work.chapters = $element.find('dd.chapters').first().text()
		work.hits = parseInt($element.find('dd.hits').first().text())

		works.push(work)
	})
	return works
}

export const extractWorkDetail = (text: string): WorkDetail => {
	const $ = cheerio.load(text)

	const chapterTitle = $('.chapter .title').text().trim()
	const work = {
		notes: null,
		endNotes: null,
		chapterTitle: chapterTitle ? chapterTitle : null,
		content: $('#chapters .userstuff p').text().trim(),
	}

	$('.notes').each((index, element) => {
		const $element = $(element)
		const notes = $element.find('.userstuff').text().trim()
		if ($element.attr('id') === 'work_endnotes') {
			work.endNotes = notes
		} else {
			work.notes = notes
		}
	})

	return work
}
