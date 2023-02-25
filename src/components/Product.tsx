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
      <h3 className="text-3xl tracking-wide">{product.name}</h3>
      <img className="w-52 h-52 rounded-md" src={product.img} alt={product.name} />
      <div className="flex gap-2">
        <p className="text-2xl">
          {new Intl.NumberFormat('en-Us', { style: 'currency', currency: 'USD' }).format(
            product.price,
          )}
        </p>
        {inCart ? (
          <button className={`${inCart ? 'text-rose-600' : null}`} onClick={onRemoveFromCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          <button onClick={onAddToCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </article>
  );

  return content;
};
