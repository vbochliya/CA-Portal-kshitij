import styles from './car.module.css';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import ArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import Card from './Card/Card';

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


function CarouselComponent() {

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>TESTIMONIALS</h1>

      <div className={styles.carvid}>
        <Carousel className={styles.cara}
          NextIcon={<ArrowForwardIosTwoToneIcon />}
          PrevIcon={<ArrowBackIosTwoToneIcon />}
          autoPlay={true}
          indicators={true}
          animation={"slide"}
          navButtonsAlwaysVisible={true}
          
          navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            
            buttonWrapper:{
              position: "absolute",
              height: "10px"
            },
            style: {
              backgroundColor: 'transparent',
              color: '#99006e',
              transform: 'scale(2)',
              borderRadius: 0,
              margin:"0 auto",
              padding:0,
              right:"20vw",
              left:"0vw"
              
            }
            
            // buttonVisible:{
            //   opacity: "1"
            }
            
          }
          // navButtonsWrapperProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          //   style: {
          //     margin:0,
          //     color:"black"
          //   }
          //   // buttonVisible:{
          //   //   opacity: "1"
          //   }
          // }
          
          // navButtonsWrapperProps={{
          //   style:{
          //     height:'10rem',
          //     animation:'none'
          //   }
          // }}

          
          indicatorIconButtonProps={{
            
            style: {
              paddingTop:"10px",
              marginTop: '4rem'            
            }
          }}
        >
          <Card name="Chitransh Kumawat" img="https://drive.google.com/uc?export=view&id=1zTKw9mA_UlpdSVcPymLf6r_Xjt77ZimC" inst="Poornima group of institutions" city="Rajasthan" desc="IIT KHARAGPUR, Kshitij Campus ambassador Program helped me become a part of the worldwide student community and interact with several like-minded people. I enjoyed a lot in this internship and improve my leadership skills and communication skills. I interacted with many new people in my tenure as a campus ambassador and this made me become more confident. I would suggest everyone to participate in the tenure to boost their confidence and leadership skills."></Card>

          {/* <Card name="Karan Saxena" img="https://drive.google.com/uc?export=view&id=1pNaYFT6J5aMmuHPVl03W6T74R0xQIBZe" inst="Invertis University" city="Uttar Pradesh" desc="First of all to represent IIT Kharagpur in my University by being a Campus ambassador was a great moment of honour for me, During my tenure I boosted my confidence by interacting with my collegues and faculties for circulating info related webinars and workshops and all these events were really helpful from technical as well as non-technical point of view. I have developed my leadership and communication skill in a much better way than before, and our mentors were really supportive and were constantly guiding us in throughout the journey."></Card> */}

          <Card name="Manasi Badade " img="https://drive.google.com/uc?export=view&id=1tqC8ZgD2VtppRUoJ8ltjgVtAUzgrNS9w" inst="Nbn Sinhgad School Of Engineering " city="Maharashtra" desc="The Campus Ambassador program enabled me to interact with college students, which in my opinion is great for networking. The management and leadership skills that I have learned from this position has made me far more confident about my ability to lead others in the future."></Card>

          <Card name="Rahul Kumawate" img="https://drive.google.com/uc?export=view&id=15I6ucGUFp090jOsQe2dfgbah4wkemP_9" inst="Poornima University " city="Rajasthan" desc="I am proud to be a campus ambassador of Kshitij IIT Kharagpur .Being a part of it opened numerous doors of opportunities for me. Attending the webinars and sessions of Kshitij were really educational and beneficial for me. These sessions gave me top notch information. I got introduced to so many amazing people. My communication and confidence skills got brushed up. I want to encourage upcoming young students to be a part of it. I also want to thank the mentors who have been very helpful to me . They always kept me updated with Kshitij related assignments. Overall, it was a great experience working with Kshitij IIT Kharagpur. I feel privileged to be a part of it. Looking forward to welcome more such pleasurable opportunities."></Card>

          <Card name="Jaymeen Solanki" img="https://drive.google.com/uc?export=view&id=1fyHcvCY_jpTeSFzpfnJAyZaRJprzvsB_" inst="SIBM, Nagpur" city="Maharashtra" desc="I played the Campus Ambassador role for one of the most significant events held by IIT Kharagpur, i.e. Kshitij. That was an excellent experience for me to boost my existing skills, and learn new skills through the events held by team Kshitij. It was a pleasure to work with team Kshitij."></Card>

          <Card name="Senjuti Dey" img="https://drive.google.com/uc?export=view&id=1kq8TPxhr_1TO8dQEVSy-p8unaDixDjz0" inst="UNIVERSITY OF ENGINEERING AND MANAGEMENT KOLKATA" city="West Bengal" desc="Firstly I would like to thank Kshitij, IIT kharagpur for giving me this opportunity to be a part of such a great event. As a CA you are bound to feel like you're under a lot of pressure. This is because a lot of tasks and trusts are vested in you at the same time. But the good part is,it pays off one way or another. This CA tenure, apart from brushing up my management skills and leadership qualities, also helped me boost my confidence. Co-ordinators were very helpful throughout the journey. Excited for such remarkable next events!"></Card>

          <Card name="Sarvana Kumar" img="https://drive.google.com/uc?export=view&id=1jk7eTpLPeMrNeGw4S8Rf5hrX3OvmolCk" inst="Velammal College of Engineering and Technology (VCET), Madurai" city="Tamil Nadu " desc="The Campus Ambassador Program helped me become a part of the  student community and interact with several people. I enjoyed and learnt a lot in this internship. It helped me  improve my leadership skills and communication skills. "></Card>

          <Card name="Joydeep Setua" img="https://drive.google.com/uc?export=view&id=1Ue8y4S2jCrL6XP3P__AJQVJ9NLHKjBMF" inst="Uday Prasad Uday Government Polytechnic College " city="Durg, Chhattisgarh " desc="The CA journey of Kshitij, IIT Kharagpur was a wonderful learning with fun. Where i learnt to encourage the young talents and to motivate them. I'm glad to have this opportunity in my journey which improved my personality and boosted my confidence."></Card>

          <Card name="Kartvya Master" img="https://drive.google.com/uc?export=view&id=1HAP9Rn4RjlwgKj_OziUTdw4VBgEx2kbx" inst="Sarvajanik College of Engineering & Technology" city="Gujarat" desc="It was  great to be part of such event. With the help of this event I was able to connect to people from different universities and even with my college peers. It helped me to grow as a person."></Card>

          <Card name="Deepa Venkatesan" img="https://drive.google.com/uc?export=view&id=1KVmEPeO6b4zLwLEVnQD869pVMPjuGEbK" inst="Veltech Multi Tech Dr.Rangarajan Dr.sagunthala Engineering College" city="Tamil Nadu" desc="Firstly,Thank you for giving me an amazing opportunity to be a part of CA in KSHITIJ IIT KHARAGPUR. It was very much useful to develop my leadership skills and built by confidence to next level. The workshops conducted by the crew of kshitij is really helpful for my career and my college friends too."></Card>

          <Card name="Aminath Shahana" img="https://drive.google.com/uc?export=view&id=1422G44xnflbXqHsCGnwp6vVxwr2d7jY2" inst="People Institute of Management Studies" city="Kerala" desc="Kshitij is known for non-profit-organisation. The institution provides various technological and other related information for students. The people who are making certain skills for their personal benefit or any creativity skills for personal development Kshitij was helping. When i was joined i have no idea how to do the activities and after getting more knowledge from them i have learned lots of skills, knowledge, build interpersonal relationship and i can spoke with  all the over all country people easily. Then it makes me more beneficial for getting more people knowing about kshitij and they also understood it very well and slowly my friends are also joined in this institutions."></Card>

          {/* <Card name="Kathakali Naskar" img="https://drive.google.com/uc?export=view&id=1B01FyQR_u_17DsOL9h0iqUyopV0K9kzc" inst="meghnad saha institute of technology" city="west bengal" desc="Being a CA for kshitij, was one of the best experiences I had in my very early stage of college life. I could communicate better with my college, rather the whole student community within my reach. All the events taught about new technologies, and business development ideas. Conducting kshitij, is probably the best decisions of IIT Kharagpur. And volunteering to be a CA was mine."></Card> */}

          <Card name="Aman Kumar" img="https://drive.google.com/uc?export=view&id=1ejfCn8S5t1hgH3SH9Zmn8laOrWAKULRC" inst="Government Engineering college West Champaran" city="Bihar" desc="The CA journey of Kshitij, IIT Kharagpur was that of great learning and fun. It increased my confidence in me.The entire experience was a joyful one and full of good experiences which improved my personality. Thank you Kshitij, IIT Kharagpur."></Card>

          {/* <Card name="Sarfaraz Ahmad" img="https://drive.google.com/uc?export=view&id=15zjXFbk8o1jOM8mwJjMtsHhSFUh3L4Yd" inst="Future institute of Engineering and management " city="west bengal" desc="Thank you IIT Kharagpur for giving me this wonderful opportunity.Being the CA of Kshitij of IIT Kharagpur was in itself a proud moment for me. Showcasing my management skills actually got more better by being a part. I was lucky to be a part of various events and workshops conducted by IIT KGP.The tenure was really important both at personal level and at corporate level .It was really a great experience."></Card> */}

          <Card name="Kothapally Agasthya" img="https://drive.google.com/uc?export=view&id=1VdGpgbWvi7lIcBPQAsvfe1X2Nz3QW_aX" inst="University of Petroleum and Engineering Studies" city="Uttarakhand" desc="Working as a campus ambassador has been a really good experience. The tasks are not at all tedious and I had great fun while doing them. It's a great way to put yourself out and communicate"></Card>
        </Carousel>

        
        {/* <ReactPlayer className={styles.video} url={'https://drive.google.com/file/d/1S3XUeEc5r7xelk341d2XR1XbeLS6KGKa/view'} 
          controls={true} width="100%" height='50%'
        /> */}

        <div className={styles.videocontainer}>
          <iframe src="https://drive.google.com/file/d/1S3XUeEc5r7xelk341d2XR1XbeLS6KGKa/preview" 
            allow="autoplay"   allowFullScreen></iframe>
        </div>
      
      </div>
    
    </div>
  )
}
 export default CarouselComponent;
