import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import TaxSuggestions from '../components/TaxSuggestions';

const SuggestionsPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Tax-Saving Suggestions
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Get personalized tax-saving suggestions based on your financial information to help reduce your tax liability.
        </Typography>
        <TaxSuggestions />
      </Box>
    </Container>
  );
};

export default SuggestionsPage; 