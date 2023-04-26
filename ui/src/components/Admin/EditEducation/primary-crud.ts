import { GridRowId, GridRowModel } from '@mui/x-data-grid';
import axios from 'axios';

export const onAddEducation = () => {
  return axios({
    method: 'POST',
    url: '/api/education',
    data: {},
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return;
    });
};

export const onUpdateEducation = (
  newRow: GridRowModel
): Promise<GridRowModel> => {
  return axios({
    method: 'PUT',
    url: '/api/education',
    data: newRow,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return;
    });
};

export const onDeleteEducation = (id: GridRowId) => {
  return axios({
    method: 'DELETE',
    url: '/api/education',
    data: { id },
  })
    .then((response) => {
      return response.data.id;
    })
    .catch((error) => {
      console.error(error);
      return;
    });
};
