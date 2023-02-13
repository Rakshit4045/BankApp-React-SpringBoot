import {Link} from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import './Home.css';

export default function Home(){

    return(
        <div className='mb-5' id='home'>
            <div className="typewriter mt-2">
                <Typewriter 
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("RS Bank")
                            .pauseFor(500)
                            .deleteAll()
                            .typeString("Welcomes You....!")
                            .start();
                    }}
                />
            </div>
            <div className='home-content'>
                <div id="carouselExampleIndicators" className='carousel slide m-4' data-ride="carousel"> 
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                    <div className='carousel-inner'>
                        <div className='carousel-item active'>
                            <img src='https://www.icicibank.com/managed-assets/images/personal/home-page-banners/Mobile/Generic-HL-m.jpg' className='slide-img d-block w-100' alt='First slide'></img>
                        </div>
                        <div className='carousel-item'>
                            <img src="https://www.icicibank.com/managed-assets/images/personal/home-page-banners/Desktop/Ganesh-Chaturthi-Hp-Banner-D-Generic.jpg" className='slide-img d-block w-100' alt='Second slide'></img>
                        </div>
                        <div className='carousel-item'>
                            <img src="https://www.icicibank.com/managed-assets/images/personal/home-page-banners/Desktop/CC_HP_AugOffFood_d.jpg" className='slide-img d-block w-100' alt='Third slide'></img>
                        </div>
                    </div>
                    <a className='carousel-control-prev' type='button' href="#carouselExampleIndicators" data-slide="prev">
                        <span className='carousel-control-prev-icon' aria-hidden="true"></span>
                        <span className='sr-only'>Previous</span>
                    </a>
                    <a className='carousel-control-next' type='button' href="#carouselExampleIndicators" data-slide="next">
                        <span className='carousel-control-next-icon' aria-hidden="true"></span>
                        <span className='sr-only'>Next</span>
                    </a>
                </div>

                <div className='info-content'>
                        <h3>Create Your Bank Account<br /> in Few Steps with <br/> <p className='text-warning'>RS Bank</p></h3>
                        <Link to={"/login"}>
                        <button className='home-content-acc-btn btn btn-primary'>Create Account <i className="bi bi-arrow-right-circle"></i></button>
                        </Link>
                </div>
            </div>
        </div>
    )
}