import React, { useContext } from 'react';
import Products from '../Components/Products';
import { Store } from '../Store/Store';

const Men = () => {
  const { productsData } = useContext(Store);
  const selectedProduct = productsData.filter(product => product.category === 'Men');

  return (
    <>
      {selectedProduct && <Products filteredProducts={selectedProduct} />}
    </>
  );
};

export default Men;
