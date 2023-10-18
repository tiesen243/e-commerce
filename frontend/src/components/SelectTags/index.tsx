import StyledTextField from '@/components/StyledTextField'
import { Prod, Tag } from '@/types/product.type'
import { MenuItem } from '@mui/material'

interface Props {
  data: Prod
  setData: React.Dispatch<React.SetStateAction<Prod>>
}
const SelectTags: React.FC<Props> = ({ data, setData }) => (
  <StyledTextField
    select
    name="tags"
    id="tags"
    variant="outlined"
    label="Tags"
    SelectProps={{
      multiple: true,
      value: data.tags,
      onChange: (e) => setData({ ...data, tags: e.target.value as Tag[] }),
    }}
  >
    {Object.values(Tag).map((tag) => (
      <MenuItem key={tag} value={tag}>
        {tag}
      </MenuItem>
    ))}
  </StyledTextField>
)

export default SelectTags
