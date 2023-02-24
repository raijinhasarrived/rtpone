import { useCart } from '../hooks/useCart';
import { Nav } from './Nav';

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  const content = (
    <header className="flex text-xl w-full justify-between">
      <h1 className="uppercase text-2xl w-full">Context</h1>
      <div className="flex flex-col w-[200px]">
        <Nav viewCart={viewCart} setViewCart={setViewCart} />
        <div>
          <p>Total Items:{totalItems}</p>
          <p>Total Price:{totalPrice}</p>
        </div>
      </div>
    </header>
  );
  return content;
};
