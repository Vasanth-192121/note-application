import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {

  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  }

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };

  return (
    <div className='bg-white flex items-center gap-[8%] md:gap-[20%] lg:gap-[25%] xl:gap-[30%] px-6 py-2 drop-shadow'>
        <h2 className='text-xl font-medium text-black py-2'>
            Notes
        </h2>

      {userInfo && ( <SearchBar 
          value={searchQuery} 
          onChange={({ target }) => { setSearchQuery(target.value); }} 
          handleSearch={handleSearch} 
          onClearSearch={onClearSearch} 
        />
      )}
        
      <ProfileInfo 
        userInfo={userInfo}
        onLogOut={onLogout}
      />

    </div>
  );
}

export default Navbar;