import { Stack } from "@mui/material"

import { categories } from '../utils/constants'



const selectedCategory  = "New"


const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      height: {sx: 'auto', md: '95%'},
      flexDirection: { md: 'column'},
      overflowY: 'auto'
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "#fff",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "#fff" : "red", marginRight: '15px' }}>{category.icon}</span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>{category.name}</span>
      </button>
    ))}
  </Stack>
)
export default Sidebar