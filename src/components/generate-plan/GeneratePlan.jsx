import { useState } from 'react';
//components
import Form from './form/Form';
import TextEditor from './editor/TextEditor';
import { fetchResponse } from '../../hooks/useReactQuery';
import GeneratingLoader from './generating-loader/GeneratingLoader';

export default function GeneratePlan() {
   const [formInputs, setFormInputs] = useState({});
   const {
      data: chatGPTResponse,
      refetch,
      fetchStatus,
   } = fetchResponse(formInputs);

   const fetchchatGPTResponse = async () => {
      await refetch();
   };

   return (
      <>
         {fetchStatus == 'fetching' && <GeneratingLoader />}

         <Form
            setFormInputs={setFormInputs}
            fetchchatGPTResponse={fetchchatGPTResponse}
         />
         <TextEditor
            chatGPTResponse={chatGPTResponse}
            formInputs={formInputs}
         />
      </>
   );
}
