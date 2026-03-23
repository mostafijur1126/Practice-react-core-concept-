import React, { useState } from 'react';

export default function LiveSearch() {
  const items = ['apple', 'banana', 'mango'];
  const [search, setSearch] = useState('');
  const filterItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      <h2>Live Search</h2>
      <input
        type="text"
        placeholder="Search fruit..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {filterItems.length === 0 ? (
        <p>No result found</p>
      ) : (
        <ul>
          {filterItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
