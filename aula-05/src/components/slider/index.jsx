import * as S from "./styles";
import { Slide } from "react-slideshow-image";
import PropTypes from "prop-types";

function Slider({ slickProps, banners = [] }) {
  return (
    <S.Container>
      <Slide>
        {banners.map((banner) => (
          <div className="each-slide-effect" key={banner.url}>
            <div style={{ backgroundImage: `url(${banner.image})` }}></div>
          </div>
        ))}
      </Slide>
    </S.Container>
  );
}

Slider.defaultProps = {
  slickProps: {},
  banners: [],
};

Slider.propTypes = {
  slickProps: PropTypes.shape({
    dots: PropTypes.bool,
    infinite: PropTypes.bool,
    speed: PropTypes.number,
    slidesToShow: PropTypes.number,
    slidesToScroll: PropTypes.number,
  }),
  banners: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

export default Slider;
