import { ReactElement, useState, useEffect } from 'react';
import {
  CircularProgress,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
} from '@mui/material';
import axios from 'axios';
import { Experience as ExperienceData } from 'dbTypes';
import { BASE_URL } from '../../constants';
import { Box } from '@mui/material';
import { EditExperienceRow } from './EditExperienceRow';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', editable: false },
  { field: 'active', headerName: 'Active', type: 'boolean', editable: true },
  { field: 'employer', headerName: 'Employer', editable: true },
  { field: 'position', headerName: 'Position' },
  { field: 'time', headerName: 'Time' },
];

export function EditExperience(): ReactElement {
  const [experience, setExperience] = useState<ExperienceData[]>([]);
  const [loading, setLoading] = useState(false);
  const getExperienceData = () => {
    setLoading(true);
    axios.get(BASE_URL + '/api/experience').then(({ data }) => {
      setLoading(false);
      setExperience(data);
    });
  };
  useEffect(() => {
    getExperienceData();
  }, []);

  useEffect(() => {
    console.log({ experience });
  }, [experience]);

  return (
    <Box height={400} width={900}>
      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Employer</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {experience.map(
                ({ id, employer, time, position, active, descriptions }) => (
                  <TableRow key={id}>
                    <TableCell>{employer}</TableCell>
                    <TableCell>{position}</TableCell>
                    <TableCell>{time}</TableCell>
                    <TableCell>{active}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
