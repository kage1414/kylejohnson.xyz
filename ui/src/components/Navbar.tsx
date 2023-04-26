import { Grid, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { Dispatch, ReactElement, SetStateAction } from 'react';

interface Props {
  setSelectedTab: Dispatch<SetStateAction<number>>;
  selectedTab: number;
  disableTabs?: boolean;
}

export function Navbar({
  selectedTab,
  setSelectedTab,
  disableTabs,
}: Props): ReactElement {
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
              disabled={disableTabs}
              label={<Typography sx={getTabStyle(0)}>experience</Typography>}
            />
            <Tab
              disabled={disableTabs}
              label={
                <Typography sx={getTabStyle(1)}>technical_skills</Typography>
              }
            />
            <Tab
              disabled={disableTabs}
              label={<Typography sx={getTabStyle(2)}>applications</Typography>}
            />
            <Tab
              disabled={disableTabs}
              label={<Typography sx={getTabStyle(3)}>education</Typography>}
            />
          </Tabs>
        </Grid>
      </Grid>
    </Toolbar>
  );
}
