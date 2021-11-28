
const Card=(props)=>{
    const {image,clickedIt}=props;
    let imageName=image.name.charAt(0).toUpperCase()+image.name.slice(1,image.name.indexOf("png")-1);

    return (
        <div className="card">
            <h3 className="cardName">{imageName}</h3>
            <img onClick={clickedIt} src={image.src} alt={image.name} name={image.name} />
        </div>
    );
};

export default Card;