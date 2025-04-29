import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ExpensesForm from '../components/ExpensesForm';

const ExpensesPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Expenses Information
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Track your expenses to identify potential tax deductions and optimize your financial planning.
        </Typography>
        <ExpensesForm />
      </Box>
    </Container>
  );
};

export default ExpensesPage; 