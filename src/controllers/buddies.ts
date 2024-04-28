import { Request, Response } from "express";
import { dbPool } from "../db";

export const getAll = (_: Request, res: Response) => {
  dbPool.query("SELECT * FROM noldys.buddies", (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
};

export const getById = (req: Request, res: Response) => {
  dbPool.query(`SELECT * FROM noldys.buddies WHERE id = ${req.params.id}`, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
};

export const create = (req: Request, res: Response) => {
  dbPool.query(
    `INSERT INTO noldys.buddies VALUES (DEFAULT, "${req.body.firstName}", "${
      req.body.lastName
    }", "${req.body.nickName}", "${req.body.phoneNumber}", "${req.body.nameSavedInPhone}", "${
      req.body.dateOfBirth
    }", "${req.body.language}", "${req.body.relationType}", "${
      req.body.sendAutomaticMessage ? 1 : 0
    }")`,
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
    `UPDATE noldys.buddies SET firstName = "${req.body.firstName}", lastName = "${
      req.body.lastName
    }", nickName = "${req.body.nickName}", phoneNumber = "${
      req.body.phoneNumber
    }", nameSavedInPhone = "${req.body.nameSavedInPhone}", dateOfBirth = "${
      req.body.dateOfBirth
    }", language = "${req.body.language}", relationType = "${
      req.body.relationType
    }", sendAutomaticMessage = "${req.body.sendAutomaticMessage ? 1 : 0}" WHERE id = ${
      req.params.id
    }`,
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
  dbPool.query(`DELETE FROM noldys.buddies WHERE id = ${req.params.id}`, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};
