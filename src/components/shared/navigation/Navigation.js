import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Navigation extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">
                    <span className="navbar-brand">Navbar</span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/">
                                <span className="nav-link">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pass-params">
                                <span className="nav-link">PassParam</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/lifecycle">
                                <span className="nav-link">Lifecycle</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}

export default Navigation;
