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

interface Props {
  description: string;
}

export function EditExperienceRowItem({ description }: Props): ReactElement {
  const [isEditing, setIsEditing] = useState(false);
  const onEdit = () => {
    setIsEditing(!isEditing);
  };
  const onSave = () => {};
  return (
    <ListItem>
      <IconButton onClick={onEdit}>
        {isEditing ? <EditOff /> : <EditOutlined />}
      </IconButton>
      <IconButton>
        <DeleteOutline />
      </IconButton>
      <TextareaAutosize disabled={!isEditing} value={description} />
      {isEditing && (
        <IconButton onClick={onSave}>
          <Typography>Save</Typography>
          <Save />
        </IconButton>
      )}
    </ListItem>
  );
}
