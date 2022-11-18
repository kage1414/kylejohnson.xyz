import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import {
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from '@mui/material/styles';
import Navbar from './components/Navbar';
import { BottomBar } from './components/BottomBar';
import { Grid } from '@mui/material';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Feed } from './components/Feed';
import { AdminContainer } from './components/AdminContainer';

export type Page = 'feed' | 'admin';

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
  const [page, setPage] = useState<Page>('feed');
  const [selectedTab, setSelectedTab] = useState(
    Number(cookies['last-page']) || 0
  );

  const { innerHeight: height } = window;

  useEffect(() => {
    setCookie('last-page', selectedTab);
  }, [selectedTab]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Grid container flexDirection={'column'}>
          <Grid item>
            <Navbar
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              page={page}
            />
          </Grid>
          <Grid item>
            <Grid container flexDirection={'row'}>
              <Grid item>
                <Sidebar height={height - 48 - 56} />
              </Grid>
              <Grid>
                <Routes>
                  <Route
                    path='/'
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
