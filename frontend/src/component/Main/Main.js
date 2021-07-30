import { Link } from 'react-router-dom';

// Component
import Studio from './Studio';
import Program from './Program';

// Image
import logo from '../../contents/logo/acp_white.png';

import studio_3 from '../../contents/image/studio_3.jpg';
import profile1 from '../../contents/image/profile1.jpg';
import profile2 from '../../contents/image/profile2.jpg';

// Video
import mainVideo from '../../contents/video/main_video.mp4';

const Main = () => {
    return (
        <article className="home">
            <section className="top">
                <video muted autoPlay >
                    <source src={mainVideo} type="video/mp4"/>
                </video>
            </section>
            <section className="main-title">
                <div className="title">
                    <h1>여러분을 스튜디오로 초대합니다.</h1>
                    <p>삶의 변화를 약속하는 Art of Personal Training</p>
                </div>
            </section>
            <Program />
            <Studio />
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