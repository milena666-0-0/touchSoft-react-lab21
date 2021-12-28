import {useState} from 'react';

import {CounterView} from '../components/CounterView';

export const CounterContainer = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(count => count + 1);
    };

    const handleDecrement = () => {
        if(counter > 0) {
            setCounter(count => count - 1);
        }
    };

    return <CounterView 
    counter={counter}
    handleInc={handleIncrement}
    handleDec={handleDecrement}/>
};