import Photo1 from "../images/stray.jpeg";
import Photo2 from "../images/girl.jpeg";
import Photo3 from "../images/guer.jpeg";
import Photo4 from "../images/penitent.jpeg";
import Photo5 from "../images/storm.jpeg";
import Photo6 from "../images/wave.jpeg";
import Photo7 from "../images/van.jpeg";
import Photo8 from "../images/basket.jpeg";

const Gallary = () => {
  return (
    <div class="gallery">
      <div>
        <div class="gallery-item">
          <a href="link-to-artwork-1">
            <img src={Photo1} alt="Logo" />
            <div class="title">
              Starry Night <br /> Vincent Van Gogh
            </div>
          </a>
        </div>
        <div class="gallery-item">
          <a href="link-to-artwork-2">
            <img src={Photo2} alt="Logo" />
            <div class="title">
              Girl with a Pearl Earring <br /> Johannes Vermeer
            </div>
          </a>
        </div>
      </div>
      
      <div>
        <div class="gallery-item">
          <a href="link-to-artwork-3">
            <img src={Photo3} alt="Logo" />
            <div class="title">
              Guernica <br /> Pablo Picasso
            </div>
          </a>
        </div>
        <div class="gallery-item">
          <a href="link-to-artwork-3">
            <img src={Photo4} alt="Logo" />
            <div class="title">
              Guernica <br /> Pablo Picasso
            </div>
          </a>
        </div>
      </div>

      <div>
        <div class="gallery-item">
          <a href="link-to-artwork-3">
            <img src={Photo5} alt="Logo" />
            <div class="title">
              Guernica <br /> Pablo Picasso
            </div>
          </a>
        </div>
        <div class="gallery-item">
          <a href="link-to-artwork-3">
            <img src={Photo6} alt="Logo" />
            <div class="title">
              Guernica <br /> Pablo Picasso
            </div>
          </a>
        </div>
      </div>

      <div>
        <div class="gallery-item">
          <a href="link-to-artwork-3">
            <img src={Photo7} alt="Logo" />
            <div class="title">
              Guernica <br /> Pablo Picasso
            </div>
          </a>
        </div>
        <div class="gallery-item">
          <a href="link-to-artwork-3">
            <img src={Photo8} alt="Logo" />
            <div class="title">
              Guernica <br /> Pablo Picasso
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
