import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.json({ message: "Auth Route is Running Fine" });
});

export default router;
