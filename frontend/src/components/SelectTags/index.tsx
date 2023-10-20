import StyledTextField from '@/components/StyledTextField'
import { Prod, Tag } from '@/types/product.type'
import { Box, MenuItem } from '@mui/material'

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
      renderValue: (selected) => (
        <Box className="flex flex-wrap">
          {(selected as string[]).map((tag) => (
            <Box
              key={tag}
              className="rounded-md px-2 py-1 m-1"
              sx={{
                backgroundColor: 'secondary.main',
              }}
            >
              {tag}
            </Box>
          ))}
        </Box>
      ),
    }}
  >
    {Object.values(Tag).map((tag) => (
      <MenuItem
        key={tag}
        value={tag}
        // glow when hover
        className={`${
          data.tags.includes(tag) ? 'bg-[#ebf5ff] dark:bg-[#222e3b]' : 'bg-transparent'
        } hover:bg-[#ebf5ff] dark:hover:bg-[#222e3b] transition-colors duration-100 ease-linear`}
      >
        {tag}
      </MenuItem>
    ))}
  </StyledTextField>
)

export default SelectTags
