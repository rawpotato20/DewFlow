import pino from "pino";

const isEdge = process.env.NEXT_RUNTINE === "edge";
const isProduction = process.env.NEXT_RUNTINE === "production";

const logger = pino({
  level: process.env.LOG_LEVER || "info",
  transport:
    !isEdge && !isProduction
      ? {
          target: "pino-pretty",
          options: {
            colorize: true,
            ignore: "pid,hostname",
            translateTime: "SYS:standard",
          },
        }
      : undefined,
  formatters: {
    level: (label) => ({ level: label.toUpperCase() }),
  },

  timestamp: pino.stdTimeFunctions.isoTime,
});

export default logger;
