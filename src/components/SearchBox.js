import React from 'react';


const SearchBox =({searchChange})=>{
    return(
        <div className='pa2'>
        
       <input 
       className='pa3 ba b--red bg-lightest-blue'
       type='search' 
       placeholder='Search NBA stars'
       onChange={searchChange}></input>
       </div>
    );
}

export default SearchBox;