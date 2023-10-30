interface IProduct {
  _id: string
  name: string
  description: string
  image: string
  price: number
  stock: number
  available: boolean
  saleOffPercent: number
  category: Category
  tags: Tag[]
  userId: string
  createdAt: Date
  updatedAt: Date
}

interface CreateProduct {
  name: string
  description: string
  image: File | null
  price: number
  stock: number
  category: Category
  tags: Tag[]
}

interface UpdateProduct {
  name: string
  description: string
  image: File
  price: number
  stock: number
  available: boolean
  saleOffPercent: number
  category: Category
  tags: Tag[]
}

enum Category {
  Novel = 'Novel',
  LightNovel = 'Light Novel',
  Manga = 'Manga',
  Other = 'Other',
}

enum Tag {
  Action = 'Action',
  AtA = 'Adapted to Anime',
  AtDCD = 'Adapted to Drama CD',
  AtM = 'Adapted to Manga',
  Adult = 'Adult',
  Adventure = 'Adventure',
  AG = 'Age Gap',
  CG = 'Character Growth',
  Comedy = 'Comedy',
  Cooking = 'Cooking',
  DSS = 'Different Social Status',
  Drama = 'Drama',
  Ecchi = 'Ecchi',
  Fantasy = 'Fantasy',
  FP = 'Female Protagonist',
  Game = 'Game',
  GB = 'Gender Bender',
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
  OG = 'Otome Game',
  Parody = 'Parody',
  Psychological = 'Psychological',
  RH = 'Reverse Harem',
  Romance = 'Romance',
  SchoolLife = 'School Life',
  SciFi = 'Science Fiction',
  Seinen = 'Seinen',
  Shoujo = 'Shoujo',
  ShoujoAi = 'Shoujo ai',
  Shounen = 'Shounen',
  ShounenAi = 'Shounen ai',
  SliceOfLife = 'Slice of Life',
  SlowLife = 'Slow Life',
  Sports = 'Sports',
  SP = 'Super Power',
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

export type { IProduct, CreateProduct, UpdateProduct }
export { Category, Tag }
