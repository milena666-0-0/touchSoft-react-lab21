import {useState, useCallback, useEffect} from 'react';

import {CounterView} from '../components/CounterView';

export const CounterContainer = ({initialValue}) => {

    const [counter, setCounter] = useState(initialValue);
    
    // useEffect(() => {
    //     setCounter(initialValue);
    // }, [initialValue]);

    const handleIncrement = useCallback(() => {
        setCounter(count => count + 1);
    }, []);

    const handleDecrement = useCallback(() => {
        if(counter > 0) {
            setCounter(count => count - 1);
        }
    }, [counter]);
        
    return <CounterView 
    counter={counter}
    handleInc={handleIncrement}
    handleDec={handleDecrement}/>
};