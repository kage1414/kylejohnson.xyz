import { FC, ReactElement, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Link } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

export const BottomBar: FC = (): ReactElement => {
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

      <BottomNavigationAction label={'github'} icon={<GitHub />}>
        <Link href={'https://github.com/kage1414'}>github</Link>
      </BottomNavigationAction>
      <BottomNavigationAction label={'linkedin'} icon={<LinkedIn />}>
        <Link href={'https://www.linkedin.com/in/kylejohnson922/'}>
          linkedin
        </Link>
      </BottomNavigationAction>
    </BottomNavigation>
  );
};
