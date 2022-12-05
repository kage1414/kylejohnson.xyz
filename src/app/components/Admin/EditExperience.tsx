import { ReactElement, useState, useCallback } from 'react';
import axios from 'axios';
import {
  Experience as ExperienceData,
  Description as DescriptionData,
} from 'dbTypes';
import { Button } from '@mui/material';
import {
  GridColDef,
  GridValueGetterParams,
  GridRowModel,
} from '@mui/x-data-grid';
import { EditSection } from './EditSection';

export function EditExperience(): ReactElement {
  const [experience, setExperience] = useState<ExperienceData[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [editingDescriptions, setEditingDescriptions] = useState<
    DescriptionData[]
  >([]);
  const columns: GridColDef[] = [
    { field: 'employer', headerName: 'Employer', editable: true, width: 300 },
    { field: 'position', editable: true, headerName: 'Position', width: 300 },
    { field: 'time', editable: true, headerName: 'Time', width: 300 },
    {
      field: 'descriptions',
      width: 300,
      renderCell: (params) => {
        return (
          <Button
            onClick={() => {
              setEditingDescriptions(params.value);
              setIsOpen(true);
            }}
          >{`Descriptions`}</Button>
        );
      },
    },
    {
      field: 'priority',
      type: 'number',
      editable: true,
      headerName: 'Priority',
      width: 75,
    },
    {
      field: 'active',
      headerName: 'Active',
      editable: true,
      width: 150,
      type: 'boolean',
    },
  ];
  const descriptionColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', editable: false },
    {
      field: 'description',
      headerName: 'Description',
      editable: true,
      width: 500,
    },
  ];
  const getExperienceData = () => {
    setLoading(true);
    axios
      .get('/api/experience')
      .then(({ data }) => {
        setLoading(false);
        setExperience(data);
      })
      .catch((response) => {
        console.error(response);
        setLoading(false);
      });
  };
  const onUpdateRowError = (error: any) => {
    console.error(error);
  };
  const onRowUpdate = useCallback(
    (newRow: GridRowModel, oldRow: GridRowModel) => {
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
          return oldRow;
        });
    },
    []
  );
  const onDescriptionRowUpdate = useCallback(
    (newRow: GridRowModel, oldRow: GridRowModel) => {
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
          return oldRow;
        });
    },
    []
  );
  const onClose = () => {
    setIsOpen(false);
    getExperienceData();
  };

  return (
    <EditSection
      loading={loading}
      primaryData={experience}
      secondaryData={editingDescriptions}
      primaryColumns={columns}
      secondaryColumns={descriptionColumns}
      fetchData={getExperienceData}
      onUpdateRowPrimary={onRowUpdate}
      onUpdateRowSecondary={onDescriptionRowUpdate}
      onUpdateRowError={onUpdateRowError}
      onClose={onClose}
      isSecondaryOpen={isOpen}
    />
  );
}
