import Footer from 'components/Footer';
import Header from 'components/Header';
import React, { FC } from 'react';
import './Layout.scss';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__container container">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
