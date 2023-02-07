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
      isLoading,
      isError,
      fetchStatus
   } = fetchResponse(formInputs);

   const fetchchatGPTResponse = async () => {
      await refetch();
   };

   console.log(isLoading,fetchStatus)
   return (
      <>
      {fetchStatus == "fetching" && <GeneratingLoader />}

         <Form
            setFormInputs={setFormInputs}
            fetchchatGPTResponse={fetchchatGPTResponse}
         />
         <TextEditor output={chatGPTResponse} formInputs={formInputs} />
      </>
   );
}
