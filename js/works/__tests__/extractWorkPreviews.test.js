import fs from 'fs'

import { extractWorkPreviews } from '../utils'


describe('extractWorkPreviews', () => {
  it('extracts data properly (basic)', () => {
    const html = fs.readFileSync(`${__dirname}/data/workPreview-basic.html`, {encoding: 'utf-8'})
    const works = extractWorkPreviews(html)
    expect(works).toEqual([{
      key: 'work_1234567',
      title: 'Title of the work',
      url: '/works/1234567',
      authors: [
        {
          label: 'authorpseudonym (authorname)',
          url: '/users/authorname/pseuds/authorpseudonym/works',
        }
      ],

      fandoms: [{
        label: 'A Fandom (Movies)',
        url: '/tags/A%20Fandom%20(Movies)/works',
      }],

      rating: 'Teen And Up Audiences',
      warnings: [
        {
          label: 'Creator Chose Not To Use Archive Warnings',
          url: '/tags/Choose%20Not%20To%20Use%20Archive%20Warnings/works',
        },
      ],
      categories: ['F/F'],
      iswip: 'Work in Progress',

      publish_date: '01 Mar 2018',

      relationships: [
        {
          url: '/tags/Chloe%20Beale*s*Beca%20Mitchell/works',
          label: 'Chloe Beale/Beca Mitchell',
        },
      ],
      characters: [
        {
          url: "/tags/Beca%20Mitchell/works",
          label: 'Beca Mitchell',
        },
        {
          url: "/tags/Chloe%20Beale/works",
          label: 'Chloe Beale',
        },
        {
          url: "/tags/Jesse%20Swanson/works",
          label: 'Jesse Swanson',
        },
        {
          url: "/tags/Emily%20Junk/works",
          label: 'Emily Junk',
        },
        {
          url: "/tags/Benji%20Applebaum/works",
          label: 'Benji Applebaum',
        },
        {
          url: "/tags/Donald%20(Pitch%20Perfect)/works",
          label: 'Donald (Pitch Perfect)',
        },
      ],
      tags: [
        {
          url: '/tags/Titanic!AU/works',
          label: 'Titanic!AU',
        },
      ],
      summary: 'This is one line of content.\nThis is another line of content.',
      language: 'English',
      words: 1226,
      chapters: '1/?',
      hits: 0,
    }])
  })
  it('extracts multiple authors', () => {
    const html = fs.readFileSync(`${__dirname}/data/workPreview-multi-author.html`, {encoding: 'utf-8'})
    const works = extractWorkPreviews(html)
    expect(works[0].authors).toEqual([
      {
        label: 'authorpseudonym (authorname)',
        url: '/users/authorname/pseuds/authorpseudonym/works',
      },
      {
        label: 'author2',
        url: '/users/author2/pseuds/author2/works',
      }
    ])
  })
  it('extracts multiple categories', () => {
    const html = fs.readFileSync(`${__dirname}/data/workPreview-multi-category.html`, {encoding: 'utf-8'})
    const works = extractWorkPreviews(html)
    expect(works[0].categories).toEqual([
      'F/M',
      'Multi',
    ])
  })
  it('extracts multiple warnings', () => {
    const html = fs.readFileSync(`${__dirname}/data/workPreview-multi-warning.html`, {encoding: 'utf-8'})
    const works = extractWorkPreviews(html)
    expect(works[0].warnings).toEqual([
      {
        label: 'Graphic Depictions Of Violence',
        url: '/tags/Graphic%20Depictions%20Of%20Violence/works',
      },
      {
        label: 'Major Character Death',
        url: '/tags/Major%20Character%20Death/works',
      },
    ])
  })
})
