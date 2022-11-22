import { ReactElement, useState, ChangeEvent } from 'react';
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
  onCancel?: () => void;
}

export function AddExperienceRowItem({ onCancel }: Props): ReactElement {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState('');
  const onChangeText = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };
  const onSave = () => {
    // this is where an api call happens and the data should be reloaded
  };
  return (
    <ListItem>
      <IconButton onClick={onCancel}>
        <DeleteOutline />
      </IconButton>
      <TextField value={value} onChange={onChangeText} />
      <IconButton onClick={onSave}>
        <Typography>Save</Typography>
        <Save />
      </IconButton>
    </ListItem>
  );
}
