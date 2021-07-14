import { NavLink, Route, Switch } from 'react-router-dom';

// Component
import Sample from "../component/Program/Sample";

// CSS
import "../contents/css/program/Program.css";


const ProgramRouter = () => {
    return (
        <article className="program">
            <aside>
                <h1>프로그램</h1>
                <NavLink to="/program/a" replace>
                    <div></div>
                    <p>벌크업</p>
                </NavLink>
                <NavLink to="/program/b" replace>
                    <div></div>
                    <p>재활운동</p>
                </NavLink>
                <NavLink to="/program/c" replace>
                    <div></div>
                    <p>다이어트</p>
                </NavLink>
                <NavLink to="/program/d" replace>
                    <div></div>
                    <p>프로필</p>
                </NavLink>
                <NavLink to="/program/e" replace>
                    <div></div>
                    <p>벌크업</p>
                </NavLink>
            </aside>
            <Switch>
                <Route exact path="/program/a" component={Sample}/>
                <Route exact path="/program/b" component={Sample}/>
                <Route exact path="/program/c" component={Sample}/>
                <Route exact path="/program/d" component={Sample}/>
                <Route exact path="/program/e" component={Sample}/>
            </Switch>
        </article>
    )
}

export default ProgramRouter;