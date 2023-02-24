import { GridRowId, GridRowModel } from '@mui/x-data-grid';
import axios from 'axios';

export const onAddExperience = () => {
  return axios({
    method: 'POST',
    url: '/api/experience',
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

export const onUpdateExperience = (
  newRow: GridRowModel
): Promise<GridRowModel> => {
  return axios({
    method: 'PUT',
    url: '/api/experience',
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

export const onDeleteExperience = (id: GridRowId) => {
  return axios({
    method: 'DELETE',
    url: '/api/experience',
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
