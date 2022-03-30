import './content.css';
import LoremIpsum, {loremipsum} from 'react-lorem-ipsum';
import bannerHotel1 from '../aset/bannerHotel1.jpg';
import bannerHotel2 from '../aset/bannerHotel2.jpg';
import bannerHotel3 from '../aset/bannerHotel3.jpg';
import Logo from '../aset/pasFoto.jpeg';

function HotelBanner(){
    return(
        <div id="hotel-banner">
            <img src={bannerHotel1} alt='Hotel Banner'></img>
            <img src={bannerHotel2} alt='Hotel Banner'></img>
            <img src={bannerHotel3} alt='Hotel Banner'></img>
        </div>
    )
}

function HotelHeader(){
    return(
        <div id="hotel-header">
            <div id="hotel-title">
                <h2>Shangri-La Hotel</h2>
                <a href="#">Jakarta, Indonesia</a>
            </div>
            <div id="hotel-rating">
                <p id="rating-value">9.6</p>
                <p id="hote-votes">420 votes</p>
            </div>
        </div>
    )
}

function HotelDesc(){
    return(
        <div id="hotel-description">
            <div id="up-desc">
                <LoremIpsum paragraphs={2} avgSentencesPerParagraph={4}/>
            </div>
    
            <ul id="additional-info">
                <div className='text-custom'>
                <li> Frer Wifi</li>
                <li> Free Breakfast </li>
                <li> Close to the city </li>
                <li> Friendly staff </li>
                </div>
            </ul>
            <p>Wahyu and 3 other friends recommended this hotel</p>
        </div>
    )
}

function Review1(){
    return(
        <div className="review">
            <div className="review-desc">
                <p className='review-text'>
                <LoremIpsum paragraphs={2} avgSentencesPerParagraph={4}/>
                </p>
            </div>
            <div className='user-review'>
                <img className='user-img' src={Logo} alt="User Profile" />
                <div className='user-text'>
                    <p className='user-name'>Wahyu Dwi Setio Wibowo</p>
                    <p className='user-date'>January 1, 2020</p>
                </div>
                <p className='user-rating'>9.6</p>
            </div>
            
        </div>
    )
}

function Review2(){
    return(
        <div className="review">
            <div className="review-desc">
                <p className='review-text'>
                <LoremIpsum paragraphs={2} avgSentencesPerParagraph={4}/>
                </p>
            </div>
            <div className='user-review'>
                <img className='user-img' src={Logo} alt="User Profile" />
                <div className='user-text'>
                    <p className='user-name'>Wahyu Dwi Setio Wibowo</p>
                    <p className='user-date'>January 1, 2020</p>
                </div>
                <p className='user-rating'>9.6</p>
            </div>
            
        </div>
    )
}

function PageFooter(){
    return(
        <div id="page-footer">
            <p id="footer-text">Book Yourself a Room Now!</p>
            <button id="footer-btn">Book Now</button>
        </div>
    )
}

function ReviewAll(){
    return(
        <div id="reviewAll">
            <Review1 />
            <Review2 />
        </div>
    )
}

function MergeHotel(){
    return(
        <div id="merge-hotel">
            <HotelDesc />
            <ReviewAll />
            <div id="read-more">
                <p>Read More</p>
            </div>
        </div>
    )
}

function Content(){
    return(
        <div id="content">
        <HotelBanner />
        <HotelHeader />
        <MergeHotel />
        <PageFooter />
        </div>

    )
}

export default Content;