import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageheader";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./data";
import "./styles.scss";
import { MdWork, MdSchool } from "react-icons/md";
import  { Animate } from "react-simple-animate";


const cvLink = "/cv/JothiPrasath P A Resume.pdf"


function Resume() {
  return (
    <section id="resume" className="resume">
      <PageHeader headerText="Resume" icon={<BsInfoCircleFill size={30} />} />

      <Animate
      play
      duration={1}
      delay={0.3}
      start={{
        transform: "translateX(200px)",
      }}
      end={{
        transform: "translateX(0px)",
      }} 
      >
      <div className="resume__download-button">
        <a href={cvLink} download className="resume__download-link">
          Download CV
        </a>
      </div>
      </Animate>

     

      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.experience.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)"
                }}
                icon = {<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)"
                }}
                >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3> 

                  <h4 className="vertical-timeline-element-subtitle"> 
                    {item.subTitle}
                  </h4> 
                </div>

                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--yellow-theme-line-color)"
          >
          {data.education.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="timeline__education__vertical-timeline-element"
              contentStyle={{
                background: "none",
                color: "var(--yellow-theme-sub-text-color)",
                border: "1.5px solid var(--yellow-theme-main-color)"
              }}
              icon = {<MdSchool />}
              iconStyle={{
                background: "#181818",
                color: "var(--yellow-theme-main-color)"
              }}
            >
              <div className="vertical-timeline-element-title-wrapper">
                <h3 className="vertical-timeline-element-title">
                  {item.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.subTitle} 
                </h4>
              </div>
              <p>{item.description}</p>
              <p>{item.percentage} %</p>
            </VerticalTimelineElement>
          ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

export default Resume;
