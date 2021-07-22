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
                    <h2>삶의 변화를 약속하는 Art of Personal Training</h2>
                </div>
            </section>
            <section className="row">
                <div className="left-text-frame">
                    <div className="title">
                        <h1>프로그램 소개</h1>
                        <div className="sub-title">
                            <h2>A to Z 퍼스널 트레이닝</h2>
                            <h2>전문 코치진이 설계하여 정교한 운동 프로그램</h2>
                            <h2>개개인의 생활패턴에 맞춘 식단</h2>
                            <h2>고객의 목표를 성공으로 이끄는 멘탈 케어</h2>
                        </div>
                        <Link to="/program">
                            <p>프로그램 더 알아보기</p>
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