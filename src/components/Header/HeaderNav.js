import './header.scss';

export const HeaderNav = () => {
    return (
        <nav className="header-nav">
            <ul className="header__nav-list">
                <li className="header__nav-li">
                   <a className="header__nav-link" href="">Veterinarians</a>
                </li>
                <li className="header__nav-li">
                   <a className="header__nav-link" href="">How it works</a>
                </li>
                <li className="header__nav-li">
                    <a className="header__nav-link" href="">How it works</a>
                </li>
                <li className="header__nav-li">
                   <a className="header__nav-link" href="">Blog</a>
                </li>
                <li className="header__nav-li">
                   <a className="header__nav-link" href="">Shop</a>
                </li>
            </ul>
        </nav>
    )
};