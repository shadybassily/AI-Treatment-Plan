//components
import Search from '../Search';
import Plans from './Plans';
//hooks
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function DisplayPlans() {
   const plans = useSelector((state) => state.plan.value);
   const [searchInput, setSearchInput] = useState('');

   let searchResults = plans.filter((p) =>
      p.formData.patientName.includes(searchInput)
   );
   let plansToDisplay = searchInput === '' ? plans : searchResults;

   return (
      <div className="flex flex-col gap-y-4 w-9/12 border border-black">
         <Search searchInput={searchInput} setSearchInput={setSearchInput} />
         <Plans plansToDisplay={plansToDisplay} />
      </div>
   );
}
