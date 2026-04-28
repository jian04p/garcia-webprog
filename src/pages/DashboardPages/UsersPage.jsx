import { Box, Typography, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, firstName: 'Jon', lastName: 'Snow', age: 35 },
  { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 42 },
  { id: 3, firstName: 'Jaime', lastName: 'Lannister', age: 45 },
  { id: 4, firstName: 'Arya', lastName: 'Stark', age: 16 },
  { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', age: 30 },
  { id: 6, firstName: 'Melisandre', lastName: null, age: 150 },
  { id: 7, firstName: 'Ferrara', lastName: 'Clifford', age: 44 },
  { id: 8, firstName: 'Rossini', lastName: 'Frances', age: 36 },
  { id: 9, firstName: 'Harvey', lastName: 'Roxie', age: 65 },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'age', headerName: 'Age', width: 100 },
];

const UsersPage = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>

      <Paper sx={{ height: 400, p: 2 }}>
        <DataGrid rows={rows} columns={columns} />
      </Paper>
    </Box>
  );
};

export default UsersPage;