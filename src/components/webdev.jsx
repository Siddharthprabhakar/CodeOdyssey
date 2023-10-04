import { Container, Row, Col } from 'react-bootstrap';
import './webdev.css';
import webmap from '../images/Web Development.png';
import webd from '../images/webdev.png';

const Webdev = () => {
    return (
    <div className="webmind-map">
      <div className="textbox1">Web Development</div>

      <div class="line1"></div>
      <div className="sbox">
          <img src={webd} alt="Web Development" height="100px"/>
      </div>
      <div className="webimg">
        <img src={webmap} alt="map" />
      </div>
    </div>
);};
export default Webdev;
