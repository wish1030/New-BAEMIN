import React from "react"
import { useNavigate } from "react-router-dom"
import { BiLeftArrowAlt } from "react-icons/bi"
import './Delivery.css'

function ShoppingBasket() {
    const navigation = useNavigate();

    const goToOrder = () => {
        navigation("/order")
    }

    return (
        <div>
        <div className="title-header">
            <BiLeftArrowAlt/>
            <span>그룹 장바구니</span>
            <span className="menu-delete-all">전체 삭제</span>
        </div>
        
        <div className="delivery-content-wrapper">
            <div style={{width:'30rem'}}>
            <div className="menu-title-name">공통 메뉴</div>
            <div className="whose-menu-wrapper">
                <div className="whose-menu"></div>
                <div className="menu-wrapper">
                    <div className="menu-title">
                        엽기 떡볶이
                        <span className="menu-delete-icon">X</span>
                    </div>
                    <div className="menu-detail">
                        <li>가격: 12,000원</li>
                    </div>
                    <div className="menu-box-footer">
                    <div className="menu-price">12,000원</div>
                    <div className="menu-len">
                        <div>-</div>
                        <div>1개</div>
                        <div>+</div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <div className="delivery-content-wrapper">
            <div style={{width:'30rem'}}>
            <div className="menu-title-name">개인 메뉴</div>
            <div className="whose-menu-wrapper">
                <div className="whose-menu">
                    <div className="friends-profile-img"
                        style={{backgroundImage: "url('http://www.queen.co.kr/news/photo/201903/309777_48741_1811.jpg')"}}
                    ></div>
                    <div className="friends-profile-name" style={{marginLeft:'0px'}}>박민영</div>
                </div>
                <div className="menu-list">
                    <div className="menu-wrapper">
                        <div className="menu-title">
                            모듬 튀김
                            <span className="menu-delete-icon">X</span>
                        </div>
                        <div className="menu-detail">
                            <li>가격: 8,000원</li>
                        </div>
                        <div className="menu-box-footer">
                        <div className="menu-price">8,000원</div>
                        <div className="menu-len">
                            <div>-</div>
                            <div>1개</div>
                            <div>+</div>
                        </div>
                        </div>
                    </div>

                    <div className="menu-wrapper">
                    <div className="menu-title">
                        참치 주먹밥
                        <span className="menu-delete-icon">X</span>
                    </div>
                    <div className="menu-detail">
                        <li>가격: 2,000원</li>
                    </div>
                    <div className="menu-box-footer">
                    <div className="menu-price">2,000원</div>
                    <div className="menu-len">
                        <div>-</div>
                        <div>1개</div>
                        <div>+</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="content-wrapper">
            <div style={{width:'30rem'}}>
            <div className="whose-menu-wrapper">
                <div className="whose-menu">
                    <div className="friends-profile-img"
                        style={{backgroundImage: "url('https://i.pinimg.com/736x/51/8e/30/518e3076b2637474f794d8fed2580c48.jpg')"}}
                    ></div>
                    <div className="friends-profile-name" style={{marginLeft:'0px'}}>서강준</div>
                </div>
                <div className="menu-list">
                    <div className="menu-wrapper">
                        <div className="menu-title">
                            모듬 튀김
                            <span className="menu-delete-icon">X</span>
                        </div>
                        <div className="menu-detail">
                            <li>가격: 8,000원</li>
                        </div>
                        <div className="menu-box-footer">
                        <div className="menu-price">8,000원</div>
                        <div className="menu-len">
                            <div>-</div>
                            <div>1개</div>
                            <div>+</div>
                        </div>
                        </div>
                    </div>

                    <div className="menu-wrapper">
                    <div className="menu-title">
                        참치 주먹밥
                        <span className="menu-delete-icon">X</span>
                    </div>
                    <div className="menu-detail">
                        <li>가격: 2,000원</li>
                    </div>
                    <div className="menu-box-footer">
                    <div className="menu-price">2,000원</div>
                    <div className="menu-len">
                        <div>-</div>
                        <div>1개</div>
                        <div>+</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <button type="button" id="group-delivery-btn"
        onClick={goToOrder}
        >그룹 주문하기</button>
        </div>
    )
}

export default ShoppingBasket;