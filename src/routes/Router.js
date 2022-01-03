import {Routes, Route} from 'react-router-dom';

import { HomePageContainer } from '../pages/HomePage/containers/HomePageContainer';
import {CounterPageContainer} from '../pages/CounterPage/containers/CounterPageContainer';
import {CountersPageContainer} from '../pages/CountersPage/containers/CountersPageContainer';
import {ROUTE_NAMES} from './routeNames';

export const Router = () => {
    return(
        <Routes>
            <Route path={ROUTE_NAMES.Home} element={<HomePageContainer/>}/>
            <Route path={ROUTE_NAMES.Counter} element={<CounterPageContainer/>}/>
            <Route path={ROUTE_NAMES.Counters} element={<CountersPageContainer/>}/>
        </Routes>
    );
};