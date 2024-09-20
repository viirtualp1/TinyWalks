import type { StoryData, SearchStoryData } from '@/types/story'

export const searchStories: SearchStoryData[] = [
  { id: 0, title: 'Иваново - Москва' },
  { id: 1, title: 'Свободный - Благовещенск' },
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
