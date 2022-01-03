import '../footer.scss';

export const FooterColumn = (props) => {
    return(
        <div className="footer__nav">
            {props.children}     
        </div>
    );
};