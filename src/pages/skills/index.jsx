import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageheader";
import { skillData } from "./data";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./styles.scss";

function Skills() {
  return (
    <section id="skills" className="skills">
      <PageHeader
        headerText="My Skills"
        icon={<BsInfoCircleFill size={30} />}
      />

      <div className="skills__content-wrapper">
        {skillData.map((item, index) => (
          <div key={index} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text" style={{paddingTop: "30px"}}>
                {item.label}
              </h3>
              <div>
                {item.data.map((skillItems, jindex) => (
                  <AnimateKeyframes
                    play
                    keyframes={["opacity : 1", "opacity : 0"]}
                    duration={1}
                    iterationCount={1}
                  >
                    <div className="progressbar-wrapper" key={jindex}>
                        <p>{skillItems.skillName}</p>
                        <Line 
                        percent={skillItems.percentage}
                        strokeColor={"var(--yellow-theme-main-color)"}
                        strokeWidth={"2"}
                        strokeLinecap="square"
                        trailWidth={"2"}
                        />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
