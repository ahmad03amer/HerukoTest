import React, { Component } from 'react'
import '../Page_Css/SearchFile.css'; 

class Search extends Component {
    render() {
        return (
            <div className="header mb-5">
                <form className="form-search" > 
                    <h1><span>Find A  </span> Job You will<span> Love</span></h1> 
                    <div className="form-box">
                    <input className="search-field skills" name="search" type="search"
                    placeholder="Search Job title, Job Filed "></input>

                    <input className="search-field type" name="type" type="search"
                    placeholder="Type of job..."></input>
                    <button className="search-btn" type="button">Search</button>

                    </div>


                </form>
            </div>
        )
    }
}

export default Search; 
