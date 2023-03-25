import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';
import './Layout.scss';

type LayoutProps = {
  component: React.ReactNode;
  title: string;
};

class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <>
        <Header title={this.props.title} />
        <main className="main">
          <div className="main__container container">{this.props.component}</div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Layout;
