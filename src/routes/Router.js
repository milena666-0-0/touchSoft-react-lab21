import {Routes, Route} from 'react-router-dom';

import { HomePageContainer } from '../pages/HomePage/containers/HomePageContainer';
import {CounterContainer} from '../pages/CounterPage/containers/CounterContainer';
import {CountersContainer} from '../pages/CountersPage/containers/CountersContainer';
import {ROUTE_NAMES} from './routeNames';

export const Router = () => {
    return(
        <Routes>
            <Route path={ROUTE_NAMES.Home} element={<HomePageContainer/>}/>
            <Route path={ROUTE_NAMES.Counter} element={<CounterContainer/>}/>
            <Route path={ROUTE_NAMES.Counters} element={<CountersContainer/>}/>
        </Routes>
    );
};