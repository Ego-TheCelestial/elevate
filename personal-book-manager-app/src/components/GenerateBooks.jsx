import React from "react";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const GenerateBooks = async () => {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-001",
        contents: "Why is the sky blue?",
    });
    console.log(response.text())

    return <div></div>;
};

export default GenerateBooks;
