import { Box, CircularProgress, Dialog } from '@mui/material';
import { DataGrid, GridColDef, GridRowModel } from '@mui/x-data-grid';
import { Dispatch, ReactElement, SetStateAction } from 'react';

import DataGridContainer, { CrudOperations } from './DataGridContainer';

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
  onUpdateRowSecondary?: (
    newRow: GridRowModel,
    oldRow: GridRowModel
  ) => Promise<any>;
  onUpdateRowTertiary?: (
    newRow: GridRowModel,
    oldRow: GridRowModel
  ) => Promise<any>;
  onUpdateRowError: (error: any) => void;
  loading: boolean;
  onClose?: () => void;
  isSecondaryOpen?: GridRowModel | null;
  isTertiaryOpen?: boolean;
}

export function EditSection({
  primaryColumns,
  primaryData,
  primaryCrud,
  setPrimaryData,
  secondaryColumns,
  tertiaryColumns,
  secondaryData,
  setSecondaryData,
  tertiaryData,
  onUpdateRowTertiary,
  onUpdateRowError,
  loading,
  onClose,
  isSecondaryOpen,
  isTertiaryOpen,
  secondaryCrud,
}: Props): ReactElement {
  console.log({
    isSecondaryOpen,
    setSecondaryData,
    secondaryColumns,
    secondaryData,
    secondaryCrud,
  });
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
          {tertiaryColumns && (
            <Dialog open={!!isTertiaryOpen} onClose={onClose} fullWidth>
              <Box height={'75vh'} width={'75vw'}>
                <DataGrid
                  experimentalFeatures={{ newEditingApi: true }}
                  columns={tertiaryColumns}
                  rows={tertiaryData || []}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  processRowUpdate={onUpdateRowTertiary}
                  onProcessRowUpdateError={onUpdateRowError}
                />
              </Box>
            </Dialog>
          )}
        </>
      )}
    </Box>
  );
}
