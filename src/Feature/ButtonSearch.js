import React, {Component} from 'react';

const ButtonSearch = () => {
    return (
        <form action='/search'>
            <input type="text" placeholder='Search' required/>
            <button type='submit'>Search</button>
        </form>
    )
};

export default ButtonSearch;