import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import TaxResults from '../components/TaxResults';

const ResultsPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Tax Calculation Results
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Review your tax calculation results based on the information you've provided.
        </Typography>
        <TaxResults />
      </Box>
    </Container>
  );
};

export default ResultsPage; 