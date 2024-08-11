import Card from "./Card";
import classes from './responsibility.module.css';
const Responsibility = () => {
    return (
        <>
         
        <div className = {classes.background}>
        {/* <div className = "imgcontainer"> */}
        
       <div className ={classes.heading}>
        RESPONSIBILITIES
       </div>
       
       <div className={classes.flexcontainer}>
        <div className={classes.card}>
      <Card  text="To act as a bridge between Kshitij, IIT Kharagpur and your respective college." image = "https://i.postimg.cc/t4nQN1PL/image.png"/>
      </div>
      <div className={classes.card}>
      <Card text="Publicising Kshitij in your respective colleges by circulating posters, mails or messages in the official college groups." image = "https://i.postimg.cc/mkytmXH6/feedbackwhite-crop.png"/>
      </div>
      <div className={classes.card}>
      <Card text="Help conduct the Kshitij’s regional event Kascade in their respective hometowns." image = "https://i.postimg.cc/Z5rDV67v/indiawhite-1-compress.png"/>
      </div>
        <div className={classes.card}>
      <Card text="Ensuring participation from your respective colleges for various events conducted by Kshitij." image = "https://i.postimg.cc/yYvYbSDx/hand-final-compress.png"/>
      </div>
       </div>

       <div className={classes.bottom}>

       </div>
         </div> 
        
        </> 
    );
}
export default Responsibility;