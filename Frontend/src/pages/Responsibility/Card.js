import classes from './responsibility.module.css'
const Card = (props) => {
    return ( <>
    <div className={classes.cardcontainer}>
        <div className={classes.flipcontainer}>
    {/* <img src = "/asset/img.png"></img> */}
        <div className={classes.cardfront}>
        
            <div className={classes.img}>
     <img src = {props.image} alt="img"></img>
     </div>
        </div>
        <div className ={classes.cardback}>
     
{props.text}
        </div>
        </div>
    </div>
    </>);
}
 
export default Card;