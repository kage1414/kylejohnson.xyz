import React, { ReactElement, FC, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { mobileCheck } from './utils';
import {
  Container,
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
  Toolbar,
  Button,
} from '@mui/material';
import {
  Applications,
  Education,
  Experience,
  TechnicalSkills,
} from './Components/Pages';
interface IProps {
  hello?: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#fb4620',
      light: '#ffffff',
      dark: '#9eb1c4',
      contrastText: '#000000',
    },
    secondary: {
      main: '#fb4620',
      light: '#ff7b4d',
      dark: '#c00000',
      contrastText: '#000000',
    },
  },
});

type Tab = { name: string; component: () => ReactElement };
type Tabs = Array<Tab>;

interface IState {
  tabs: Array<{ name: string; display: boolean }>;
  selectedTab: { name: string; display: boolean };
  windowWidth?: number;
  mobile?: boolean;
  displaySidebar: boolean;
}

const tabs: Tabs = [
  { name: 'experience', component: () => <Experience /> },
  { name: 'technical_skills', component: () => <TechnicalSkills /> },
  { name: 'applications', component: () => <Applications /> },
  { name: 'education', component: () => <Education /> },
];

export default function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [displaySidebar, setDisplaySidebar] = useState(
    window.innerWidth >= 443
  );
  const [width, setWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(mobileCheck());

  const switchTabs = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    setDisplaySidebar(width >= 443);
  }, [width]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false}>
        <Box>
          <Toolbar color='secondary'>
            <Typography>kyle johnson</Typography>
            <Tabs
              value={selectedTab}
              onChange={switchTabs}
              indicatorColor='secondary'
            >
              {tabs.map(({ name }, i) => (
                <Tab label={name} disableRipple key={`${name} ${i}`} />
              ))}
            </Tabs>
          </Toolbar>
        </Box>
        <Box>{tabs[selectedTab].component()}</Box>
      </Container>
    </ThemeProvider>
  );
}
