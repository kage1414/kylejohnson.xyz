import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { Dialog, DialogContent, DialogTitle, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridRowParams,
  GridRowsProp,
  GridToolbarContainer,
  GridValidRowModel,
  MuiEvent,
} from '@mui/x-data-grid';
import { Dispatch, SetStateAction, useState } from 'react';

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
  onRowAdd: CrudOperations['c'];
  parentRow?: GridRowModel;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel, onRowAdd, parentRow } = props;

  const handleClick = async () => {
    const newRow = await onRowAdd(parentRow?.id);
    setRows((oldRows) => [{ ...newRow, isNew: true }, ...oldRows]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [newRow.id]: { mode: GridRowModes.Edit },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color='primary' startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

interface DeleteOptions {
  technology_id?: string;
}

export interface CrudOperations {
  c: (
    id: string,
    options?: { technology_id?: string }
  ) => Promise<GridRowModel>;
  u: (newRow: GridRowModel) => Promise<GridRowModel>;
  d: (id: GridRowId, options?: DeleteOptions) => Promise<GridRowId>;
}

interface DataGridContainerProps {
  rows: GridValidRowModel[];
  setRows: Dispatch<SetStateAction<any[]>>;
  columns: GridColumns;
  crud: CrudOperations;
  parentRow?: GridRowModel | null;
}

export default function DataGridContainer({
  rows,
  setRows,
  columns,
  crud: { c, u, d },
  parentRow,
}: DataGridContainerProps) {
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [toDeleteId, setToDeleteId] = useState<GridRowId | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleRowEditStart = (
    params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>
  ) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (
    params,
    event
  ) => {
    event.defaultMuiPrevented = true;
  };
  const getTitleFromId = (id: GridRowId | null): string => {
    const row = rows.find((row) => row.id === id);
    if (row && row.hasOwnProperty('employer')) {
      return row.employer ?? 'row';
    } else if (row && row.hasOwnProperty('name')) {
      return row.name ?? 'row';
    } else if (row && row.hasOwnProperty('school')) {
      return row.school ?? 'row';
    } else {
      return 'row';
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = async () => {
    if (toDeleteId) {
      d(toDeleteId);
      setRows(rows.filter((row) => row.id !== toDeleteId));
    }
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      d(id);
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow: GridRowModel) => {
    return u(newRow).then((row) => {
      const updatedRow = { ...row, isNew: false };
      setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
      return updatedRow;
    });
  };

  const onYes = () => {
    setDeleteModalOpen(false);
    setToDeleteId(null);
    handleDeleteClick();
  };

  const onNo = () => {
    setDeleteModalOpen(false);
    setToDeleteId(null);
  };

  const actionColumns: GridColumns = [
    ...columns,
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label='Save'
              onClick={handleSaveClick(id)}
              key={'grid-actions-cell-item-save'}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label='Cancel'
              className='textPrimary'
              onClick={handleCancelClick(id)}
              color='inherit'
              key={'grid-actions-cell-item-cancel'}
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label='Edit'
            className='textPrimary'
            onClick={handleEditClick(id)}
            color='inherit'
            key={'grid-actions-cell-item-edit'}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label='Delete'
            onClick={() => {
              setToDeleteId(id);
              setDeleteModalOpen(true);
            }}
            color='inherit'
            key={'grid-actions-cell-item-delete'}
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={actionColumns}
        editMode='row'
        rowModesModel={rowModesModel}
        onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={(err) => {
          console.error(err);
        }}
        components={{
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: { setRows, setRowModesModel, onRowAdd: c, parentRow },
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
      <Dialog
        open={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setToDeleteId(null);
        }}
      >
        <Paper>
          <Box>
            <DialogTitle>
              {toDeleteId
                ? `Are you sure you want to delete ${getTitleFromId(
                    toDeleteId
                  )}?`
                : ''}
            </DialogTitle>
            <DialogContent>
              <Box display={'flex'} justifyContent={'center'}>
                <Button color='secondary' onClick={onNo}>
                  No
                </Button>
                <Button color='warning' onClick={onYes}>
                  Yes
                </Button>
              </Box>
            </DialogContent>
          </Box>
        </Paper>
      </Dialog>
    </Box>
  );
}
