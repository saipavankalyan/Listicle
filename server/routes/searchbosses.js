import express from "express";
import searchBossesController from "../controllers/searchbosses.js";

const router = express.Router();

console.log("Calling Search Controller");
router.post("/", searchBossesController.searchBosses);

export default router;
