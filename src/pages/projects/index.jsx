import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageheader";
import { projectData, filterData } from "./data";
import "./styles.scss";

function Projects() {
  const [filterValueId, setFilterValueId] = useState(1);
  const [hoverValue, setHoverValue] = useState(null);

  function handleFilter(currentId) {
    setFilterValueId(currentId);
  }
  // console.log(filterId);

  const filteredItems =
    filterValueId === 1
      ? projectData
      : projectData.filter((item) => item.id === filterValueId);
  // console.log(filteredItems);

  function handleHover(index) {
    setHoverValue(index);
  }
  // console.log(hoverValue);

  function handleVisit(url) {
    window.open(url, "_blank",)
  }
  

  return (
    <section id="projects" className="projects">
      <PageHeader headerText="Projects" icon={<BsInfoCircleFill size={30} />} />

      <div className="projects__content">
        <ul className="projects__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filterValueId ? "active" : " "}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="projects__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="projects__content__cards__item"
              key={`cardItem ${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="projects__content__cards__item__img-wrapper">
                <a href="#!">
                  <img src={item.image} alt="..." />
                </a>
              </div>
              <div className="img-overlay">
                {
                  index === hoverValue && (
                    <div>
                      <p>{item.name}</p>
                      <button onClick={()=> handleVisit(item.link)}> Visit </button>
                    </div>
                  )
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
