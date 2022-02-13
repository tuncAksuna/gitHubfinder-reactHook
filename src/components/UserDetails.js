import React, { useEffect, useContext } from 'react';
import Loading from './Loading';
import Repos from './Repos';
import GithubContext from '../context/githubContext';

const UserDetails = ({ match }) => {

    const { getUser, loading, user, getUserRepos, repos } = useContext(GithubContext);

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
    }, [])

    const { name, avatar_url, location, html_url, bio, blog, followers, following, public_repo } = user;

    if (loading) return <Loading />
    return (
        <div className='container mt-4'>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img src={avatar_url} alt="avatar_url" className='card-img-top' />
                        <div className="card-body">
                            <p className="card-text">{name}</p>
                            <p>
                                <i className="fas fa-map-marker-alt"></i>
                                {location}
                            </p>
                            <p>
                                <a href={html_url} className="btn btn-block btn-primary btn-sm">GitHub Profile</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            {
                                bio ? <><h3>About</h3><p>{bio}</p></> : `Not found bio about ${name}`
                            }
                            {
                                blog ? <><h3>Blog</h3> <p>{blog}</p></> : `Not found blog about ${name}`
                            }
                            <span className="badge badge-primary m-1">Followers: {followers} </span>
                            <span className="badge badge-primary m-1">Following: {following} </span>
                            <span className="badge badge-primary m-1">Repository: {public_repo} </span>
                        </div>
                        <ul className="list-group list-group-flush">
                            <Repos repos={repos} />
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default UserDetails;
