import Axios from "../lib/axios";
import { config } from "../config/app";
import { IStockParams } from "../interfaces/stokeParams";

const { baseURL, rapidAPIKey, rapidAPIHost } = config.get("yahooFinance");

const client = new Axios(baseURL);
const headers = {
  "x-rapidapi-key": rapidAPIKey,
  "x-rapidapi-host": rapidAPIHost,
  useQueryString: true
};

export const getStockAnalysis = async (params: IStockParams) => {
  const url = baseURL + "/stock/v2/get-analysis";
  const { data } = await client.get(url, { params, headers });
  return data;
};

export const getStockNews = async (params: IStockParams) => {
  const url = baseURL + "/stock/get-news";
  const { data } = await client.get(url, { params, headers });
  return data;
};
