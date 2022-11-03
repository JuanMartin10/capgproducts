import React, { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DataContext } from '../context/data-context';
import ItemDetail from '../components/ItemDetail/ItemDetail';

const DetailProduct = () => {
  const { id } = useParams();
  const { fetchOneProduct, currentItem } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOneProduct(id);
  }, []);

  return (
    currentItem && (
      <div className="page">
        <div className="detailsView">
          <div>
            <button onClick={() => navigate(-1)} className="btn" type="button">
              Volver
            </button>
          </div>
          <ItemDetail />
        </div>
      </div>
    )
  );
};

export default DetailProduct;
