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
import { TaxDeductions } from '../types';
import { useTaxContext } from '../context/TaxContext';

const DeductionsForm: React.FC = () => {
  const { userData, updateDeductions } = useTaxContext();
  const [deductions, setDeductions] = useState<TaxDeductions>(userData.deductions);
  const [totalDeductions, setTotalDeductions] = useState<number>(0);

  // Update total deductions when any deduction value changes
  useEffect(() => {
    const total = 
      Number(deductions.standardDeduction) +
      Number(deductions.itemizedDeductions) +
      Number(deductions.qualifiedBusinessIncome) +
      Number(deductions.retirementContributions) +
      Number(deductions.healthSavingsAccount) +
      Number(deductions.studentLoanInterest) +
      Number(deductions.otherDeductions);
    
    setTotalDeductions(total);
  }, [deductions]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = value === '' ? 0 : Number(value);
    
    setDeductions(prev => ({
      ...prev,
      [name]: numValue
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateDeductions(deductions);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Tax Deductions
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Enter your tax deductions to reduce your taxable income.
      </Typography>
      
      <Divider sx={{ my: 2 }} />
      
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Standard Deduction"
              name="standardDeduction"
              type="number"
              value={deductions.standardDeduction || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
              helperText="For 2023: $12,950 (single), $25,900 (married filing jointly)"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Itemized Deductions"
              name="itemizedDeductions"
              type="number"
              value={deductions.itemizedDeductions || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
              helperText="Medical expenses, state taxes, mortgage interest, charitable donations, etc."
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Qualified Business Income"
              name="qualifiedBusinessIncome"
              type="number"
              value={deductions.qualifiedBusinessIncome || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
              helperText="20% deduction for qualified business income (Section 199A)"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Retirement Contributions"
              name="retirementContributions"
              type="number"
              value={deductions.retirementContributions || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
              helperText="Traditional IRA, 401(k), SEP IRA, etc."
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Health Savings Account"
              name="healthSavingsAccount"
              type="number"
              value={deductions.healthSavingsAccount || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
              helperText="HSA contributions (2023 limit: $3,650 individual, $7,300 family)"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Student Loan Interest"
              name="studentLoanInterest"
              type="number"
              value={deductions.studentLoanInterest || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
              helperText="Up to $2,500 of student loan interest paid"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Other Deductions"
              name="otherDeductions"
              type="number"
              value={deductions.otherDeductions || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
              helperText="Self-employment tax, alimony, etc."
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
              <Typography variant="subtitle1">Total Deductions</Typography>
              <Typography variant="h4">${totalDeductions.toLocaleString()}</Typography>
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
              Save Deductions Information
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default DeductionsForm; 