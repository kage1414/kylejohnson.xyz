import { ReactElement, useEffect } from 'react';
import { Box } from '@mui/material';
import { FullPost } from '../FullPost';

type Props = {
  data: any;
};

export function Application({ data: { id, name, url } }: Props): ReactElement {
  return (
    <Box key={`${id} application`}>
      <FullPost body={[]} title={name || ''} url={url} />
    </Box>
  );
}
