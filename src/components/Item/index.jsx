import { Link } from 'react-router-dom';
import './index.css';

const Item = ({ id, imgUrl, brand, model, price }) => {
  return (
    <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
      <div className="item">
        <div className="image">
          <img src={imgUrl} alt={`${brand}-${model}`} />
        </div>
        <div className="info">
          <div className="titles">
            <h3 className="brand">{brand}</h3>
            <p className="model">{model}</p>
          </div>
          <div className="priceContainer">
            <span className="price">{price}€</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
