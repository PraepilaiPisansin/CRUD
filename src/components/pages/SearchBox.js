import React from 'react';
const SearchBox = (props) => {
    return (
        <div class="search-bar">
            <span><i class="bi bi-search search-icon"></i></span>
            <input
                type='text'
                placeholder={"search user"}
                //onChange={(e) => setKeyword(e.target.value)}
                //value={value}
                onChange={e => props.searchUser(e)}
                className="barstyle "

            />

        </div>
    );
}
export default SearchBox;
