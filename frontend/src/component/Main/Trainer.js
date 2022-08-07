import { Link } from "react-router-dom";

// Image
import Trainer1 from '../../contents/image/Trainer3.jpg';
import Trainer2 from '../../contents/image/Trainer4.jpg';
import Trainer3 from '../../contents/image/Trainer5.jpg';
import Trainer4 from '../../contents/image/Trainer6.jpg';
import Trainer5 from '../../contents/image/Trainer7.jpg';

// CSS
import '../../contents/css/main/Trainer.css';
const Trainer = () => {
    return (
        <section className="trainer"  style={{padding: "15rem 0"}}>
            <div className="title">
                <h1>트레이너</h1>
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
            <div className="image">
                <Link to="/susan">
                    <img src={Trainer3} alt="profile" />
                </Link>
                <Link to="/seonghyun">
                    <img src={Trainer4} alt="profile" />
                </Link>
                <Link to="/seunghwan">
                    <img src={Trainer5} alt="profile" />
                </Link>
            </div>
        </section>
    )
}

export default Trainer;