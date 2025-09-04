import styles from './car.module.css';
import './carousal-customStyle.css';
import {useState} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import ReactPlayer from 'react-player';

// const Carousel = ({ cardsData }) => {
//     const [currentCardIndex, setCurrentCardIndex] = useState(0);

//     useEffect(() => {
//       const timer = setTimeout(() => {
//         // Calculate the next card index, and loop back to the first card if necessary.
//         const nextIndex = (currentCardIndex + 1) % cardsData.length;
//         setCurrentCardIndex(nextIndex);
//       }, 3000); // Auto slide every 3 seconds (adjust as needed).

//       // Clear the timer when the component unmounts.
//       return () => clearTimeout(timer);
//     }, [currentCardIndex, cardsData.length]);


function CarouselComponent(props) {
  const [autoplay, setAutoplay] = useState(true);
  const handleClick=(e)=>{
    let video=e.currentTarget.parentElement.firstChild;
    if(video.paused){
      video.play();
      setAutoplay(false);
      e.currentTarget.children[0].style.display="none";
      e.currentTarget.children[1].style.display="flex";
    }else{
      setAutoplay(true);
      video.pause();
      e.currentTarget.children[1].style.display="none";
      e.currentTarget.children[0].style.display="flex";
    }
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
    }
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>TESTIMONIALS</h1>
      <div className={styles.carvid}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          autoPlayOnHover={"hover"}
          // ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={autoplay}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all 1.5s ease"
          transitionDuration={1000}
          containerClass="carousel-container"
          deviceType={props.deviceType}
          dotListClass="dot-list-custom-style"
          itemClass="carousel-item-padding-40-px"
        >
          {/* <Card /> */}
          <div className={styles.videocontainer}>
            <video style={{width:"100%", height:"100%", objectFit:"cover"}} poster="" >
            <source src="https://res.cloudinary.com/dbvnotsqw/video/upload/v1724208414/InShot_20240817_160448034_htg1in.mp4" type="video/mp4"/></video>
            <button onClick={handleClick} className={styles.videoBtn}>
              <svg className={styles.videoBtnPlay} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="#e3ea0b" stroke-width="1.5" stroke-linejoin="round" />
              </svg>
              <svg className={styles.videoBtnPause} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="#e3ea0b" stroke-width="1.5" />
                <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="#e3ea0b" stroke-width="1.5" />
              </svg>
            </button>
            <div className={styles.videoDesc}>
              <p>Prathamesh Chaudhari</p>
              <p>VIT Bhopal</p>
            </div>
          </div>
          {/* <Card /> */}
          <div className={styles.videocontainer}>
            <video style={{width:"100%", height:"100%", objectFit:"cover"}} poster="" >
            <source src="https://res.cloudinary.com/dbvnotsqw/video/upload/v1724208430/IMG_3589_zu8m1h.mov" type="video/mp4"/></video>
            <button onClick={handleClick} className={styles.videoBtn}>
              <svg className={styles.videoBtnPlay} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="#e3ea0b" stroke-width="1.5" stroke-linejoin="round" />
              </svg>
              <svg className={styles.videoBtnPause} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="#e3ea0b" stroke-width="1.5" />
                <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="#e3ea0b" stroke-width="1.5" />
              </svg>
            </button>
            <div className={styles.videoDesc}>
              <p>Netra Sangani</p>
              <p>DJS College of Engineering, Mumbai</p>
            </div>
          </div>
          <div className={styles.videocontainer}>
            <video style={{width:"100%", height:"100%", objectFit:"cover"}} poster="" >
            <source src="https://res.cloudinary.com/dbvnotsqw/video/upload/v1724208801/Untitled_10_1920x1080_8.51Mbps_2024-08-17_19-05-00_conw43.mp4" type="video/mp4"/></video>
            <button onClick={handleClick} className={styles.videoBtn}>
              <svg className={styles.videoBtnPlay} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="#e3ea0b" stroke-width="1.5" stroke-linejoin="round" />
              </svg>
              <svg className={styles.videoBtnPause} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="#e3ea0b" stroke-width="1.5" />
                <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="#e3ea0b" stroke-width="1.5" />
              </svg>
            </button>
            <div className={styles.videoDesc}>
              <p>Aditya Sharma</p>
              <p>Asansol Engineering College</p>
            </div>
          </div>
          <div className={styles.videocontainer}>
            <video style={{width:"100%", height:"100%", objectFit:"cover"}} poster="" >
            <source src="https://res.cloudinary.com/dbvnotsqw/video/upload/v1724208804/Kishan_Bhandari_bbw6zq.mp4" type="video/mp4"/></video>
            <button onClick={handleClick} className={styles.videoBtn}>
              <svg className={styles.videoBtnPlay} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="#e3ea0b" stroke-width="1.5" stroke-linejoin="round" />
              </svg>
              <svg className={styles.videoBtnPause} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="#e3ea0b" stroke-width="1.5" />
                <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="#e3ea0b" stroke-width="1.5" />
              </svg>
            </button>
            <div className={styles.videoDesc}>
              <p>Kishan Bhandari</p>
              <p>Haldia Institute of Technology</p>
            </div>
          </div>
          {/* <Card /> */}
        </Carousel>


      </div>

    </div>
  )
}
export default CarouselComponent;
