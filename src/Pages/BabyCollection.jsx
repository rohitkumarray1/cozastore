import React, { useContext } from 'react';
import Products from '../Components/Products';
import { Store } from '../Store/Store';

const BabyCollection = () => {
  const { productsData } = useContext(Store);
  const selectedProduct = productsData.filter(product => product.category === 'BabyCollection');

  return (
    <>
      {selectedProduct && <Products filteredProducts={selectedProduct} />}
    </>
  );
};

export default BabyCollection;
