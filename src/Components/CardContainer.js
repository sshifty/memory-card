import Card from "./Card";


const CardContainer =props =>{
    const {images,clickedIt,state}=props;
    console.log(state)
    
    return(
        <div className="card-container">
            {images.map(img=>{
                return (
                    <Card 
                    clickedIt={clickedIt}
                    image={img}/>
                )
            })}
        </div>
        
    );
};

export default CardContainer;