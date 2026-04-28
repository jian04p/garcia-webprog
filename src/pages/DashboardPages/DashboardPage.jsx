import { Box, Grid, Card, CardContent, Typography, Paper } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const DashboardPage = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography>Users</Typography>
              <Typography variant="h4">120</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography>Reports</Typography>
              <Typography variant="h4">35</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography>Sessions</Typography>
              <Typography variant="h4">18</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ mt: 4, p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Overview Distribution
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <PieChart
            width={400}
            height={250}
            series={[
              {
                data: [
                  { id: 0, value: 10, label: 'Series A' },
                  { id: 1, value: 15, label: 'Series B' },
                  { id: 2, value: 20, label: 'Series C' },
                ],
              },
            ]}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default DashboardPage;