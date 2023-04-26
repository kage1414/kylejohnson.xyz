import axios from 'axios';

import { CrudOperations } from '../DataGridContainer';

export const onAddTechnology: CrudOperations['c'] = () => {
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

export const onUpdateTechnology: CrudOperations['u'] = (newRow) => {
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

export const onDeleteTechnology: CrudOperations['d'] = (id) => {
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
