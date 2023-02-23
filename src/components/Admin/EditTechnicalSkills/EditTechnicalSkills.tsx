import { GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';

import { Technology as TechnologyData } from 'dbschema/interfaces';

import {
  onAddTechnology,
  onDeleteTechnology,
  onUpdateTechnology,
} from './primary-crud';
import { EditSection } from '../EditSection';

export function EditTechnicalSkills(): ReactElement {
  const [technologies, setTechnologies] = useState<TechnologyData[]>([]);
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
    {
      field: 'priority',
      editable: true,
      headerName: 'Priority',
      width: 75,
      type: 'number',
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
  const getTechnicalSkillsData = () => {
    setLoading(true);
    axios
      .get('/api/technologies')
      .then(({ data }) => {
        setLoading(false);
        setTechnologies(data || []);
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
    getStackOptions();
    getTechnicalSkillsData();
  }, []);

  return (
    <EditSection
      loading={loading}
      primaryData={technologies}
      primaryColumns={columns}
      primaryCrud={{
        c: onAddTechnology,
        u: onUpdateTechnology,
        d: onDeleteTechnology,
      }}
      setPrimaryData={setTechnologies}
      onUpdateRowError={onUpdateRowError}
    />
  );
}
