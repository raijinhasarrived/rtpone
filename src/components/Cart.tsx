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
    <div className="flex flex-col items-center">
      <h2 className="text-2xl">Cart</h2>
      <button disabled={!totalItems} onClick={onSubmitOrder}>
        Place Order
      </button>
      <ul className="flex flex-col sm:flex-row gap-5 justify-center">
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
