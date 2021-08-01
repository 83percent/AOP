import { Route, Switch } from 'react-router';

// Component
import Studio from '../component/Studio/Studio';

const StudioRouter = () => {
    return (
        <Switch>
            <Route path="/studio" component={Studio} />
        </Switch>
    )
}
export default StudioRouter;