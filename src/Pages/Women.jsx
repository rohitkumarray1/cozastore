import React, { useContext } from 'react';
import Products from '../Components/Products';
import { Store } from '../Store/Store';

const Women = () => {
  const { productsData } = useContext(Store);
  const selectedProduct = productsData.filter(product => product.category === 'Women');

  return (
    <>
      {selectedProduct && <Products filteredProducts={selectedProduct} />}
    </>
  );
};

export default Women;
