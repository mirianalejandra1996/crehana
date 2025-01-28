import { Outlet, useNavigate } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';

const MainLayout = () => {

  const navigate = useNavigate()

  return (
    <Box  minHeight={"100vh"} >
      {/* Navbar */}
      <AppBar position="sticky">
        <Toolbar>
          <Typography fontWeight={600} sx={{ cursor: 'pointer'}} onClick={() => navigate('/')} variant="h6" component="div">
            Crehana
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content Area */}
      <Container>
        <Box mt={4}>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
};

export default MainLayout;
