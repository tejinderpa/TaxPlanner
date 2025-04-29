import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper, 
  Button,
  Card,
  CardContent,
  CardActions,
  Divider
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CalculateIcon from '@mui/icons-material/Calculate';
import MoneyIcon from '@mui/icons-material/Money';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            mb: 4, 
            textAlign: 'center',
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            color: 'white'
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Tax Planner
          </Typography>
          <Typography variant="h6" paragraph>
            Calculate your taxes, get personalized tax-saving suggestions, and maximize your take-home income.
          </Typography>
          <Button 
            component={RouterLink} 
            to="/income" 
            variant="contained" 
            size="large"
            sx={{ 
              mt: 2, 
              bgcolor: 'white', 
              color: 'primary.main',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
              }
            }}
          >
            Get Started
          </Button>
        </Paper>

        <Typography variant="h4" component="h2" gutterBottom>
          How It Works
        </Typography>
        <Divider sx={{ mb: 4 }} />

        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <MoneyIcon color="primary" sx={{ fontSize: 60 }} />
                </Box>
                <Typography variant="h6" component="div" gutterBottom>
                  1. Enter Your Income
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Provide details about your salary, business income, investments, and other income sources.
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  component={RouterLink} 
                  to="/income" 
                  size="small" 
                  fullWidth
                >
                  Enter Income
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <AccountBalanceIcon color="primary" sx={{ fontSize: 60 }} />
                </Box>
                <Typography variant="h6" component="div" gutterBottom>
                  2. Add Deductions & Credits
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Enter your tax deductions and credits to reduce your taxable income and tax liability.
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  component={RouterLink} 
                  to="/deductions" 
                  size="small" 
                  fullWidth
                >
                  Enter Deductions
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <CalculateIcon color="primary" sx={{ fontSize: 60 }} />
                </Box>
                <Typography variant="h6" component="div" gutterBottom>
                  3. Calculate Your Taxes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our system will calculate your federal and state taxes based on the information provided.
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  component={RouterLink} 
                  to="/results" 
                  size="small" 
                  fullWidth
                >
                  View Results
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <SavingsIcon color="primary" sx={{ fontSize: 60 }} />
                </Box>
                <Typography variant="h6" component="div" gutterBottom>
                  4. Get Tax-Saving Suggestions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Receive personalized suggestions to help you reduce your tax liability and save money.
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  component={RouterLink} 
                  to="/suggestions" 
                  size="small" 
                  fullWidth
                >
                  Get Suggestions
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, mb: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Ready to optimize your taxes?
          </Typography>
          <Button 
            component={RouterLink} 
            to="/income" 
            variant="contained" 
            color="primary" 
            size="large"
            sx={{ mt: 2 }}
          >
            Start Now
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage; 