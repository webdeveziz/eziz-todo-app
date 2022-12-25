import { FormatListNumbered } from '@mui/icons-material'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'

const Footer = () => {
  return (
    <AppBar
      position="static"
      sx={{
        mt: '2rem',
        pt: '30px',
        pb: '40px',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <span> Used next stacks: </span>
          <br />
          <strong>
            JS, CSS, MUI, React, Redux , React-Redux, LocalStorage, Git and etc.
          </strong>
        </Typography>
        <Typography color="inherit" sx={{ mr: '35px' }}>
          <span>Written by</span> <br />
          <i>
            {' '}
            <strong>Kurbannazarov Eziz</strong>
          </i>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
