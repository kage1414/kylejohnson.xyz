import { ReactElement, useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { Technology as TechnologyData } from 'dbTypes';
import { GridColDef, GridRowModel } from '@mui/x-data-grid';
import { EditSection } from './EditSection';
import { getTechStacks } from '../../../../dbschema/queries';

export function EditTechnicalSkills(): ReactElement {
  const [experience, setExperience] = useState<TechnologyData[]>([]);
  const [loading, setLoading] = useState(false);
  const [stackOptions, setStackOptions] = useState([]);
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', editable: true, width: 300 },
    {
      field: 'stack',
      type: 'singleSelect',
      valueOptions: stackOptions,
      editable: true,
      headerName: 'Stack',
      width: 300,
    },
  ];
  const getStackOptions = () => {
    axios
      .get('/api/tech_stacks')
      .then(({ data }) => {
        setStackOptions(data.map((stack: any) => stack.stack));
      })
      .catch((response) => {
        console.error(response);
      });
  };
  const getExperienceData = () => {
    setLoading(true);
    axios
      .get('/api/technologies')
      .then(({ data }) => {
        setLoading(false);
        setExperience(data || []);
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

  useEffect(() => {
    getStackOptions();
  }, []);

  return (
    <EditSection
      loading={loading}
      primaryData={experience}
      primaryColumns={columns}
      fetchData={getExperienceData}
      onUpdateRowPrimary={onRowUpdate}
      onUpdateRowError={onUpdateRowError}
    />
  );
}
