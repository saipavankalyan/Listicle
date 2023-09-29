import express from "express";
import searchBossesController from "../controllers/searchbosses.js";

const router = express.Router();

router.post("/", searchBossesController.searchBosses);

export default router;
