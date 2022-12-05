import { ReactElement, useState, useCallback } from 'react';
import axios from 'axios';
import {
  Application as ApplicationData,
  Description as DescriptionData,
  Technology as TechnologyData,
} from 'dbTypes';
import { Button } from '@mui/material';
import {
  GridColDef,
  GridValueGetterParams,
  GridRowModel,
} from '@mui/x-data-grid';
import { EditSection } from './EditSection';

export function EditApplication(): ReactElement {
  const [application, setApplication] = useState<ApplicationData[]>([]);
  const [loading, setLoading] = useState(false);
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);
  const [isTechnologyModalOpen, setIsTechnologyModalOpen] = useState(false);
  const [editingDescriptions, setEditingDescriptions] = useState<
    DescriptionData[]
  >([]);
  const [editingTechnologies, setEditingTechnologies] = useState<
    TechnologyData[]
  >([]);
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', editable: true, width: 200 },
    { field: 'url', headerName: 'Url', editable: true, width: 300 },
    {
      field: 'descriptions',
      headerName: 'Descriptions',
      width: 175,
      renderCell: (params) => {
        return (
          <Button
            onClick={() => {
              setEditingDescriptions(params.value);
              setIsDescriptionModalOpen(true);
            }}
          >{`Descriptions`}</Button>
        );
      },
    },
    {
      field: 'technologies',
      headerName: 'Technologies',
      width: 175,
      renderCell: (params) => {
        return (
          <Button
            onClick={() => {
              setEditingTechnologies(params.value);
              setIsTechnologyModalOpen(true);
            }}
          >{`Technologies`}</Button>
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
      type: 'boolean',
      editable: true,
      valueGetter: (params: GridValueGetterParams) =>
        params.row.active === null ? true : params.row.active,
    },
  ];
  const descriptionColumns: GridColDef[] = [
    {
      field: 'description',
      headerName: 'Description',
      editable: true,
      width: 500,
    },
    { field: 'priority', headerName: 'Priority', editable: true },
  ];
  const technologyColumns: GridColDef[] = [
    { field: 'name', headerName: 'Name', editable: true, width: 150 },
    { field: 'url', headerName: 'Url', editable: true, width: 300 },
    { field: 'priority', headerName: 'Priority', editable: true },
  ];
  const getApplicationData = () => {
    setLoading(true);
    axios
      .get('/api/applications')
      .then(({ data }) => {
        setLoading(false);
        setApplication(data);
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
        url: '/api/application',
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
  const onTechnologyRowUpdate = useCallback(
    (newRow: GridRowModel, oldRow: GridRowModel) => {
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
          return oldRow;
        });
    },
    []
  );
  const onClose = () => {
    setIsDescriptionModalOpen(false);
    setIsTechnologyModalOpen(false);
    getApplicationData();
  };

  return (
    <EditSection
      loading={loading}
      fetchData={getApplicationData}
      primaryData={application}
      primaryColumns={columns}
      onUpdateRowPrimary={onRowUpdate}
      secondaryData={editingDescriptions}
      secondaryColumns={descriptionColumns}
      onUpdateRowSecondary={onDescriptionRowUpdate}
      isSecondaryOpen={isDescriptionModalOpen}
      tertiaryData={editingTechnologies}
      tertiaryColumns={technologyColumns}
      onUpdateRowTertiary={onTechnologyRowUpdate}
      isTertiaryOpen={isTechnologyModalOpen}
      onUpdateRowError={onUpdateRowError}
      onClose={onClose}
    />
  );
}
