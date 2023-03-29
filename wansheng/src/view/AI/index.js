import { Flex } from "@chakra-ui/react";
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import InputWS from "../../components/field/Input";
const AI = () => {

  const dispatch = useDispatch();
  const state = useSelector((state)=>state.AI);
  const [prompt, setPrompt] = useState("");
  const aiImg =state.aiImg;
  const [loading, setLoading] = useState(false);
  console.log(state);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     // const result = await openai.createCompletion({
  //     //   model: "text-davinci-003",
  //     //   prompt: prompt,
  //     //   temperature: 0.5,
  //     //   max_tokens: 4000,
  //     // });
  //     const response = await openai.createImage({
  //       prompt: prompt,
  //       n: 1,
  //       size: "1024x1024",
  //     });
  //     setApiResponse( response.data.data[0].url);
  //     //console.log("response", result.data.choices[0].text);
  //     // setApiResponse(result.data.choices[0].text);
  //   } catch (e) {
  //     //console.log(e);
  //     setApiResponse("Something is going wrong, Please try again.");
  //   }
  //   setLoading(false);
  // };

  const updateInput = (id,value)=>{
    dispatch({type:"UPDATE_AI", id:id, value:value});
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true);
    dispatch({type:"UPDATE_DES", value:prompt});
    setLoading(false);
  }
  return (
    <Flex className="ws_openAI section__margin">
      <div className="ws_openAI-question-container" >
      <Tabs isFitted  size='lg' variant='enclosed' >
        <TabList  className ="ws_tab" >
          <Tab>Idea Inspiration</Tab>
          <Tab>Phote moderation</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <form onSubmit={handleSubmit}>
            <textarea
              type="text"
              value={prompt}
              style={{color:"black"}}
              placeholder="Please ask to openai"
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
            <button
              disabled={loading || prompt.length === 0}
              type="submit"
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </form>
          </TabPanel>
          <TabPanel>
            <div>input</div>
            {state.customInput.map((item,key)=>(
              <InputWS title={item.id} placeholder={item.label} onChange={(e)=>updateInput(item.id, e.target.value)}/>
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>

      </div>
      {aiImg && (
        <div className="ws_openAI-img-container">
            <img src={aiImg} alt="aiImg"/>
        </div>
      )}
    </Flex>
  );
};


export default AI;