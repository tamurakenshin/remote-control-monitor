import turnOffDisplay from "turn-off-display";
import express from "express";
import type { Request, Response } from "express";

const app = express();

app.get("/off", (req: Request, res: Response) => {
  try {
    turnOffDisplay();
    res.send("1");
  } catch (err) {
    res.status(500).send("0");
  }
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
