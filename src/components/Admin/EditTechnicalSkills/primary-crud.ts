import { GridRowId, GridRowModel } from '@mui/x-data-grid';
import axios from 'axios';

export const onAddTechnology = () => {
  return axios({
    method: 'POST',
    url: '/api/technology',
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

export const onUpdateTechnology = (
  newRow: GridRowModel
): Promise<GridRowModel> => {
  return axios({
    method: 'PUT',
    url: '/api/technology',
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

export const onDeleteTechnology = (id: GridRowId) => {
  return axios({
    method: 'DELETE',
    url: '/api/technology',
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
