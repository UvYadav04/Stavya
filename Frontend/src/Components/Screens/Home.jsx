
import Navbar from '../Navbar'
import Front from '../Front';
import CulturalCard1 from '../CulturalCard1';
import Footer from '../Footer';
import LiteratureCard1 from '../LiteratureCard1';
import Attribute from '../Attribute';
import logo from '../Logos/logo3.png'
import p1 from '../bgimgs/p1_.png'

function App() {
  return (
    <div className='mainheadbody'>

      <div className="head ">
        <img src={logo} alt="" className="bgimg" />
        <Navbar />
        <Front />

      </div>

      {/* <div className="attributes  mt-5 ">
        <Attribute />
      </div> */}

      <div className=" container items cultural1">
        <CulturalCard1 />
      </div>

      <div className=" container items mt-5 literature1">
        <LiteratureCard1 />
      </div>


      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
