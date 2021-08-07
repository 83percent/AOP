import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { ServerContext } from "../../App";

// CSS
import '../../contents/css/main/Post.css';


const Post = () => {
    // State
    const [postData, setPostData] = useState([]);

    // Context
    const server = useContext(ServerContext);

    async function getPost() {
        axios({
            method : 'GET',
            url : server + "/post",
            timeout : 5500
        }).then(response => {
            if(response.status === 200) setPostData(response.data);
        }).catch(() => {

        })
    }
    useEffect(() => {
        if(postData.length === 0) getPost();
    }, []);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrow: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 320,
                settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
            }
        ]
    };
    return (
        <section className="post">
            {
                postData.length > 0 ? (
                    <>
                        <h1>AOP 고객님들이 들려주는 후기.</h1>
                        <div className="container">
                            
                            <Slider {...settings}>
                                {
                                    postData.map((element,index) => (
                                        <div key={index}>
                                            <div className="card">
                                                {
                                                    element.content.split("\n").map((line,i2) => (
                                                        <p key={i2}>{line}</p>
                                                    ))
                                                }
                                                <h4>{element.name}</h4>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </>
                ) : null
            }
            
        </section>
    )
}
export default Post;