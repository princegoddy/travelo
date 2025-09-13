import About from "./components/About"
// import CarouselExample from "./components/About"
import Footer from "./components/footer"
import Navbar from "./components/NavBar"
import PopularPlaces from "./components/Places"
import PopularDestination from "./components/PopularDestination"
import SearchBar from "./components/SearchBar"
import ServiceItem from "./components/Service"
import SlickSection from "./components/SlickSection"
import Subscribe from "./components/Subscribe"
import RecentTrips from "./components/Trips"
import VideoBackground from "./components/Video"
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
   <Navbar/>
   <About/>
   {/* <CarouselExample/> */}
   <SearchBar/>
   <PopularDestination/>
   <Subscribe/>
  <PopularPlaces/>
  <VideoBackground />
  <ServiceItem/>
  <SlickSection/>
  <RecentTrips/>
  <Footer/>
    </>
  )
}

export default App
