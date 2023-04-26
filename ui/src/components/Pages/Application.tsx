import { Box } from '@mui/material';
import { ReactElement } from 'react';

import { Application as ApplicationData } from 'dbschema/interfaces';

import { FullPost } from '../FullPost';

type Props = {
  data: ApplicationData;
};

export function Application({
  data: { id, name, url, descriptions, technologies },
}: Props): ReactElement {
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
