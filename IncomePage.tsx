import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import IncomeForm from '../components/IncomeForm';

const IncomePage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Income Information
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Enter your income details from various sources to calculate your tax liability accurately.
        </Typography>
        <IncomeForm />
      </Box>
    </Container>
  );
};

export default IncomePage; 