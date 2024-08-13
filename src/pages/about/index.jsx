import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageheader";
import Details from "./data";
import { Animate } from "react-simple-animate";
import { aboutMe } from "./data";
import { DiReact, DiPostgresql, DiNodejs } from "react-icons/di";
import { FaDev } from "react-icons/fa";
import "./styles.scss";

function About() {
  return (
    <section id="about" className="about">
      <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={30} />} />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Summary :</h3>
            <p>{aboutMe}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <Details />
          </Animate>
        </div>

        <div className="about__content__serviceWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(700px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__serviceWrapper__innerContent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiNodejs size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiReact size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiPostgresql
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default About;
