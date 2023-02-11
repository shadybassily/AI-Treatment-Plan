import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

const getRespones = async () => {
   return await Axios.get(
      'https://api.api-ninjas.com/v1/loremipsum?paragraphs=2',
      {
         headers: {
            'X-Api-Key': 'rL1hLqNnQdSUkpsTBqiA7g==FgHTz0OZtGWe8aAW',
         },
      }
   ).then((res) => res.data);
};

export const fetchChatGPTResponse = () => {
   return useQuery({
      queryKey: ['chatGPT-response'],
      queryFn: getRespones,
      enabled: false,
   });
};

