import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const buddySchema = Joi.object({
  firstName: Joi.string().required().max(35),
  lastName: Joi.string().required().max(35),
  nickName: Joi.string().optional().max(35),
  phoneNumber: Joi.string().optional().length(12),
  nameSavedInPhone: Joi.string().optional().max(50),
  dateOfBirth: Joi.date().required().less("now"),
  language: Joi.string().required().max(35),
  relationType: Joi.string().required().max(35),
  sendAutomaticMessage: Joi.boolean().required(),
});

export const validateBuddy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await buddySchema.validateAsync(req.body);
    return next();
  } catch (err) {
    return res.status(500).send(err);
  }
};
