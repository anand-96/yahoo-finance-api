import Responder from "../lib/expressResponder";
import { getStockAnalysis, getStockNews } from "../services/yahooFinance";

export const stockAnalysis = async (req: any, res: any) => {
  try {
    const data = await getStockAnalysis(req.query);
    Responder.success(res, { data });
  } catch (error) {
    console.error(error);
    Responder.operationFailed(res, error);
  }
};

export const stockNews = async (req: any, res: any) => {
  try {
    const data = await getStockNews(req.query);
    Responder.success(res, { data });
  } catch (error) {
    console.error(error);
    Responder.operationFailed(res, error);
  }
};
