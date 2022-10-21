import React, { ReactElement, FC, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import {
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from '@mui/material/styles';
import { mobileCheck } from './utils';
import axios from 'axios';
import type {
  ApplicationData,
  EducationData,
  TechnicalSkillsData,
  ExperienceData,
} from './Components/Pages';
import {
  Container,
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
  Toolbar,
  Button,
  Grid,
} from '@mui/material';
import {
  Applications,
  Education,
  Experience,
  TechnicalSkills,
} from './Components/Pages';

const SIDEBAR_MIN_WIDTH = 443;

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

interface IState {
  tabs: Array<{ name: string; display: boolean }>;
  selectedTab: { name: string; display: boolean };
  windowWidth?: number;
  mobile?: boolean;
  displaySidebar: boolean;
}

export default function App() {
  const [cookies, setCookie] = useCookies();
  const [selectedTab, setSelectedTab] = useState(
    Number(cookies['last-page']) || 0
  );
  const [displaySidebar, setDisplaySidebar] = useState(
    window.innerWidth >= SIDEBAR_MIN_WIDTH
  );
  const [width, setWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(mobileCheck());
  const [applicationData, setApplicationData] = useState<ApplicationData>([]);
  const [educationData, setEducationData] = useState<EducationData>([]);
  const [experienceData, setExperienceData] = useState<ExperienceData>([]);
  const [technicalSkillsData, setTechnicalSkillsData] =
    useState<TechnicalSkillsData>([]);

  const switchTabs = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const fetchApplicationData = () => {
    axios.get('/applications').then(({ data }) => {
      setApplicationData(data);
    });
  };

  const fetchEducationData = () => {
    axios.get('/education').then(({ data }) => {
      setEducationData(data);
    });
  };

  const fetchTechnicalSkillsData = () => {
    axios.get('/technical_skills').then(({ data }) => {
      setTechnicalSkillsData(data);
    });
  };

  const fetchExperienceData = () => {
    axios.get('/experience').then(({ data }) => {
      setExperienceData(data);
    });
  };

  const getTabStyle = (tabNumber: number) => {
    return selectedTab === tabNumber
      ? {
          backgroundColor: '#ffffff',
          border: '#5f99cf solid 1px',
          borderBottomColor: '#ffffff',
        }
      : {
          backgroundColor: '#eff5ff',
        };
  };

  useEffect(() => {
    setDisplaySidebar(width >= 443);
  }, [width]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
    fetchApplicationData();
    fetchEducationData();
    fetchExperienceData();
    fetchTechnicalSkillsData();
  }, []);

  useEffect(() => {
    setCookie('last-page', selectedTab);
  }, [selectedTab]);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false}>
        <Toolbar
          color='secondary'
          disableGutters
          sx={{ backgroundColor: '#cee3f8', borderBottom: '#5f99cf solid 1px' }}
          variant='dense'
        >
          <Grid container pb={0}>
            <Grid display='flex' alignItems='flex-end'>
              <Typography variant='h5'>kyle johnson</Typography>
            </Grid>
            <Grid item>
              <Tabs
                value={selectedTab}
                onChange={switchTabs}
                indicatorColor='secondary'
                sx={{
                  '& button': { paddingY: 0 },
                  '& p': {
                    paddingX: 1,
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'lowercase',
                  },
                }}
                TabIndicatorProps={{ style: { display: 'none' } }}
              >
                <Tab
                  label={
                    <Typography sx={getTabStyle(0)}>experience</Typography>
                  }
                />
                <Tab
                  label={
                    <Typography sx={getTabStyle(1)}>
                      technical_skills
                    </Typography>
                  }
                />
                <Tab
                  label={
                    <Typography sx={getTabStyle(2)}>applications</Typography>
                  }
                />
                <Tab
                  label={<Typography sx={getTabStyle(3)}>education</Typography>}
                />
              </Tabs>
            </Grid>
          </Grid>
        </Toolbar>
        <Box>
          <Experience
            experienceData={experienceData}
            display={selectedTab === 0}
          />
          <TechnicalSkills
            technicalSkillsData={technicalSkillsData}
            display={selectedTab === 1}
          />
          <Applications
            applicationData={applicationData}
            display={selectedTab === 2}
          />
          <Education
            educationData={educationData}
            display={selectedTab === 3}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
