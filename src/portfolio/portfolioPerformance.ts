// Created interface for function output 
export interface PortfolioPerformanceResult{
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}
// Changed from classic function to arrow function
export const calculatePortfolioPerformance = (initialInvestment: number, currentValue: number): PortfolioPerformanceResult => {
    
    // Corrected math logic, profit or loss is calculated by subtracting the initial Investment from current value.
    const profitOrLoss = currentValue - initialInvestment;

    // Added ternary statement to prevent deviding by zero if there was no initial investment.
    const percentageChange = initialInvestment === 0 ? 0: (profitOrLoss / initialInvestment) * 100;
    
    // Replaced if statement with ternary expression
    const performanceSummary: string = 
        percentageChange >= 30
        ? `Excellent performance! Your investments are doing great.`:
        percentageChange >= 10
        ? `Solid gain. Keep monitoring your investments.`:
        percentageChange > 0
        ? `Modest gain. Your portfolio is growing slowly.`:
        percentageChange === 0
        ? `No change. Your portfolio is holding steady.`:
        percentageChange >= -10
        ? `Minor loss. Stay calm and review your options.`:
          `Significant loss. Review your portfolio strategy.`;

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
};

