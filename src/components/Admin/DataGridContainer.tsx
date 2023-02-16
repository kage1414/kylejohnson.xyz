import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColumns,
  GridRowParams,
  MuiEvent,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
} from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
  onRowAdd: () => Promise<GridRowModel>;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel, onRowAdd } = props;

  const handleClick = async () => {
    const newRow = await onRowAdd();
    setRows((oldRows) => [...oldRows, { ...newRow, isNew: true }]);
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

export interface CrudOperations {
  c: () => Promise<GridRowModel>;
  u: (newRow: GridRowModel) => Promise<GridRowModel>;
  d: (id: GridRowId) => Promise<GridRowId>;
}

interface DataGridContainerProps {
  initialRows: any[];
  columns: GridColumns;
  crud: CrudOperations;
}

export default function DataGridContainer({
  initialRows,
  columns,
  crud: { c, u, d },
}: DataGridContainerProps) {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );

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

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    d(id);
    setRows(rows.filter((row) => row.id !== id));
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
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label='Cancel'
              className='textPrimary'
              onClick={handleCancelClick(id)}
              color='inherit'
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
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label='Delete'
            onClick={handleDeleteClick(id)}
            color='inherit'
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
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
          toolbar: { setRows, setRowModesModel, onRowAdd: c },
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
