
import Configuration  from "openai";
import OpenAIApi from "openai";

export const configureOpenAI = () => {
  const config = new Configuration({
    apiKey: process.env.OPEN_AI_SECRET,
    organization: process.env.OPENAI_ORGANISATION_ID, // Make sure this is spelled correctly
  });

  return config;

  
 };