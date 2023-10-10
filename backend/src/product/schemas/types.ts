export enum Category {
  NOVEL = 'Novel',
  LIGHTNOVEL = 'Light Novel',
  MANGA = 'Manga',
  ONESHOT = 'One Shot',
  OTHER = 'Other',
}

export enum Tag {
  ACTION = 'Action',
  ADVENTURE = 'Adventure',
  COMEDY = 'Comedy',
  DRAMA = 'Drama',
  FANTASY = 'Fantasy',
  HORROR = 'Horror',
  MYSTERY = 'Mystery',
  PSYCHOLOGICAL = 'Psychological',
  ROMANCE = 'Romance',
  SCIENCEFICTION = 'Science Fiction',
  SLICEOFLIFE = 'Slice of Life',
  SUPERNATURAL = 'Supernatural',
  THRILLER = 'Thriller',
  TRAGEDY = 'Tragedy',
  OTHER = 'Other',
}

export interface IProduct {
  _id: string
  code: number
  name: string
  image: string
  description: string
  category: Category
  tags: Tag[]
  price: number
  stock: number
  createdAt: Date
  updatedAt: Date
}

export interface ReqQuery {
  code: number
  name: string
  page: number
  limit: number
}
