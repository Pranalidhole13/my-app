import './ItemDate.css'


function ItemDate(props){
    const date=props.date;
    const Month=props.Month;
    const Year=props.Year;
    return(
       <div className="date">
        <span>{date}</span>
        <span>{Month}</span>
        <span>{Year}</span>
       </div> 
    );
}

export default ItemDate;