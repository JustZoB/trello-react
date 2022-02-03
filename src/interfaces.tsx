export interface IColumn {
  columnId: number,
  name: string,
  list?: ICard[],
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
