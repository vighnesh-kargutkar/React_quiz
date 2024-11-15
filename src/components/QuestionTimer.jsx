import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemaingTime] = useState(timeout);
  useEffect(() => {
    console.log("settimeout");

    const timeouttimer = setTimeout(() => {
      onTimeout();
    }, timeout);
    return () => {
      clearTimeout(timeouttimer);
    };
  }, [timeout, onTimeout]);
  useEffect(() => {
    console.log("setinterval");
    const settimer = setInterval(() => {
      setRemaingTime((preRemaingTime) => preRemaingTime - 100);
    }, 100);
    return () => {
      clearInterval(settimer);
    };
  }, []);
  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
