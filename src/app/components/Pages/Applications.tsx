import { ReactElement } from 'react';
import { Box } from '@mui/material';
import type { Application as ApplicationData } from 'dbTypes';
import { Application } from './Application';

type Props = {
  data: ApplicationData[];
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
