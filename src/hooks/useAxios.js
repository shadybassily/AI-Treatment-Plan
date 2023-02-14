import axios from 'axios';
import { useState } from 'react';

const useAxios = () => {
   const [isLoading, setIsLoading] = useState(false);
   const baseURL = 'https://api.api-ninjas.com/v1/loremipsum?paragraphs=2';
   const config = {
      headers: {
         'X-Api-Key': 'rL1hLqNnQdSUkpsTBqiA7g==FgHTz0OZtGWe8aAW',
      },
   };

   const fetchChatGPTResponse = async () => {
      let response;
      try {
         setIsLoading(true); //show the loading spinner
         response = await axios.get(baseURL, config).then((res) => res.data);
         setIsLoading(false); //hide the loading spinner
         return response;
      } catch (e) {
         console.log(e);
      }
   };

   return [fetchChatGPTResponse, isLoading];
};

export default useAxios;
