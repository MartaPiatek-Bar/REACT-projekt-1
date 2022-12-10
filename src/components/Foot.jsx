import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const Foot = () => {

    return (

    <footer class="foot">
      <div class="container footer-menu">
        <div class="copy">Rodzina Barów - najlepsze przygody</div>
        <div class="box-icon">
          <div class="insta">
          <FaInstagram />
          </div>
          <div class="fb">
          <FaFacebookSquare />
          </div>
        </div>
      </div>
    </footer>

    );
}

export default Foot;