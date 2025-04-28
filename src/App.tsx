import React from "react";
import { Banner, Footer, Header } from "components";
import OverviewPage from "pages/overview";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <OverviewPage />
      <Footer />
    </div>
  );
}

export default App;
