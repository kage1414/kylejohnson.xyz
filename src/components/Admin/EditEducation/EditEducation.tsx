import { GridColDef, GridRowModel } from '@mui/x-data-grid';
import axios from 'axios';
import { ReactElement, useCallback, useEffect, useState } from 'react';

import { Technology as TechnologyData } from 'dbschema/interfaces';

import {
  onAddEducation,
  onDeleteEducation,
  onUpdateEducation,
} from './primary-crud';
import { EditSection } from '../EditSection';

export function EditEducation(): ReactElement {
  const [education, setEducation] = useState<TechnologyData[]>([]);
  const [loading, setLoading] = useState(false);
  const columns: GridColDef[] = [
    { field: 'school', headerName: 'School', editable: true, width: 150 },
    { field: 'time', headerName: 'Time', editable: true, width: 150 },
    {
      field: 'certificate',
      headerName: 'Certificate',
      editable: true,
      width: 300,
    },
    { field: 'degree', headerName: 'Degree', editable: true, width: 200 },
    {
      field: 'priority',
      editable: true,
      headerName: 'Priority',
      width: 75,
      type: 'number',
    },
    {
      field: 'active',
      headerName: 'Active',
      editable: true,
      width: 150,
      type: 'boolean',
    },
  ];
  const getEducationData = () => {
    setLoading(true);
    axios
      .get('/api/educations')
      .then(({ data }) => {
        setLoading(false);
        setEducation(data || []);
      })
      .catch((response) => {
        console.error(response);
        setLoading(false);
      });
  };
  const onUpdateRowError = (error: any) => {
    console.error(error);
  };

  useEffect(() => {
    getEducationData();
  }, []);

  return (
    <EditSection
      loading={loading}
      primaryData={education}
      primaryColumns={columns}
      primaryCrud={{
        c: onAddEducation,
        u: onUpdateEducation,
        d: onDeleteEducation,
      }}
      setPrimaryData={setEducation}
      onUpdateRowError={onUpdateRowError}
    />
  );
}
