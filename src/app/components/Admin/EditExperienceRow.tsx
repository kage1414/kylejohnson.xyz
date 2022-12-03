import { ReactElement, useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import {
  Box,
  Paper,
  Button,
  TextField,
  IconButton,
  Input,
  Typography,
  Grid,
  List,
  ListItem,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import { EditExperienceRowItem } from './EditExperienceRowItem';
import { AddExperienceRowItem } from './AddExperienceRowItem';

import type { Experience } from 'dbTypes';

interface Props {
  experience: Experience;
  onSave: () => void;
}

export function EditExperienceRow({ experience, onSave }: Props): ReactElement {
  const { employer, descriptions = [], position, time, id } = experience;
  const [employerInput, setEmployerInput] = useState(employer);
  const [descriptionInput, setDescriptionInput] = useState(descriptions);
  const [positionInput, setPositionInput] = useState(position);
  const [timeInput, setTimeInput] = useState(time);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const onLoad = () => {
    setLoading(true);
    axios({
      method: 'GET',
      url: '/api/description',
      params: { id },
    })
      .then((response) => {
        setLoading(false);
        setDescription(response.data.description);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  const onSaveExperience = () => {
    setIsEditing(false);
  };
  const onCreate = () => {
    setIsCreating(true);
  };
  const onCancelCreate = () => {
    setIsCreating(false);
  };
  useEffect(() => {
    onLoad();
  }, []);
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
            {loading ? (
              <CircularProgress />
            ) : (
              <>
                {isEditing ? (
                  <>
                    <Input
                      value={position}
                      onChange={(val) => {
                        console.log({ val });
                      }}
                    ></Input>
                    <List>
                      {descriptions.map(({ id }) => {
                        return (
                          <EditExperienceRowItem
                            id={id}
                            description={description}
                            onLoad={onLoad}
                            key={id}
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
                      {descriptions.map(({ description, id }) => (
                        <Typography key={id}>{description}</Typography>
                      ))}
                    </Box>
                  </>
                )}
              </>
            )}
          </Grid>
        </Grid>
        {isEditing ? (
          <Grid item>
            <Button onClick={onSaveExperience}>Save</Button>
          </Grid>
        ) : (
          <Grid item>
            <Button
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              edit
            </Button>
          </Grid>
        )}
      </Paper>
    </Box>
  );
}
