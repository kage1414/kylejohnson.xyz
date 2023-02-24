import { GridRowId, GridRowModel } from '@mui/x-data-grid';
import axios from 'axios';

export const onAddApplicationTechnology = (id: string, name?: string) => {
  return axios({
    method: 'POST',
    url: '/api/application_technology',
    data: { name, id },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return;
    });
};

export const onUpdateApplicationTechnology = (
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

export const onDeleteApplicationTechnology = (
  id: GridRowId,
  technology_id?: GridRowId
) => {
  return axios({
    method: 'DELETE',
    url: '/api/application_technology',
    data: { technology_id, id },
  })
    .then((response) => {
      return response.data.id;
    })
    .catch((error) => {
      console.error(error);
      return;
    });
};
