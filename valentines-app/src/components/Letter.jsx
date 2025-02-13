import { useState } from "react"
import { useAppContext } from "../contexts/AppContext"

export const Letter = ({showLetter}) => {

  const [isNo, setIsNo] = useState(false);
  const [noCount, setNoCount] = useState(0)
  const { setIsYes } = useAppContext();

  const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "Plsss? :( You're breaking my heart",
  ];

  const handleNoClick = (event) => {
    event.preventDefault()
    setIsNo(true)
    if ((phrases.length -1) === noCount){
      setNoCount(1)
    }else{
      setNoCount(noCount + 1);
    }

    const yes = document.getElementsByClassName('yes')[0];
    let fontSize = parseInt(window.getComputedStyle(yes).fontSize);
    yes.style.fontSize = `${fontSize + 20}px`;
    
    var x = Math.floor(Math.random()*300)+1;
    var y = Math.floor(Math.random()*400)+1;

    const no = document.getElementById('no');
    no.style.position = 'absolute';
    no.style.right = `${x}px`;
    no.style.bottom = `${y}px`;
  }

  const handleYesClick = (event) => {
    event.preventDefault()
    setIsYes(true);
  }

  return (
  <>
    <div className={`letter ${showLetter} max-w-[800px] p-10 rounded-3xl text-2xl`}>
      <h4>Dear, my love🩷</h4>
      <br/>
      <h4>I may not be there with you as of the moment, but will you be my valentine? {":3"}</h4>
      <br/>
      <h4 className="mb-2">Sincerely,</h4>
      <h4>Your love🤍</h4>
      <div className="yes-no flex flex-wrap justify-end gap-3 mt-8">
        <button className="yes rounded-2xl cursor-pointer z-10 px-5 py-4" 
          onClick={handleYesClick}
        >
          Yes
        </button>
        <button 
          id="no"
          className={`no rounded-2xl cursor-pointer px-6 py-4 transition-all duration-300`}
          onClick={handleNoClick}
        >
          {phrases[noCount]}
        </button>

        <button
          className={`${isNo ? 'invisible' : 'hidden'}`}              
        > 
          No
        </button>
      </div>
    </div>
    </>
  );
}