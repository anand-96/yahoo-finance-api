import convict from "convict";

export const config = convict({
  app: {
    name: {
      doc: "Name of the service",
      format: String,
      default: "server"
    }
  },
  env: {
    doc: "The application environment.",
    format: ["production", "development", "staging", "test"],
    default: "development",
    env: "NODE_ENV"
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 3000,
    env: "PORT"
  },
  yahooFinance: {
    baseURL: {
      doc: "Yahoo finance base url.",
      format: String,
      default: "https://apidojo-yahoo-finance-v1.p.rapidapi.com",
      env: "YAHOO_FINANCE_BASE_URL"
    },
    rapidAPIKey: {
      doc: "Rapid API key.",
      format: String,
      default: "5c99caec87msh5db9ce3572587a9p1bdcaajsn2c766e57aa7c",
      env: "RAPID_API_KEY"
    },
    rapidAPIHost: {
      doc: "Rapid API host.",
      format: String,
      default: "apidojo-yahoo-finance-v1.p.rapidapi.com",
      env: "RAPID_API_HOST"
    }
  }
});

console.log("Starting service with", config.toString());

config.validate({ allowed: "strict" });
