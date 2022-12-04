import { ReactElement, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { Box, Dialog } from '@mui/material';
import { DataGrid, GridColDef, GridRowModel } from '@mui/x-data-grid';
import { Experience, Description, Technology } from 'dbTypes';

interface Props {
  primaryColumns: GridColDef[];
  secondaryColumns?: GridColDef[];
  tertiaryColumns?: GridColDef[];
  primaryData: any[];
  secondaryData?: any[];
  tertiaryData?: any[];
  onUpdateRowPrimary: (
    newRow: GridRowModel,
    oldRow: GridRowModel
  ) => Promise<any>;
  onUpdateRowSecondary?: (
    newRow: GridRowModel,
    oldRow: GridRowModel
  ) => Promise<any>;
  onUpdateRowTertiary?: (
    newRow: GridRowModel,
    oldRow: GridRowModel
  ) => Promise<any>;
  fetchData: () => void;
  onUpdateRowError: (error: any) => void;
  loading: boolean;
  onClose?: () => void;
  isSecondaryOpen?: boolean;
  isTertiaryOpen?: boolean;
}

export function EditSection({
  primaryColumns,
  secondaryColumns,
  tertiaryColumns,
  primaryData,
  secondaryData,
  tertiaryData,
  fetchData,
  onUpdateRowPrimary,
  onUpdateRowSecondary,
  onUpdateRowTertiary,
  onUpdateRowError,
  loading,
  onClose,
  isSecondaryOpen,
  isTertiaryOpen,
}: Props): ReactElement {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box height={'75vh'} width={'75vw'}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <DataGrid
            experimentalFeatures={{ newEditingApi: true }}
            columns={primaryColumns}
            rows={primaryData}
            pageSize={10}
            rowsPerPageOptions={[10]}
            processRowUpdate={onUpdateRowPrimary}
            onProcessRowUpdateError={onUpdateRowError}
          />
          {secondaryColumns && (
            <Dialog open={!!isSecondaryOpen} onClose={onClose} fullWidth>
              <Box height={'75vh'} width={'75vw'}>
                <DataGrid
                  experimentalFeatures={{ newEditingApi: true }}
                  columns={secondaryColumns}
                  rows={secondaryData || []}
                  pageSize={10}
                  rowsPerPageOptions={[10]}
                  processRowUpdate={onUpdateRowSecondary}
                  onProcessRowUpdateError={onUpdateRowError}
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
                  rows={secondaryData || []}
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
