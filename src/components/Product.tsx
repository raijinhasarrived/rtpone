import { ProductType } from '../context/ProductsProvider';
import { ReducerActionType, ReducerAction } from '../context/CartProvider';
import { ReactElement } from 'react';

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

export const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {
  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, quantity: 1 } });

  const onRemoveFromCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: { ...product, quantity: 1 },
    });

  const content = (
    <article className="flex flex-col items-center">
      <h3 className="text-2xl tracking-wide">{product.name}</h3>
      <img className="w-52 h-52 rounded-md" src={product.img} alt={product.name} />
      <div className="flex gap-2">
        <p className="text-xl">
          {new Intl.NumberFormat('en-Us', { style: 'currency', currency: 'USD' }).format(
            product.price,
          )}
        </p>
        {inCart ? (
          <button onClick={onRemoveFromCart}>remove from Cart</button>
        ) : (
          <button onClick={onAddToCart}>add to Cart</button>
        )}
      </div>
    </article>
  );

  return content;
};
