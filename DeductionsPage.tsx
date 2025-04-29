import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import DeductionsForm from '../components/DeductionsForm';

const DeductionsPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Tax Deductions
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Enter your tax deductions to reduce your taxable income and lower your tax liability.
        </Typography>
        <DeductionsForm />
      </Box>
    </Container>
  );
};

export default DeductionsPage; 