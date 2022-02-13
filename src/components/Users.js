
import React, { useContext } from 'react';
import User from './User'
import Loading from './Loading'
import GithubContext from '../context/githubContext';

/**
 * @author - tunCode
 */

const Users = () => {

    const{users,loading} = useContext(GithubContext);

    if (loading) {
        return <Loading />
    } else {
        return (
            <div className="container mt-3">
                <div className="row">
                    {users.map(user => (
                        <User user={user} key={user.id} />
                    ))}
                </div>
            </div>
        )
    }

}
export default Users;
