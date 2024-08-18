import classes from './responsibilitynew.module.css';

const Heading = ({index, setBar, heading, active}) => {
  return (
    <div 
      className={`${classes.nav_head} ${active === index ? classes.active_head : ''}`} 
      onClick={() => setBar(index)}
    >
      {heading}
    </div>
  );
}

export default Heading;