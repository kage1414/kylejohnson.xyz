import { Box } from '@mui/material';
import { ReactElement } from 'react';

import { Application as ApplicationJSON } from 'dbschema/interfaces';

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
