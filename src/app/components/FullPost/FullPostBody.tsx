import { ReactElement } from 'react';
import { Box, Paper, List, ListItemText } from '@mui/material';

type Description = {
  description: string;
  id: string;
};

export type Descriptions = Description[];
interface Props {
  body: Descriptions;
}

export function FullPostBody({ body }: Props): ReactElement {
  return (
    <Box>
      <Paper variant='outlined'>
        <List sx={{ marginLeft: 1 }}>
          {body.map(({ description, id }) => (
            <ListItemText key={id}>{description}</ListItemText>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
