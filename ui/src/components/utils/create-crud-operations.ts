import axios from 'axios';

import { CrudOperations } from '../Admin/DataGridContainer';

export default (url: string, resourceName: string): CrudOperations => ({
  c: (id, options = {}) => {
    const { technology_id } = options;
    return axios({
      method: 'POST',
      url,
      data: { id, technology_id },
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        return;
      });
  },
  u: (newRow) => {
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
  },
  d: (id, options = {}) => {
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
  },
});
