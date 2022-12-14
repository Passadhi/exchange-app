

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useOperationContext } from '../Context/operationContext';
 
const columns = [
  { field: 'id', headerName: 'id', width: 70 },
  { field: 'Side', headerName: 'Side', width: 70 },
  { field: 'Instrument', headerName: 'Instrument', width: 130 },
  { field: 'Price', headerName: 'Price', width: 130 },
  {
    field: 'Volume',
    headerName: 'Volume',
    type:'number',
    width: 90,
  },
  {
    field: 'Timestamp',
    headerName: 'Timestamp',
    width: 160,
  },
];


export default function Archive() {
    const {operation,setOperation} = useOperationContext()
   
 
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={operation}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}