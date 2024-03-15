import { Request, Response } from "express";
import { dbPool } from "../db";
import { queryToday, queryThisWeekOrMonth, queryYear, queryCount } from "./queries/birthdays";

export const get = (
  req: Request<{}, {}, {}, { interval: "day" | "week" | "month" | "year" }>,
  res: Response
) => {
  const { interval } = req.query;

  let query = "";

  if (interval === "day") {
    query = queryToday;
  } else if (interval === "year") {
    query = queryYear;
  } else {
    query = queryThisWeekOrMonth(interval);
  }

  dbPool.query(query, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
};

export const getCount = (_: Request, res: Response) => {
  dbPool.query(queryCount, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
};
