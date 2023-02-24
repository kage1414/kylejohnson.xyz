import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { GridColDef, GridRowModel } from '@mui/x-data-grid';
import { Dispatch, ReactElement, SetStateAction } from 'react';

import { Technology as TechnologyData } from 'dbschema/interfaces';

import DataGridContainer, { CrudOperations } from './DataGridContainer';

interface TechnologiesContainerProps {
  technologies: TechnologyData[];
  technologyOptions: TechnologyData[];
  tertiaryCrud: CrudOperations;
  parentId?: GridRowModel | null;
  setTechnologyData?: Dispatch<SetStateAction<any[]>>;
}

function TechnologiesContainer({
  technologies,
  technologyOptions,
  tertiaryCrud: { c, d },
  parentId,
  setTechnologyData,
}: TechnologiesContainerProps): ReactElement {
  const selectedTechnologyIds = technologies.map(({ id }) => id);

  return (
    <List>
      {technologyOptions.map(({ name, id }) => (
        <ListItem alignItems='flex-start' key={id}>
          <Button
            variant='outlined'
            color='secondary'
            disabled={selectedTechnologyIds.includes(id)}
            onClick={(e) => {
              e.preventDefault();
              if (parentId && name && setTechnologyData) {
                c(parentId.id, name).then((response) => {
                  setTechnologyData((oldState) => {
                    const newState = oldState;
                    delete response.stack;
                    newState.push(response);
                    return newState;
                  });
                });
              }
            }}
          >
            Add
          </Button>
          <Button
            color='primary'
            disabled={!selectedTechnologyIds.includes(id)}
          >
            Remove
          </Button>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  );
}

interface Props {
  primaryColumns: GridColDef[];
  primaryData: any[];
  primaryCrud: CrudOperations;
  setPrimaryData: Dispatch<SetStateAction<any[]>>;
  secondaryColumns?: GridColDef[];
  secondaryData?: any[];
  setSecondaryData?: Dispatch<SetStateAction<any[]>>;
  secondaryCrud?: CrudOperations;
  tertiaryColumns?: GridColDef[];
  tertiaryData?: any[];
  tertiaryCrud?: CrudOperations;
  setTertiaryData?: Dispatch<SetStateAction<any[]>>;
  onUpdateRowSecondary?: (
    newRow: GridRowModel,
    oldRow: GridRowModel
  ) => Promise<any>;
  onUpdateRowError: (error: any) => void;
  loading: boolean;
  onClose?: () => void;
  isSecondaryOpen?: GridRowModel | null;
  isTertiaryOpen?: GridRowModel | null;
  tertiaryOptions?: TechnologyData[];
}

export function EditSection({
  primaryColumns,
  primaryData,
  primaryCrud,
  setPrimaryData,
  secondaryColumns,
  secondaryCrud,
  secondaryData,
  setSecondaryData,
  tertiaryColumns,
  tertiaryData,
  tertiaryCrud,
  setTertiaryData,
  isTertiaryOpen,
  onUpdateRowError,
  loading,
  onClose,
  isSecondaryOpen,
  tertiaryOptions,
}: Props): ReactElement {
  return (
    <Box height={'91vh'} width={'93vw'}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <DataGridContainer
            rows={primaryData}
            setRows={setPrimaryData}
            columns={primaryColumns}
            crud={primaryCrud}
          />
          {setSecondaryData &&
            secondaryColumns &&
            secondaryData &&
            secondaryCrud && (
              <Dialog
                open={!!isSecondaryOpen}
                onClose={onClose}
                fullWidth
                maxWidth={'xl'}
              >
                <Box height={'100vh'}>
                  <DataGridContainer
                    rows={secondaryData}
                    setRows={setSecondaryData}
                    columns={secondaryColumns}
                    crud={secondaryCrud}
                    parentRow={isSecondaryOpen}
                  />
                </Box>
              </Dialog>
            )}
          {/* For assigning technologies ONLY. Prefer secondary */}
          {tertiaryOptions &&
            tertiaryData &&
            tertiaryCrud &&
            setTertiaryData && (
              <Dialog
                open={!!isTertiaryOpen}
                onClose={onClose}
                fullWidth
                maxWidth='sm'
              >
                <Box height={'100vh'}>
                  <TechnologiesContainer
                    technologies={tertiaryData}
                    technologyOptions={tertiaryOptions}
                    tertiaryCrud={tertiaryCrud}
                    parentId={isTertiaryOpen}
                    setTechnologyData={setTertiaryData}
                  />
                </Box>
              </Dialog>
            )}
        </>
      )}
    </Box>
  );
}
