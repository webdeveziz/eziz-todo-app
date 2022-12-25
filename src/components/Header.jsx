import { FormatListNumbered } from '@mui/icons-material'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'

const Header = () => {
  return (
    <AppBar position="static" sx={{ mt: '1rem' }}>
      <Toolbar>
        <Typography variant="h6" component="div">
          To Do App
        </Typography>
        <FormatListNumbered sx={{ flexGrow: 1 }} />
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
