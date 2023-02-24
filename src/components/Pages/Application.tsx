import { Box } from '@mui/material';
import { ReactElement, useEffect } from 'react';

import { Application as ApplicationData } from 'dbschema/interfaces';

import { FullPost } from '../FullPost';

type Props = {
  data: ApplicationData;
};

export function Application({
  data: { id, name, url, descriptions, technologies },
}: Props): ReactElement {
  const body = [
    ...descriptions.map((item) => item.description as string),
    'Technologies used:',
    ...technologies.map((item) => item.name as string),
  ];
  return (
    <Box key={id}>
      <FullPost
        descriptions={descriptions}
        technologies={technologies}
        title={name || ''}
        url={url || undefined}
      />
    </Box>
  );
}
