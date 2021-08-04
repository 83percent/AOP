import { Link } from 'react-router-dom';
import program_main from '../../contents/image/program_main.png';
import '../../contents/css/main/Program.css';
const Program = () => {
    return (
        <section className="program">
            <div className="text-frame">
                <div className="title">
                    <h1>프로그램 소개</h1>
                    <div className="sub-title">
                        <p>A to Z 퍼스널 트레이닝</p>
                        <p>전문 코치진이 설계하여 정교한 운동 프로그램</p>
                        <p>개개인의 생활패턴에 맞춘 식단</p>
                        <p>고객의 목표를 성공으로 이끄는 멘탈 케어</p>
                    </div>
                    <Link to="/program">
                        <p>프로그램 더 알아보기</p>
                        <i className="material-icons">chevron_right</i>
                    </Link>
                </div>
            </div>
            <div className="image-frame">
                <img src={program_main} alt="home"/>
            </div>
        </section>
    )
}

export default Program;