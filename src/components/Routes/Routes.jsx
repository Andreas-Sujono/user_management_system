import React, {Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactLoading from 'react-loading';

import routesData from './data'

const LoadingBar = () => 
    <ReactLoading type='spin' color='black' height={50} width={50} />

function Routes(props) {
    return (
        <Suspense fallback={<LoadingBar />}>
            <Switch>
                {routesData.map((route, idx) =>
                    <Route key={`${route.path}_${idx}`} {...route} />
                )}
            </Switch>
        </Suspense>
    );
}

export default Routes;