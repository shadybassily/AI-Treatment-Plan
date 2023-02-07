import { useState } from 'react';
//components
import Form from './form/Form';
import TextEditor from './editor/TextEditor';
import { fetchResponse } from '../../hooks/useReactQuery';


export default function GeneratePlan() {
   const [formInputs, setFormInputs] = useState();
   const {
      data: chatGPTResponse,
      refetch,
      isLoading,
      isError,
   } = fetchResponse(formInputs)

   const fetchchatGPTResponse = async () => {
      await refetch();
   };
   return (
      <>
         <Form
            setFormInputs={setFormInputs}
            fetchchatGPTResponse={fetchchatGPTResponse}
         />
         <TextEditor output={chatGPTResponse} formInputs={formInputs} />
      </>
   );
}
