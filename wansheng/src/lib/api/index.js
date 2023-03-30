const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);

export const getOpenAIResponse = async (prompt)=>{
    let response = await openai.createImage({
        prompt: prompt,
        n: 4,
        size: "1024x1024",
      });
    return response;
}