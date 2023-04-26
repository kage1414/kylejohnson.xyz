import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ReactElement, useState } from 'react';

import { useUser } from '@/lib/hooks';

import { BottomBar } from './BottomBar';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fb4620',
    },
    secondary: {
      main: '#0000ff',
    },
    warning: {
      main: '#ff0000',
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

export interface ComponentProps {
  selectedTab: number;
  mutateUser: any;
  user: any;
  loadingUser: boolean;
}

interface Props {
  Component: (props: ComponentProps) => ReactElement;
  disableTabs?: boolean;
}

export default function HomePage({ Component, disableTabs }: Props) {
  const [selectedTab, setSelectedTab] = useState(0);

  const [user, { mutate, loading }] = useUser();

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
              <Sidebar user={user} mutateUser={mutate} />
            </Grid>
            <Grid>
              <Component
                selectedTab={selectedTab}
                mutateUser={mutate}
                user={user}
                loadingUser={loading}
              />
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
