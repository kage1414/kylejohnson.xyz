import { Box, Divider, List, ListItemText, Paper } from '@mui/material';
import { DescriptionJSON, TechnologyJSON } from 'apiTypes';
import { ReactElement } from 'react';

interface Props {
  descriptions?: DescriptionJSON[];
  technologies?: TechnologyJSON[];
}

interface TechnologiesListProps {
  technologies: TechnologyJSON[];
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
