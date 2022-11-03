import React, { useContext } from 'react';
import { DataContext } from '../../context/data-context';
import './index.css';

const Searchbar = () => {
  const { searchData, inputSearchData } = useContext(DataContext);

  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        placeholder="¿Qué estas buscando?"
        value={inputSearchData}
        onChange={e => searchData(e.target.value)}
      />
      <button type="submit" className="searchButton">
        Buscar
      </button>
    </div>
  );
};

export default Searchbar;
