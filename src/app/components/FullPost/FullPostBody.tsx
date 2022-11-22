import { ReactElement } from 'react';
import { Box, Paper, List, ListItemText } from '@mui/material';

type Description = {
  description: string;
  id: string;
};

export type Body = Description[];
interface Props {
  body: Body;
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
