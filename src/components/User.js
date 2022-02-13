import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * @author - tunCode
 */

class User extends Component {

    render() {
        const { login, avatar_url } = this.props.user;
        return (
            <div className="col-md-4 col-sm-6 col-lg-3">
                <div className="card mt-3 shadow-lg p-3 mb-5 bg-white rounded container">
                    <img src={avatar_url} alt="avatar_image" className="img-fluid" />
                    <div className="card-body">
                        <h5 className="card-title">{login}</h5>
                        <Link to={`user/${login}`} className="btn btn-outline-danger btn-sm" target="_blank">Go profile </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
