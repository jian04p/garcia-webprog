import { Box, Typography, Paper } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const ReportsPage = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          User Growth Overview
        </Typography>

        <Box sx={{ height: 400 }}>
          <LineChart
            height={350}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                label: 'Users',
              },
            ]}
            xAxis={[
              {
                data: [1, 2, 3, 5, 8, 10],
                scaleType: 'point',
              },
            ]}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default ReportsPage;