import { Box } from '@mui/material';
import { ReactElement } from 'react';

import { ApplicationJSON } from '../../../apiTypes';
import { FullPost } from '../FullPost';

type Props = {
  data: ApplicationJSON;
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
