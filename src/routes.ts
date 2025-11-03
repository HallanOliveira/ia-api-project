import { Router } from "express";
import { QuestionController } from "./presentation/api/controllers/QuestionController";

export const router = Router();

const questionController = new QuestionController;

router.get("/", (req, res) => {
  res.json({ message: "API funcionando com TypeScript!" });
});

router.post("/question", (req, res) => { questionController.handle(req, res) });
