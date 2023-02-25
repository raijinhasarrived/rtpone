import { createContext, ReactElement, useState } from 'react';

import techscape from '../assets/techscape.png';
import neonchrono from '../assets/neonchrono.png';
import synthwave from '../assets/sunthwave.png';
import ctime from '../assets/ctime.png';
import digipunk from '../assets/digipunk.png';
import holohawk from '../assets/holohawk.png';
import cybercuf from '../assets/cybercuf.png';
import futureflash from '../assets/futureflash.png';
import glitchgear from '../assets/glitchgear.png';

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
    img: techscape,
  },
  {
    sku: 'item0002',
    name: 'NeonChrono',
    price: 19.99,
    img: neonchrono,
  },
  {
    sku: 'item0003',
    name: 'SynthWave',
    price: 29.99,
    img: synthwave,
  },
  {
    sku: 'item0004',
    name: 'CircuitTime',
    price: 39.99,
    img: ctime,
  },
  {
    sku: 'item0005',
    name: 'DigiPunk',
    price: 49.99,
    img: digipunk,
  },
  {
    sku: 'item0006',
    name: 'HoloHawk',
    price: 59.99,
    img: holohawk,
  },
  {
    sku: 'item0007',
    name: 'CyberCuff',
    price: 19.99,
    img: cybercuf,
  },
  {
    sku: 'item0008',
    name: 'FutureFlash',
    price: 29.99,
    img: futureflash,
  },
  {
    sku: 'item0009',
    name: 'GlitchGear',
    price: 39.99,
    img: glitchgear,
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
