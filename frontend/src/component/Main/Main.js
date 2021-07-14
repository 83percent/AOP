import logo from '../../contents/logo/acp_white.png';
import home1 from '../../contents/image/home_image1.jpg';
import profile1 from '../../contents/image/profile1.jpg';
import profile2 from '../../contents/image/profile2.jpg';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <article className="home">
            <section className="top">
                <img src={logo} alt="logo" />
            </section>
            <section className="col" style={{margin: "20rem 0"}}>
                <div className="title">
                    <h1>여러분을 스튜디오로 초대합니다.</h1>
                    <h2>저희 AOP는 Art Of Personal Training의 약자로</h2>
                    <h2>여러분들의 건강을 위해 최선을 다합니다.</h2>
                </div>
            </section>
            <section className="row">
                <div className="left-text-frame">
                    <div className="title">
                        <h1>맞춤형 프로그램</h1>
                        <div className="sub-title">
                            <h2>몸에 맞지 않는 운동은 오히려 몸에 독이 됩니다.</h2>
                            <h2>회원님에게 최적화된 맞춤형 프로그램으로</h2>
                            <h2>진행되는 트레이닝.</h2>
                        </div>
                        
                        <Link to="/program">
                            <p>프로그램 자세히보기</p>
                            <i className="material-icons">chevron_right</i>
                        </Link>
                    </div>
                </div>
                <div className="right">
                    <img src={home1} alt="home" />
                </div>
            </section>
            <section className="row">
                <div className="left">
                    <img src={home1} alt="home" />
                </div>
                <div className="right-text-frame">
                    <div className="title">
                        <h1>최고의 시설</h1>
                        <div className="sub-title">
                            <h2>회원님에게 최고의 운동경험을 전하기 위하여</h2>
                            <h2>언제나 최고의 시설을 제공해드립니다.</h2>
                        </div>
                        
                        <Link>
                            <p>시설 자세히보기</p>
                            <i className="material-icons">chevron_right</i>
                        </Link>
                    </div>
                </div>
                
            </section>
            <section className="col"  style={{padding: "15rem 0"}}>
                <div className="title">
                    <h1>트레이너.</h1>
                    <h2>이미지를 누르면 자세히 볼 수 있어요</h2>
                </div>
                <div className="image-row">
                    <Link to="/seungbin">
                        <img src={profile1} alt="profile" />
                    </Link>
                    <Link to="/hyeongseong">
                        <img src={profile2} alt="profile" />
                    </Link>
                </div>
            </section>
            <section className="col">
                <div className="title" style={{paddingBottom: "15rem"}}>
                    <h1>더 궁금한게 있다면.</h1>
                    <Link>
                        <p>자주 묻는 질문</p>
                        <i className="material-icons">chevron_right</i>
                    </Link>
                    <Link>
                        <p>온라인 문의하기</p>
                        <i className="material-icons">chevron_right</i>
                    </Link>
                </div>
            </section>
        </article>
    )
}

export default Main;