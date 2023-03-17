import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ReactElement, useState } from 'react';

import { BottomBar } from './BottomBar';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

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
        root: {
          justifyContent: 'flex-end',
        },
      },
    },
  },
});

interface ComponentProps {
  selectedTab: number;
}

interface Props {
  Component: (props: ComponentProps) => ReactElement;
  disableTabs?: boolean;
}

export default function HomePage({ Component, disableTabs }: Props) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Grid container flexDirection={'column'}>
        <Grid item>
          <Navbar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            disableTabs={disableTabs}
          />
        </Grid>
        <Grid item>
          <Grid container flexDirection='row' wrap='nowrap'>
            <Grid item>
              <Sidebar />
            </Grid>
            <Grid>
              <Component selectedTab={selectedTab} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <BottomBar />
      </Grid>
    </ThemeProvider>
  );
}
