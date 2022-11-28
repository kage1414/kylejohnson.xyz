import { ReactElement, useState } from 'react';
import {
  Box,
  Paper,
  Button,
  TextField,
  IconButton,
  Input,
  Typography,
  Grid,
  Divider,
  List,
  ListItem,
} from '@mui/material';
import {
  Clear,
  DeleteOutline,
  EditOutlined,
  Save,
  Add,
} from '@mui/icons-material';
import { EditExperienceRowItem } from './EditExperienceRowItem';
import { AddExperienceRowItem } from './AddExperienceRowItem';

import type { Experience } from '../Pages';

interface Props {
  experience: Experience;
}

export function EditExperienceRow({ experience }: Props): ReactElement {
  const { employer, descriptions = [], position, time } = experience;
  const [employerInput, setEmployerInput] = useState(employer);
  const [descriptionInput, setDescriptionInput] = useState(descriptions);
  const [positionInput, setPositionInput] = useState(position);
  const [timeInput, setTimeInput] = useState(time);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const onSave = () => {
    setIsEditing(false);
  };
  const onCreate = () => {
    setIsCreating(true);
  };
  const onCancelCreate = () => {
    setIsCreating(false);
  };
  console.log(JSON.stringify(descriptions));
  return (
    <Box
      sx={{
        marginBottom: 2,
      }}
    >
      <Paper
        sx={{
          backgroundColor: 'rgb(240, 243, 252)',
          padding: 2,
        }}
        elevation={0}
      >
        <Grid container>
          <Grid item>
            <Button
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              edit
            </Button>
          </Grid>
          <Grid item>
            {isEditing ? (
              <>
                <Input
                  value={position}
                  onChange={(val) => {
                    console.log({ val });
                  }}
                ></Input>
                <List>
                  {descriptions.map((desc, i) => {
                    return (
                      <EditExperienceRowItem
                        description={desc}
                        key={`edit ${desc} ${i}`}
                      />
                    );
                  })}
                  <ListItem>
                    {isCreating ? (
                      <AddExperienceRowItem onCancel={onCancelCreate} />
                    ) : (
                      <IconButton onClick={onCreate}>
                        <Add />
                      </IconButton>
                    )}
                  </ListItem>
                </List>
              </>
            ) : (
              <>
                <Typography>{position}</Typography>
                <Box>
                  {descriptions.map((desc, i) => (
                    <Typography key={`show ${desc} ${i}`}>
                      {desc.description}
                    </Typography>
                  ))}
                </Box>
              </>
            )}
          </Grid>
        </Grid>
        {isEditing && (
          <Grid item>
            <Button onClick={onSave}>Save</Button>
          </Grid>
        )}
      </Paper>
    </Box>
  );
}
