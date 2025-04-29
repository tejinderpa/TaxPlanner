import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { TaxProvider } from './context/TaxContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import IncomePage from './pages/IncomePage';
import ExpensesPage from './pages/ExpensesPage';
import DeductionsPage from './pages/DeductionsPage';
import CreditsPage from './pages/CreditsPage';
import ResultsPage from './pages/ResultsPage';
import SuggestionsPage from './pages/SuggestionsPage';
import './App.css';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TaxProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/income" element={<IncomePage />} />
            <Route path="/expenses" element={<ExpensesPage />} />
            <Route path="/deductions" element={<DeductionsPage />} />
            <Route path="/credits" element={<CreditsPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/suggestions" element={<SuggestionsPage />} />
          </Routes>
        </Router>
      </TaxProvider>
    </ThemeProvider>
  );
}

export default App;
