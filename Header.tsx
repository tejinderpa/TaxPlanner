import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Button, 
  useTheme
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CalculateIcon from '@mui/icons-material/Calculate';

const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ marginBottom: 4 }}>
      <Toolbar>
        <CalculateIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tax Planner
        </Typography>
        <Box>
          <Button 
            component={RouterLink} 
            to="/" 
            color="inherit" 
            sx={{ mr: 2 }}
          >
            Home
          </Button>
          <Button 
            component={RouterLink} 
            to="/income" 
            color="inherit" 
            sx={{ mr: 2 }}
          >
            Income
          </Button>
          <Button 
            component={RouterLink} 
            to="/expenses" 
            color="inherit" 
            sx={{ mr: 2 }}
          >
            Expenses
          </Button>
          <Button 
            component={RouterLink} 
            to="/deductions" 
            color="inherit" 
            sx={{ mr: 2 }}
          >
            Deductions
          </Button>
          <Button 
            component={RouterLink} 
            to="/credits" 
            color="inherit" 
            sx={{ mr: 2 }}
          >
            Credits
          </Button>
          <Button 
            component={RouterLink} 
            to="/results" 
            color="inherit" 
            sx={{ mr: 2 }}
          >
            Results
          </Button>
          <Button 
            component={RouterLink} 
            to="/suggestions" 
            color="inherit"
          >
            Suggestions
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 