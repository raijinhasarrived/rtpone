import { useCart } from '../hooks/useCart';

type PropsType = {
  viewCart: boolean;
};

export const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <p>Shopping Cart &copy; {year}</p>
  ) : (
    <div className="flex flex-col gap-1">
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
      <p>Shopping Cart &copy; {year}</p>
    </div>
  );

  const content = <footer className="flex justify-end">{pageContent}</footer>;

  return content;
};
