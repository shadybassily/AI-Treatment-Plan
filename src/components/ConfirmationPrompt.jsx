
export default function ConfirmationPrompt({ promptMessage, setIsShowPrompt,action }) {
   const handleNoClicked = ()=>{
      setIsShowPrompt(false)
   }

   const handleYesClicked = ()=>{
      action()
      setIsShowPrompt(false)
   }
   return (
      <div className="absolute w-full h-full bg-dimmed z-10 top-0 flex justify-center items-center">
         <div className="bg-white p-4 flex flex-col gap-y-6">
            {promptMessage}
            <div className="border border-black flex justify-evenly">
               <button className="border border-black p-2" onClick={handleYesClicked}>Yes</button>
               <button className="border border-black p-2" onClick={handleNoClicked}>No</button>
            </div>
         </div>
      </div>
   );
}
