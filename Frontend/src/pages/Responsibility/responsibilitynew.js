

import Card from "./Card";
import classes from './responsibilitynew.module.css';
import Heading from "./Heading";
import Data from "./Data.json";
import { act, useState } from "react";
import previousimg from '../../images/back.png';
import nextimg from '../../images/next-button.png'




  

const Responsibility = () => {
    const [active, setActive] = useState(0);
    function setBar(i){
        setActive(i);
    }
    const PrevSlide = ()=>{
        if(active!==0){
            const new_active = active-1;

            setActive(new_active)
        }
        else{
            const new_active = 3;
            setActive(new_active)
        }
    }
    const NextSlide = ()=>{
        if(active!==3){
            const new_active = active+1;

            setActive(new_active)
        }
        else{
            const new_active = 0;
            setActive(new_active)
        }
    }
    return (
        <div className={classes.Responsibilities}>
            <h1>RESPONSIBILITIES</h1>
            <div className={classes.container}>
                
                {active!== 0 &&<a className="btn-slide" onClick={()=>{
                    PrevSlide()
                }}>
                <img src={previousimg} alt="previousButton" height='35px' width='35px' />
                </a>}
                <div className={classes.headerscontainer}>
                {Data.map((value, i) => (
                    <Heading key={i} index={value.id} heading={value.heading} setBar={setBar} active = {active}/>
                ))}
                </div>
                
                {active!== 3 &&<a className="btn-slide" onClick={()=>{
                    NextSlide()
                }}>
                    <img src={nextimg} alt="previousButton" height='35px' width='35px' />
                </a>}
                
            </div>
            
            <div className={classes.answer_container}>
                {Data.map((value, i) => (
                    i === active && <Card  key={i} details={value.description} image= {value.img} />
                ))}
            </div>
        </div>
    );
}

export default Responsibility;

// import Card from "./Card";
// import classes from './responsibility.module.css';
// import classs from './NewResponsibility.module.css';
// import previousimg from '../../images/back.png'
// import nextimg from '../../images/next-button.png'
// const Responsibility = () => {
//   const toggleSection=(element)=>{
//       console.log('toggleSection running');
      
//       // element.classList.add(classs.center);
//   }
//   return (
//     <>

//       <div className={classes.background}>

//         <div className={classes.heading}>
//           RESPONSIBILITIES
//         </div>

//         <div className={classes.flexcontainer}>
//           <div className={classes.card}>
//             <Card text="To act as a bridge between Kshitij, IIT Kharagpur and your respective college." image="https://i.postimg.cc/t4nQN1PL/image.png" />
//           </div>
//           <div className={classes.card}>
//             <Card text="Publicising Kshitij in your respective colleges by circulating posters, mails or messages in the official college groups." image="https://i.postimg.cc/mkytmXH6/feedbackwhite-crop.png" />
//           </div>
//           <div className={classes.card}>
//             <Card text="Help conduct the Kshitij’s regional event Kascade in their respective hometowns." image="https://i.postimg.cc/Z5rDV67v/indiawhite-1-compress.png" />
//           </div>
//           <div className={classes.card}>
//             <Card text="Ensuring participation from your respective colleges for various events conducted by Kshitij." image="https://i.postimg.cc/yYvYbSDx/hand-final-compress.png" />
//           </div>
//         </div>

//         <div className={classes.bottom}>

//         </div>
//       </div>


//       <div className={classs.background}>

//         <div className={classs.heading}>
//           RESPONSIBILITIES
//         </div>
//         <div>
//           <ul className={classs.listcontainer}>
//             <img src={previousimg} alt="previousButton" height='35px' width='35px' />
//             <li onClick={()=>toggleSection()} className={classs.lists}>Bridge</li>
//             <li className={classs.lists}>Publicity</li>
//             <li className={classs.lists}>College</li>
//             <li className={classs.lists}>Kascade</li>
//             <img src={nextimg} alt="previousButton" height='35px' width='35px' />
//           </ul>
//         </div>
//         <div>
//           <div className={classs.resptext}></div>
//           <div className={classs.respimg}><img src="https://i.postimg.cc/Z5rDV67v/indiawhite-1-compress.png" alt='responsibility image' width='5rem' height='5rem'></img></div>
//         </div>

//         <div className={classs.flexcontainer}>
//           {/* <div className={classs.card}>
//             <Card text="To act as a bridge between Kshitij, IIT Kharagpur and your respective college." image="https://i.postimg.cc/t4nQN1PL/image.png" />
//           </div> */}
//           {/* <div className={classs.card}>
//             <Card text="Publicising Kshitij in your respective colleges by circulating posters, mails or messages in the official college groups." image="https://i.postimg.cc/mkytmXH6/feedbackwhite-crop.png" />
//           </div> */}
//           {/* <div className={classs.card}>
//             <Card text="Help conduct the Kshitij’s regional event Kascade in their respective hometowns." image="https://i.postimg.cc/Z5rDV67v/indiawhite-1-compress.png" />
//           </div> */}
//           {/* <div className={classs.card}>
//             <Card text="Ensuring participation from your respective colleges for various events conducted by Kshitij." image="https://i.postimg.cc/yYvYbSDx/hand-final-compress.png" />
//           </div> */}
//         </div>

//         <div className={classs.bottom}>

//         </div>
//       </div>

//       {/* <div className={classes.headertext}>Responsibilities</div> */}

//     </>
//   );
// }
// export default Responsibility;

