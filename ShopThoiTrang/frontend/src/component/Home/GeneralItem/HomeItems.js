import './HomeItem.scss'

const HomeItems = ({color,logo, text}) => {
    return (
        <>
            <div className="HomeItems">
                <h1 style={color ? { color: color } : {}} className='LogoText' >{logo}</h1>
                <span className='Text' >
                    {text}
                </span>
            </div>
        </>
    )
}

export default HomeItems