import { GridRowId, GridRowModel } from '@mui/x-data-grid';
import axios from 'axios';

export const onUpdateDescription = (newRow: GridRowModel) => {
  return axios({
    method: 'PUT',
    url: '/api/description',
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

type Link = 'experience' | 'application';

export const onAddDescription = (link: Link) => {
  return (id: string) => {
    return axios({
      method: 'POST',
      url: '/api/description',
      data: { link, record_id: id },
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        return;
      });
  };
};

export const onDeleteDescription = (id: GridRowId) => {
  return axios({
    method: 'DELETE',
    url: '/api/description',
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
