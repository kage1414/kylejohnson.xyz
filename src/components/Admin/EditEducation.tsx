import { ReactElement, useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { Technology as TechnologyData } from 'dbschema/interfaces';
import { GridColDef, GridRowModel } from '@mui/x-data-grid';
import { EditSection } from './EditSection';

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
      .get('/api/education')
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
  const onRowUpdate = useCallback(
    (newRow: GridRowModel, oldRow: GridRowModel) => {
      return axios({
        method: 'PUT',
        url: '/api/education',
        data: newRow,
      })
        .then(({ data: responseData }) => {
          return responseData;
        })
        .catch((error) => {
          console.error(error);
          return oldRow;
        });
    },
    []
  );

  useEffect(() => {
    getEducationData();
  }, []);

  return (
    <EditSection
      loading={loading}
      primaryData={education}
      primaryColumns={columns}
      onUpdateRowPrimary={onRowUpdate}
      onUpdateRowError={onUpdateRowError}
    />
  );
}
