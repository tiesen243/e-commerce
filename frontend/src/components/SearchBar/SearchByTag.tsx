import { Checkbox, List, ListItem, ListItemText, ListSubheader, ListItemIcon } from '@mui/material'

import { Tag } from '@/lib'

const tags = Object.values(Tag)
const SearchByTag: React.FC = () => (
  <List
    subheader={
      <ListSubheader component="div" className="main">
        Tag
      </ListSubheader>
    }
    className="max-h-96 overflow-y-auto"
  >
    {tags.map((tag: string, idx: number) => (
      <ListItem key={idx}>
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary={tag} />
      </ListItem>
    ))}
  </List>
)

export default SearchByTag
