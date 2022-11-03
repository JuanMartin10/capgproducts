/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-props-no-multi-spaces */
import { useState, useEffect, createContext, useRef } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { addProductToCart, getAllProducts, getProductDetails } from '../services';

export const DataContext = createContext();

const DataProvider = props => {
  const [data, setData] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  const [inputSearchData, setInputSearchData] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [shoppingBag, setShoppingBag] = useState(0);
  const [expirationValue, setExpirationValue] = useLocalStorage('expirationHour', '');

  const dataPending = useRef(false);

  const fetchData = async () => {
    dataPending.current = true;

    const res = await getAllProducts();
    setData(res);

    dataPending.current = false;
  };

  const searchData = async query => {
    const queryLowercase = query.toLowerCase();
    setInputSearchData(query);

    try {
      if (queryLowercase.length > 0) {
        const map = data.filter(elm => {
          return (
            elm.model.toLowerCase().includes(queryLowercase) ||
            elm.brand.toLowerCase().includes(queryLowercase)
          );
        });
        setData(map);
      } else {
        fetchData();
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const fetchOneProduct = async id => {
    dataPending.current = true;

    const res = await getProductDetails(id);
    setCurrentItem(res);

    dataPending.current = false;
  };

  const fetchAddProduct = () => {
    dataPending.current = true;
    if (!selectedProduct) return;

    const res = addProductToCart(selectedProduct);

    setShoppingBag(res.count);

    dataPending.current = false;
  };

  const saveHourIntoLocalstorage = () => {
    const hours = 1;
    const now = new Date().getTime();

    if (expirationValue == null) {
      setExpirationValue(now);
    } else if (now - expirationValue > hours * 60 * 60 * 1000) {
      localStorage.clear();
      setExpirationValue(now);
    }
  };
  useEffect(() => {
    if (!data) {
      saveHourIntoLocalstorage();
      fetchData();
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        searchData,
        inputSearchData,
        setInputSearchData,
        fetchOneProduct,
        currentItem,
        setCurrentItem,
        selectedProduct,
        setSelectedProduct,
        fetchAddProduct,
        shoppingBag,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
