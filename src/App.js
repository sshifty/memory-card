import React,{useState,useRef,useEffect} from 'react';
import './App.css';
import CardContainer from './Components/CardContainer';
import ScoreDisplayer from './Components/ScoreDisplayer';
import NavBar from './Components/NavBar';
import Modal from './Components/Modal';


function App() {

function importAll(r) {
  let images = {};
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });
  return images;
}
const tempImages=importAll(require.context('./images', false, /\.png/));
const images=Object.entries(tempImages).map(img=>{
  let obj={
    name:img[0],
    src:img[1].default,
    hit:false
  }
  return obj;
  
});

const [state, setState] =useState(
  {
    currentScore:0,
    maxScore:0,
    images:images.sort(() => Math.random() - 0.5)
  }
);

const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = state.currentScore;
  });
  const prevCount = prevCountRef.current;


const openModal=()=>{
  const modal=document.querySelector(".modal");  
  modal.style.display="block";
}
const clickedIt=e=>{  
  let temp=state.images;
  let tempScore=state.currentScore;
  let tempMax=state.maxScore;
  let ok=false;
  temp.map(item=>{
    if((item.name===e.target.name) && (!item.hit)){
      ok=true;
      item.hit=true;
      tempScore++;
      if(tempScore>tempMax){
        tempMax++;
      }
      setState(prevState=>{
        return {
          ...prevState,
          currentScore:tempScore,
          maxScore:tempMax,
          images:temp.sort(() => Math.random() - 0.5)
        }
      })
    }
  });
  if(!ok){
    openModal();
    
  }  
  
}
const exit=()=>{
  let temp=state.images;
  let modal=document.querySelector(".modal");  
  
  temp.map(img=>{
    img.hit=false;
  });
    
    
  setState(prevState=>{
    return{
      currentScore:0,
      maxScore:prevState.maxScore,
      images:temp.sort(() => Math.random() - 0.5)
    }
  });
  
  modal.style.display="none";

};
  




  return (
    <div className="App">
      <NavBar />
      <ScoreDisplayer state={state}/>
      <CardContainer 
        state={state}
        images={state.images}
        clickedIt={clickedIt}  
        />
      <Modal 
      exit={exit}
      state={state}/>  
    </div>
  );
}

export default App;
