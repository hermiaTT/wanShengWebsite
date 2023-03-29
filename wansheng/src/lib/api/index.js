const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);

export const getOpenAIResponse =(prompt)=>{
    let response = openai.createImage({
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      });
    return response;
}