import axios from 'axios';

import { CrudOperations } from '../Admin/DataGridContainer';

export const createAdd: (url: string) => CrudOperations['c'] = (url) => () => {
  return axios({
    method: 'POST',
    url,
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

export const createUpdate: (url: string) => CrudOperations['u'] =
  (url) => (newRow) => {
    return axios({
      method: 'PUT',
      url,
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

export const createDelete: (url: string) => CrudOperations['d'] =
  (url: string) =>
  (id, options = {}) => {
    const { technology_id } = options;
    return axios({
      method: 'DELETE',
      url,
      data: { id, technology_id },
    })
      .then((response) => {
        return response.data.id;
      })
      .catch((error) => {
        console.error(error);
        return;
      });
  };
