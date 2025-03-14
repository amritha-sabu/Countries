import './Search.css';

const Search = ({setSearchTerm}) => {

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div className="search">
            <input
            type='text'
            placeholder='Search for a country'
            onChange={(e) => handleChange(e)}
            />
        </div>
    );
};

export default Search;