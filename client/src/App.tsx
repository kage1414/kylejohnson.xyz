import React, { ReactElement, FC, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
      main: '#fb4620',
      light: '#ff7b4d',
      dark: '#c00000',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: ['verdana', 'arial', 'helvetica', 'sans-serif'].join(','),
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
  const [selectedTab, setSelectedTab] = useState(0);
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

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false}>
        <Toolbar color='secondary'>
          <Box pb={0}>
            <Typography>kyle johnson</Typography>
            <Tabs
              value={selectedTab}
              onChange={switchTabs}
              indicatorColor='secondary'
            >
              <Tab label={<Typography>experience</Typography>} disableRipple />
              <Tab
                label={<Typography>technical_skills</Typography>}
                disableRipple
              />
              <Tab
                label={<Typography>applications</Typography>}
                disableRipple
              />
              <Tab label={<Typography>education</Typography>} disableRipple />
            </Tabs>
          </Box>
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
