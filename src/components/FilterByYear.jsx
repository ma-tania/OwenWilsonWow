/* eslint-disable react/prop-types */
import uuid from "react-uuid";
import "../styles/layout/_filteryear.scss"
const FilterByYear = ({movieFilterYear, handleChangeYear, years}) => {
   
   const hanldeSelectChange =(ev)=>{
    handleChangeYear(ev.target.value);

    };

    const renderYearsOptions = () => {
    return years.map(years => <option key={uuid()} value={years}>{years}</option>)
    }
    return (
        <section className="section_filteryear">
            <label>
                <select 
                    className="section_filteryear-select"
                    name="search_year" 
                    id="search_year"
                    value={movieFilterYear}
                    onChange={hanldeSelectChange}
                    >
                    <option value="Escoge un año">Escoge un año</option>
                    {renderYearsOptions()}
                </select>
            </label>
        </section>
        );
    }; 
    export default FilterByYear;