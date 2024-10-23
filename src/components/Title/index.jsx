import './title.css'

const Title = () => {
    
    const ImageTitle = {
        name: 'image1',
        avatar: 'https://drpaulopittelli.com.br/wp-content/uploads/2017/11/175-x-175-3.png'
    }
    
    return(
        <div>
            <img className='ImageTitle-avatar' src={ImageTitle.avatar}/>
            <h3 className='ImageTitle-name'>{ImageTitle.name}</h3>
        </div>
        
    )
}

export default Title;