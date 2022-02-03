export interface IColumn {
  columnId: number,
  name: string,
  cards?: ICard[],
}

export interface ICard {
  id: number,
  name: string,
  description?: string,
  comments?: IComment[],
}

export interface IComment {
  id: number,
  member: string,
  content: string,
}
