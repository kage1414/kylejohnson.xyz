import { GridColDef } from '@mui/x-data-grid';
import { TechnologyJSON } from 'apiTypes';
import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';

import {
  onAddEducation,
  onDeleteEducation,
  onUpdateEducation,
} from './primary-crud';
import { EditSection } from '../EditSection';

export function EditEducation(): ReactElement {
  const [education, setEducation] = useState<TechnologyJSON[]>([]);
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
      width: 75,
      type: 'boolean',
    },
  ];
  const getEducationJSON = () => {
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
    getEducationJSON();
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
