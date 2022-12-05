import { ReactElement, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Link } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

export function BottomBar(): ReactElement {
  const [value, setValue] = useState<string | null>(null);
  return (
    <BottomNavigation
      showLabels
      value={value}
      sx={{}}
      onChange={(event, newValue) => {
        setValue(newValue);
        setTimeout(() => {
          setValue(null);
        }, 500);
      }}
    >
      <BottomNavigationAction
        label={'email'}
        // to='mailto:kylejohnson92294@gmail.com'
        icon={<Email />}
        component={Link}
      />
      <BottomNavigationAction
        label={'github'}
        icon={<GitHub />}
      ></BottomNavigationAction>
      <BottomNavigationAction
        label={'linkedin'}
        icon={<LinkedIn />}
      ></BottomNavigationAction>
    </BottomNavigation>
  );
}
