import { Request, Response } from "express";
import { dbConnection } from "../db";
import { queryToday, queryThisWeekOrMonth, queryYear, queryCount } from "./queries/birthdays";

export const get = (
  req: Request<{}, {}, {}, { interval: "day" | "week" | "month" | "year" }>,
  res: Response
) => {
  const { interval } = req.query;

  let query = "";

  if (interval === "day") {
    query = queryToday;
  } else if (interval === "week" || interval === "month") {
    query = queryThisWeekOrMonth(interval);
  } else if (interval === "year") {
    query = queryYear;
  } else {
    res.status(400).send("No or invalid interval was specified in request parameters.");
  }

  dbConnection.query(query, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
};

export const getCount = (_: Request, res: Response) => {
  dbConnection.query(queryCount, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
};