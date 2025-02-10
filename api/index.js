const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const JUDGE0_API_URL = "https://judge0-ce.p.rapidapi.com/submissions";
const JUDGE0_API_KEY = "47a083ad7dmshab3d53869a6b178p1fb853jsn0d8aff7c7f2d";  // Replace with your API key

// Language ID Mapping
const languageIds = {
  cpp: 54, // C++ (GCC 9.2.0)
  python: 71, // Python (3.8.1)
  java: 62, // Java (OpenJDK 13.0.1)
};

// Run Code API
app.post("/run", async (req, res) => {
  const { language, code, input } = req.body;

  if (!languageIds[language]) {
    return res.status(400).json({ error: "Unsupported language" });
  }

  try {
    const response = await axios.post(
      `${JUDGE0_API_URL}?base64_encoded=false&wait=true`,
      {
        source_code: code,
        language_id: languageIds[language],
        stdin: input,
      },
      {
        headers: {
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          "X-RapidAPI-Key": JUDGE0_API_KEY,
        },
      }
    );

    res.json({ output: response.data.stdout || response.data.stderr || "No Output" });
  } catch (error) {
    res.status(500).json({ error: "Error running code" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
