import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function getSommelierRecommendation(userHistory: any, tastingNotes: any) {
  try {
    const prompt = `
      You are a world-class Master Sommelier. 
      Based on the following user tasting history and flavor preferences, provide a personalized wine recommendation.
      
      User History: ${JSON.stringify(userHistory)}
      Recent Tasting Notes: ${JSON.stringify(tastingNotes)}
      
      Provide a response in the following format:
      "You tend to prefer [flavor profile]. Consider wines from [regions] or [producers]. [A brief, elegant explanation of why]."
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    return response.text || "I recommend exploring the elegant Pinot Noirs of Burgundy based on your preference for high acidity and earthy notes.";
  } catch (error) {
    console.error("AI Sommelier Error:", error);
    return "Our sommelier is currently in the cellar. Please try again shortly.";
  }
}
