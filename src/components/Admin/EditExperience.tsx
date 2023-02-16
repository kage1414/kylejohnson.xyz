import { ReactElement, useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import {
  Experience as ExperienceData,
  Description as DescriptionData,
} from 'dbschema/interfaces';
import { Button } from '@mui/material';
import {
  GridColDef,
  GridValueGetterParams,
  GridRowModel,
  GridColumns,
  GridRowId,
} from '@mui/x-data-grid';
import { EditSection } from './EditSection';

export function EditExperience(): ReactElement {
  const [experience, setExperience] = useState<ExperienceData[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [editingDescriptions, setEditingDescriptions] = useState<
    DescriptionData[]
  >([]);
  const columns: GridColumns = [
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

  const onAddExperience = () => {
    return axios({
      method: 'POST',
      url: '/api/experience',
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

  const onUpdateExperience = useCallback(
    (newRow: GridRowModel): Promise<GridRowModel> => {
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
          return;
        });
    },
    []
  );
  const onDeleteExperience = useCallback((id: GridRowId) => {
    return axios({
      method: 'DELETE',
      url: '/api/experience',
      data: { id },
    })
      .then((response) => {
        return response.data.id;
      })
      .catch((error) => {
        console.error(error);
        return;
      });
  }, []);
  const onUpdateDescription = useCallback(
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
          return;
        });
    },
    []
  );

  const onClose = () => {
    setIsOpen(false);
    getExperienceData();
  };

  useEffect(() => {
    getExperienceData();
  }, []);

  return (
    <EditSection
      loading={loading}
      primaryData={experience}
      secondaryData={editingDescriptions}
      primaryColumns={columns}
      secondaryColumns={descriptionColumns}
      primaryCrud={{
        c: onAddExperience,
        u: onUpdateExperience,
        d: onDeleteExperience,
      }}
      onUpdateRowError={onUpdateRowError}
      onClose={onClose}
      isSecondaryOpen={isOpen}
    />
  );
}
