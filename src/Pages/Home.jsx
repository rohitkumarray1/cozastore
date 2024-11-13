import React, { useState, useEffect } from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';
import Products from '../Components/Products';

const Home = () => {
  // State for controlling the current image, slider icons, banner hover effects, and transition
  const [currentImage, setCurrentImage] = useState(0);
  const [isShowSliderIcon, setIsShowSliderIcon] = useState(false);
  const [hoveredBanner, setHoveredBanner] = useState(null);
  const [transitionActive, setTransitionActive] = useState(false);

  // Image URLs and content for the slider
  const images = [
    "https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg",
    "https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg",
    "https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg",
  ];

  const sliderContent = [
    { title: "Women Collection 2018", subtitle: "NEW SEASON", buttonText: "Shop Now" },
    { title: "Men New-Season", subtitle: "JACKETS & COATS", buttonText: "Shop Now" },
    { title: "Men Collection 2018", subtitle: "NEW ARRIVALS", buttonText: "Shop Now" },
  ];

  // Set up image and transition intervals
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 8000);

    const handleTransition = setInterval(() => {
      setTransitionActive((prev) => !prev);
    }, 4000);

    return () => {
      clearInterval(intervalId);
      clearInterval(handleTransition);
    };
  }, [images.length, currentImage]);

  // Handlers for previous and next image in the slider
  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    setTransitionActive(true);
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    setTransitionActive(true);
  };

  // Handlers for banner hover effects
  const handleBannerHover = (bannerIndex) => {
    setHoveredBanner(bannerIndex);
  };

  const handleBannerLeave = () => {
    setHoveredBanner(null);
  };

  return (
    <>
      {/* Hero Slider */}
      <div
        className='relative h-[94vh] w-full'
        onMouseEnter={() => setIsShowSliderIcon(true)}
        onMouseLeave={() => setIsShowSliderIcon(false)}
      >
        <div
          style={{ backgroundImage: `url(${images[currentImage]})` }}
          className='h-full w-full transition-all duration-1000 bg-cover bg-center'
        >
          {/* Slider Text Content */}
          <div className='px-5'>
            <h2 className={`${transitionActive ? 'top-60 opacity-100 delay-0' : 'top-[-100%] opacity-0 delay-0'} top-60 text-[20px] md:text-[28px] font-poppins text-[#333] absolute transition-all duration-1000`}>
              {sliderContent[currentImage].title}
            </h2>

            <h4 className={`${transitionActive ? 'top-72 opacity-100 delay-1000' : 'top-[90%] opacity-0 delay-0'} text-4xl md:text-6xl font-playFair font-bold pt-2 absolute transition-all duration-1000 text-[#333]`}>
              {sliderContent[currentImage].subtitle}
            </h4>

            <Link
              to='/products'
              className={`${transitionActive ? 'scale-100 opacity-100 delay-[2000ms]' : 'scale-0 opacity-0 delay-0'} top-96 bg-[#c5aa6a] text-[#fff] font-semibold py-2 px-8 md:px-12 rounded-full absolute transition-all duration-1000`}
            >
              {sliderContent[currentImage].buttonText}
            </Link>
          </div>

          {/* Slider Control Icons */}
          {isShowSliderIcon && (
            <div className='absolute px-0 md:px-10 flex justify-between w-full top-1/2 transition-all duration-300'>
              <button onClick={handlePrevImage} className='text-6xl text-[#7a7474af]'>
                <IoMdArrowDropleft />
              </button>
              <button onClick={handleNextImage} className='text-6xl text-[#7a7474af]'>
                <IoMdArrowDropright />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Banner Section */}
      <div className='flex flex-wrap gap-4 px-0 md:px-5 pt-20 pb-16'>
        {[
          { title: "Women", subtitle: "Spring 2018", image: "https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg" },
          { title: "Men", subtitle: "Spring 2018", image: "https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg" },
          { title: "Accessories", subtitle: "New Trend", image: "https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg" }
        ].map((banner, index) => (
          <div
            key={index}
            className="p-5 pb-0 w-full md:w-[49%] border-2 cursor-pointer mx-auto relative"
            onMouseEnter={() => handleBannerHover(index)}
            onMouseLeave={handleBannerLeave}
          >
            {/* Overlay Effect */}
            <span
              className={`${hoveredBanner === index ? 'absolute left-0 top-0 w-[100%] h-full z-20 bg-[#c5aa6acc]' : ''} transition-all duration-1000`}
            ></span>

            {/* Banner Content */}
            <div className='relative'>
              <img src={banner.image} alt={banner.title} />
              <Link to={`${index === 0 && '/women' || index === 1 && '/men' || index === 2 && '/babycollection'}`} className="absolute top-0 left-0 z-20">
                <div className={hoveredBanner === index ? 'text-white' : 'text-[#333]'}>
                  <h2 className="font-bold text-[28px]">{banner.title}</h2>
                  <p className="text-sm">{banner.subtitle}</p>
                </div>
                <div className="mt-24 md:mt-40 relative">
                  <div
                    className={`${hoveredBanner === index ? 'top-0 opacity-100' : 'top-3 opacity-0'} absolute text-sm text-[#ffffff] transition-all delay-700 duration-700`}
                  >
                    Shop Now
                  </div>
                  <span
                    className={`${hoveredBanner === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} absolute w-[70px] top-6 border-b-2 transition-all duration-700`}
                  ></span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Product Overview Section */}
      <div>
        <h3 className='text-2xl md:text-4xl pb-3 font-bold px-5'>PRODUCT OVERVIEW</h3>
        <Products />
      </div>
      
    </>
  );
}

export default Home;