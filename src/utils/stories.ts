import type { StoryData, SearchStoryData } from '../types/story.ts'

export const searchStories: SearchStoryData[] = [
  { id: 0, title: 'ИВ - МСК' },
  { id: 1, title: 'СВБ - БЛГ' },
]

export const stories: StoryData[] = [
  {
    id: 0,
    title: 'ИВ - МСК',
    tasks: [
      { name: 'Иваново', isDone: false },
      { name: 'Москва', isDone: false },
    ],
  },
  {
    id: 1,
    title: 'СВБ - БЛГ',
    tasks: [
      { name: 'Свободный', isDone: false },
      { name: 'Благовещенск', isDone: false },
    ],
  },
]
