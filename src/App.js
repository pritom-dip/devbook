import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./pages/loading.page";
import routes from "./routes/routes";
import Navbar from './layout/Navbar';

function App() {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Navbar />
                <Switch>
                    {routes.map(route => {
                        return (
                            <Route
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        );
                    })}
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
