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

        it("should return 'No change' when there is no gain or loss (0%)", () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 10000; // 0%

        // Act
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);

        // Assert
        expect(result.profitOrLoss).toBe(0);
        expect(result.percentageChange).toBe(0);
        expect(result.performanceSummary).toBe(
            "No change. Your portfolio is holding steady."
        );
    });
});
