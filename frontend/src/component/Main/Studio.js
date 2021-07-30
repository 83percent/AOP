
// CSS
import { Link } from 'react-router-dom';
import '../../contents/css/main/Studio.css';

import studio_3 from '../../contents/image/studio_3.jpg';


const Studio = () => {
    return (
        <section className="studio">
            <div className="image">
                <img src={studio_3} alt="studio"    />
            </div>
            <div className="text-frame">
                <div className="title">
                    <h1>최고의 시설</h1>
                    <div className="sub-title">
                        <p>회원님에게 최고의 운동경험을 전하기 위하여</p>
                        <p>AOP는 언제나 최고의 시설을 제공합니다.</p>
                    </div>
                    
                    <Link>
                        <p>시설 자세히보기</p>
                        <i className="material-icons">chevron_right</i>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Studio;