import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { socialLinks } from "./data";
import { Animate } from "react-simple-animate";
import "./styles.scss";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const wordElements = document.querySelectorAll(".word");

    wordElements.forEach((word) => {
      const letters = word.textContent.split("");
      word.textContent = "";
      letters.forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.appendChild(span);
      });
    });

    let currentWordIndex = 0;
    const maxWordIndex = wordElements.length - 1;
    wordElements[currentWordIndex].style.opacity = 1;

    function changeText() {
      const currentWord = wordElements[currentWordIndex];
      const nextWord =
        currentWordIndex === maxWordIndex
          ? wordElements[0]
          : wordElements[currentWordIndex + 1];

      Array.from(currentWord.children).forEach((letter, index) => {
        setTimeout(() => {
          letter.className = "letter out";
        }, index * 80);
      });

      nextWord.style.opacity = 1;
      Array.from(nextWord.children).forEach((letter, index) => {
        letter.className = "letter behind";
        setTimeout(() => {
          letter.className = "letter in";
        }, 340 + index * 80);
      });

      currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    }

    const intervalId = setInterval(changeText, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  function handleNavigate() {
    navigate("/contact");
  }

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>Hello, I'm Jothiprasath P A</h1>
        <div className="home__text-wrapper__change-text">
          <h3>
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{
                transform: "translateY(550px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              And I'm
            </Animate>
          </h3>
          <h3>
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{
                transform: "translateY(550px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <span className="word">Full Stack Developer</span>
            </Animate>
          </h3>
        </div>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigate}>Contact Me</button>
        </div>

        <div className="home__social-icons">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </Animate>
    </section>
  );
}

export default Home;
