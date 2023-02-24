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
    name: 'Widget',
    price: 9.99,
    img: 'https://media.discordapp.net/attachments/1074951407435792437/1078321340706209872/widget_smart_watch_black_background_86559c22-8ae2-497c-88b6-9736996eb23b.png?width=588&height=588',
  },
  {
    sku: 'item0002',
    name: 'Premium Widget',
    price: 19.99,
    img: 'https://media.discordapp.net/attachments/1074951407435792437/1078321656906399844/widget_premiuim_smart_watch_black_background_49727b54-a415-4107-8a9f-11e8945f0dc2.png?width=588&height=588',
  },
  {
    sku: 'item0003',
    name: 'Deluxe Widget',
    price: 29.99,
    img: 'https://media.discordapp.net/attachments/1074951407435792437/1078321680931364944/widget_premiuim_smart_watch_black_background_d8cb929d-7e7e-4e29-afe0-bb5cba9c7fd2.png?width=588&height=588',
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
