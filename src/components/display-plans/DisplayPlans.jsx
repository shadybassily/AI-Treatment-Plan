//components
import Search from '../Search';
import Plans from './Plans';
//hooks
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function DisplayPlans() {
   const [searchInput, setSearchInput] = useState('');

   const plans = useSelector((state) => state.plan.value);
   const searchResults = plans.filter((p) =>
      p.formData.patientName.includes(searchInput)
   );
   const plansToDisplay = searchInput === '' ? plans : searchResults;

   return (
      <div className="flex flex-col gap-y-4 w-9/12 h-2/4 py-4 m-auto">
         <Search searchInput={searchInput} setSearchInput={setSearchInput} />
         <Plans plansToDisplay={plansToDisplay} />
      </div>
   );
}
