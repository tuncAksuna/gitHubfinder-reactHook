import React, { useState, useEffect, useContext } from 'react';
import GithubContext from '../context/githubContext';
import Alertcontext from '../context/alert/alertContext';

/**
 * @author - tunCode
 */

const Search = () => {

    const [keyword, setKeyword] = useState('');
    const { searchUsers, clearUsers, users } = useContext(GithubContext) // get searchUser(),clearUsers() and showClearButton() methods from context
    const { setAlert } = useContext(Alertcontext)

    //* componentDidUpdate() 
    useEffect(() => {
        localStorage.setItem('searchedUser', keyword)
    }, [keyword])

    /**
     * @description - gets the value entered in the input to search the api
     */
    const onChange = (e) => {
        setKeyword(e.target.value);
    }

    /**
     * @description - The app searches based on the state information in the component, if no call is made then the app triggers the setAlert function in the component
     */
    const onSubmit = (e) => {
        e.preventDefault();

        if (keyword === '') {
            setAlert('Please enter a keyword !', 'danger')
        } else {
            searchUsers(keyword);
            setKeyword('');
        }
    }

    return (
        <div className="container my-3">
            <form onSubmit={onSubmit}>
                <div className="container my-4">
                    <div className="input-group">
                        <input type="text" onChange={onChange} value={keyword} className='form-control' placeholder='Example: tuncAksuna' />
                        <div className="input-group-append">
                            <button type="submit" className='btn btn-danger'>Search</button>
                        </div>
                    </div>
                </div>
            </form>
            {
                users.length > 0 && <button onClick={clearUsers} className="btn btn-danger btn-sm btn-block mt-3">Clear results</button>
            }
        </div>
    );
}

export default Search;
