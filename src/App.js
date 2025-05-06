import HexagonGrid from './Hexagonal';
import './App.css';
import BusinessInfographic from './Objectives';
import BusinessInfographics from './Obj';
import ChurchLayout from './layout';
// import parallaxLayout from './parallax_Layout';
import GalleryCarousel from './GalleryCarousel';
import UpcomingEvents from './UpcomingEvent';
import LatestStories from './stories';
import TrekkerHighlights from './TrekkerHighlights';
import MachuPicchuReasons from './diamond_layout';
import ExcursionRoute from './Route';
import TriglavSection from './Destination';
import HexagonGrids from './newhexagon';
import BusinessInfographics1 from './newbi';

function App() {
  return (
    <div className="App">
      <HexagonGrid />
      <HexagonGrids />
      {/* <BusinessInfographic /> */}
      <BusinessInfographics1 />
      <BusinessInfographics />
      {/* <parallaxLayout /> */}
      <ChurchLayout />
      <GalleryCarousel />
      <UpcomingEvents />
      <LatestStories />
      <TrekkerHighlights />
      <MachuPicchuReasons />
      <ExcursionRoute />
      <TriglavSection />
    </div>
  );
}

export default App;
