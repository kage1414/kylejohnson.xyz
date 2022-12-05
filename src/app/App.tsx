import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import {
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from '@mui/material/styles';
import { Navbar } from './components/Navbar';
import { BottomBar } from './components/BottomBar';
import { Grid } from '@mui/material';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Feed } from './components/Feed';
import { AdminContainer } from './components/Admin/AdminContainer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fb4620',
      light: '#ffffff',
      dark: '#9eb1c4',
      contrastText: '#000000',
    },
    secondary: {
      main: '#0000ff',
      light: '#ffffff',
      dark: '#9eb1c4',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: ['verdana', 'arial', 'helvetica', 'sans-serif'].join(','),
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTab: {
      styleOverrides: {
        root: sx({
          justifyContent: 'flex-end',
        }),
      },
    },
  },
});

export default function App() {
  const [cookies, setCookie] = useCookies();
  const [selectedTab, setSelectedTab] = useState(
    Number(cookies['last-page']) || 0
  );

  useEffect(() => {
    setCookie('last-page', selectedTab);
  }, [selectedTab]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Grid container flexDirection={'column'}>
          <Grid item>
            <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          </Grid>
          <Grid item>
            <Grid container flexDirection='row' wrap='nowrap'>
              <Grid item>
                <Sidebar />
              </Grid>
              <Grid>
                <Routes>
                  <Route path='*' element={<Navigate to='/home' />} />
                  <Route
                    path='/home'
                    element={<Feed selectedTab={selectedTab} />}
                  />
                  <Route
                    path='/admin'
                    element={<AdminContainer selectedTab={selectedTab} />}
                  />
                </Routes>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <BottomBar />
          </Grid>
        </Grid>
      </ThemeProvider>
    </BrowserRouter>
  );
}
