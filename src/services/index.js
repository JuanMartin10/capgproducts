const URL_BASE = 'https://front-test-api.herokuapp.com/api/';

const getApiUrl = path => `${URL_BASE}${path}`;

export const fetchApi = async url => {
  try {
    const res = await fetch(getApiUrl(url), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      const data = await res.json();
      if (data && Object.keys(data).length > 0) {
        return data;
      }
      return null;
    }
    throw new Error(res.status);
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllProducts = async () => {
  return fetchApi('product');
};
export const getProductDetails = async id => {
  return fetchApi(`product/${id}`);
};

export const addProductToCart = async product => {
  try {
    const res = await fetch(getApiUrl('cart'), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    return await res.json();
  } catch (error) {
    throw new Error(error);
  }
};
