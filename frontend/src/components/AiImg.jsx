import React, { useContext, useState } from 'react'
import Ai from '../assets/Ai.png'
import { shopDataContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

function AiImg() {
  let { showSearch, setShowSearch } = useContext(shopDataContext);
  let navigate = useNavigate();
  let [activeAi, setActiveAi] = useState(false)
  // to speak function
  function speak(message) {
    let utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  }

  const speechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!speechRecognition) {
    console.log("Speech Recognition Not Supported");
    return null;
  }

  const recognition = new speechRecognition();
  recognition.continuous = false;
  recognition.lang = "en-US";

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript.trim().toLowerCase();
    console.log("You said:", transcript);

    if (transcript.includes("search") && transcript.includes("open") && !showSearch) {
      speak("Opening Search");
      setShowSearch(true);
      navigate("/collections");
    } else if (transcript.includes("search") && transcript.includes("close") && showSearch) {
      speak("Closing Search");
      setShowSearch(false);
    } else if (
      transcript.includes("collection") ||
      transcript.includes("collections") ||
      transcript.includes("product") ||
      transcript.includes("products")
    ) {
      speak("Opening Collection Page");
      navigate("/collections");
    } else if (transcript.includes("about") || transcript.includes("about page")) {
      speak("Opening About Page");
      setShowSearch(false);
      navigate("/about");
    } else if (transcript.includes("home") || transcript.includes("home page")) {
      speak("Opening Home Page");
      setShowSearch(false);
      navigate("/");
    } else if (
      transcript.includes("cart") ||
      transcript.includes("caat") ||
      transcript.includes("kaat")
    ) {
      speak("Opening Cart Page");
      setShowSearch(false);
      navigate("/cart");
    } else if (transcript.includes("contact")) {
      speak("Opening Contact Page");
      setShowSearch(false);
      navigate("/contact");
    } else if (
      transcript.includes("order") ||
      transcript.includes("orders") ||
      transcript.includes("my orders") ||
      transcript.includes("my order")
    ) {
      speak("Opening Your Orders Page");
      setShowSearch(false);
      navigate("/order");
    } else if (transcript.includes("placeorder")) {
      speak("Opening PlaceOrder Page");
      setShowSearch(false);
      navigate("/placeorder");
    }
    else if (transcript.includes("login")) {
      speak("Opening Login Page");
      setShowSearch(false);
      navigate("/login");
    }
    else if (transcript.includes("register")) {
      speak("Opening Register Page");
      setShowSearch(false);
      navigate("/register");
    }
    else if (transcript.includes("product")  ||
      transcript.includes("products")) {
      speak("Opening Product Page");
      setShowSearch(false);
      navigate("/products");
    }
    else {
      toast.error("Try Again");
    }
  };

  recognition.onend = () =>{
    setActiveAi(false)
  }
  return (
    <div
      onClick={() => {recognition.start(); setActiveAi(true)}}
      className="fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%]"
      
    >
      <img
        src={Ai}
        alt="AI Assistant"
        className={`w-[100px] h-[100px] rounded-full cursor-pointer ${activeAi ? 'translate-x-[10%] translate-y-[-10%] scale-125' : 'translate-x-0 translate-y-0 scale-100'} transition-transform`}
        style={{filter:`${activeAi ? "drop-shadow(0px 0px 30px #00d2fc)" : "drop-shadow(0px 0px 20px black)"}`}}
      />
    </div>
  );
}

export default AiImg;
