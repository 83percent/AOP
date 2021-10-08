// Component
import Studio from './Studio';
import Program from './Program';
import Trainer from './Trainer';
import QnA from './QnA';
import Post from './Post';
import Map from './Map';
import { useEffect, useRef } from 'react';

// Video
//import mainVideo from '../../contents/video/video_2.mp4';

const Main = () => {
    const makeMuted = useRef(null);
    useEffect(() => {
        makeMuted.current.muted = true;
        makeMuted.current.play();
    }, [])
    return (
        <article className="home">
            <section className="top">
                <video autoPlay muted ref={makeMuted}>
                    <source src="https://aopstudio.s3.ap-northeast-2.amazonaws.com/video_2.mp4" type="video/mp4"/>
                </video>
            </section>
            <section className="main-title">
                <div className="title">
                    <h1>여러분을 스튜디오로 초대합니다.</h1>
                    <h1>삶의 변화를 약속하는 </h1>
                    <h1>Art of Personal Training</h1>
                </div>
            </section>
            <Program />
            <Studio />
            <Trainer />
            <Post />
            <Map />
            <QnA />
        </article>
    )
}

export default Main;