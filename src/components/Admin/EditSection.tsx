import { Box, CircularProgress, Dialog } from '@mui/material';
import { GridColDef, GridRowModel } from '@mui/x-data-grid';
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
  // tertiaryColumns,
  // tertiaryData,
  // tertiaryCrud,
  // setTertiaryData,
  // isTertiaryOpen,
  onUpdateRowError,
  loading,
  onClose,
  isSecondaryOpen,
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
          {/* {setTertiaryData &&
            tertiaryColumns &&
            tertiaryData &&
            tertiaryCrud && (
              <Dialog
                open={!!isTertiaryOpen}
                onClose={onClose}
                fullWidth
                maxWidth='xl'
              >
                <Box height={'100vh'}>
                  <DataGridContainer
                    rows={tertiaryData}
                    setRows={setTertiaryData}
                    columns={tertiaryColumns}
                    crud={tertiaryCrud}
                    parentRow={isTertiaryOpen}
                  />
                </Box>
              </Dialog>
            )} */}
        </>
      )}
    </Box>
  );
}
