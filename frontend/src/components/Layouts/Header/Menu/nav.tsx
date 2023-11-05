import { AllInclusiveRounded, BookRounded, LocalLibraryRounded, MenuBookRounded } from '@mui/icons-material'

type Menu = {
  name: string
  icon: JSX.Element
}

const menu: Menu[] = [
  {
    name: 'All',
    icon: <AllInclusiveRounded />,
  },
  {
    name: 'Novel',
    icon: <BookRounded />,
  },
  {
    name: 'Light Novel',
    icon: <LocalLibraryRounded />,
  },
  {
    name: 'Manga',
    icon: <MenuBookRounded />,
  },
]

export { menu, type Menu }
