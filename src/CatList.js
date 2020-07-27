// write your CatList component here

import React from 'react'

export default function CatList(props) {
    const catReturn = props.catPics.map(cat => {
        
        return <img key={cat.id} src={cat.url} alt='cat' width='300' height='300' />
    })
    console.log(catReturn)
    return catReturn
}