import { Request, Response } from "express";
import { dbPool } from "../db";

export const getAll = (_: Request, res: Response) => {
  dbPool.query("SELECT * FROM noldys.todos", (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
};

export const create = (req: Request, res: Response) => {
  dbPool.query(
    `INSERT INTO noldys.todos VALUES (DEFAULT, "${req.body.text}", ${req.body.isComplete})`,
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
};

export const update = (req: Request, res: Response) => {
  dbPool.query(
    `UPDATE noldys.todos SET text = "${req.body.text}", isComplete = ${req.body.isComplete} WHERE id = ${req.params.id}`,
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
};

export const remove = (req: Request, res: Response) => {
  dbPool.query(`DELETE FROM noldys.todos WHERE id = ${req.params.id}`, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};
