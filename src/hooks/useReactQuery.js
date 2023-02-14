// import { useQuery } from '@tanstack/react-query';
// import Axios from 'axios';

// const getResponse = async ({queryKey}) => {
//    const [_, formInputs] = queryKey
//    console.log(formInputs)
//    return await Axios.get(
//       'https://api.api-ninjas.com/v1/loremipsum?paragraphs=2',
//       {
//          headers: {
//             'X-Api-Key': 'rL1hLqNnQdSUkpsTBqiA7g==FgHTz0OZtGWe8aAW',
//          },
//       }
//    ).then((res) => res.data);
// };
// export const fetchChatGPTResponse = (generatePlan, formInputs) => {
//    return useQuery({
//       queryKey: ['chatGPT-response', formInputs],
//       queryFn: getResponse,
//       onSuccess(response) {
//          generatePlan(response); //when the response !== undefined, generate the plane
//       },
//       enabled: false,
//    });
// };
