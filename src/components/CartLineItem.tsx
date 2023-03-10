import { ChangeEvent, ReactElement } from 'react';
import { CartItemType } from '../context/CartProvider';
import { ReducerAction } from '../context/CartProvider';
import { ReducerActionType } from '../context/CartProvider';

type PropsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

export const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {
  const lineTotal: number = item.quantity * item.price;

  const highestQuantity: number = 10 > item.quantity ? 10 : item.quantity;

  const optionValues: number[] = [...Array(highestQuantity).keys()].map((i) => i + 1);

  const options: ReactElement[] = optionValues.map((val) => {
    return (
      <option className="bg-zinc-800" key={`opt${val}`} value={val}>
        {val}
      </option>
    );
  });

  const onChangeQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, quantity: Number(e.target.value) },
    });
  };

  const onRemoveFromCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: item,
    });

  const content = (
    <li className="flex flex-col items-center gap-2">
      <h3 className="text-3xl tracking-wide">{item.name}</h3>
      <img className="w-52 h-52 rounded-md" src={item.img} alt={item.name} />
      <div className="flex gap-2">
        <p className="text-2xl">
          {new Intl.NumberFormat('en-Us', { style: 'currency', currency: 'USD' }).format(
            item.price,
          )}
        </p>
      </div>
      <div className="flex w-full justify-between">
        <label htmlFor="itemQty">Quantity</label>
        <select
          className="bg-transparent border"
          name="itemQty"
          id="itemQty"
          value={item.quantity}
          aria-label="Item Quantity"
          onChange={onChangeQuantity}>
          {options}
        </select>
        <div aria-label="Line Item Subtotal">
          {new Intl.NumberFormat('en-Us', { style: 'currency', currency: 'USD' }).format(lineTotal)}
        </div>
      </div>
      <button
        onClick={onRemoveFromCart}
        className="text-rose-600"
        aria-label="Remove Item From Cart">
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
    </li>
  );

  return content;
};
