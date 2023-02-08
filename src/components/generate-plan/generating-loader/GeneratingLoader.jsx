import './generating-loader.css';

export default function GeneratingLoader() {
   return (
      <div className="generating-loader">
         <div className="lds-ripple">
            <div></div>
            <div></div>
         </div>
      </div>
   );
}
