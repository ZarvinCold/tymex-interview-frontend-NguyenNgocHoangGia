import { Banner, Footer, Header } from "components";
import OverviewPage from "pages/overview";
import CollectionsPage from "pages/CollectionsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import background from "assets/body-background.png";
import bodyBottom from "assets/body-bottom.svg";
import { StyledOverviewPageWrapper } from "pages/overview/index.styled";

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <StyledOverviewPageWrapper
        $background={background}
        $bottomBackground={bodyBottom}
      >
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
        </Routes>
      </StyledOverviewPageWrapper>
      <Footer />
    </Router>
  );
}

export default App;
