import React, { useState } from 'react'
import './title.css'

const Title = () => {
    
    const ImageTitle = {
        name: 'Calculadora Peso X Altura, React',
        avatar: 'https://drpaulopittelli.com.br/wp-content/uploads/2017/11/175-x-175-3.png'
    }
    
    return(
        <div className='ImageTitle-container'>
            <img className='ImageTitle-avatar' src={ImageTitle.avatar}/>
            <h2 className='ImageTitle-name'>{ImageTitle.name}</h2>
        </div>
        
    )
}

export default Title;