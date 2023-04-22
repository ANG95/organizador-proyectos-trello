export type BoardsList = Boards[]

export interface Boards {
  id: string
  name: string
  boardItems: BoardItem[]
}

export interface BoardItem {
  id: string
  name: string
  desc: string
}
