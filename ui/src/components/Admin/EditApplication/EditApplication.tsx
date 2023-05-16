import { Button } from '@mui/material';
import {
  GridColDef,
  GridRowModel,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';

import {
  Application as ApplicationJSON,
  Description as DescriptionData,
  Technology as TechnologyData,
} from 'dbschema/interfaces';

import {
  onAddApplication,
  onDeleteApplication,
  onUpdateApplication,
} from './primary-crud';
import {
  onAddApplicationTechnology,
  onDeleteApplicationTechnology,
  onUpdateApplicationTechnology,
} from './tertiary-crud';
import { EditSection } from '../EditSection';
import {
  onAddDescription,
  onDeleteDescription,
  onUpdateDescription,
} from '../description-crud';

export function EditApplication(): ReactElement {
  const [application, setApplication] = useState<ApplicationJSON[]>([]);
  const [loading, setLoading] = useState(false);
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] =
    useState<GridRowModel | null>(null);
  const [isTechnologyModalOpen, setIsTechnologyModalOpen] =
    useState<GridRowModel | null>(null);
  const [editingDescriptions, setEditingDescriptions] = useState<
    DescriptionData[]
  >([]);
  const [editingTechnologies, setEditingTechnologies] = useState<
    TechnologyData[]
  >([]);
  const [technologyOptions, setTechnologyOptions] = useState([]);
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', editable: true, width: 200 },
    { field: 'url', headerName: 'Url', editable: true, width: 300 },
    {
      field: 'descriptions',
      headerName: 'Descriptions',
      width: 150,
      renderCell: (params) => {
        return (
          <Button
            onClick={() => {
              setEditingDescriptions(params.value);
              setIsDescriptionModalOpen(params.row);
            }}
          >{`Descriptions`}</Button>
        );
      },
    },
    {
      field: 'technologies',
      headerName: 'Technologies',
      width: 150,
      renderCell: (params) => {
        return (
          <Button
            onClick={() => {
              setEditingTechnologies(params.value);
              setIsTechnologyModalOpen(params.row);
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
      width: 75,
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
  const technologyColumns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      editable: true,
      width: 150,
      type: 'singleSelect',
      valueOptions: technologyOptions,
    },
    { field: 'url', headerName: 'Url', editable: false, width: 300 },
    { field: 'priority', headerName: 'Priority', editable: true },
  ];
  const getApplicationJSON = () => {
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
  const getTechnologyOptions = () => {
    axios({
      method: 'GET',
      url: '/api/technologies',
    }).then(({ data }) => {
      setTechnologyOptions(data);
    });
  };
  const onUpdateRowError = (error: any) => {
    console.error(error);
  };
  const onClose = () => {
    setIsDescriptionModalOpen(null);
    setIsTechnologyModalOpen(null);
    getApplicationJSON();
  };

  useEffect(() => {
    getApplicationJSON();
    getTechnologyOptions();
  }, []);

  return (
    <EditSection
      loading={loading}
      primaryData={application}
      primaryColumns={columns}
      primaryCrud={{
        c: onAddApplication,
        u: onUpdateApplication,
        d: onDeleteApplication,
      }}
      setPrimaryData={setApplication}
      secondaryData={editingDescriptions}
      secondaryColumns={descriptionColumns}
      secondaryCrud={{
        c: onAddDescription('application'),
        u: onUpdateDescription,
        d: onDeleteDescription,
      }}
      isSecondaryOpen={isDescriptionModalOpen}
      setSecondaryData={setEditingDescriptions}
      tertiaryData={editingTechnologies}
      tertiaryColumns={technologyColumns}
      isTertiaryOpen={isTechnologyModalOpen}
      setTertiaryData={setEditingTechnologies}
      tertiaryCrud={{
        c: onAddApplicationTechnology,
        u: onUpdateApplicationTechnology,
        d: onDeleteApplicationTechnology,
      }}
      tertiaryOptions={technologyOptions}
      onUpdateRowError={onUpdateRowError}
      onClose={onClose}
    />
  );
}
