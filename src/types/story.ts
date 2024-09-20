export interface TaskData {
  name: string
  isDone: boolean
}

export interface SearchStoryData {
  id: number
  title: string
}

export interface StoryData {
  id: number
  title: string
  tasks: TaskData[]
}
