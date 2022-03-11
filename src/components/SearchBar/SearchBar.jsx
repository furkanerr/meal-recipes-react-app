import React, {useState,useEffect} from 'react'
import SearchBarStyle from './SearchBarStyle.css'
import {useDispatch} from "react-redux";
import {fetchMealByName} from '../../features/mealSlice'
const SearchBar = () => {

    const dispatch = useDispatch();
    const [searchInput,setSearchInput] = useState("")

    const handleOnChange =(e) =>{
        e.preventDefault();
        setSearchInput(e.target.value)
    }

    useEffect(() => {
           console.log(searchInput)
        dispatch(fetchMealByName(searchInput));
    }, [searchInput]);

  return (
    <div className="searchBarContainer">

      <input className="searchInput" type="search" onChange={(e) => handleOnChange(e)} placeholder="Search..."/>

    </div>
  )
}

export default SearchBar