import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function PreviousSearches() {
    const searches = ['pizza', 'burger', 'cookies', 'briyani', 'salad', 'icecream', 'lasagna', 'pudding', 'soup']

  return <>
      <div className="previous-Searches section">
        <h2>Previous Searches</h2>
            <div className="previous-searches-container">
                {searches.map((search,index)=>(
                <div key={index} style={{animationDelay:index*.1 + "s" }}className='search-items'>
                    {search}
                </div>))}
            </div>
            <div className="search-box">
            <input type="text" placeholder='Search...' />
            <button className='btn1'>
                <FontAwesomeIcon icon={faSearch}/>
            </button>
            </div>
    </div>
  </>
}

export default PreviousSearches