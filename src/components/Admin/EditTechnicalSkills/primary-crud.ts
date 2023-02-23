import { GridRowId, GridRowModel } from '@mui/x-data-grid';
import axios from 'axios';

export const onAddTechnicalSkill = () => {
  return axios({
    method: 'POST',
    url: '/api/technical_skills',
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

export const onUpdateTechnicalSkill = (
  newRow: GridRowModel
): Promise<GridRowModel> => {
  return axios({
    method: 'PUT',
    url: '/api/technical_skills',
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

export const onDeleteTechnicalSkill = (id: GridRowId) => {
  return axios({
    method: 'DELETE',
    url: '/api/technical_skills',
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
