# Tax Planner Application

A comprehensive tax planning application that helps users calculate their income tax, track expenses, and receive personalized tax-saving suggestions using the OpenAI API.

## Features

- **Income Tracking**: Enter your salary, business income, rental income, investments, and other income sources.
- **Expense Management**: Track your housing, transportation, food, healthcare, and other expenses.
- **Tax Deductions**: Input standard deductions, itemized deductions, retirement contributions, and more.
- **Tax Credits**: Add child tax credits, earned income credits, education credits, and other applicable credits.
- **Tax Calculation**: Calculate federal and state taxes based on your financial information.
- **Tax-Saving Suggestions**: Receive personalized tax-saving suggestions powered by OpenAI.
- **Visual Reports**: View your tax breakdown with interactive charts.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/taxplanner.git
   cd taxplanner
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your OpenAI API key:
   - Open `src/services/openaiService.ts`
   - Replace `'YOUR_OPENAI_API_KEY'` with your actual OpenAI API key

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

1. **Home Page**: Start by clicking "Get Started" on the home page.
2. **Income**: Enter your income details from various sources.
3. **Expenses**: Add your annual expenses to help identify potential deductions.
4. **Deductions**: Input your tax deductions to reduce your taxable income.
5. **Credits**: Add any tax credits you're eligible for.
6. **Results**: View your calculated tax results, including federal and state taxes.
7. **Suggestions**: Get personalized tax-saving suggestions based on your financial information.

## Technologies Used

- React
- TypeScript
- Material UI
- Chart.js
- React Router
- OpenAI API

## Important Notes

- This application is for educational and planning purposes only.
- The tax calculations are simplified and may not account for all tax scenarios.
- Always consult with a tax professional for accurate tax advice.
- The OpenAI API key used in this application should be kept private and not shared publicly.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for providing the API for tax-saving suggestions
- Material UI for the component library
- Chart.js for data visualization
