import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import {
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from '@mui/material/styles';
import Navbar from './components/Navbar';
import { Feed } from './components/Feed';

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

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setCookie('last-page', selectedTab);
  }, [selectedTab]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Feed selectedTab={selectedTab} />
    </ThemeProvider>
  );
}
