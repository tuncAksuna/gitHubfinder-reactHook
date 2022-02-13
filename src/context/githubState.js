import React, { useReducer } from "react"
import axios from "axios"
import GithubContext from "./githubContext"
import GithubReducer from "./githubReducer"

/**
 * @description - provides inital state values in the beginning
 */

const Githubstate = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)
    //! dispatch githubReducer'dan gelecek olan metodları alır - initalState objesi ile de context'in içerisini doldurduk

    const clearUsers = () => {
        dispatch({ type: 'CLEAR_USER' })
    }

    const getUser = (username) => {
        setLoading();

        setTimeout(() => {
            axios
                .get(`https://api.github.com/users/${username}`)
                .then(resp => {
                    dispatch({
                        type: 'GET_USER',
                        payload: resp.data
                    })
                })
        }, 1250);
    }

    const searchUsers = (keyword) => {
        setLoading();

        setTimeout(() => {
            axios
                .get(`https://api.github.com/search/users?q=${keyword}`)
                .then(resp => {
                    dispatch({
                        type: 'SEARCH_USERS',
                        payload: resp.data.items
                    })
                });
        }, 2000);

    }

    const getUserRepos = (username) => {
        setLoading();
        setTimeout(() => {
            axios
                .get(`https://api.github.com/users/${username}/repos`)
                .then(resp => {
                    dispatch({ type: 'GET_USER_REPOS', payload: resp.data })
                });

        }, 1500);
    }

    const setLoading = () => {
        dispatch({ type: 'SET_LOADING' })
    }

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}>
        {props.children}

    </GithubContext.Provider>
}

export default Githubstate;
