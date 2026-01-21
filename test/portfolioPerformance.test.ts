import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
    it("should calculate an excellent performance gain (>= 30%)", () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 14000; // +40%

        // Act
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);

        // Assert
        expect(result.initialInvestment).toBe(initialInvestment);
        expect(result.currentValue).toBe(currentValue);
        expect(result.profitOrLoss).toBe(4000);
        expect(result.percentageChange).toBe(40);
        expect(result.performanceSummary).toBe(
            "Excellent performance! Your investments are doing great."
        );
    });
});
