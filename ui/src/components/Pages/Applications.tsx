import { Box } from '@mui/material';
import { ApplicationJSON } from 'apiTypes';
import { ReactElement } from 'react';

import { Application } from './Application';

type Props = {
  data: ApplicationJSON[];
  display: boolean;
};

export function Applications({ data = [], display }: Props): ReactElement {
  return (
    <>
      {display && (
        <Box>
          {data.map((data) => {
            return <Application key={data.id} data={data} />;
          })}
        </Box>
      )}
    </>
  );
}
