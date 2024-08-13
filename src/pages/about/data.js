// Define the variables at the top level
const aboutMe =
  "Hello! I'm a passionate and aspiring tech enthusiast with a strong interest in Full Stack Web Development, Embedded Systems, Data Science, and Cybersecurity. As a fresher, I'm eager to dive into the tech world and apply my knowledge to real-world challenges." +
  " Beyond the world of code and circuits, I love to travel and explore new places, soaking in different cultures and experiences. My curiosity drives me to constantly learn and grow, both in my professional journey and personal adventures.";

const education = [
  {
    college: "Kongu Arts And Science College, Erode",
    degree: "M.Sc Computer Science",
    percentage: 84.74,
  },

  {
    college: "Kongu Arts And Science College, Erode",
    degree: "B.Sc Computer Science",
    percentage: 69.74,
  },
];

const certifications = [
  {
    certificate: "Embedded Development & Testing (Internship)",
  },

  {
    certificate: "The Complete 2024 Web Development Bootcamp (Udemy)",
  },
];

const internship = [
  {
    companyName: "FeOS Technologies ",
    location: "Chennai",
    duration: "01/12/2023 to 31/03/2024",
    field: "Embedded Systems",
  },
];

// Define the Details component that uses these variables
function Details() {
  return (
    <div className="contentSection">
      {/* <p>{aboutMe}</p> */}
      <h3 className="info">Education</h3>
      <ul>
        {education.map((item, index) => (
          <li key={index}>
            {/* <span className="sub-info"> */}
            <span className="sub-info" style={{lineHeight: 1.2}}> {item.college} </span> <br />
            <span className="sub-info"> {item.degree} </span> <br />
            <span className="sub-info"> {`Percentage - ${item.percentage} %`}</span>  
            {/* </span> */}
          </li> 

        ))}
      </ul>

      <h3 className="info">Certifications</h3>
      <ul className="certifictions">
        {certifications.map((item, index) => (
          <li key={index}>
            <span className="sub-info" style={{lineHeight: 1.2}}>
            {item.certificate}
            </span>
            </li>
        ))}
      </ul>

      <h3 className="info">Internship</h3>
      <ul className="line">
        {internship.map((item, index) => (
          <li key={index}>
            <span className="sub-info">
            <span className="sub-info-title">Company Name : </span> {item.companyName} <br />
            <span className="sub-info-title">Location : </span>{item.location} <br />
            <span className="sub-info-title">Duration : </span> {item.duration} <br />
            <span className="sub-info-title">Field : </span>{item.field}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Export the variables and the Details component
export default Details;
export { aboutMe };
