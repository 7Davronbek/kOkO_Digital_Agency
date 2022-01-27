const Header = () => {
    return (
        <div className='header'>
            <div className="video">
                <video 
                    style={{ opacity: '0.5' }}
                    className='' autoPlay loop muted src="/assets/image/bg3.mp4" 
                    type="video/mp4"
                />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 mx-auto text-center">
                        <h1 >Discover, collect, and sell NFTs</h1>
                        <p className="secondary">Explore the upcoming NFT projects, get all the info you need project for you. Don’t forget to check the addition.</p>
                        <button  className="btn myBtn">Get started</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
