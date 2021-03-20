import express from "express";
import { stockAnalysis, stockNews } from "../controllers/stock";

export const initStockRoutes = () => {
  const stockRouter = express.Router();

  stockRouter.get("/get-analysis", stockAnalysis);
  stockRouter.get("/get-news", stockNews);

  return stockRouter;
};
