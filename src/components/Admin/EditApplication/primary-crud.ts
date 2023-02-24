import { GridRowId, GridRowModel } from '@mui/x-data-grid';
import axios from 'axios';

export const onAddApplication = () => {
  return axios({
    method: 'POST',
    url: '/api/application',
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

export const onUpdateApplication = (
  newRow: GridRowModel
): Promise<GridRowModel> => {
  return axios({
    method: 'PUT',
    url: '/api/application',
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

export const onDeleteApplication = (id: GridRowId) => {
  return axios({
    method: 'DELETE',
    url: '/api/application',
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
