import { BsSearch } from 'react-icons/bs';

export default function Search({searchInput, setSearchInput}) {
   return (
      <div className="flex flex-row items-center gap-2 p-2 shadow rounded-full bg-white text-secondary">
         <BsSearch className="w-auto h-4" />
         <input
            className="w-full placeholder:text-secondary placeholder:font-light font-medium outline-none text-sm text-secondary bg-transparent "
            placeholder="Search"
            value={searchInput}
            onChange={(e) => {
               setSearchInput(e.target.value);
            }}
         />
      </div>
   );
}
