import { ReactElement, SetStateAction, Dispatch } from 'react';
import { Tabs, Tab, Typography, Toolbar, Grid } from '@mui/material';
import Link from 'next/link';

interface Props {
  setSelectedTab: Dispatch<SetStateAction<number>>;
  selectedTab: number;
}

interface GetTabName {
  tabNumber: number;
  path: string;
}

const FEED_TAB_MAP = {
  0: 'experience',
  1: 'technical_skills',
  2: 'applications',
  3: 'education',
};

export function Navbar({ selectedTab, setSelectedTab }: Props): ReactElement {
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
  const switchTabs = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };
  return (
    <Toolbar
      color='secondary'
      disableGutters
      sx={{ backgroundColor: '#cee3f8', borderBottom: '#5f99cf solid 1px' }}
      variant='dense'
    >
      <Grid container pb={0}>
        <Grid display='flex' alignItems='flex-end' item>
          <Link href={'/'}>
            <Typography variant='h5'>{`kyle johnson`}</Typography>
          </Link>
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
              label={<Typography sx={getTabStyle(0)}>experience</Typography>}
            />
            <Tab
              label={
                <Typography sx={getTabStyle(1)}>technical_skills</Typography>
              }
            />
            <Tab
              label={<Typography sx={getTabStyle(2)}>applications</Typography>}
            />
            <Tab
              label={<Typography sx={getTabStyle(3)}>education</Typography>}
            />
          </Tabs>
        </Grid>
      </Grid>
    </Toolbar>
  );
}
