import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Paper,
  Typography,
} from '@mui/material';
import { ReactElement } from 'react';

import { Description, Technology } from 'dbschema/interfaces';

interface Props {
  descriptions?: Description[];
  technologies?: Technology[];
}

interface TechnologiesListProps {
  technologies: Technology[];
}

const TechnologiesList = ({
  technologies,
}: TechnologiesListProps): ReactElement => {
  return (
    <>
      <Divider />
      <ListItemText>{'Technologies Used:'}</ListItemText>
      {technologies.map(({ id, name }) => (
        <ListItemText key={id}>{name}</ListItemText>
      ))}
    </>
  );
};

export function FullPostBody({
  descriptions,
  technologies,
}: Props): ReactElement {
  return (
    <Box>
      <Paper variant='outlined'>
        <List sx={{ marginLeft: 1, marginRight: 1 }}>
          {descriptions &&
            descriptions.map(({ description, id }) => (
              <ListItemText key={id}>{description}</ListItemText>
            ))}
          {technologies && <TechnologiesList technologies={technologies} />}
        </List>
      </Paper>
    </Box>
  );
}
