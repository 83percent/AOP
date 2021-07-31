import Slider from "react-slick";

// CSS
import '../../contents/css/main/Post.css';


const Post = () => {
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
            <h1>AOP 고객님들이 들려주는 후기.</h1>
            <div className="container">
                <Slider {...settings}>
                    <div>
                        <div className="card">
                            <p>전형성 선생님과 1년동안 수업을 진행하면서 많은 변화가 있었어요. </p>
                            <p>운동은 시도조차 해보지 않던 저가 어느 순간부터는 운동을 하지 않으면 하루를 제대로 마무리 하지 않은 기분이에요. </p>
                            <h4>이0슬 회원님</h4>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <p>PT경험이 다수 있지만 이번 PT만큼 재밌게 운동했던 적은 없었던 것 같습니다. 안승빈 선생님은 운동도 잘 알려주시지만 수업 순간순간이 지루할 틈이 없었어요. 선생님의 위트에 항상 놀랐던 거 같아요.....</p>
                            <h4>김0린 회원님</h4>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <p>저는 분석적인 성향을 가진 사람입니다. 그런 저에게 전형성 선생님은 아주 잘 맞는 분이십니다. 워낙 다양한 운동 프로그램을 준비해서 오시는 분이지만 매 운동마다 이 자세는 왜 이렇게 하는 것이고 기대되는 효과는 무엇인지 자세히 설명해주십니다.</p>
                            <h4>김0욱 회원님</h4>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <p>취업을 준비하면서 우울한 감정을 많이 느끼고 실제로 병원 약도 먹었지만 PT를 하면서 먹는 약의 양이 현저히 줄어들었어요. 안승빈 선생님이 언제나 긍정적인 말과 작은 성취에도 칭찬해주시니 효과가 있었던 거 같아요.</p>
                            <h4>강0늘 회원님</h4>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <p>아무리 중량운동을 해도 근육량이 증가하지 않아 더 이상 웨이트 트레이닝에 대한 열정이 식었던 찰나 PT를 받게 되었습니다. 전형성 선생님께서 “신체는 언제나 새로운 자극을 원한다”라는 설명과 함께 다양한 자극을 줄 수 있는 운동 프로그램을 준비해오셨고 저는 3달간 근육량이 2kg이나 증가할 수 있었습니다.</p>
                            <h4>정0 회원님</h4>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}
export default Post;