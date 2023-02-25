import { createContext, ReactElement, useState } from 'react';

export type ProductType = {
  sku: string;
  name: string;
  price: number;
  img: string;
};

const initState: ProductType[] = [
  {
    sku: 'item0001',
    name: 'TechScape',
    price: 9.99,
    img: 'https://media.discordapp.net/attachments/1074951407435792437/1078985580119072899/SanjikOne_cyberpunk_watch_black_background_8e00724c-f162-48ba-b579-0b04a4ab89bc.png?width=588&height=588',
  },
  {
    sku: 'item0002',
    name: 'NeonChrono',
    price: 19.99,
    img: 'https://media.discordapp.net/attachments/1074951407435792437/1078984543492644924/SanjikOne_cyberpunk_watch_black_background_8c2b0537-e39a-4703-871a-04e1d53edf31.png?width=588&height=588',
  },
  {
    sku: 'item0003',
    name: 'SynthWave',
    price: 29.99,
    img: 'https://media.discordapp.net/attachments/1074951407435792437/1078979891762057268/SanjikOne_cyberpunk_watch_black_background_a57eb84b-f15f-44c9-b267-7ca00d5f19e6.png?width=588&height=588',
  },
  {
    sku: 'item0004',
    name: 'CircuitTime',
    price: 39.99,
    img: 'https://media.discordapp.net/attachments/1074951407435792437/1078978824164876341/SanjikOne_cyberpunk_watch_black_background_722f938c-5713-41a3-8a81-a4faa5a27271.png?width=588&height=588',
  },
  {
    sku: 'item0005',
    name: 'DigiPunk',
    price: 49.99,
    img: 'https://media.discordapp.net/attachments/1074951407435792437/1078978832360558592/SanjikOne_cyberpunk_watch_black_background_ef599e25-a8f5-4067-8588-2554196f9fa8.png?width=588&height=588',
  },
  {
    sku: 'item0006',
    name: 'HoloHawk',
    price: 59.99,
    img: 'https://media.discordapp.net/attachments/1074951407435792437/1078979906878328862/SanjikOne_cyberpunk_watch_black_background_bd0a2dbe-16cc-487b-9237-e2fec9992b02.png?width=588&height=588',
  },
  {
    sku: 'item0007',
    name: 'CyberCuff',
    price: 19.99,
    img: 'https://media.discordapp.net/attachments/1074951407435792437/1078984211618345001/SanjikOne_cyberpunk_watch_black_background_66835a90-3259-49c6-92d2-a74cbbc7b3b9.png?width=588&height=588',
  },
  {
    sku: 'item0008',
    name: 'FutureFlash',
    price: 29.99,
    img: 'https://media.discordapp.net/attachments/1074951407435792437/1078984472734732408/SanjikOne_cyberpunk_watch_black_background_77c0cc65-78bc-4639-ab38-92fc5d7438c4.png?width=588&height=588',
  },
  {
    sku: 'item0009',
    name: 'GlitchGear',
    price: 39.99,
    img: 'https://media.discordapp.net/attachments/1074951407435792437/1078984559460372561/SanjikOne_cyberpunk_watch_black_background_ef105856-d36d-452f-8535-988f2e97362b.png?width=588&height=588',
  },
];

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>;
};

export default ProductsContext;
