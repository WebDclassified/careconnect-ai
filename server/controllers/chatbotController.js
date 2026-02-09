console.log("GEMINI KEY:", process.env.GEMINI_API_KEY);


const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  generationConfig: {
    maxOutputTokens: 80,
    temperature: 0.4,
  },
});

exports.chat = async (req, res) => {
  try {

    const { message } = req.body;

    const prompt = `
You are CareConnect AI, a healthcare assistant.

STRICT RULES:
- Maximum 2 sentences.
- Use simple language.
- Be direct and to the point.
- Do NOT explain too much.
- Do NOT provide detailed medical advice.
- If serious symptoms appear, recommend seeing a doctor.

Examples:

User: I have mild fever  
Reply: Stay hydrated and rest. See a doctor if it lasts more than 2 days.

User: Chest pain  
Reply: Seek immediate medical attention or call emergency services.

Now answer this:

${message}
`;


   const result = await model.generateContent(prompt);
const reply = result.response.text();


    res.json({
      reply
    });

  } catch (err) {

  console.error("🔥🔥 FULL GEMINI ERROR BELOW 🔥🔥");
  console.error(err);
  console.error("MESSAGE:", err.message);
  console.error("STACK:", err.stack);

  res.status(500).json({
    error: err.message,
  });
  }
};
