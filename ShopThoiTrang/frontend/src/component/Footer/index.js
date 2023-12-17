import { FaFacebook,FaInstagram,FaYoutube,FaPinterest } from "react-icons/fa";
import './FooterHome.scss'

const FooterHome = () => {
    return (
        <div className="Footer">
            <div className="FooterWrap">
                <div className="FooterMain">
                    <h2 className="FooterLogo" >Salara</h2>
                    <ul className="FooterListInformation" >
                        <li className="FooterItemInformation">
                            <FaFacebook/>
                        </li>

                        <li className="FooterItemInformation">
                            <FaInstagram/>
                        </li>

                        <li className="FooterItemInformation">
                            <FaYoutube/>
                        </li>

                        <li className="FooterItemInformation">
                            <FaPinterest/>
                        </li>
                    </ul>
                    <span>Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</span>
                    <span>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)</span>
                    <span>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</span>
                    <span>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</span>
                </div>
            </div>
        </div>
    )
}

export default FooterHome