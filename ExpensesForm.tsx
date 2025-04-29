import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Grid, 
  Paper, 
  Button,
  Divider
} from '@mui/material';
import { UserExpenses } from '../types';
import { useTaxContext } from '../context/TaxContext';

const ExpensesForm: React.FC = () => {
  const { userData, updateExpenses } = useTaxContext();
  const [expenses, setExpenses] = useState<UserExpenses>(userData.expenses);
  const [totalExpenses, setTotalExpenses] = useState<number>(0);

  // Update total expenses when any expense value changes
  useEffect(() => {
    const total = 
      Number(expenses.housing) +
      Number(expenses.transportation) +
      Number(expenses.food) +
      Number(expenses.healthcare) +
      Number(expenses.education) +
      Number(expenses.retirement) +
      Number(expenses.insurance) +
      Number(expenses.otherExpenses);
    
    setTotalExpenses(total);
  }, [expenses]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = value === '' ? 0 : Number(value);
    
    setExpenses(prev => ({
      ...prev,
      [name]: numValue
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateExpenses(expenses);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Expenses Information
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Enter your annual expenses to help identify potential tax deductions and credits.
      </Typography>
      
      <Divider sx={{ my: 2 }} />
      
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Housing (Rent/Mortgage)"
              name="housing"
              type="number"
              value={expenses.housing || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Transportation"
              name="transportation"
              type="number"
              value={expenses.transportation || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Food"
              name="food"
              type="number"
              value={expenses.food || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Healthcare"
              name="healthcare"
              type="number"
              value={expenses.healthcare || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Education"
              name="education"
              type="number"
              value={expenses.education || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Retirement Savings"
              name="retirement"
              type="number"
              value={expenses.retirement || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Insurance"
              name="insurance"
              type="number"
              value={expenses.insurance || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Other Expenses"
              name="otherExpenses"
              type="number"
              value={expenses.otherExpenses || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Paper 
              elevation={1} 
              sx={{ 
                p: 2, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                bgcolor: 'primary.light',
                color: 'primary.contrastText'
              }}
            >
              <Typography variant="subtitle1">Total Expenses</Typography>
              <Typography variant="h4">${totalExpenses.toLocaleString()}</Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12}>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              size="large"
              fullWidth
            >
              Save Expenses Information
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default ExpensesForm; 