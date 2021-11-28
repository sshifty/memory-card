
const Modal=props=>{

  
  const {currentScore,maxScore}=props.state;
    return (
      <div id="myModal" class="modal">
        <div class="modal-content">          
          <h3>You already clicked on this!</h3>
          <h4>Score: {currentScore}</h4>
          <h4>Max Score so far: {maxScore}</h4>
          <button onClick={props.exit} className="btn-done">Done</button>
        </div>
      </div>
    );
};

export default Modal;