import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const TextToSpeech = ({ text, children }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    setUtterance(u);
    
    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

   // if (isPaused) {
   //   synth.resume();
   // }

    synth.speak(utterance);

    setIsPaused(true);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(false);
  };

  return (
     React.Children.map(children, (child) => {
        return React.cloneElement(child, { onClick: handlePlay });
      })
  );
};

export default TextToSpeech;