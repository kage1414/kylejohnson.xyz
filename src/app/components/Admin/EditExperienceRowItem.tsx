import { ReactElement, useState, useEffect } from 'react';
import axios from 'axios';
import {
  IconButton,
  Input,
  Typography,
  Grid,
  Divider,
  ListItem,
  ListItemText,
  TextareaAutosize,
} from '@mui/material';
import {
  Clear,
  DeleteOutline,
  EditOutlined,
  Save,
  EditOff,
} from '@mui/icons-material';

import type { Description } from 'dbTypes';

interface Props {
  id: string;
  description: string;
  onLoad: () => void;
}

export function EditExperienceRowItem({
  id,
  description,
  onLoad,
}: Props): ReactElement {
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [descriptionInput, setDescriptionInput] = useState(description);
  const onEdit = () => {
    setIsEditing(!isEditing);
  };

  const onSave = () => {
    setLoading(true);
    setIsEditing(false);
    axios({
      method: 'PUT',
      url: '/api/experience/description',
      data: {
        description: descriptionInput,
        id,
      },
    }).then((response) => {
      setLoading(false);
      onLoad();
    });
  };

  return (
    <ListItem>
      <TextareaAutosize
        disabled={!isEditing || loading}
        value={descriptionInput}
        onChange={(e) => {
          setDescriptionInput(e.target.value);
        }}
      />
      <IconButton onClick={onEdit}>
        {isEditing ? <EditOff /> : <EditOutlined />}
      </IconButton>
      <IconButton>
        <DeleteOutline />
      </IconButton>
      {isEditing && (
        <IconButton onClick={onSave}>
          <Typography>Save</Typography>
          <Save />
        </IconButton>
      )}
    </ListItem>
  );
}
