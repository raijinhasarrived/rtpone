import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { CartLineItem } from './CartLineItem';
export const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  const pageContent = confirm ? (
    <h2>Thank you for your order.</h2>
  ) : (
    <div className="flex flex-col items-center gap-3">
      <h2 className="text-3xl">Cart</h2>
      <button
        disabled={!totalItems}
        className={`${
          !totalItems ? 'hidden' : null
        } text-2xl border rounded-md px-2 hover:bg-teal-500 transition-all duration-150`}
        onClick={onSubmitOrder}>
        Place Order
      </button>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {cart.map((item) => {
          return (
            <CartLineItem
              key={item.sku}
              item={item}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
            />
          );
        })}
      </ul>
    </div>
  );
  const content = <main className="flex justify-center">{pageContent}</main>;

  return content;
};
