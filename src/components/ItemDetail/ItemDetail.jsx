import React, { useEffect, useContext } from 'react';
import { DataContext } from '../../context/data-context';
import CustomSelect from '../CustomSelect/CustomSelect';

const ItemDetail = () => {
  const { currentItem, selectedProduct, setSelectedProduct, fetchAddProduct } =
    useContext(DataContext);

  const handleChange = e => {
    const key = e.target.name;
    const val = e.target.value;

    if (key === 'storages') {
      parseInt(val, 10);
    }

    setSelectedProduct({
      ...selectedProduct,
      [e.target.name]: +e.target.value,
    });
  };

  useEffect(() => {
    setSelectedProduct({
      ...selectedProduct,
      id: currentItem.id,
      storageCode: currentItem?.options.storages[0].code,
      colorCode: currentItem?.colors[0],
    });
  }, []);

  return (
    <div className="dataContainer">
      <div className="imageContainer">
        <img src={currentItem.imgUrl} alt={`${currentItem.brand}-${currentItem.model}`} />
      </div>
      <div className="infoContainer">
        <div className="description">
          <div className="info">
            <div className="titles">
              <h3 className="brand">{currentItem.brand}</h3>
              <p className="model">{currentItem.model}</p>
            </div>
            <div className="priceContainer">
              <span className="price">{currentItem.price} €</span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
              }}
            >
              <span className="price">CPU: {currentItem.cpu}</span>
              <span className="price">RAM: {currentItem.ram}</span>
              <span className="price">Sistema Operativo: {currentItem.os}</span>
              <span className="price">
                Resolución de pantalla: {currentItem.displayResolution}
              </span>
              <span className="price">Batería: {currentItem.battery}</span>
              <span className="price">
                Cámaras: {currentItem.primaryCamera} {currentItem.secondaryCamera}
              </span>

              <span className="price">Dimensiones: {currentItem.dimentions} </span>
              <span className="price">Peso: {currentItem.weight} </span>
            </div>
          </div>
        </div>
        <div className="actions">
          <div className="actionsSelects">
            <CustomSelect
              title="Almacenamiento"
              id="storages"
              handleChange={e => handleChange(e)}
            >
              {currentItem?.options?.storages.map(elm => {
                return (
                  <option value={elm.code} key={elm.name}>
                    {elm.name}
                  </option>
                );
              })}
            </CustomSelect>
            <CustomSelect title="Colores" id="colors" handleChange={e => handleChange(e)}>
              {currentItem?.colors.map(elm => (
                <option value={elm} key={elm}>
                  {elm}
                </option>
              ))}
            </CustomSelect>
          </div>
          <button onClick={() => fetchAddProduct()} type="button">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
