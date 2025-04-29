import React, { createContext, useContext, useState, ReactNode } from 'react';
import { 
  UserData, 
  UserIncome, 
  UserExpenses, 
  TaxDeductions, 
  TaxCredits, 
  TaxCalculation,
  TaxSavingSuggestion
} from '../types';
import { calculateTaxes } from '../utils/taxCalculator';
import { generateTaxSavingSuggestions } from '../services/openaiService';

// Default values
const defaultIncome: UserIncome = {
  salary: 75000,
  businessIncome: 0,
  rentalIncome: 0,
  investmentIncome: 0,
  otherIncome: 0
};

const defaultExpenses: UserExpenses = {
  housing: 18000,
  transportation: 5000,
  food: 6000,
  healthcare: 3000,
  education: 0,
  retirement: 6000,
  insurance: 2400,
  otherExpenses: 3600
};

const defaultDeductions: TaxDeductions = {
  standardDeduction: 12950,
  itemizedDeductions: 0,
  qualifiedBusinessIncome: 0,
  retirementContributions: 6000,
  healthSavingsAccount: 0,
  studentLoanInterest: 0,
  otherDeductions: 0
};

const defaultCredits: TaxCredits = {
  childTaxCredit: 0,
  earnedIncomeCredit: 0,
  childAndDependentCare: 0,
  educationCredits: 0,
  foreignTaxCredit: 0,
  otherCredits: 0
};

const defaultUserData: UserData = {
  income: defaultIncome,
  expenses: defaultExpenses,
  deductions: defaultDeductions,
  credits: defaultCredits
};

// Context type
interface TaxContextType {
  userData: UserData;
  taxCalculation: TaxCalculation | null;
  taxSavingSuggestions: TaxSavingSuggestion[];
  isLoading: boolean;
  error: string | null;
  updateIncome: (income: UserIncome) => void;
  updateExpenses: (expenses: UserExpenses) => void;
  updateDeductions: (deductions: TaxDeductions) => void;
  updateCredits: (credits: TaxCredits) => void;
  calculateTaxResults: () => void;
  generateSuggestions: () => Promise<void>;
  resetToDefaults: () => void;
}

// Create context
const TaxContext = createContext<TaxContextType | undefined>(undefined);

// Provider component
export const TaxProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [taxCalculation, setTaxCalculation] = useState<TaxCalculation | null>(null);
  const [taxSavingSuggestions, setTaxSavingSuggestions] = useState<TaxSavingSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Update functions
  const updateIncome = (income: UserIncome) => {
    setUserData(prev => ({ ...prev, income }));
  };

  const updateExpenses = (expenses: UserExpenses) => {
    setUserData(prev => ({ ...prev, expenses }));
  };

  const updateDeductions = (deductions: TaxDeductions) => {
    setUserData(prev => ({ ...prev, deductions }));
  };

  const updateCredits = (credits: TaxCredits) => {
    setUserData(prev => ({ ...prev, credits }));
  };

  // Calculate tax results
  const calculateTaxResults = () => {
    try {
      const results = calculateTaxes(userData);
      setTaxCalculation(results);
      setError(null);
    } catch (err) {
      setError('Error calculating taxes. Please check your inputs.');
      console.error('Tax calculation error:', err);
    }
  };

  // Generate tax-saving suggestions
  const generateSuggestions = async () => {
    if (!taxCalculation) {
      setError('Please calculate taxes first before generating suggestions.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const suggestions = await generateTaxSavingSuggestions(userData, taxCalculation);
      setTaxSavingSuggestions(suggestions);
    } catch (err) {
      setError('Error generating tax-saving suggestions.');
      console.error('Suggestion generation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset to defaults
  const resetToDefaults = () => {
    setUserData(defaultUserData);
    setTaxCalculation(null);
    setTaxSavingSuggestions([]);
    setError(null);
  };

  return (
    <TaxContext.Provider
      value={{
        userData,
        taxCalculation,
        taxSavingSuggestions,
        isLoading,
        error,
        updateIncome,
        updateExpenses,
        updateDeductions,
        updateCredits,
        calculateTaxResults,
        generateSuggestions,
        resetToDefaults
      }}
    >
      {children}
    </TaxContext.Provider>
  );
};

// Custom hook to use the tax context
export const useTaxContext = () => {
  const context = useContext(TaxContext);
  if (context === undefined) {
    throw new Error('useTaxContext must be used within a TaxProvider');
  }
  return context;
}; 