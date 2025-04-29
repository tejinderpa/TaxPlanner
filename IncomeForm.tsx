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
import { UserIncome } from '../types';
import { useTaxContext } from '../context/TaxContext';

const IncomeForm: React.FC = () => {
  const { userData, updateIncome } = useTaxContext();
  const [income, setIncome] = useState<UserIncome>(userData.income);
  const [totalIncome, setTotalIncome] = useState<number>(0);

  // Update total income when any income value changes
  useEffect(() => {
    const total = 
      Number(income.salary) +
      Number(income.businessIncome) +
      Number(income.rentalIncome) +
      Number(income.investmentIncome) +
      Number(income.otherIncome);
    
    setTotalIncome(total);
  }, [income]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = value === '' ? 0 : Number(value);
    
    setIncome(prev => ({
      ...prev,
      [name]: numValue
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateIncome(income);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Income Information
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Enter your annual income from various sources to calculate your tax liability.
      </Typography>
      
      <Divider sx={{ my: 2 }} />
      
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Salary"
              name="salary"
              type="number"
              value={income.salary || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Business Income"
              name="businessIncome"
              type="number"
              value={income.businessIncome || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Rental Income"
              name="rentalIncome"
              type="number"
              value={income.rentalIncome || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Investment Income"
              name="investmentIncome"
              type="number"
              value={income.investmentIncome || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Other Income"
              name="otherIncome"
              type="number"
              value={income.otherIncome || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
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
              <Typography variant="subtitle1">Total Income</Typography>
              <Typography variant="h4">${totalIncome.toLocaleString()}</Typography>
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
              Save Income Information
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default IncomeForm; 