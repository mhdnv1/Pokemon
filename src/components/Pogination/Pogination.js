import React from 'react';

const Pogination = ({totalPosts , postPerPage , setCurrent , currentPage}) => {
    let page = []

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        page.push(i)
    }
    return (
        <div className="pogination">
            {
                page.map((page , index)=>{
                    return <button 
                            key={index} 
                            onClick={()=> setCurrent(page)}
                            className={page == currentPage ? 'active' : ''}
                            >{page}</button>
                })
            }
        </div>
    );
}

export default Pogination;
