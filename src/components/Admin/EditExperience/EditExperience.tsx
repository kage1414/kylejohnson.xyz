import { Button } from '@mui/material';
import { GridColDef, GridColumns, GridRowModel } from '@mui/x-data-grid';
import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';

import {
  Description as DescriptionData,
  Experience as ExperienceData,
} from 'dbschema/interfaces';

import {
  onAddExperience,
  onDeleteExperience,
  onUpdateExperience,
} from './primary-crud';
import {
  onAddDescription,
  onDeleteDescription,
  onUpdateDescription,
} from './secondary-crud';
import { EditSection } from '../EditSection';

export function EditExperience(): ReactElement {
  const [experience, setExperience] = useState<ExperienceData[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState<GridRowModel | null>(null);
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
              setIsOpen(params.row);
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

  const onClose = () => {
    setIsOpen(null);
    getExperienceData();
  };

  useEffect(() => {
    getExperienceData();
  }, []);

  return (
    <EditSection
      loading={loading}
      primaryColumns={columns}
      primaryCrud={{
        c: onAddExperience,
        u: onUpdateExperience,
        d: onDeleteExperience,
      }}
      primaryData={experience}
      setPrimaryData={setExperience}
      secondaryColumns={descriptionColumns}
      secondaryCrud={{
        c: onAddDescription,
        u: onUpdateDescription,
        d: onDeleteDescription,
      }}
      secondaryData={editingDescriptions}
      setSecondaryData={setEditingDescriptions}
      onUpdateRowError={onUpdateRowError}
      onClose={onClose}
      isSecondaryOpen={isOpen}
    />
  );
}
