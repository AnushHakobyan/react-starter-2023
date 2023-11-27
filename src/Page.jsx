import PageContent from './PageContent';
import Navigation from './Navigation/Navigation';
import Header from './Header';

const Page = () => {
  return (
      <div className="page">
          <Navigation />
          <div className="container">
              <Header />
              <PageContent />
          </div>
      </div>
  );
};

export default Page;
