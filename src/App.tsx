import { useState } from 'react';
import { Cart, Footer, Header, ProductList } from './components';

export const App = () => {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <main className="p-3 flex flex-col justify-between h-screen">
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </main>
  );

  return content;
};
