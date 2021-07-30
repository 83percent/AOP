// Component
import Studio from './Studio';
import Program from './Program';
import Trainer from './Trainer';
import QnA from './QnA';
import Post from './Post';

// Video
import mainVideo from '../../contents/video/video_2.mp4';

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
            <Trainer />
            <Post />
            <QnA />
        </article>
    )
}

export default Main;