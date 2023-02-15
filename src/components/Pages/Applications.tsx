import { ReactElement } from 'react';
import { Box } from '@mui/material';
import { Application as ApplicationData } from 'dbschema/interfaces';
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
