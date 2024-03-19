import React from 'react';

const SearchBox = ({value, onChange}) => {
  return (
    <input
      className="form-control my-3"
      value={value}
      name="query"
      type="search"
      placeholder="Search..."
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
