import request from "supertest";
import app from "../src/app";

describe("POST /api/v1/portfolio/performance", () => {
  it("should return 200 status code", async () => {
    // Act
    const response = await request(app)
      .get("/api/v1/portfolio/performance")
      .query({
        initialInvestment: 10000,
        currentValue: 8000,
      });

    // Assert
    expect(response.status).toBe(200);
  });

  it("should return calculated portfolio performance data", async () => {
    // Act
    const response = await request(app)
      .get("/api/v1/portfolio/performance")
      .query({
        initialInvestment: 10000,
        currentValue: 8000,
      });

    // Assert
    expect(response.body).toHaveProperty("initialInvestment");
    expect(response.body).toHaveProperty("currentValue");
    expect(response.body).toHaveProperty("profitOrLoss");
    expect(response.body).toHaveProperty("percentageChange");
    expect(response.body).toHaveProperty("performanceSummary");
  });
});
