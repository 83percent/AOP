import { Link } from "react-router-dom";

// Image
import Trainer1 from '../../contents/image/trainer1.jpg';
import Trainer2 from '../../contents/image/trainer2_2.jpg';

// CSS
import '../../contents/css/main/Trainer.css';
const Trainer = () => {
    return (
        <section className="trainer"  style={{padding: "15rem 0"}}>
            <div className="title">
                <h1>트레이너.</h1>
                <h2>이미지를 눌러 트레이너의 프로필을 확인해보세요.</h2>
            </div>
            <div className="image">
                <Link to="/seungbin">
                    <img src={Trainer1} alt="profile" />
                </Link>
                <Link to="/hyeongseong">
                    <img src={Trainer2} alt="profile" />
                </Link>
            </div>
        </section>
    )
}

export default Trainer;