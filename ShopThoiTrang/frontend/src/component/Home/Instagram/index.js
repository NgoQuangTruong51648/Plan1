import HomeItems from "../GeneralItem/HomeItems"
import './Instagram.scss'

const Instagram = () => {
    return (
        <div className="Instagram">
            <HomeItems 
            logo="INSTAGRAM" 
            text="
            Search our instagram if you want to learn more about the products of our shop all new designs will be updated on our shop thank you for your interest"
            />
            <a href="https://www.instagram.com/salarashop_/" className="InstagramLink" >#salarashop</a>
        </div>
    )
}

export default Instagram