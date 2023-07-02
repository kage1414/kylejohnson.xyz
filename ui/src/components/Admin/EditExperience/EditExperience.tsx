import { Button } from '@mui/material';
import { GridColDef, GridColumns, GridRowModel } from '@mui/x-data-grid';
import { DescriptionJSON, ExperienceJSON } from 'apiTypes';
import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';

import {
  onAddExperience,
  onDeleteExperience,
  onUpdateExperience,
} from './primary-crud';
import { EditSection } from '../EditSection';
import {
  onAddDescription,
  onDeleteDescription,
  onUpdateDescription,
} from '../description-crud';

export function EditExperience(): ReactElement {
  const [experience, setExperience] = useState<ExperienceJSON[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState<GridRowModel | null>(null);
  const [editingDescriptions, setEditingDescriptions] = useState<
    DescriptionJSON[]
  >([]);
  const columns: GridColumns = [
    { field: 'employer', headerName: 'Employer', editable: true, width: 300 },
    { field: 'position', editable: true, headerName: 'Position', width: 300 },
    { field: 'time', editable: true, headerName: 'Time', width: 300 },
    {
      field: 'descriptions',
      headerName: 'Description Items',
      width: 150,
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
      width: 75,
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
  const getExperienceJSON = () => {
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
    getExperienceJSON();
  };

  useEffect(() => {
    getExperienceJSON();
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
        c: onAddDescription('experience'),
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
