import React, { useState } from 'react';
import styles from './SearchBar.module.css';

type Props = {
  handleFilter: any;
};

const SearchBar = ({ handleFilter }: Props) => {
  const [search, setSearch] = useState('');
  const [completed, setCompleted] = useState(null);

  const handleCompletedChange = (e: any) => {
    setCompleted(e.target.value);
    handleFilter(search, completed);
  };

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
    handleFilter(search, completed);
  };

  return (
    <div className={styles.search_bar}>
      <div>
        <label>
          Search
          <input
            name="search"
            id="search"
            type="text"
            onChange={(e) => handleSearchChange(e)}
            value={search}
          />
        </label>

        <label>
          Completed{' '}
          <select
            name="completed"
            id="completed"
            onChange={(e) => handleCompletedChange(e)}
            defaultValue="null"
          >
            <option value="null"></option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
