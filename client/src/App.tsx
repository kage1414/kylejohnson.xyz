import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import {
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from '@mui/material/styles';
import Navbar from './Components/Navbar';
import { Feed } from './Components/Feed';

const SIDEBAR_MIN_WIDTH = 443;

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
  const [displaySidebar, setDisplaySidebar] = useState(
    window.innerWidth >= SIDEBAR_MIN_WIDTH
  );
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setDisplaySidebar(width >= 443);
  }, [width]);

  useEffect(() => {
    setCookie('last-page', selectedTab);
  }, [selectedTab]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Feed selectedTab={selectedTab} />
    </ThemeProvider>
  );
}
