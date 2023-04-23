import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  useGridApiEventHandler,
  useGridApiRef,
} from '@mui/x-data-grid';
import { columnsMock, columnsMockGrid, dataGrid, rowsMock } from './mock';
import { useDemoData } from '@mui/x-data-grid-generator';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = dataGrid();

console.log(useDemoData);

export default function DataGridDemo() {
  const [dataRows, setDataRows] = React.useState(rowsMock);
  const [dataRowA, setDataRowA] = React.useState(rowsMock.slice(0, 100));
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 300,
    editable: true,
  });

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 100,
    page: 0,
  });
  const apiRef = useGridApiRef();

  const checked = React.useRef(false);

  React.useEffect(() => {
    const handleEvent = (
      params, // GridScrollParams
      event, // MuiEvent<React.UIEvent | MuiBaseEvent>
      details // GridCallbackDetails
    ) => {
      console.log(params, event, details, params.top >= 4000);
      if (params.top >= 4000 && checked.current == false) {
        checked.current = true;
        setDataRowA(rowsMock.slice(50, 150));
        // setPaginationModel({ ...paginationModel, page: 2 });
        return;
      }
    };
    apiRef.current.subscribeEvent('scrollPositionChange', handleEvent);
  }, [apiRef]);

  React.useEffect(() => {
    const arr = [...rowsMock, rowsMock[0]];
    setDataRows(arr);
  }, []);
  // useGridApiEventHandler(apiRef, 'scrollPositionChange', handleEvent);
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        apiRef={apiRef}
        rows={dataRowA}
        columns={columnsMockGrid}
        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 100,
        //     },
        //   },
        // }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        // disableVirtualization
      />
    </Box>
  );
}
