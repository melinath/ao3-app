import fs from 'fs'

import { extractWorkDetail } from '../utils'

describe('extractWorkDetail', () => {
  it('extracts data properly (basic)', () => {
    const html = fs.readFileSync(`${__dirname}/data/workDetail-basic.html`, {encoding: 'utf-8'})
    const work = extractWorkDetail(html)
    expect(work).toEqual({
      notes: 'These are notes',
      endNotes: 'These are endnotes',
      chapterTitle: null,
      content: '<p>Contents</p><p>And more contents</p>',
    })
  })

  it('extracts data properly (chapter)', () => {
    const html = fs.readFileSync(`${__dirname}/data/workDetail-chapter.html`, {encoding: 'utf-8'})
    const work = extractWorkDetail(html)
    expect(work).toEqual({
      notes: null,
      endNotes: null,
      chapterTitle: 'Chapter 1: Chapter title',
      content: '<p>Contents</p>',
    })
  })
})
