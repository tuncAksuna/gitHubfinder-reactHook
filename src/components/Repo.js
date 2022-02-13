import React from 'react';

export const Repo = ({ repo }) => {
    return (
        <>
            <li className="list-group-item">
                <i className="far fa-dot circle"></i>
                <a href={repo.html_url} target="_blank">
                    {repo.name}
                </a>
            </li>
        </>
    )
};
