const Offer = ({ name, isNew }) => {
    return (
      <div class="adventure"> 
      {isNew && <div class="dot"></div>}
      <span class="city"> {name} </span></div>
    )
}
  
export default Offer;