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
import { TaxCredits } from '../types';
import { useTaxContext } from '../context/TaxContext';

const CreditsForm: React.FC = () => {
  const { userData, updateCredits } = useTaxContext();
  const [credits, setCredits] = useState<TaxCredits>(userData.credits);
  const [totalCredits, setTotalCredits] = useState<number>(0);

  // Update total credits when any credit value changes
  useEffect(() => {
    const total = 
      Number(credits.childTaxCredit) +
      Number(credits.earnedIncomeCredit) +
      Number(credits.childAndDependentCare) +
      Number(credits.educationCredits) +
      Number(credits.foreignTaxCredit) +
      Number(credits.otherCredits);
    
    setTotalCredits(total);
  }, [credits]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = value === '' ? 0 : Number(value);
    
    setCredits(prev => ({
      ...prev,
      [name]: numValue
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateCredits(credits);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Tax Credits
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Enter your tax credits to directly reduce your tax liability.
      </Typography>
      
      <Divider sx={{ my: 2 }} />
      
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Child Tax Credit"
              name="childTaxCredit"
              type="number"
              value={credits.childTaxCredit || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
              helperText="Up to $2,000 per qualifying child under 17"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Earned Income Credit"
              name="earnedIncomeCredit"
              type="number"
              value={credits.earnedIncomeCredit || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
              helperText="For low to moderate income workers"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Child and Dependent Care"
              name="childAndDependentCare"
              type="number"
              value={credits.childAndDependentCare || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
              helperText="Up to $3,000 for one dependent, $6,000 for two or more"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Education Credits"
              name="educationCredits"
              type="number"
              value={credits.educationCredits || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
              helperText="American Opportunity Credit and Lifetime Learning Credit"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Foreign Tax Credit"
              name="foreignTaxCredit"
              type="number"
              value={credits.foreignTaxCredit || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
              helperText="Credit for taxes paid to foreign countries"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Other Credits"
              name="otherCredits"
              type="number"
              value={credits.otherCredits || ''}
              onChange={handleChange}
              InputProps={{ startAdornment: '$' }}
              helperText="Retirement savings, energy credits, etc."
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
              <Typography variant="subtitle1">Total Credits</Typography>
              <Typography variant="h4">${totalCredits.toLocaleString()}</Typography>
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
              Save Credits Information
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default CreditsForm; 