import './style.css'
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

export function SearchBar() {

    const [search, setSearch] = useState('');

    function handleChange({target}) {
        setSearch(target.value);
    }

    function handleSubmit() {

    }

    return (
        <div className="header" id='header'>
            <div className='logo container'>
                <a href='#header'>
                    <img alt='logo' src={require('./logo.png')} /> 
                    < p className='site-name hide'>
                    RedditMini
                    </p>
                </a>                                   
            </div>
            <div className='search-bar container'>
                <form onSubmit={handleSubmit}>
                    <input placeholder='Search Reddit' value={search} onChange={handleChange}/>
                    <button type='submit'><FaSearch className='FaSearch' /></button>
                </form>
            </div>
                
        </div>
    )
}