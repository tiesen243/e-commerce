import { AllInclusiveRounded, BookRounded, LocalLibraryRounded, MenuBookRounded } from '@mui/icons-material'

type Menu = {
  name: string
  icon: JSX.Element
  path: string
}

const menu: Menu[] = [
  {
    name: 'All',
    icon: <AllInclusiveRounded />,
    path: '/search',
  },
  {
    name: 'Novel',
    icon: <BookRounded />,
    path: '/search/novel',
  },
  {
    name: 'L.Novel',
    icon: <LocalLibraryRounded />,
    path: '/search/lightnovel',
  },
  {
    name: 'Manga',
    icon: <MenuBookRounded />,
    path: '/search/manga',
  },
]

export { menu, type Menu }
