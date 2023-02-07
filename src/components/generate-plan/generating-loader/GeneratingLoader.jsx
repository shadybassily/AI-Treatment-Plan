import './generating-loader.css';

export default function GeneratingLoader() {
   return (
      <div className="generating-loader">
         <div class="lds-ripple">
            <div></div>
            <div></div>
         </div>
      </div>
   );
}
