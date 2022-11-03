/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import Searchbar from '../components/Searchbar';
import { DataContext } from '../context/data-context';
import Item from '../components/Item';

const IndexPage = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="page">
      <div className="searchbarContainer">
        <Searchbar />
      </div>
      <div className="results">
        {data &&
          data.map(item => {
            return <Item {...item} key={item.id} />;
          })}
      </div>
    </div>
  );
};

export default IndexPage;
