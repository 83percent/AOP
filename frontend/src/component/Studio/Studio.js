import Slider from "react-slick";
import { memo } from "react";
import { Link } from 'react-router-dom';

// CSS
import '../../contents/css/studio/Studio.css';

// Image
import Logo from '../../contents/logo/logo.png';

import studio_3 from '../../contents/image/studio/studio_3.jpg';
import studio_4 from '../../contents/image/studio/studio_4.jpg';
import studio_5 from '../../contents/image/studio/studio_5.jpg';
import studio_6 from '../../contents/image/studio/studio_6.jpg';
import studio_7 from '../../contents/image/studio/studio_7.jpg';
import studio_8 from '../../contents/image/studio/studio_8.jpg';
import studio_9 from '../../contents/image/studio/studio_9.jpg';
import studio_10 from '../../contents/image/studio/studio_10.jpg';
import studio_11 from '../../contents/image/studio/studio_11.jpg';
import studio_12 from '../../contents/image/studio/studio_12.jpg';
import studio_13 from '../../contents/image/studio/studio_13.jpg';
import studio_14 from '../../contents/image/studio/studio_14.jpg';
import studio_15 from '../../contents/image/studio/studio_15.jpg';
import studio_16 from '../../contents/image/studio/studio_16.jpg';

const Studio = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        autoplay : true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };
    const resource = [studio_3, studio_4, studio_5, studio_6, studio_7, studio_8, studio_9, studio_10, studio_11, studio_12, studio_13, studio_14, studio_15, studio_16 ];
    return (
        <article id="studio">
            <div className="title">
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
                <h1>시설 사진</h1>
            </div>
            <div className="container">
                <Slider {...settings}>
                    {
                        resource.map((element, index) => (
                            <div key={index}>
                                <div className="card">
                                    <img src={element} alt={index} />
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </article>
    )
}
export default memo(Studio);