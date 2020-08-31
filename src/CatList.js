import React from 'react';

const Catlist = ({ catPics }) => {

    const renderCats = catPics.map(catPic => <img key={catPic.id} src={catPic.url} alt={catPic.id}></img>)

    return ( 
        renderCats
    )
    
}

export default Catlist;