import express, { Express } from "express";
import healthRoutes from "./api/v1/routes/healthcheck"
import { calculatePortfolioPerformance } from "./portfolio/portfolioPerformance";

const app: Express = express();

app.use(express.json());

app.use("/api/v1", healthRoutes);

app.post("/api/v1/portfolio/performance", (req, res) => {
    const { initialInvestment, currentValue } = req.body;

    const result = calculatePortfolioPerformance(initialInvestment, currentValue);

    res.json(result);
});

export default app;

