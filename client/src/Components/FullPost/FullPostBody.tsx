import { ReactElement } from 'react';
import { Box, Paper, List, ListItemText } from '@mui/material';

interface Props {
  body: Array<string>;
}

export function FullPostBody({ body }: Props): ReactElement {
  return (
    <Box>
      <Paper variant='outlined'>
        <List sx={{ marginLeft: 1 }}>
          {body.map((text: string, idx: number) => (
            <ListItemText key={text + idx}>{text}</ListItemText>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
