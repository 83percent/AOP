import { Route, Switch } from 'react-router-dom';

// Component
import AdminLogin from '../component/Admin/AdminLogin';

// CSS
import '../contents/css/admin/Admin.css';

const AdminRouter = () => {
    return (
        <article id="admin">
            <Switch>
                <Route path="/admin" component={AdminLogin}/>
            </Switch>
        </article>
    )
}

export default AdminRouter;