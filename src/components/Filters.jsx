/* eslint-disable react/prop-types */
import React from "react";
import FilterByMovie from "./FilterByMovie";
import FilterByYear from "./FilterByYear";

const Filters = ({
    movieFilter, handleChange, 
    movieFilterYear, handleChangeYear,
    years,}) => {
    return (
        <>
        <form className="filters"></form>
            <h2 className="h2filter">Filtrar por película </h2>
            <FilterByMovie 
            movieFilter={movieFilter} 
            handleChange={handleChange}/>
            
            <h2 className="h2filter">Filtrar por año </h2>
            <FilterByYear 
            movieFilterYear={movieFilterYear} 
            handleChangeYear={handleChangeYear}
            years={years}/>
        </>        
        );
};
export default Filters;
