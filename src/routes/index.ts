import { initStockRoutes } from "./stock";

export const initRoutes = (app: any) => {
  app.use("/stocks", initStockRoutes());
};
