import { GridRowId, GridRowModel } from '@mui/x-data-grid';
import axios from 'axios';

import { CrudOperations } from '../DataGridContainer';

export const onAddApplicationTechnology: CrudOperations['c'] = (id, name) => {
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

export const onUpdateApplicationTechnology: CrudOperations['u'] = (newRow) => {
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

export const onDeleteApplicationTechnology: CrudOperations['d'] = (
  id,
  options = {}
) => {
  const { technology_id } = options;
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
