import { NavLink, Route, Switch } from 'react-router-dom';

// Component

import Program1 from "../component/Program/Program1";
import Program2 from "../component/Program/Program2";
import Program3 from "../component/Program/Program3";
import Program4 from "../component/Program/Program4";

// CSS  
import "../contents/css/program/Program.css";


const ProgramRouter = () => {
    return (
        <article className="program">
            <aside>
                <h1>프로그램</h1>
                <NavLink to="/program/3" replace>
                    <div></div>
                    <p>웨이트 트레이닝</p>
                </NavLink>
                <NavLink to="/program/1" replace>
                    <div></div>
                    <p>기능성 트레이닝</p>
                </NavLink>
                <NavLink to="/program/2" replace>
                    <div></div>
                    <p>재활, 체형 교정 트레이닝</p>
                </NavLink>
                <NavLink to="/program/4" replace>
                    <div></div>
                    <p>다이어트</p>
                </NavLink>
            </aside>
            <Switch>
                <Route exact path="/program/1" component={Program1}/>
                <Route exact path="/program/2" component={Program2}/>
                <Route exact path="/program/3" component={Program3}/>
                <Route exact path="/program/4" component={Program4}/>
            </Switch>
        </article>
    )
}

export default ProgramRouter;