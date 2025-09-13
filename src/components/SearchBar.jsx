import React, { useState } from 'react';

const SearchBar = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [travelType, setTravelType] = useState('');

  const handleSearch = () => {
    console.log({ destination, date, travelType });
    // Add your search logic here
  };

  return (
    <div className="search-bar">
      <h2>Where you want to go?</h2>
      <div className="search-bar-fields">
        <input
          type="text"
          placeholder="Where to go?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <select value={date} onChange={(e) => setDate(e.target.value)}>
          <option value="">Date</option>
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="weekend">This Weekend</option>
        </select>
        <select value={travelType} onChange={(e) => setTravelType(e.target.value)}>
          <option value="">Travel type</option>
          <option value="business">Business</option>
          <option value="leisure">Leisure</option>
          <option value="adventure">Adventure</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
