import { ReactElement } from 'react';
import { Box, Paper, List, ListItemText } from '@mui/material';
import { Description, Technology } from 'dbschema/interfaces';

interface Props {
  descriptions?: Description[];
  technologies?: Technology[];
}

export function FullPostBody({
  descriptions,
  technologies,
}: Props): ReactElement {
  return (
    <Box>
      <Paper variant='outlined'>
        <List sx={{ marginLeft: 1 }}>
          {descriptions &&
            descriptions.map(({ description, id }) => (
              <ListItemText key={id}>{description}</ListItemText>
            ))}
          {technologies && <ListItemText>{'Technologies Used:'}</ListItemText>}
          {technologies &&
            technologies.map(({ name, id }) => (
              <ListItemText key={id}>{name}</ListItemText>
            ))}
        </List>
      </Paper>
    </Box>
  );
}
