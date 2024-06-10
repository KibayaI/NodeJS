import { Router } from "express";
import express from "express";
import { checkSchema } from "express-validator";
import { eventsController } from "../Controllers/eventsController.mjs";
import { valid_schema } from "../Utils/Schema/schema.mjs";
import findUser from "../Helper/findUser.mjs";

const route = Router();

route.use(express.json());

route.route("/").get(eventsController.listEvents);

route
  .route("/events")
  .post(checkSchema(valid_schema), eventsController.addEvent);

route
  .route("/events/:id")
  .get(findUser, eventsController.getOne)
  .put(findUser, checkSchema(valid_schema), eventsController.updateEvent)
  .delete(findUser, eventsController.removeEvent);

export default route;
