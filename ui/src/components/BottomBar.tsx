import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Link } from '@mui/material';
import { ReactElement, useState } from 'react';

export function BottomBar(): ReactElement {
  const [value, setValue] = useState<string | null>(null);
  let pinBottomBar;
  if (typeof window !== 'undefined') {
    pinBottomBar = window.document.body.offsetHeight > window.innerHeight;
  }
  return (
    <BottomNavigation
      showLabels
      sx={{
        bottom: 0,
        position: pinBottomBar ? 'fixed' : 'static',
        width: '100%',
      }}
      value={value}
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
