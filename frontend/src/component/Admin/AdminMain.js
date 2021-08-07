import { Link, NavLink, Route, Switch } from 'react-router-dom';

// Component
import AdminAccount from './AdminAccount';
import AdminPost from './AdminPost';
import AdminQnA from './AdminQnA';
import AdminReserve from './AdminReserve';
import AdminAnswer from './AdminAnswer';

// CSS
import '../../contents/css/admin/AdminMain.css';

// Image
import Logo from '../../contents/logo/logo.png';

const AdminMain = ({history}) => {
    
    return (
        <section id="main">
            <nav>
                <Link to="/admin">
                    <img src={Logo} alt="logo" />
                </Link>
                <ul>
                    <li>
                        <NavLink to="/admin/account">
                            <p>개인정보 수정</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/qna">
                            <p>문의</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/post">
                            <p>후기</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/reserve">
                            <p>1:1 무료체험</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/admin/account" component={AdminAccount}/>
                <Route path="/admin/qna" component={AdminQnA}/>
                <Route path="/admin/answer" component={AdminAnswer}/>
                <Route path="/admin/post" component={AdminPost}/>
                <Route path="/admin/reserve" component={AdminReserve}/>
            </Switch>
        </section>
    )
}
export default AdminMain;