import React, { useEffect } from 'react';
import { useState } from 'react';
import Users from './users.json';

import SearchBox from './search-box/search-box-comp';
import CardList from './card-list/card-list-comp';
import '../App.css';

export default function Cats() {
    const [searchField, setSearchField] = useState('');
    const [cats, setCats] = useState([]);
    const [filteredCats, setFilteredCats] = useState(cats);

    useEffect(() => {
        setCats(Users);
    }, []);
    
    useEffect(() => {
        const newFilteredCats = cats.filter((cat) => {
            return cat.name.toLocaleLowerCase().includes(searchField);
        });
        setFilteredCats(newFilteredCats);
    }, [cats, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };



    return (
        <div>
            <h1 className='app-title'>Cats Meow</h1>
            <SearchBox onChangeHandle={onSearchChange} placeholder='search box' className='search-box' />
           
            <CardList cats={filteredCats} />
        </div>
    )
}

