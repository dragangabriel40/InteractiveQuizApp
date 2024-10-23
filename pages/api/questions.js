import path from "path";
import fs from "fs";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "data", "questions.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const questions = JSON.parse(fileContents);

  res.status(200).json(questions);
}
