import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import CreditsForm from '../components/CreditsForm';

const CreditsPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Tax Credits
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Enter your tax credits to directly reduce your tax liability and potentially increase your refund.
        </Typography>
        <CreditsForm />
      </Box>
    </Container>
  );
};

export default CreditsPage; 