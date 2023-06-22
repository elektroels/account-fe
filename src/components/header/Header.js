import { Link } from "react-router-dom";
import './Header.css';
import Container from './../container/Container';

const Header = () => {
    return (
        <header className="header">
            <Container className="container--minimal-padding">
                <div className="header__container">
                    <a
                        className="header__logo"
                        href="https://www.danskebank.dk"
                    >
                        <img 
                            src="/danske-bank-logo.svg"
                            className="header__logo__img"
                            alt="logo"
                        />
                    </a>

                    <nav className="header__nav">
                        <div>
                          <Link to="/">Accounts</Link>
                        </div>
                    </nav>
                </div>
            </Container>
        </header>
    )
}

export default Header;