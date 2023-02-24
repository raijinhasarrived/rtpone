import { useCart } from '../hooks/useCart';
import { useProducts } from '../hooks/useProducts';
import { UseProductsContextType } from '../context/ProductsProvider';
import { ReactElement } from 'react';
import { Product } from './Product';

export const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);

      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  }

  const content = (
    <main className="flex gap-5 justify-center flex-col sm:flex-row">{pageContent}</main>
  );

  return content;
};
