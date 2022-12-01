import { ReactElement, useEffect } from 'react';
import { Box } from '@mui/material';
import { FullPost } from '../FullPost';
import type { ApplicationModel } from '@/server/db/sequelize/sequelize';

type Props = {
  data: ApplicationModel;
};

export function Application({ data: { id, name, url } }: Props): ReactElement {
  return (
    <Box key={`${id} application`}>
      <FullPost body={[]} title={name || ''} url={url} />
    </Box>
  );
}
