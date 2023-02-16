import { ReactElement, useCallback, useEffect } from 'react';
import { Button, CircularProgress, Paper, Grid } from '@mui/material';
import { Box, Dialog } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridRowModel,
  GridToolbarContainer,
  GridRowModes,
  GridRowsProp,
  GridRowModesModel,
  GridRowId,
} from '@mui/x-data-grid';
import { Experience, Description, Technology } from 'dbschema/interfaces';
import DataGridContainer, { CrudOperations } from './DataGridContainer';

interface Props {
  primaryColumns: GridColDef[];
  primaryData: any[];
  primaryCrud: CrudOperations;
  secondaryColumns?: GridColDef[];
  secondaryData?: any[];
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
  isSecondaryOpen?: boolean;
  isTertiaryOpen?: boolean;
}

function EditModalFooter(): ReactElement {
  return (
    <Grid container direction={'row-reverse'}>
      <Grid>
        <Button color='info'>Cancel</Button>
      </Grid>
      <Grid item>
        <Button color='primary'>Add</Button>
      </Grid>
    </Grid>
  );
}

export function EditSection({
  primaryColumns,
  primaryData,
  primaryCrud,
  secondaryColumns,
  tertiaryColumns,
  secondaryData,
  tertiaryData,
  onUpdateRowSecondary,
  onUpdateRowTertiary,
  onUpdateRowError,
  loading,
  onClose,
  isSecondaryOpen,
  isTertiaryOpen,
  secondaryCrud,
}: Props): ReactElement {
  return (
    <Box height={'75vh'} width={'85vw'}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <DataGridContainer
            initialRows={primaryData}
            columns={primaryColumns}
            crud={primaryCrud}
          />
          {secondaryColumns && secondaryData && secondaryCrud && (
            <Dialog
              open={!!isSecondaryOpen}
              onClose={onClose}
              fullWidth
              maxWidth={'xl'}
            >
              <Box height={'100vh'}>
                <DataGridContainer
                  initialRows={secondaryData}
                  columns={secondaryColumns}
                  crud={secondaryCrud}
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
