import type {
  NavigationScreenProp,
  NavigationStateRoute,
} from 'react-navigation'

export type WorksListLink = {
  label: string,
  url: string,
}

export type WorkPreview = {
  key: string,
  url: string,
  title: string,
  authors: Array<WorksListLink>,
  fandoms: Array<WorksListLink>,

  rating: string,
  warnings: Array<WorksListLink>,
  categories: Array<string>,
  iswip: string,

  publish_date: string,
  relationships: Array<WorksListLink>,
  characters: Array<WorksListLink>,
  tags: Array<WorksListLink>,

  summary: string,
  language: string,
  words: number,
  chapters: string,
  hits: number,
}

export type WorkDetail = {
  notes: ?string,
  endNotes: ?string,
  chapterTitle: ?string,
  content: string,
}

export type WorksState = {
  recent?: (
    void | {
      isLoading: boolean,
      works?: Array<WorkPreview>,
    }
  )
}

export type State = {
  works: WorksState,
  nav: NavigationScreenProp<NavigationStateRoute>,
}

export type Action =
  | {| type: 'LOADING_RECENT_WORKS' |}
  | {| type: 'LOADED_RECENT_WORKS', works: Array<WorkPreview> |}
