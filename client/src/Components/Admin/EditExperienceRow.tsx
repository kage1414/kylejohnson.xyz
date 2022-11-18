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
} from '@mui/material';
import { Clear } from '@mui/icons-material';

import type { Experience } from '../Pages';

interface Props {
  experience: Experience;
}

export function EditExperienceRow({ experience }: Props): ReactElement {
  const { employer, description, position, time } = experience;
  const [employerInput, setEmployerInput] = useState(employer);
  const [descriptionInput, setDescriptionInput] = useState(description);
  const [positionInput, setPositionInput] = useState(position);
  const [timeInput, setTimeInput] = useState(time);
  const [isEditing, setIsEditing] = useState(false);
  // const onChange = () => {
  //   axios.post('/api/experience');
  // };
  console.log(JSON.stringify(description));
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
                <Grid container flexDirection='column'>
                  {description.map((desc, i) => {
                    return (
                      <Grid item key={`edit ${desc} ${i}`}>
                        <IconButton>
                          <Clear />
                        </IconButton>
                        <TextField value={desc} />
                      </Grid>
                    );
                  })}
                </Grid>
              </>
            ) : (
              <>
                <Typography>{position}</Typography>
                <Box>
                  {description.map((desc, i) => (
                    <Typography key={`show ${desc} ${i}`}>{desc}</Typography>
                  ))}
                </Box>
              </>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
