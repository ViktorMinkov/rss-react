import Footer from 'components/Footer';
import Header from 'components/Header';
import React, { FC } from 'react';
import './Layout.scss';

type LayoutProps = {
  component: React.ReactNode;
  title: string;
};

const Layout: FC<LayoutProps> = (props) => {
  const { component, title } = props;
  return (
    <>
      <Header title={title} />
      <main className="main">
        <div className="main__container container">{component}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
