import Header from '../../components/Header'
import video from '../../graphics/Header.mp4'
import character from '../../graphics/Character_2.mp4'
import Logo from '../../graphics/logo.jpg'
import Img1 from '../../graphics/1.png'
import Img2 from '../../graphics/2.png'
import Img3 from '../../graphics/3.png'
import Img4 from '../../graphics/4.png'
import Img5 from '../../graphics/5.png'
import Img6 from '../../graphics/6.png'
import Img7 from '../../graphics/7.png'
import Img8 from '../../graphics/8.png'
import Img9 from '../../graphics/9.png'
import Img10 from '../../graphics/10.png'
import Img11 from '../../graphics/11.png'
import Img12 from '../../graphics/12.png'
import listedon from '../../graphics/listedon.png'
import Iman from '../../graphics/Iman.png'
import James from '../../graphics/James.png'
import Lucas from '../../graphics/lucas.png'
import Mel from '../../graphics/Mel.png'
import Jimmy from '../../graphics/Jimmy.png'

function Homepage() {
  return (
    <div className="home page-template-default page page-id-36" style={{paddingTop: "0!important"}}>
      <Header />

      <div id="hero">
        <video autoPlay muted loop id="myVideo" style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            bottom: 0}}>
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>

      <section className="section-image-text" style={{paddingTop:0}}>
        <div className="section-content">
        <div className="image-card col-10">
        <div className="image-caption col-5 col-10-s" style={{paddingTop:100}}>
        <h1 className="big-header">
        NFT and Digital Art Vision
        </h1>
        <p>
        NFT and Digital Art, are here to last, however many changes need to be implemented, properly linking digital art to physical hardware and making it painful to produce NFT. That would be our vision
        </p>
        </div>
        <div className="col-5 col-10-s">
        <img src={Logo} alt="" style={{width: '100%'}}/>
        </div>
        </div>
        </div>
      </section>

      <section className="link-boxes section-front">
        <figure className="decorative-diamond"></figure>
        <figure className="decorative-diamond"></figure>
        <figure className="decorative-diamond"></figure>
        <figure className="decorative-diamond"></figure>
        <div className="section-content">
        <div className="link-box col-4 col-10-s bg-green-light">
        <h6 className="medium-header">Avatar Project</h6>
        <p className="text">
        Many avatar projects are in the space, and unless you have something unique, aesthetically pleasing, and treasured by the owner, your project will not survive
        </p>
        </div>
        <div className="link-box col-4 col-10-s bg-green-light">
        <h6 className="medium-header">Isekai</h6>
        <p className="text">
        Although many project around the anime niche are out there, few or none comes from a true Otaku, it usually doesn't feel nostalgic or fell short within expectation, Prestige Lab trying to change that with our Isekai project
        </p>
        </div>
        <div className="link-box col-4 col-10-s bg-green-light mod1">
        <h6 className="medium-header">
        Prestige Protocol
        </h6>
        <p className="text">
        It is a protocol that will build on Ethereum or its second layer; it is a simplified way to do collection, with verifiable artist mechanism and best of all a connection to the real world
        </p>
        </div>
        </div>
      </section>

      <section className="section-image-text">
        <div className="section-content">
        <div className="image-card col-10">
        <div className="image-caption col-10 col-10-s" style={{textAlign: 'center'}}>
        <h1 className="big-header">
        Road Map 
        </h1>
        <p>
        we are working little by little to achieve small wins in this space the roadmap is just an estimation of<br /> what we want to do therefore it might change as we go on with the project.
        </p>
        <div id="hero">
        <video autoPlay muted loop id="myVideo" style={{width: '100%'}}>
        <source src={character} type="video/mp4" />
        Your browser does not support HTML5 video.
        </video> 
        </div>
        </div>
        </div>
        </div>
      </section>

      <section className="section-front" data-animation="gwiazda">
        <section className="section-stars">
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
        </section>

        <div className="section-content">
          <figure className="col-4 col-10-s section-front-image">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="480px" height="960px" viewBox="0 0 480 960" style={{enableBackground:'new 0 0 480 960'}} xmlSpace="preserve">
            <radialGradient id="gradient_2_" cx="238.8254" cy="757.5503" r="115.1563" gradientTransform="matrix(0.9964 0 0 -1.0009 2.0344 960.6321)" gradientUnits="userSpaceOnUse">
            <stop offset="0" style={{stopColor:'#8FCBB6'}} />
            <stop offset="1" style={{stopColor:'#8FCBB6', stopOpacity:0}} />
            </radialGradient>
            <path id="gradient_1_" className="st0" d="M240,87.4c-63.5,0-115,51.5-115,115s51.5,115,115,115s115-51.5,115-115S303.5,87.4,240,87.4z"/>
            <path id="kolo_mniejsze" className="st1" d="M240,228c13.8,0,25-11.2,25-25s-11.2-25-25-25s-25,11.2-25,25S226.2,228,240,228z"/>
            <path id="kolo_wieksze" className="st1" d="M240,259.7c31.3,0,56.6-25.4,56.6-56.6c0-31.3-25.4-56.6-56.6-56.6
            c-31.3,0-56.6,25.4-56.6,56.6S208.7,259.7,240,259.7z"/>
            <line id="linia" className="linia" x1="240" y1="202.4" x2="240" y2="960"/>
            <line id="linia_1_" className="st2" x1="240" y1="202.4" x2="240" y2="960"/>
          </svg>
          </figure>
          <div className="section-front-caption col-6-end col-10-s">
          <h2 className="col-6 col-10-s section-front-title big-header" data-highlighted-word="1">
          Launching  Community  & Avatar Project (Isekai) 
          </h2>
          <div className="col-5-end col-8-end-s section-front-description text">
          <p className="description-paragraph">
          Launching our community loyalty NFT (the teenage superhero collection) which will be free to mint and Launching our high end avatar project (Isekai) , inspired by famous anime of the like of (Attack on Titans , Demon Slayer , Code Guess , HxH and others) without making any similarity to those copyrighted character
          </p>
          </div>
          </div>
        </div>
        <figure className="decorative-diamond"></figure>
        <figure className="decorative-diamond"></figure>
        <figure className="decorative-diamond"></figure>
        <figure className="decorative-diamond"></figure>
      </section>

      <section className="section-front">
        <div className="section-content">
        <figure className="col-4 col-10-s section-front-image">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="480px" height="960px" viewBox="0 0 480 960" style={{enableBackground:'new 0 0 480 960'}} xmlSpace="preserve">
        <linearGradient id="_x38__1_" gradientUnits="userSpaceOnUse" x1="240" y1="352.55" x2="240" y2="555.55">
        <stop offset="0" style={{stopColor:'#C4153E'}}/>
        <stop offset="1" style={{stopColor:'#C4153E', stopOpacity:0}}/>
        </linearGradient>
        <path id="_x38_" className="st20" d="M421,352.5v203H59l0.5-202.4c0,0,0,0,0,0s0,0,0,0v-0.5h2c0,0.8-0.1,1.7-0.1,2.5
        c0,49.3,68.3,90.2,150.8,97.7c0.1,0,0.2,0,0.3,0c0.2,0,0.4,0,0.6,0.1c0.5,0,1,0.1,1.5,0.1c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.6,0
        c0.2,0,0.3,0,0.5,0c0,0,0.1,0,0.1,0c0.7,0.1,1.4,0.1,2,0.2c0.9,0.1,1.7,0.1,2.6,0.2c5.2,0.3,10.5,0.5,15.8,0.6c0.9,0,1.8,0,2.7,0
        h0.4c0.9,0,1.8,0,2.7,0c12.9-0.1,25.5-1,37.6-2.6c5.9-0.8,11.7-1.7,17.3-2.8l0,0c2.3-0.4,4.6-0.9,6.9-1.4
        c66.3-14.4,113.2-50.3,113.2-92.2c0-0.8,0-1.7-0.1-2.5H421z"/>
        <linearGradient id="_x37__1_" gradientUnits="userSpaceOnUse" x1="385.42" y1="350.885" x2="385.44" y2="350.885">
        <stop offset="0" style={{stopColor:'#C4153E'}} />
        <stop offset="0.4281" style={{stopColor:'#420016'}}/>
        <stop offset="0.8083" style={{stopColor:'#C4153E'}}/>
        <stop offset="1" style={{stopColor:'#C4153E'}}/>
        </linearGradient>
        <path id="_x37_" className="st21" d="M385.4,351.1L385.4,351.1c0-0.1,0-0.2,0-0.4C385.4,350.8,385.4,350.9,385.4,351.1z"/>
        <linearGradient id="_x36__1_" gradientUnits="userSpaceOnUse" x1="59.5593" y1="347.7535" x2="350.0891" y2="353.5407">
        <stop offset="0" style={{stopColor:'#C4153E'}}/>
        <stop offset="0.8083" style={{stopColor:'#C4153E'}}/>
        <stop offset="1" style={{stopColor:'#C4153E'}}/>
        </linearGradient>
        <path id="_x36_" className="st22" d="M350,360.5c-1.8,7.1-5.7,13.8-11.2,20c-0.5,0.5-0.9,1-1.4,1.5c-15.7,16.3-43.7,28.2-77.6,31.7
        c-5.7,0.6-11.3,0.9-16.9,1V454c-0.9,0-1.8,0-2.7,0h-0.4c-0.9,0-1.8,0-2.7,0c-5.3-0.1-10.6-0.2-15.8-0.6c-0.9-0.1-1.7-0.1-2.6-0.2
        c-0.7,0-1.4-0.1-2-0.2c0,0-0.1,0-0.1,0c-0.2,0-0.3,0-0.5,0c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.6,0c-0.5,0-1-0.1-1.5-0.1
        c-0.2,0-0.4,0-0.6-0.1c-0.1,0-0.2,0-0.3,0c-80.7-7.1-145.5-44.5-152.3-94.1c-0.2-1.8-0.4-3.7-0.5-5.5c0,0,0,0,0,0s0,0,0,0
        c0,0,0-0.1,0-0.1v-0.1c0-0.6,0-1.3,0-1.9c0.4-50,61.4-91,143.8-100.7c0,0,0.1,0,0.1,0c7.8-0.9,15.7-1.6,23.9-1.9l0.2,5.1
        c-8.1,0.3-16.1,1-23.8,1.9c-0.1,0-0.2,0-0.2,0c-81,9.6-139.3,50.4-138.9,95.7c0,2.3,0.2,4.7,0.5,7.1c0.1,0.9,0.2,1.7,0.4,2.6
        c0,0,0,0.1,0,0.2l1.1,5h0c0,0.1,0,0.1,0.1,0.2c12.6,46.3,85.1,82.5,171.3,83v-15.3c-59.8-0.7-111.3-21.6-132.4-52.3
        c-1.5-2.2-2.9-4.5-4.1-6.9c-2.3-4.5-4-9.1-5-13.9h5c0.8,3.5,2,6.9,3.6,10.3c1.5,3.1,3.3,6.1,5.5,9c7,9.5,17.3,18.2,30.3,25.5
        c4.9,2.8,10.1,5.3,15.7,7.6l5.4,2.2c21.7,8.2,47.8,13.1,75.9,13.4v-14c-51.1-0.7-96.4-21.1-106.6-52c-1.2-3.9-1.8-7.8-1.8-11.6
        c0-6.9,1.9-13.5,5.5-19.7c0,0,0,0,0,0c0,0,0,0,0,0l2-3.3c3.1-4.5,7-8.8,11.6-12.7c10.8-10.5,28.3-18.3,48.8-21.5l0.3,5
        c-14.6,2.4-27.5,7.2-37.1,13.4c-2.8,1.8-5.4,3.8-7.6,5.8c-0.3,0.2-0.6,0.5-0.8,0.8c-0.3,0.2-0.6,0.5-0.9,0.7
        c-3.8,3.3-7,6.8-9.6,10.4c0,0,0,0.1,0,0.1l-0.5,0.8c-0.9,1.3-1.7,2.7-2.4,4c-0.1,0.1-0.1,0.2-0.2,0.3c-2.7,5.1-4,10.4-4,15.8
        c0,3.3,0.5,6.7,1.6,10.1c8.5,27.7,53.3,48.7,104.2,48.5c6.3,0,12.6-0.3,19-1c32.7-3.2,58.8-14.6,73.6-29.3c0.4-0.4,0.8-0.8,1.2-1.2
        c5.3-5.5,9-11.5,10.8-17.6H350z"/>
        <linearGradient id="_x35__1_" gradientUnits="userSpaceOnUse" x1="152.03" y1="318.44" x2="152.92" y2="318.44">
        <stop offset="0" style={{stopColor:'#C4153E'}}/>
        <stop offset="0.4281" style={{stopColor:'#420016'}}/>
        <stop offset="0.8083" style={{stopColor:'#C4153E'}}/>
        <stop offset="1" style={{stopColor:'#C4153E'}}/>
        </linearGradient>
        <path id="_x35_" className="st23" d="M152.9,318.1c-0.3,0.2-0.6,0.5-0.9,0.7C152.3,318.6,152.6,318.3,152.9,318.1L152.9,318.1z"/>
        <linearGradient id="_x34__1_" gradientUnits="userSpaceOnUse" x1="283.995" y1="311.14" x2="283.995" y2="393.91">
        <stop offset="0" style={{stopColor:'#C4153E'}}/>
        <stop offset="0.4025" style={{stopColor:'#C4153E'}}/>
        </linearGradient>
        <path id="_x34_" className="st24" d="M310.4,351.1c0.1-10.1-7.7-20-20.8-27.2c-5.9-3.2-12.8-5.9-20.6-7.8l1.2-4.9
        c7.8,1.9,14.9,4.6,21.1,7.9c14.5,7.7,23.9,18.8,24.1,32c-0.5,22.7-27.9,39.5-62.9,42.8v-5.1c14.8-1.4,27.9-5.4,37.9-11.1
        C303.2,370.6,310.5,361,310.4,351.1z"/>
        <linearGradient id="_x33__1_" gradientUnits="userSpaceOnUse" x1="183.63" y1="376.285" x2="186.07" y2="376.285">
        <stop offset="0" style={{stopColor:'#C4153E'}}/>
        <stop offset="0.4281" style={{stopColor:'#420016'}}/>
        <stop offset="0.8083" style={{stopColor:'#C4153E'}}/>
        <stop offset="1" style={{stopColor:'#C4153E'}}/>
        </linearGradient>
        <path id="_x33_" className="st25" d="M183.6,376.8c0.8-0.5,1.6-0.9,2.4-1.4l-0.3,1.8C185.1,377.1,184.3,376.9,183.6,376.8z"/>
        <linearGradient id="_x32__1_" gradientUnits="userSpaceOnUse" x1="151.16" y1="319.225" x2="152.03" y2="319.225">
        <stop offset="0" style={{stopColor:'#C4153E'}}/>
        <stop offset="0.4281" style={{stopColor:'#420016'}}/>
        <stop offset="0.8083" style={{stopColor:'#C4153E'}}/>
        <stop offset="1" style={{stopColor:'#C4153E'}}/>
        </linearGradient>
        <path id="_x32_" className="st26" d="M152,318.8c-0.3,0.2-0.5,0.5-0.8,0.8c0,0,0,0-0.1,0C151.4,319.3,151.7,319.1,152,318.8z"/>
        <linearGradient id="_x31__1_" gradientUnits="userSpaceOnUse" x1="95.6" y1="350.2235" x2="421.1" y2="350.2235">
        <stop offset="0" style={{stopColor:'#C4153E'}}/>
        <stop offset="0.8083" style={{stopColor:'#C4153E'}}/>
        <stop offset="1" style={{stopColor:'#C4153E'}}/>
        </linearGradient>
        <path id="_x31_" className="st27" d="M421.1,351.2c0,1,0,2-0.1,3c-2.8,48-61.4,87.1-140.6,97.3l-5.2,0.6l0-5
        c64.2-6.7,119.1-37,135.3-71.5l-29.6-3.8c-8,17.7-25.4,32.7-48.9,43.6c-6.8,3.1-14.1,5.9-21.8,8.4l-1.5-4.8
        c7.7-2.4,14.9-5.2,21.5-8.3c22.5-10.5,38.9-24.9,46.1-40.9l1.4-3.6c1.9-5,2.7-10.2,2.7-15.4c0-6.8-1.7-13.4-4.8-19.8
        c-6.3-13.1-18.7-25-35.7-34.5c-4.9-2.8-10.1-5.3-15.7-7.6l-5.4-2.2c-22.4-8.4-49.4-13.4-78.5-13.4H240v14.2h0.4
        c22.7,0,44.4,4,62.5,11l5.8,2.4c12.8,5.7,23.5,13.1,30.9,21.8c0,0,0,0,0,0.1c4.4,5.1,7.7,10.7,9.7,16.7c0.6,1.8,1,3.7,1.3,5.5
        c-1.6,0.1-3.4,0.1-5,0.1c-0.2-1.3-0.6-2.7-1-4c-1.2-3.8-3-7.5-5.5-11c-0.8-1.1-1.6-2.2-2.5-3.3c-7.4-8.8-18.6-16.5-32.4-22.2
        c-0.3-0.2-0.6-0.3-1-0.4c-17.8-7.3-39.7-11.6-62.8-11.6h-0.3v20.1l-2.5,0c-38.1,0.1-67.5,18.4-67.5,38.4c0,10,7.3,19.5,20,26.7
        c9.8,5.5,22.8,9.5,37.3,11v5.1c-34.7-3.5-61.8-20.2-62.3-42.8c0.5-24.7,31.9-42.4,69.9-43.4v-18.4h0v-15.9
        c-36.9,0.8-70.2,9.5-94.4,23.2c-13.1,7.4-23.5,16.1-30.4,25.7c-0.2,0.3-0.4,0.5-0.6,0.8c-4.9,7-8,14.4-9.1,22.1h-5
        c0.1-0.4,0.1-0.9,0.2-1.3c1.2-7.8,4.2-15.3,8.8-22.2c0.2-0.4,0.5-0.8,0.8-1.2c21.4-31.1,74-52.1,134.9-52.2
        c65.3,0.1,121.1,24.3,139.1,59.2c3.7,7.2,5.8,14.9,6,22.9c0,0.2,0,0.3,0,0.5c0,0.1,0,0.2,0,0.4c-0.1,5.4-1.1,10.7-2.9,15.8l30.1,4
        c2.4-6.4,3.6-12.9,3.5-19.6c0-2.3-0.1-4.7-0.4-7.1c-5.2-43.2-62.5-79.3-136.8-88.6c-8-1-16.1-1.7-24.4-2l0.2-5.1
        c8.2,0.4,16.3,1.1,24.2,2c75.7,9.4,135.2,45.5,141.7,93C420.9,346,421.1,348.6,421.1,351.2z"/>
        <g id="labirynt_x5F_cienie">
        <linearGradient id="setgsrtgsrt_1_" gradientUnits="userSpaceOnUse" x1="253.62" y1="251.275" x2="278.9" y2="251.275">
        <stop offset="0.1996" style={{stopColor:'#2D0028'}}/>
        <stop offset="0.8003" style={{stopColor:'#2D0028', stopOpacity:0}} />
        </linearGradient>
        <rect id="setgsrtgsrt" x="253.6" y="245.1" className="st28" width="25.3" height="12.3"/>

        <linearGradient id="tgsgtsrtg_1_" gradientUnits="userSpaceOnUse" x1="253.4461" y1="460.945" x2="279.8161" y2="460.945" gradientTransform="matrix(-0.8003 -0.5996 0.5996 -0.8003 123.0628 826.9983)">
        <stop offset="0.1996" style={{stopColor:'#2D0028'}}/>
        <stop offset="0.8157" style={{stopColor:'#2D0028', stopOpacity:0}}/>
        </linearGradient>
        <polygon id="tgsgtsrtg" className="st29" points="172.6,294.3 197.5,290.1 197.8,291.7 198.7,296.8 198.7,297 199.6,302.2 174.6,306.4 
        174.5,305.8 173.6,300.6 173.6,300.5 173.6,300.4 	"/>

        <linearGradient id="waerae_1_" gradientUnits="userSpaceOnUse" x1="302.8246" y1="566.439" x2="326.2146" y2="566.439" gradientTransform="matrix(-0.9593 0.2823 -0.2823 -0.9593 804.3557 825.1381)">
        <stop offset="0.1996" style={{stopColor:'#2D0028'}}/>
        <stop offset="0.8562" style={{stopColor:'#2D0028', stopOpacity:0}}/>
        </linearGradient>
        <polygon id="waerae" className="st210" points="333.7,381.3 339.8,356.8 344.7,358 349.7,359.2 351.8,359.7 345.7,384.3 345.1,384.1 
        339.9,382.8 339.8,382.8 339.8,382.8 	"/>

        <linearGradient id="jfyujfy_1_" gradientUnits="userSpaceOnUse" x1="220.6547" y1="289.477" x2="247.6647" y2="289.477" gradientTransform="matrix(0.8415 -0.5402 0.5402 0.8415 -252.9971 216.404)">
        <stop offset="0.1996" style={{stopColor:'#2D0028'}}/>
        <stop offset="0.868" style={{stopColor:'#2D0028', stopOpacity:0}}/>
        </linearGradient>
        <polygon id="jfyujfy" className="st211" points="109.7,322.9 103.1,347.3 102.5,347.2 97.4,345.8 97.3,345.8 97.2,345.7 91.2,344.1 
        97.8,319.7 	"/>

        <linearGradient id="tyhjtyj_1_" gradientUnits="userSpaceOnUse" x1="292.6996" y1="461.2877" x2="320.6396" y2="461.2877" gradientTransform="matrix(0.8813 -0.4725 0.4725 0.8813 -201.9608 182.4354)">
        <stop offset="0.1996" style={{stopColor:'#2D0028'}}/>
        <stop offset="0.7906" style={{stopColor:'#2D0028', stopOpacity:0}}/>
        </linearGradient>
        <path id="tyhjtyj" className="st212" d="M297.8,436l0.7,4.5l0.8,5.1l0.2,2.8c0,0-19.4,3.7-24.8,3.7l-1.9-12.2L297.8,436z"/>

        <linearGradient id="tgsrtg_1_" gradientUnits="userSpaceOnUse" x1="196.0189" y1="572.9899" x2="223.9589" y2="572.9899" gradientTransform="matrix(-0.9763 0.2166 -0.2166 -0.9763 545.1733 903.3571)">
        <stop offset="0.1996" style={{stopColor:'#2D0028'}}/>
        <stop offset="1" style={{stopColor:'#2D0028', stopOpacity:0}}/>
        </linearGradient>
        <polygon id="tgsrtg" className="st213" points="202.8,394.1 203.3,389.6 203.9,384.5 204.2,381.8 229.3,384.8 227.9,397.1 	"/>
        <linearGradient id="ags_1_" gradientUnits="userSpaceOnUse" x1="304.7" y1="415.805" x2="332.65" y2="415.805">
        <stop offset="0.1996" style={{stopColor:'#2D0028'}}/>
        <stop offset="0.8274" style={{stopColor:'#2D0028', stopOpacity:0}}/>
        </linearGradient>
        <polygon id="ags" className="st214" points="332.7,417.4 308.8,425.8 304.7,414.2 328.5,405.8 330.3,410.6 332,415.4 	"/>
        </g>
        <path id="linnia" className="st215" d="M65.4,360.8l0-0.2h0C65.3,360.6,65.4,360.7,65.4,360.8z"/>
        <path id="linia" className="linia" d="M240,0v261.2c-88.4,0.3-160.3,42.4-159.8,91.9h33c-0.3-32.4,39-60.5,92.5-68.4l4.4,19
        c-34.8,7.1-59.5,25.8-59.5,47.7c0,28.1,40.7,50.8,91,50.8l-1.7-51l16.1-51.4c42.2,4.2,75.3,28.2,75.3,53.4l32.7-0.1
        c-3.5,35.1-43.2,62.5-105.1,69.9v537"/>
        </svg>
        </figure>
        <div className="section-front-caption col-6-end col-10-s">
        <h2 className="col-6 col-10-s section-front-title big-header" data-highlighted-word="2">
        2-launching Unique Smart Contract & Entertainment Media 
        </h2>
        <div className="col-5-end col-8-end-s section-front-description text">
        <p className="description-paragraph">
        launching our first unique smart contract, to retain the value of the Isekai NFT project and issuing the first entertainment media using the Isekai 
        </p>
        </div>
        </div>
        </div>
        <figure className="decorative-diamond"></figure>
        <figure className="decorative-diamond"></figure>
        <figure className="decorative-diamond"></figure>
        <figure className="decorative-diamond"></figure>
        </section>

        <section className="section-front" data-animation="schody">
          <div className="section-content">
          <figure className="col-4 col-10-s section-front-image">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="480px" height="960px" viewBox="0 0 480 960" style={{enableBackground:'new 0 0 480 960'}} xmlSpace="preserve">
          <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="310" x2="6.123234e-17" y2="309">
          <stop offset="0" style={{stopColor:'#656565'}} />
          <stop offset="0.618" style={{stopColor:'#1B1B1B'}} />
          <stop offset="0.6292" style={{stopColor:'#545454'}} />
          <stop offset="0.9831" style={{stopColor:'#3E3E3E'}} />
          </linearGradient>
          <g id="schody">

          <linearGradient id="l_1_" gradientUnits="userSpaceOnUse" x1="221.3103" y1="882.2886" x2="156.2106" y2="703.4285" gradientTransform="matrix(1 0 0 -1 0 1102)">
          <stop offset="0" style={{stopColor:'#C4153E'}} />
          <stop offset="0.2185" style={{stopColor:'#C4153E'}} />
          <stop offset="0.739" style={{stopColor:'#2D0028'}} />
          <stop offset="0.9575" style={{stopColor:'#2D0028'}} />
          </linearGradient>
          <path id="l" className="st30" d="M74.1,184.5V367l223.4,83V253.1l-54.8-25.6v15.6l-57-27.8v12.2L130,200.7v11.8L74.1,184.5z"/>

          <linearGradient id="k_1_" gradientUnits="userSpaceOnUse" x1="390.82" y1="685.9624" x2="317.5983" y2="887.1377" gradientTransform="matrix(1 0 0 -1 0 1102)">
          <stop offset="4.250036e-02" style={{stopColor:'#2D0028'}} />
          <stop offset="0.261" style={{stopColor:'#2D0028'}} />
          <stop offset="0.7815" style={{stopColor:'#C4153E'}} />
          <stop offset="1" style={{stopColor:'#C4153E'}} />
          </linearGradient>
          <polygon id="k" className="st31" points="410.9,180.9 410.9,399.1 297.5,450 297.5,253.1 354.2,226.5 354.2,209.2 	"/>

          <linearGradient id="j_1_" gradientUnits="userSpaceOnUse" x1="74.1092" y1="917.2501" x2="174.6092" y2="917.2501" gradientTransform="matrix(1 0 0 -1 0 1102)">
          <stop offset="4.250036e-02" style={{stopColor:'#2D0028'}} />
          <stop offset="0.261" style={{stopColor:'#2D0028'}} />
          <stop offset="0.7815" style={{stopColor:'#C4153E'}} />
          <stop offset="1" style={{stopColor:'#C4153E'}} />
          </linearGradient>
          <polygon id="j" className="st32" points="74.1,184.5 130.2,157 174.6,177.8 130.2,200.7 130.2,212.5 	"/>

          <linearGradient id="i_1_" gradientUnits="userSpaceOnUse" x1="130.2092" y1="902.3" x2="230.2092" y2="902.3" gradientTransform="matrix(1 0 0 -1 0 1102)">
          <stop offset="4.250036e-02" style={{stopColor:'#2D0028'}} />
          <stop offset="0.261" style={{stopColor:'#2D0028'}} />
          <stop offset="0.7815" style={{stopColor:'#C4153E'}} />
          <stop offset="1" style={{stopColor:'#C4153E'}} />
          </linearGradient>
          <polygon id="i" className="st33" points="130.2,200.7 185.8,171.9 230.2,193.2 185.8,215.3 185.8,227.5 	"/>

          <linearGradient id="h_1_" gradientUnits="userSpaceOnUse" x1="185.8092" y1="886.9" x2="282.1092" y2="886.9" gradientTransform="matrix(1 0 0 -1 0 1102)">
          <stop offset="4.250036e-02" style={{stopColor:'#2D0028'}} />
          <stop offset="0.261" style={{stopColor:'#2D0028'}} />
          <stop offset="0.7815" style={{stopColor:'#C4153E'}} />
          <stop offset="1" style={{stopColor:'#C4153E'}} />
          </linearGradient>
          <polygon id="h" className="st34" points="242.8,227.5 242.8,243.1 185.8,215.3 242.8,187.1 282.1,206.3 	"/>

          <linearGradient id="g_1_" gradientUnits="userSpaceOnUse" x1="254.5092" y1="962.75" x2="354.2092" y2="962.75" gradientTransform="matrix(1 0 0 -1 0 1102)">
          <stop offset="4.250036e-02" style={{stopColor:'#2D0028'}} />
          <stop offset="0.261" style={{stopColor:'#2D0028'}} />
          <stop offset="0.7815" style={{stopColor:'#C4153E'}} />
          <stop offset="1" style={{stopColor:'#C4153E'}} />
          </linearGradient>
          <polygon id="g" className="st35" points="298.5,110.7 254.5,132.7 297.5,155.4 297.5,167.8 354.2,140 	"/>

          <linearGradient id="f_1_" gradientUnits="userSpaceOnUse" x1="212.6092" y1="928.85" x2="354.2092" y2="928.85" gradientTransform="matrix(1 0 0 -1 0 1102)">
          <stop offset="4.250036e-02" style={{stopColor:'#2D0028'}} />
          <stop offset="0.5178" style={{stopColor:'#2D0028'}} />
          <stop offset="0.861" style={{stopColor:'#C4153E'}} />
          <stop offset="1" style={{stopColor:'#C4153E'}} />
          </linearGradient>
          <polygon id="f" className="st36" points="354.2,140 354.2,153.4 297.5,181.1 297.5,197.6 282.1,206.3 242.8,187.1 230.2,193.2 
          212.6,184.7 242,170.1 242,182.4 297.5,155.4 297.5,167.8 	"/>

          <linearGradient id="e_1_" gradientUnits="userSpaceOnUse" x1="197.9092" y1="947.8" x2="297.5092" y2="947.8" gradientTransform="matrix(1 0 0 -1 0 1102)">
          <stop offset="4.250036e-02" style={{stopColor:'#2D0028'}} />
          <stop offset="0.261" style={{stopColor:'#2D0028'}} />
          <stop offset="0.7815" style={{stopColor:'#C4153E'}} />
          <stop offset="1" style={{stopColor:'#C4153E'}} />
          </linearGradient>
          <polygon id="e" className="st37" points="242.8,126 297.5,155.4 242,182.4 242,170.1 197.9,147.6 	"/>

          <linearGradient id="d_1_" gradientUnits="userSpaceOnUse" x1="142.5092" y1="938.9" x2="242.0092" y2="938.9" gradientTransform="matrix(1 0 0 -1 0 1102)">
          <stop offset="4.250036e-02" style={{stopColor:'#2D0028'}} />
          <stop offset="0.261" style={{stopColor:'#2D0028'}} />
          <stop offset="0.7815" style={{stopColor:'#C4153E'}} />
          <stop offset="1" style={{stopColor:'#C4153E'}} />
          </linearGradient>
          <polygon id="d" className="st38" points="142.5,162.7 186.7,141.4 242,170.1 212.5,184.8 185.8,171.9 174.6,177.8 	"/>

          <linearGradient id="c_1_" gradientUnits="userSpaceOnUse" x1="242.8092" y1="876.65" x2="354.2092" y2="876.65" gradientTransform="matrix(1 0 0 -1 0 1102)">
          <stop offset="4.250036e-02" style={{stopColor:'#2D0028'}} />
          <stop offset="0.261" style={{stopColor:'#2D0028'}} />
          <stop offset="0.7815" style={{stopColor:'#C4153E'}} />
          <stop offset="1" style={{stopColor:'#C4153E'}} />
          </linearGradient>
          <polygon id="c" className="st39" points="354.2,226.5 297.5,253.1 242.8,227.5 297.5,197.6 	"/>

          <linearGradient id="b_1_" gradientUnits="userSpaceOnUse" x1="297.5092" y1="898.2" x2="354.2092" y2="898.2" gradientTransform="matrix(1 0 0 -1 0 1102)">
          <stop offset="0" style={{stopColor:'#1E0016'}} />
          <stop offset="0.2068" style={{stopColor:'#1E0016'}} />
          <stop offset="1" style={{stopColor:'#C4153E'}} />
          <stop offset="1" style={{stopColor:'#C4153E'}} />
          </linearGradient>
          <polygon id="b" className="st310" points="354.2,209.2 354.2,226.5 297.5,197.6 297.5,181.1 	"/>

          <linearGradient id="a_1_" gradientUnits="userSpaceOnUse" x1="297.5092" y1="920.7" x2="410.9092" y2="920.7" gradientTransform="matrix(1 0 0 -1 0 1102)">
          <stop offset="0" style={{stopColor:'#C4153E'}} />
          <stop offset="0.2185" style={{stopColor:'#C4153E'}} />
          <stop offset="0.739" style={{stopColor:'#2D0028'}} />
          <stop offset="0.9575" style={{stopColor:'#2D0028'}} />
          </linearGradient>
          <polygon id="a" className="st311" points="410.9,180.9 354.2,209.2 297.5,181.1 298.1,180.9 354.2,153.4 	"/>
          </g>
          <polyline id="linia_3_" className="linia" points="259,0 259,121.3 322,155.7 322,169.2 359.9,188.4 368.4,229.8 393.3,217.8 
          368.4,229.8 374.2,259.8 399.5,247.6 374.2,259.8 380.3,289.9 405.6,277.7 380.3,289.9 386.3,319.7 411.7,307.5 386.3,319.7 
          392.3,349.6 417.9,337.3 392.3,349.6 398.3,379.5 424,367.1 398.3,379.5 404.3,409.3 430.2,396.9 404.3,409.3 410.3,439.2 
          436.4,426.7 410.3,439.2 416.3,469.1 442.5,456.5 416.3,469.1 422,502.5 422,960 "/>
          <line id="drabina_7_" className="linia" x1="384.9" y1="177.3" x2="449.8" y2="491.9"/>
          </svg>
          </figure>
          <div className="section-front-caption col-6-end col-10-s">
          <h2 className="col-6 col-10-s section-front-title big-header" data-highlighted-word="1">
          3-Announcing details & Testnet prestige protocol   </h2>
          <div className="col-5-end col-8-end-s section-front-description text">
          <p className="description-paragraph">
          Announcing details regarding the prestige protocol and the unique features we are building and  Testnet prestige protocol, likely to be private, or access for limited developer
          </p>
          </div>
          </div>
          </div>
          <figure className="decorative-diamond"></figure>
          <figure className="decorative-diamond"></figure>
          <figure className="decorative-diamond"></figure>
          <figure className="decorative-diamond"></figure>
        </section>

        <section className="section-front" data-animation="dymek">
          <div className="section-content">

          <figure className="col-4 col-10-s section-front-image">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="480px" height="960px" viewBox="0 0 480 960" style={{enableBackground:'new 0 0 480 960'}} xmlSpace="preserve">
          <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="960" x2="6.123234e-17" y2="959">
          <stop offset="0" style={{stopColor:'#656565'}}/>
          <stop offset="0.618" style={{stopColor:'#1B1B1B'}}/>
          <stop offset="0.6292" style={{stopColor:'#545454'}}/>
          <stop offset="0.9831" style={{stopColor:'#3E3E3E'}}/>
          </linearGradient>
          <g id="dymek">
          <linearGradient id="cz4_1_" gradientUnits="userSpaceOnUse" x1="52.158" y1="251.3883" x2="361.585" y2="251.3883">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.7773" style={{stopColor:'#C4153E'}}/>
          <stop offset="1" style={{stopColor:'#C4153E'}}/>
          </linearGradient>
          <polygon id="cz4" className="st40" points="52.2,305.7 361.6,127.1 361.6,197 52.2,375.7 	"/>
          <linearGradient id="cz3_1_" gradientUnits="userSpaceOnUse" x1="105.158" y1="320.3883" x2="414.585" y2="320.3883">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.7773" style={{stopColor:'#C4153E'}}/>
          <stop offset="1" style={{stopColor:'#C4153E'}}/>
          </linearGradient>
          <polygon id="cz3" className="st41" points="105.2,374.7 414.6,196.1 414.6,266 105.2,444.7 	"/>
          <linearGradient id="cz2_1_" gradientUnits="userSpaceOnUse" x1="52.158" y1="455.4823" x2="361.585" y2="455.4823">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.7773" style={{stopColor:'#C4153E'}}/>
          <stop offset="1" style={{stopColor:'#C4153E'}}/>
          </linearGradient>
          <polygon id="cz2" className="st42" points="52.2,509.8 361.6,331.2 361.6,401.1 52.2,579.8 	"/>
          <linearGradient id="cz1_1_" gradientUnits="userSpaceOnUse" x1="112.919" y1="587.0583" x2="185.779" y2="587.0583">
          <stop offset="0" style={{stopColor:'#53052E'}}/>
          <stop offset="0.2154" style={{stopColor:'#61072F'}}/>
          <stop offset="0.7138" style={{stopColor:'#7E0B30'}}/>
          <stop offset="1" style={{stopColor:'#890C30'}}/>
          </linearGradient>
          <polygon id="cz1" className="st43" points="112.9,579.8 185.8,537.7 112.9,636.4 	"/>
          </g>
          <polyline id="linia" className="linia" points="422,0 422,177 16,412 16,514 398,294 398,399 52,598 52,960 "/>
          </svg>
          </figure>

          <div className="section-front-caption col-6-end col-10-s">
          <h2 className="col-6 col-10-s section-front-title big-header" data-highlighted-word="1">
          4-Mainnet prestige protocol
          </h2>
          <div className="col-5-end col-8-end-s section-front-description text">
          <p className="description-paragraph">
          Mainnet prestige protocol and community participation
          </p>
          </div>
          </div>
          </div>
          <figure className="decorative-diamond"></figure>
          <figure className="decorative-diamond"></figure>
          <figure className="decorative-diamond"></figure>
          <figure className="decorative-diamond"></figure>
        </section>


        <section className="section-front mod7" data-animation="kostka">
          <div className="section-content">

          <figure className="col-4 col-10-s section-front-image">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="480px" height="600px" viewBox="0 0 480 600" style={{enableBackground:'new 0 0 480 600'}} xmlSpace="preserve">
          <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0.4" style={{stopColor:'#EBB1A2'}}/>
          <stop offset="0.6" style={{stopColor:'#C4153E'}}/>
          </linearGradient>
          <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0.4" style={{stopColor:'#C4153E'}}/>
          <stop offset="0.6" style={{stopColor:'#EBB1A2'}}/>
          </linearGradient>
          <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0.4" style={{stopColor:'#C0FEE8'}}/>
          <stop offset="0.6" style={{stopColor:'#C4153E'}}/>
          </linearGradient>
          <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0.4" style={{stopColor:'#C4153E'}}/>
          <stop offset="0.6" style={{stopColor:'#C0FEE8'}}/>
          </linearGradient>
          <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0.4" style={{stopColor:'#EBB1A2'}}/>
          <stop offset="0.6" style={{stopColor:'#C0FEE8'}}/>
          </linearGradient>
          <linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0.4" style={{stopColor:'#C0FEE8'}}/>
          <stop offset="0.6" style={{stopColor:'#EBB1A2'}}/>
          </linearGradient>
          <linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0.4" style={{stopColor:'#C0FEE8'}}/>
          <stop offset="0.6" style={{stopColor:'#C0FEE8'}}/>
          </linearGradient>
          <linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0.4" style={{stopColor:'#EBB1A2'}}/>
          <stop offset="0.6" style={{stopColor:'#EBB1A2'}}/>
          </linearGradient>
          <linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0.4" style={{stopColor:'#C4153E'}}/>
          <stop offset="0.6" style={{stopColor:'#C4153E'}}/>
          </linearGradient>
          <linearGradient id="SVGID_10_" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <g id="kolory">
          <g id="bok-lewy">
          <g>
          <polygon id="klocek27_7_" className="czerwony" points="51,196 99.7,224.7 99.7,289.8 51,261.6 			"/>
          <polygon id="klocek26_7_" className="czerwony" points="99.7,224.7 148.3,253.2 148.3,317.9 99.7,289.7 			"/>
          <polygon id="klocek25_7_" className="czerwony" points="148.3,253.2 197,281.5 197,346.2 148.3,318 			"/>
          <polygon id="klocek24_7_" className="czerwony" points="51,261.4 99.7,289.6 99.7,354.4 51,326.1 			"/>
          <polygon id="klocek23_7_" className="czerwony" points="99.7,289.4 148.3,317.7 148.3,382.4 99.7,354.2 			"/>
          <polygon id="klocek22_7_" className="czerwony" points="148.3,317.8 197,346 197,410.8 148.3,382.5 			"/>
          <polygon id="klocek21_7_" className="czerwony" points="51,326 99.7,354.3 99.7,419 51,390.8 			"/>
          <polygon id="klocek20_7_" className="czerwony" points="99.7,354.1 148.3,382.4 148.3,447.1 99.7,418.9 			"/>
          <polygon id="klocek19_7_" className="czerwony" points="148.3,382.4 197,410.7 197,475.4 148.3,447.2 			"/>
          </g>
          <g>
          <linearGradient id="klocek27_1_" gradientUnits="userSpaceOnUse" x1="51" y1="242.9198" x2="99.6794" y2="242.9198">
          <stop offset="0.4" style={{stopColor:'#EBB1A2'}}/>
          <stop offset="0.6" style={{stopColor:'#C4153E'}}/>
          </linearGradient>
          <polygon id="klocek27_6_" className="st50" points="51,196 99.7,224.7 99.7,289.8 51,261.6 			"/>
          <linearGradient id="klocek26_1_" gradientUnits="userSpaceOnUse" x1="99.6667" y1="271.2923" x2="148.3333" y2="271.2923">
          <stop offset="0.4" style={{stopColor:'#C4153E'}}/>
          <stop offset="0.6" style={{stopColor:'#C4153E'}}/>
          </linearGradient>
          <polygon id="klocek26_6_" className="st51" points="99.7,224.7 148.3,253.2 148.3,317.9 99.7,289.7 			"/>
          <linearGradient id="klocek25_1_" gradientUnits="userSpaceOnUse" x1="148.3333" y1="299.7379" x2="197" y2="299.7379">
          <stop offset="0.4" style={{stopColor:'#C0FEE8'}}/>
          <stop offset="0.6" style={{stopColor:'#C4153E'}}/>
          </linearGradient>
          <polygon id="klocek25_6_" className="st52" points="148.3,253.2 197,281.5 197,346.2 148.3,318 			"/>
          <linearGradient id="klocek24_1_" gradientUnits="userSpaceOnUse" x1="51" y1="307.8533" x2="99.6667" y2="307.8533">
          <stop offset="0.4" style={{stopColor:'#C4153E'}}/>
          <stop offset="0.6" style={{stopColor:'#C4153E'}}/>
          </linearGradient>
          <polygon id="klocek24_6_" className="st53" points="51,261.4 99.7,289.6 99.7,354.4 51,326.1 			"/>
          <linearGradient id="klocek23_1_" gradientUnits="userSpaceOnUse" x1="99.6667" y1="335.9334" x2="148.3333" y2="335.9334">
          <stop offset="0.4" style={{stopColor:'#C0FEE8'}}/>
          <stop offset="0.6" style={{stopColor:'#C4153E'}}/>
          </linearGradient>
          <polygon id="klocek23_6_" className="st54" points="99.7,289.4 148.3,317.7 148.3,382.4 99.7,354.2 			"/>
          <linearGradient id="klocek22_1_" gradientUnits="userSpaceOnUse" x1="148.3333" y1="364.2515" x2="197" y2="364.2515">
          <stop offset="0.4" style={{stopColor:'#EBB1A2'}}/>
          <stop offset="0.6" style={{stopColor:'#C4153E'}}/>
          </linearGradient>
          <polygon id="klocek22_6_" className="st55" points="148.3,317.8 197,346 197,410.8 148.3,382.5 			"/>
          <linearGradient id="klocek21_1_" gradientUnits="userSpaceOnUse" x1="51" y1="372.5443" x2="99.6667" y2="372.5443">
          <stop offset="0.4" style={{stopColor:'#C4153E'}}/>
          <stop offset="0.6" style={{stopColor:'#C4153E'}}/>
          </linearGradient>
          <polygon id="klocek21_6_" className="st56" points="51,326 99.7,354.3 99.7,419 51,390.8 			"/>
          <linearGradient id="klocek20_1_" gradientUnits="userSpaceOnUse" x1="99.6667" y1="400.6244" x2="148.3333" y2="400.6244">
          <stop offset="0.4" style={{stopColor:'#C0FEE8'}}/>
          <stop offset="0.6" style={{stopColor:'#C4153E'}}/>
          </linearGradient>
          <polygon id="klocek20_6_" className="st57" points="99.7,354.1 148.3,382.4 148.3,447.1 99.7,418.9 			"/>
          <linearGradient id="klocek19_1_" gradientUnits="userSpaceOnUse" x1="148.3333" y1="428.9424" x2="197" y2="428.9424">
          <stop offset="0.4" style={{stopColor:'#C4153E'}}/>
          <stop offset="0.6" style={{stopColor:'#C4153E'}}/>
          </linearGradient>
          <polygon id="klocek19_6_" className="st58" points="148.3,382.4 197,410.7 197,475.4 148.3,447.2 			"/>
          </g>
          </g>
          <g id="bok-prawy">
          <g>
          <polygon id="klocek18_7_" className="niebieki" points="294.4,224.8 343,196.2 343,261.3 294.4,289.8 			"/>
          <polygon id="klocek17_7_" className="niebieki" points="245.6,253.1 294.4,224.8 294.4,289.6 245.7,317.9 			"/>
          <polygon id="klocek16_7_" className="niebieki" points="197,281.5 245.6,253.1 245.6,317.8 197,346.1 			"/>
          <polygon id="klocek15_7_" className="niebieki" points="294.4,289.7 343,261.2 343,326 294.4,354.3 			"/>
          <polygon id="klocek14_7_" className="niebieki" points="245.7,317.8 294.4,289.4 294.4,354.1 245.7,382.5 			"/>


          <polygon id="klocek13_7_" className="niebieki" points="197,346 245.6,317.6 245.6,382.3 197,410.7 			"/>
          <polygon id="klocek12_7_" className="niebieki" points="294.4,354 343,325.6 343,390.3 294.4,418.6 			"/>
          <polygon id="klocek11_7_" className="niebieki" points="245.7,382.5 294.4,354.1 294.4,418.8 245.7,447.2 			"/>
          <polygon id="klocek10_7_" className="niebieki" points="197,410.9 245.6,382.4 245.6,447.1 197,475.5 			"/>
          </g>
          <g>
          <linearGradient id="klocek18_1_" gradientUnits="userSpaceOnUse" x1="294.3553" y1="243.0034" x2="343" y2="243.0034">
          <stop offset="0.4" style={{stopColor:'#C0FEE8'}}/>
          <stop offset="0.6" style={{stopColor:'#C0FEE8'}}/>
          </linearGradient>
          <polygon id="klocek18_6_" className="st59" points="294.4,224.8 343,196.2 343,261.3 294.4,289.8 			"/>
          <linearGradient id="klocek17_1_" gradientUnits="userSpaceOnUse" x1="245.6448" y1="271.3884" x2="294.3553" y2="271.3884">
          <stop offset="0.4" style={{stopColor:'#C4153E'}}/>
          <stop offset="0.6" style={{stopColor:'#C0FEE8'}}/>
          </linearGradient>
          <polygon id="klocek17_6_" className="st510" points="245.6,253.1 294.4,224.8 294.4,289.6 245.7,317.9 			"/>
          <linearGradient id="klocek16_1_" gradientUnits="userSpaceOnUse" x1="197" y1="299.6096" x2="245.6448" y2="299.6096">
          <stop offset="0.4" style={{stopColor:'#EBB1A2'}}/>
          <stop offset="0.6" style={{stopColor:'#C0FEE8'}}/>
          </linearGradient>
          <polygon id="klocek16_6_" className="st511" points="197,281.5 245.6,253.1 245.6,317.8 197,346.1 			"/>
          <linearGradient id="klocek15_1_" gradientUnits="userSpaceOnUse" x1="294.3553" y1="307.7437" x2="343" y2="307.7437">
          <stop offset="0.4" style={{stopColor:'#EBB1A2'}}/>
          <stop offset="0.6" style={{stopColor:'#C0FEE8'}}/>
          </linearGradient>
          <polygon id="klocek15_6_" className="st512" points="294.4,289.7 343,261.2 343,326 294.4,354.3 			"/>
          <linearGradient id="klocek14_1_" gradientUnits="userSpaceOnUse" x1="245.7105" y1="335.9334" x2="294.3553" y2="335.9334">
          <stop offset="0.4" style={{stopColor:'#C0FEE8'}}/>
          <stop offset="0.6" style={{stopColor:'#C0FEE8'}}/>
          </linearGradient>
          <polygon id="klocek14_6_" className="st513" points="245.7,317.8 294.4,289.4 294.4,354.1 245.7,382.5 			"/>
          <linearGradient id="klocek13_1_" gradientUnits="userSpaceOnUse" x1="197" y1="364.1232" x2="245.6448" y2="364.1232">
          <stop offset="0.4" style={{stopColor:'#C4153E'}}/>
          <stop offset="0.6" style={{stopColor:'#C0FEE8'}}/>
          </linearGradient>
          <polygon id="klocek13_6_" className="st514" points="197,346 245.6,317.6 245.6,382.3 197,410.7 			"/>
          <linearGradient id="klocek12_1_" gradientUnits="userSpaceOnUse" x1="294.3553" y1="372.0951" x2="343" y2="372.0951">
          <stop offset="0.4" style={{stopColor:'#EBB1A2'}}/>
          <stop offset="0.6" style={{stopColor:'#C0FEE8'}}/>
          </linearGradient>
          <polygon id="klocek12_6_" className="st515" points="294.4,354 343,325.6 343,390.3 294.4,418.6 			"/>
          <linearGradient id="klocek11_1_" gradientUnits="userSpaceOnUse" x1="245.7105" y1="400.6244" x2="294.3553" y2="400.6244">
          <stop offset="0.4" style={{stopColor:'#C4153E'}}/>
          <stop offset="0.6" style={{stopColor:'#C0FEE8'}}/>
          </linearGradient>
          <polygon id="klocek11_6_" className="st516" points="245.7,382.5 294.4,354.1 294.4,418.8 245.7,447.2 			"/>
          <linearGradient id="klocek10_1_" gradientUnits="userSpaceOnUse" x1="197" y1="428.9424" x2="245.6448" y2="428.9424">
          <stop offset="0.4" style={{stopColor:'#C0FEE8'}}/>
          <stop offset="0.6" style={{stopColor:'#C0FEE8'}}/>
          </linearGradient>
          <polygon id="klocek10_6_" className="st517" points="197,410.9 245.6,382.4 245.6,447.1 197,475.5 			"/>
          </g>
          </g>
          <g id="gora-kostki">
          <g>
          <polygon id="klocek9_7_" className="rozowy" points="148.3,139.6 197,111.4 245.7,139.7 197,168.1 			"/>
          <polygon id="klocek8_7_" className="rozowy" points="148.4,196.4 197,168.1 245.7,196.5 197,224.8 			"/>
          <polygon id="klocek7_7_" className="rozowy" points="148.3,253.2 197,224.8 245.7,253.1 197,281.5 			"/>
          <polygon id="klocek6_7_" className="rozowy" points="245.7,196.5 294.5,168.1 343,196.2 294.4,224.8 			"/>
          <polygon id="klocek5_7_" className="rozowy" points="197,168.1 245.7,139.7 294.5,168.1 245.7,196.5 			"/>
          <polygon id="klocek4_7_" className="rozowy" points="197,224.8 245.7,196.5 294.4,224.8 245.6,253.1 			"/>
          <polygon id="klocek3_7_" className="rozowy" points="51,196 99.5,167.9 148.4,196.4 99.7,224.7 			"/>
          <polygon id="klocek2_7_" className="rozowy" points="99.5,167.9 148.3,139.6 197,168.1 148.4,196.4 			"/>
          <polygon id="klocek1_7_" className="rozowy" points="99.7,224.7 148.4,196.4 197,224.8 148.3,253.2 			"/>
          </g>
          <g>
          <linearGradient id="klocek9_1_" gradientUnits="userSpaceOnUse" x1="184.7775" y1="118.4983" x2="209.3259" y2="161.0174">
          <stop offset="0.4" style={{stopColor:'#C4153E'}}/>
          <stop offset="0.6" style={{stopColor:'#EBB1A2'}}/>
          </linearGradient>
          <polygon id="klocek9_6_" className="st518" points="148.3,139.6 197,111.4 245.7,139.7 197,168.1 			"/>
          <linearGradient id="klocek8_1_" gradientUnits="userSpaceOnUse" x1="184.7913" y1="175.1825" x2="209.3397" y2="217.7016">
          <stop offset="0.4" style={{stopColor:'#C0FEE8'}}/>
          <stop offset="0.6" style={{stopColor:'#EBB1A2'}}/>
          </linearGradient>
          <polygon id="klocek8_6_" className="st519" points="148.4,196.4 197,168.1 245.7,196.5 197,224.8 			"/>
          <linearGradient id="klocek7_1_" gradientUnits="userSpaceOnUse" x1="184.7359" y1="231.9066" x2="209.2843" y2="274.4257">
          <stop offset="0.4" style={{stopColor:'#C4153E'}}/>
          <stop offset="0.6" style={{stopColor:'#EBB1A2'}}/>
          </linearGradient>
          <polygon id="klocek7_6_" className="st520" points="148.3,253.2 197,224.8 245.7,253.1 197,281.5 			"/>
          <linearGradient id="klocek6_1_" gradientUnits="userSpaceOnUse" x1="282.1381" y1="175.1812" x2="306.6909" y2="217.708">
          <stop offset="0.4" style={{stopColor:'#C0FEE8'}}/>
          <stop offset="0.6" style={{stopColor:'#EBB1A2'}}/>
          </linearGradient>
          <polygon id="klocek6_6_" className="st521" points="245.7,196.5 294.5,168.1 343,196.2 294.4,224.8 			"/>
          <linearGradient id="klocek5_1_" gradientUnits="userSpaceOnUse" x1="233.4469" y1="146.764" x2="258.0404" y2="189.3612">
          <stop offset="0.4" style={{stopColor:'#C4153E'}}/>
          <stop offset="0.6" style={{stopColor:'#EBB1A2'}}/>
          </linearGradient>
          <polygon id="klocek5_6_" className="st522" points="197,168.1 245.7,139.7 294.5,168.1 245.7,196.5 			"/>
          <linearGradient id="klocek4_1_" gradientUnits="userSpaceOnUse" x1="233.4107" y1="203.5811" x2="257.904" y2="246.0046">
          <stop offset="0.4" style={{stopColor:'#EBB1A2'}}/>
          <stop offset="0.6" style={{stopColor:'#EBB1A2'}}/>
          </linearGradient>
          <polygon id="klocek4_6_" className="st523" points="197,224.8 245.7,196.5 294.4,224.8 245.6,253.1 			"/>
          <linearGradient id="klocek3_1_" gradientUnits="userSpaceOnUse" x1="87.3971" y1="174.898" x2="112.0174" y2="217.5416">
          <stop offset="0.4" style={{stopColor:'#C0FEE8'}}/>
          <stop offset="0.6" style={{stopColor:'#EBB1A2'}}/>
          </linearGradient>
          <polygon id="klocek3_6_" className="st524" points="51,196 99.5,167.9 148.4,196.4 99.7,224.7 			"/>
          <linearGradient id="klocek2_1_" gradientUnits="userSpaceOnUse" x1="136.0153" y1="146.7417" x2="160.5899" y2="189.3062">
          <stop offset="0.4" style={{stopColor:'#EBB1A2'}}/>
          <stop offset="0.6" style={{stopColor:'#EBB1A2'}}/>
          </linearGradient>
          <polygon id="klocek2_6_" className="st525" points="99.5,167.9 148.3,139.6 197,168.1 148.4,196.4 			"/>
          <linearGradient id="klocek1_1_" gradientUnits="userSpaceOnUse" x1="136.0566" y1="203.4705" x2="160.6499" y2="246.0673">
          <stop offset="0.4" style={{stopColor:'#EBB1A2'}}/>
          <stop offset="0.6" style={{stopColor:'#EBB1A2'}}/>
          </linearGradient>
          <polygon id="klocek1_6_" className="st526" points="99.7,224.7 148.4,196.4 197,224.8 148.3,253.2 			"/>
          </g>
          </g>
          </g>
          <g id="cienie">
          <g id="cienie-bok-lewy">
          <linearGradient id="cien27_1_" gradientUnits="userSpaceOnUse" x1="51" y1="242.9198" x2="99.6794" y2="242.9198">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien27" className="st527" points="51,196 99.7,224.7 99.7,289.8 51.2,261.9 		"/>
          <linearGradient id="cien26_1_" gradientUnits="userSpaceOnUse" x1="99.6667" y1="271.2923" x2="148.3333" y2="271.2923">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien26" className="st528" points="99.7,224.7 148.3,253.2 148.3,317.9 99.7,289.7 		"/>
          <linearGradient id="cien25_1_" gradientUnits="userSpaceOnUse" x1="148.3333" y1="299.7379" x2="197" y2="299.7379">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien25" className="st529" points="148.3,253.2 197,281.5 197,346.2 148.3,318 		"/>
          <linearGradient id="cien24_1_" gradientUnits="userSpaceOnUse" x1="51" y1="307.8533" x2="99.6667" y2="307.8533">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien24" className="st530" points="51,261.4 99.7,289.6 99.7,354.4 51,326.1 		"/>
          <linearGradient id="cien23_1_" gradientUnits="userSpaceOnUse" x1="99.6667" y1="335.9334" x2="148.3333" y2="335.9334">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien23" className="st531" points="99.7,289.4 148.3,317.9 148.3,382.4 99.7,354.2 		"/>
          <linearGradient id="cien22_1_" gradientUnits="userSpaceOnUse" x1="148.3333" y1="364.2515" x2="197" y2="364.2515">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien22" className="st532" points="148.3,317.8 197,346 197,410.8 148.3,382.5 		"/>
          <linearGradient id="cien21_1_" gradientUnits="userSpaceOnUse" x1="51" y1="372.5443" x2="99.6667" y2="372.5443">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien21" className="st533" points="51,326 99.7,354.3 99.7,419 51,390.8 		"/>
          <linearGradient id="cien20_1_" gradientUnits="userSpaceOnUse" x1="99.6667" y1="400.6244" x2="148.3333" y2="400.6244">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien20" className="st534" points="99.7,354.1 148.3,382.4 148.3,447.1 99.7,418.9 		"/>
          <linearGradient id="cien19_1_" gradientUnits="userSpaceOnUse" x1="148.3333" y1="428.9424" x2="197" y2="428.9424">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien19" className="st535" points="148.3,382.4 197,410.7 197,475.4 148.3,447.2 		"/>
          </g>
          <g id="cienie-bok-prawy">
          <linearGradient id="cien18_1_" gradientUnits="userSpaceOnUse" x1="294.3553" y1="242.9929" x2="343" y2="242.9929">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien18" className="st536" points="294.4,224.8 343,196.2 343,261.2 294.4,289.7 		"/>
          <linearGradient id="cien17_1_" gradientUnits="userSpaceOnUse" x1="245.6448" y1="271.3884" x2="294.3965" y2="271.3884">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien17" className="st537" points="245.6,253.1 294.4,224.8 294.4,289.6 245.7,317.9 		"/>
          <linearGradient id="cien16_1_" gradientUnits="userSpaceOnUse" x1="197" y1="299.6096" x2="245.6448" y2="299.6096">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien16" className="st538" points="197,281.5 245.6,253.1 245.6,317.8 197,346.1 		"/>
          <linearGradient id="cien15_1_" gradientUnits="userSpaceOnUse" x1="294.3553" y1="307.7437" x2="343" y2="307.7437">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien15" className="st539" points="294.4,289.7 343,261.2 343,326 294.4,354.3 		"/>
          <linearGradient id="cien14_1_" gradientUnits="userSpaceOnUse" x1="245.7105" y1="335.9334" x2="294.3553" y2="335.9334">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien14" className="st540" points="245.7,317.8 294.4,289.4 294.4,354.1 245.7,382.5 		"/>
          <linearGradient id="cien13_1_" gradientUnits="userSpaceOnUse" x1="197" y1="364.1232" x2="245.6448" y2="364.1232">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien13" className="st541" points="197,346 245.6,317.6 245.6,382.3 197,410.7 		"/>
          <linearGradient id="cien12_1_" gradientUnits="userSpaceOnUse" x1="294.3553" y1="372.0951" x2="343" y2="372.0951">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien12" className="st542" points="294.4,354 343,325.6 343,390.3 294.4,418.6 		"/>
          <linearGradient id="cien11_1_" gradientUnits="userSpaceOnUse" x1="245.7105" y1="400.6244" x2="294.3553" y2="400.6244">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien11" className="st543" points="245.7,382.5 294.4,354.1 294.4,418.8 245.7,447.2 		"/>
          <linearGradient id="cien10_1_" gradientUnits="userSpaceOnUse" x1="197" y1="428.9424" x2="245.6448" y2="428.9424">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien10" className="st544" points="197,410.9 245.6,382.4 245.6,447.1 197,475.5 		"/>
          </g>
          <g id="cienie-gora-kostki-">
          <linearGradient id="cien9_1_" gradientUnits="userSpaceOnUse" x1="148.3351" y1="139.7877" x2="245.6649" y2="139.7877">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien9" className="st545" points="148.3,139.6 197,111.4 245.7,139.7 197,168.1 		"/>
          <linearGradient id="cien8_1_" gradientUnits="userSpaceOnUse" x1="148.3695" y1="196.4799" x2="245.7211" y2="196.4799">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien8" className="st546" points="148.4,196.4 197,168.1 245.7,196.5 197,224.8 		"/>
          <linearGradient id="cien7_1_" gradientUnits="userSpaceOnUse" x1="148.3333" y1="253.172" x2="245.6649" y2="253.172">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien7" className="st547" points="148.3,253.2 197,224.8 245.7,253.1 197,281.5 		"/>
          <linearGradient id="cien6_1_" gradientUnits="userSpaceOnUse" x1="245.6965" y1="196.5039" x2="343" y2="196.5039">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien6" className="st548" points="245.7,196.5 294.4,168.2 343,196.2 294.4,224.8 		"/>
          <linearGradient id="cien5_1_" gradientUnits="userSpaceOnUse" x1="197.1997" y1="168.1099" x2="294.4728" y2="168.1099">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien5" className="st549" points="197.2,168 245.7,139.7 294.5,168.1 245.7,196.5 245.8,196.5 		"/>
          <linearGradient id="cien4_1_" gradientUnits="userSpaceOnUse" x1="197" y1="224.7713" x2="294.3553" y2="224.7713">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <path id="cien4" className="st550" d="M197,224.8l48.7-28.3l48.6,28.4L245.7,253c0,0-0.1,0-0.1,0L197,224.8z"/>
          <linearGradient id="cien3_1_" gradientUnits="userSpaceOnUse" x1="51" y1="196.2771" x2="148.3695" y2="196.2771">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien3" className="st551" points="51,196 99.5,167.9 148.4,196.4 99.7,224.7 		"/>
          <linearGradient id="cien2_1_" gradientUnits="userSpaceOnUse" x1="99.5367" y1="167.9921" x2="197.0092" y2="167.9921">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien2" className="st552" points="99.5,167.9 148.3,139.6 197,168.1 148.4,196.4 		"/>
          <linearGradient id="cien1_1_" gradientUnits="userSpaceOnUse" x1="99.6794" y1="224.6562" x2="197" y2="224.6562">
          <stop offset="0" style={{stopColor:'#2D0028'}}/>
          <stop offset="0.5004" style={{stopColor:'#2D0028', stopOpacity:0}} />
          </linearGradient>
          <polygon id="cien1" className="st553" points="99.7,224.7 148.4,196.4 197,224.8 148.7,253 		"/>
          </g>
          </g>
          <g id="szpary">
          <polyline className="st554" points="147.9,139.3 293.9,224.5 294.4,224.8 294.5,418.6 	"/>
          <polyline className="st554" points="99.5,167.9 245.6,253.1 245.6,253.1 245.6,447 	"/>
          <polyline className="st554" points="245.7,139.7 99.7,224.7 99.7,224.7 99.7,418.5 	"/>
          <polyline className="st554" points="294.5,168.1 148.3,253.2 148.3,253.2 148.3,447.1 	"/>
          <polyline className="st554" points="343.4,261.6 197,346 197,346 51,261.4 	"/>
          <polyline className="st554" points="343,196.2 197,281.5 197,281.5 51,196 	"/>
          <polyline className="st554" points="343.4,325.6 197,410.8 197,410.8 51,325.4 	"/>
          </g>
          <polyline id="linia_2_" className="linia" points="52,0 51,196 197,111.4 343,196.2 343.1,390.1 197,475.4 51.1,390.9 51,196 197,281.3 
          197,475.4 197,281.5 343,196.2 "/>
          </svg>
          </figure>

          <div className="section-front-caption col-6-end col-10-s">
          <h2 className="col-6 col-10-s section-front-title big-header" data-highlighted-word="3">
          5- More new smart contract
          </h2>
          <div className="col-5-end col-8-end-s section-front-description text">
          <p className="description-paragraph">
          More new smart contract ideas and creative implementation
          </p>
          </div>
          </div>
          </div>
          <figure className="decorative-diamond"></figure>
          <figure className="decorative-diamond"></figure>
          <figure className="decorative-diamond"></figure>
          <figure className="decorative-diamond"></figure>
        </section>

        <section className="section-image-text mod5">
          <div className="section-content">
          <section className="section-stars">
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          <figure className="star"></figure>
          </section>
          <div className="image-card col-10" style={{marginBottom: '4.2vw'}}>

          <div className="image-caption col-8 col-10-s" style={{paddingTop:'50px'}} >

          <h1 className="big-header">
          About US
          </h1>
          <p>
          Prestige Lab is an NFT oriented company , focuses on tackling creative ideas and exploring new territories in the space, We believe that the future of NFT is much more than what we seeing right now , Art need to be aesthetic and sometime need to have hidden meaning and purpose rather than a simple eyes pleasure , On the other hand art need to retain value as time goes on and not to be a trading market with bear and bulls , pump and dump , Art is more like traditional gold with a possibly of hitting jackpot.
          Prestige Lab ultimately want to build a standard for the digital art world , Join our community and help us build the best protocol in the space from zero to hero.

          </p>


          </div>
          <div className="col-2 col-10-s">
          <br />

          <br/><br/><br/><br/>
          <center>
          <a href="https://nftcalendar.io/event/isekai-by-prestige-lab/" target="_blank" className="mod6">			
          <img src={listedon} alt="no" />
          </a>
          </center>
          </div>



          </div>




          </div>  
          <div className="section-content downloads">
              
          <div className="download col-2 col-10-s"> 
          <figure>
          <img src={Iman} alt="iman" />
          </figure>
          <center>
          <h4>Artist : Iman</h4>
          </center>
          </div>
          <div className="download col-2 col-10-s"> 
          <figure>
          <img src={James} alt="james" />
          </figure>
          <center>
          <a href="https://twitter.com/JamessNFT" target="_blank">
          <h4>Concept : James Cole</h4>
          </a>
          </center>
          </div>
          <div className="download col-2 col-10-s"> 
          <a href="skype:live:.cid.276a5580aca4209b?chat" target="_blank">
            <figure>
            <img src={Lucas} alt="lucas" />
            </figure>
            <center>
            <h4>Developer : BlockchainMaster</h4>
            </center>
          </a>
          </div>
          <div className="download col-2 col-10-s"> 
          <figure>
          <img src={Mel} alt="mel" />
          </figure>
          <center>
          <a  target="_blank" href="https://twitter.com/wonderbitcoin">
          <h4>Adviser/Partner: Mel Bak </h4>
          </a>
          </center>
          </div>
          <div className="download col-2 col-10-s"> 
          <figure>
          <img src={Jimmy} alt="jimmy" />
          </figure>
          <center>
          <h4>Marketing : Jimmy_Jay</h4>
          </center>
          </div>
                    
                      
                    
            </div>
                

        </section>
        <br /><br />
        <section className="regular slider fiza1">
          <div>
            <img src={Img1}/>
            </div>
            <div>
            <img src={Img2}/>
            </div>
            <div>
            <img src={Img3}/>
            </div>
            <div>
            <img src={Img4}/>
            </div>
            <div>
            <img src={Img5}/>
            </div>
            <div>
            <img src={Img6}/>
            </div>
            <div>
            <img src={Img7}/>
            </div>
            <div>
            <img src={Img8}/>
            </div>
            <div>
            <img src={Img9}/>
            </div>
            <div>
            <img src={Img10} />
            </div>
            <div>
            <img src={Img11} />
            </div>
            <div>
            <img src={Img12} />
          </div>
        </section>

        <section className="section-image-text" style={{marginTop:'150px'}}>
          <div className="section-content">
          <section className="section-stars">
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
            <figure className="star"></figure>
          </section>
          <div className="image-card col-10">
          <div className="stripped-photo employee-photo col-4 col-6-s" style={{marginBottom:0}}>
          <div className="photo-container">
          <div className="photo-inner-container">
          <figure className="photo" style={{backgroundImage: 'url(https://laszczuk.pl/wp-content/uploads/2020/02/praktyki2-3.svg)'}}></figure>
          </div>
          </div>
          <div className="photo-container">
          <div className="photo-inner-container">
          <figure className="photo" style={{backgroundImage: 'url(https://laszczuk.pl/wp-content/uploads/2020/02/praktyki2-3.svg)'}}></figure>
          </div>
          </div>
          <div className="photo-container">
          <div className="photo-inner-container">
          <figure className="photo" style={{backgroundImage: 'url(https://laszczuk.pl/wp-content/uploads/2020/02/praktyki2-3.svg)'}}></figure>
          </div>
          </div>
          <div className="photo-container">
          <div className="photo-inner-container">
          <figure className="photo" style={{backgroundImage: 'url(https://laszczuk.pl/wp-content/uploads/2020/02/praktyki2-3.svg)'}}></figure>
          </div>
          </div>
          </div>
          <div className="image-caption col-5-end col-10-s">
          <h1 className="big-header">
          Our Projects 
          </h1>
          <br/>
          <div className="praktyka opened">
          <h4 style={{fontSize: '25px'}}>Isekai Avatar (PFP)</h4>
          <div className="praktyka-content">
          <p>
          Our Isekai avatar is consider the main avatar project for Prestige Lab, Isekai is a limited collection of Front full face anime characters that looks awesome with different treats and rarity,<br /><br /> The ultimate goal is to launch a universe base on those character with epic stories and different entertainment output,
          <br /><br /> who know what this might evolve into, so many possibilities 
          </p>
          </div>
          </div>
          <div className="praktyka">
          <h4  style={{fontSize: '25px'}}> Teenage hero</h4>
          <div className="praktyka-content">
          <p>
          Is our free drop that is giving for the community as symbols of being the OG of the community,<br /><br /> owning one will allow user to have a VIP access into other products and serveries Prestige Lab would provide,<br /><br /> although it has a basic treat and rarity it could be the PUNK of our protocol 
          </p>

          </div>
          </div>
          <div className="praktyka">
          <h4  style={{fontSize: '25px'}}>Prestige Protocol</h4>
          <div className="praktyka-content">

          <p>
          is our most ambitious project, we are planning to create an NFT ecosystem that is based on real life use case and with a valuation module that is sustainable and will save the value on any work created on it, we believe that it should be painful to create NFT just as it painful to mine 1 BTC, this effort have unspoken value. The project will also introduce new concept and creative smart contract that is not yet mainstream in the space
          </p>

          </div>
          </div>
          </div>
          </div>
          </div>

          <section className="section-stars">

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          <figure className="star"></figure>

          </section>
        </section>

        <footer className="main-footer " style={{borderTop: 'solid 1px #ffffff33'}}>
          <div className="section-content">
          <div className="col-footer col-10 copyrights ">
          <p className="copyrights col-10  text-s mod2">
              5000 unique Isekai characters who are waiting for their stories to be written.
              <br />
              
              ©2021 Copyright,All right reserve for Prestige LAB.
              
              <a   href="https://twitter.com/PrestigeDef" className="mod3">
          <i className="fa fa-twitter" style={{color:'white'}}></i>
          </a>
          <a   href="https://www.youtube.com/channel/UC7LNw1x46FJGkaiew5ptdvg" target="_blank" className="mod4">
          <i className="fa fa-youtube"  style={{color:'white'}}></i>
          </a>
          <a   href="https://discord.com/invite/B8j5R5VCtR" target="_blank" className="mod4">
          <i className="fa fa-discord"  style={{color:'white'}}></i>
          </a>
              </p>
          </div>

          </div>
        </footer>
    </div>
  );
}

export default Homepage;