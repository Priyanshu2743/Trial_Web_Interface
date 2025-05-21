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
import MachuPicchuReasonsnew from './New_try';
import TravelShowcase from './slider_new';
import MyDesignComponent from './text_base_slider';
import EthiccraftSociety from './new_header';
import Text from './Text_Slider1';
import  Timeline  from './timeline';
import CertificateSection from './Certificates';

function App() {
  return (
    <div className="App">
      <EthiccraftSociety />
      <HexagonGrid />
      {/* <MyDesignComponent /> */}
      <MachuPicchuReasonsnew />
      {/* <HexagonGrids /> */}
      {/* <TravelShowcase /> */}
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
      <Text />
      <Timeline />
      <CertificateSection />
    </div>
  );
}

export default App;
