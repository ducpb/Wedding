const Ex06 = () => {
    return (
        <section className="thiepmoi-nhatrai ivitation_cards" id="cards-bride" style={{ backgroundImage: 'url("https://tita.wedding/wp-content/themes/main/assets/images/thiepmoi/bgr2.png")' }}>
            <div className="content" style={{ marginTop: '100px' }}>
                <div className="name" style={{ display: 'flex' }}>
                    <div className="_item">
                        <h1 style={{ fontSize: 'revert', color: '#1a3c68' }}>Phạm Thị Mai</h1>
                    </div>
                    <div className="_item">
                        <h1 style={{ fontSize: 'revert', color: '#1a3c68' }}>Trần Văn Khương</h1>
                    </div>
                </div>
                <div className="_kinhmoi">Trân trọng kính mời <strong>bạn và người thương</strong> tới dự
  <strong> bữa cơm thân mật</strong><br />chung vui cùng Gia Đình chúng tôi được tổ chức vào
</div>
                <div className="_time">
                    <p>Thứ Bảy</p>
                    <p>21 - 11</p>
                    <p>lúc 16h00</p>
                </div>
                <div className="_location">
                    <p>Tại nhà GÁI</p> <span>|</span> Thôn Trung Quý - Xã Thượng Hiền - Huyện Kiến Xương - Tỉnh Thái Bình
</div>
                <div className="_list_but">
                    <a href="https://goo.gl/maps/CyRzTwbNjfBKQxAj6" target="_blank">
                        <p>Xem Bản đồ</p>
                    </a>
                    <a href="#chuc-mung" className="chucmung_toggle2">
                        <p>Chúc mừng</p>
                    </a>
                    <a href="#tham-gia" id="join-bride" className="click_thamgia2 dislable " join="no" style={{ pointerEvents: 'none', opacity: '0.5' }}><img src="https://tita.wedding/wp-content/themes/main/assets/images/thiepmoi/img_8.png" />
                        <p>Sẽ tham dự</p>
                    </a>
                </div>
                <div className="footer_tm">
                    <button className="down-screen down-screen-cards">
                        <img src="https://tita.wedding/wp-content/themes/main/assets/images/common/down_a.png" alt="Wedding" />
                    </button>
                </div>
            </div>
        </section>

    );
}

export default Ex06;