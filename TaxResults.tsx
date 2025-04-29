import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Button,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { useTaxContext } from '../context/TaxContext';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const TaxResults: React.FC = () => {
  const { userData, taxCalculation, calculateTaxResults, generateSuggestions, isLoading } = useTaxContext();

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  // Format percentage
  const formatPercentage = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 2
    }).format(value);
  };

  // Prepare chart data
  const chartData = {
    labels: ['Federal Tax', 'State Tax', 'Take-Home Income'],
    datasets: [
      {
        data: taxCalculation ? [
          taxCalculation.federalTax,
          taxCalculation.stateTax,
          taxCalculation.takeHomeIncome
        ] : [0, 0, 0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(75, 192, 192, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${formatCurrency(value)}`;
          }
        }
      }
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Tax Calculation Results
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Review your tax calculation results based on the information provided.
      </Typography>
      
      <Divider sx={{ my: 2 }} />
      
      {!taxCalculation ? (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="body1" paragraph>
            No tax calculations available. Click the button below to calculate your taxes.
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={calculateTaxResults}
            size="large"
          >
            Calculate Taxes
          </Button>
        </Box>
      ) : (
        <Grid container spacing={4}>
          {/* Summary Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Summary
            </Typography>
            <List>
              <ListItem divider>
                <ListItemText 
                  primary="Total Income" 
                  secondary={formatCurrency(taxCalculation.totalIncome)} 
                />
              </ListItem>
              <ListItem divider>
                <ListItemText 
                  primary="Total Deductions" 
                  secondary={formatCurrency(taxCalculation.totalDeductions)} 
                />
              </ListItem>
              <ListItem divider>
                <ListItemText 
                  primary="Taxable Income" 
                  secondary={formatCurrency(taxCalculation.taxableIncome)} 
                />
              </ListItem>
              <ListItem divider>
                <ListItemText 
                  primary="Federal Tax" 
                  secondary={formatCurrency(taxCalculation.federalTax)} 
                />
              </ListItem>
              <ListItem divider>
                <ListItemText 
                  primary="State Tax" 
                  secondary={formatCurrency(taxCalculation.stateTax)} 
                />
              </ListItem>
              <ListItem divider>
                <ListItemText 
                  primary="Total Tax" 
                  secondary={formatCurrency(taxCalculation.federalTax + taxCalculation.stateTax)} 
                />
              </ListItem>
              <ListItem divider>
                <ListItemText 
                  primary="Effective Tax Rate" 
                  secondary={formatPercentage(taxCalculation.effectiveTaxRate)} 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Take-Home Income" 
                  secondary={formatCurrency(taxCalculation.takeHomeIncome)} 
                  primaryTypographyProps={{ fontWeight: 'bold' }}
                  secondaryTypographyProps={{ fontWeight: 'bold', color: 'success.main' }}
                />
              </ListItem>
            </List>
          </Grid>
          
          {/* Chart Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Income Breakdown
            </Typography>
            <Box sx={{ height: 300, mb: 2 }}>
              <Doughnut data={chartData} options={chartOptions} />
            </Box>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button 
                variant="contained" 
                color="secondary" 
                onClick={generateSuggestions}
                size="large"
                disabled={isLoading}
              >
                {isLoading ? 'Generating Suggestions...' : 'Get Tax-Saving Suggestions'}
              </Button>
            </Box>
          </Grid>
          
          {/* Recalculate Button */}
          <Grid item xs={12}>
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={calculateTaxResults}
              fullWidth
            >
              Recalculate Taxes
            </Button>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};

export default TaxResults; 