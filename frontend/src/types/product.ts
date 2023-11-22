export interface Product {
  _id: string
  name: string
  image: string
  description: string
  price: number
  stock: number
  saleOffPercent: number
  available: boolean
  category: Category
  tag: Tag[]
  userId: string
  createdAt: string
  updatedAt: string
}

export enum Category {
  Novel = 'Novel',
  LightNovel = 'Light Novel',
  Manga = 'Manga',
  Other = 'Other',
}
export enum Tag {
  Action = 'Action',
  AdaptedToAnime = 'Adapted to Anime',
  AdaptedToDramaCD = 'Adapted to Drama CD',
  AdaptedToManga = 'Adapted to Manga',
  Adult = 'Adult',
  Adventure = 'Adventure',
  AgeGap = 'Age Gap',
  CharacterGrowth = 'Character Growth',
  Comedy = 'Comedy',
  Cooking = 'Cooking',
  DifferentSocialStatus = 'Different Social Status',
  Drama = 'Drama',
  Ecchi = 'Ecchi',
  Fantasy = 'Fantasy',
  FemaleProtagonist = 'Female Protagonist',
  Game = 'Game',
  GenderBender = 'Gender Bender',
  Harem = 'Harem',
  Historical = 'Historical',
  Horror = 'Horror',
  Incest = 'Incest',
  Isekai = 'Isekai',
  Josei = 'Josei',
  Magic = 'Magic',
  MartialArts = 'Martial Arts',
  Mature = 'Mature',
  Mecha = 'Mecha',
  Military = 'Military',
  Misunderstanding = 'Misunderstanding',
  Mystery = 'Mystery',
  Netorare = 'Netorare',
  OneShot = 'One shot',
  OtomeGame = 'Otome Game',
  Parody = 'Parody',
  Psychological = 'Psychological',
  ReverseHarem = 'Reverse Harem',
  Romance = 'Romance',
  SchoolLife = 'School Life',
  ScienceFiction = 'Science Fiction',
  Seinen = 'Seinen',
  Shoujo = 'Shoujo',
  ShoujoAi = 'Shoujo ai',
  Shounen = 'Shounen',
  ShounenAi = 'Shounen ai',
  SliceOfLife = 'Slice of Life',
  SlowLife = 'Slow Life',
  Sports = 'Sports',
  SuperPower = 'Super Power',
  Supernatural = 'Supernatural',
  Suspense = 'Suspense',
  Tragedy = 'Tragedy',
  Wars = 'Wars',
  Yuri = 'Yuri',
  Yaoi = 'Yaoi',
  R15 = 'R15',
  R18 = 'R18',
  R18G = 'R18G',
  Other = 'Other',
}
