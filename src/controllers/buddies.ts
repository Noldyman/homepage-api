import { Request, Response } from "express";
import { dbConnection } from "../db";

export const getAll = (_: Request, res: Response) => {
  dbConnection.query("SELECT * FROM noldys.buddies", (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
};

export const getById = (req: Request, res: Response) => {
  dbConnection.query(`SELECT * FROM noldys.buddies WHERE id = ${req.params.id}`, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
};

export const create = (req: Request, res: Response) => {
  dbConnection.query(
    `INSERT INTO noldys.buddies VALUES (DEFAULT, "${req.body.name}", "${req.body.dateOfBirth}")`,
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
  dbConnection.query(
    `UPDATE noldys.buddies SET name = "${req.body.name}", dateOfBirth = "${req.body.dateOfBirth}" WHERE id = ${req.params.id}`,
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
  dbConnection.query(`DELETE FROM noldys.buddies WHERE id = ${req.params.id}`, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};
