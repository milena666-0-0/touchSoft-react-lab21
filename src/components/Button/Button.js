import './button.scss';

export const Button = ({width, height, label}) => {
    return(
        <button 
        className="btn"
        style={{'width': `${width}px`, 'height': `${height}px`}}
        type="">{label}</button>
    );
};