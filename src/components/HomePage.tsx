import { Grid, Snackbar } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useState,
} from 'react';

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

type TToastContext = {
  toastMessage?: string;
  setToastMessage?: Dispatch<SetStateAction<string>>;
};

export const ToastContext = createContext<TToastContext>({});

export default function HomePage({ Component, disableTabs }: Props) {
  const [selectedTab, setSelectedTab] = useState(0);

  const [user, { mutate, loading }] = useUser();

  const [toastMessage, setToastMessage] = useState('');

  const onToastClose = () => {
    setToastMessage('');
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContext.Provider value={{ toastMessage, setToastMessage }}>
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
        <Snackbar
          open={!!toastMessage}
          autoHideDuration={6000}
          onClose={onToastClose}
          message={toastMessage}
        />
      </ToastContext.Provider>
    </ThemeProvider>
  );
}
