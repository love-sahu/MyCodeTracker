import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./MeetOurTeam.css";

const teamMembers = [
  {
    name: "Trushna Kaware",
    role: "Project Handler",
    email: "trkaware98@gmail.com",
    img: "./src/assets/component/About/meetour team/trushna.jpg",
    contactLink: "https://linktr.ee/trkaware98",
  },
  {
    name: "Kush Sahu",
    role: "Java Developer",
    email: "kushdev.com@gmail.com",
    img: "./src/assets/component/About/meetour team/kush.png",
    contactLink: "https://linktr.ee/Kushsahu",
  },
 
  {
    name: "Sonal Gurve",
    role: " Database Administrator & QA Tester ",
    email: "sonalgurve03@gmail.com",
    img: "./src/assets/component/About/meetour team/sonal.jpg",
    contactLink: "",
  },
  {
    name: "Love Sahu",
    role: "React  & Node.js Developer",
    email: "lovevsahu2003@gmail.com",
    img: "./src/assets/component/About/meetour team/love.jpg",
    contactLink: "https://www.linkedin.com/in/love-sahu-sahu",
  },

  {
    name: "Mayur Chopade",
    role: " UI/UX & Graphic Designer ",
    email: "mayurchopde2000@gmail.com",
    img: "./src/assets/component/About/meetour team/mayur.jpg",
    contactLink: " ",
  },
];

function MeetOurTeam() {
  const carouselRef = useRef(null);

  const handleLeftClick = () => {
    const container = carouselRef.current;
    container.scrollLeft -= container.offsetWidth; // Scroll by container width (3 cards)
  };

  const handleRightClick = () => {
    const container = carouselRef.current;
    container.scrollLeft += container.offsetWidth; // Scroll by container width (3 cards)
  };

  return (
    <section className="meet-our-team">
      <div className="team-header">
        <h1>Meet Our Team</h1>
      </div>
      <div className="carousel-wrapper">
        <FaAngleLeft className="carousel-arrow left" onClick={handleLeftClick} />
        <ul className="carousel" ref={carouselRef}>
          {teamMembers.map((member, index) => (
            <li key={index} className="card">
              <div className="img">
                <img src={member.img} alt={member.name} draggable="false" />
              </div>
              <h1><b>{member.name}</b></h1>
              <h3>{member.role}</h3>
              <p className="card-email">{member.email}</p>
              <p>
                <button className="button">
                  <a href={member.contactLink} target="_blank" rel="noopener noreferrer">
                    Contact
                  </a>
                </button>
              </p>
            </li>
          ))}
        </ul>
        <FaAngleRight className="carousel-arrow right" onClick={handleRightClick} />
      </div>
    </section>
  );
}

export default MeetOurTeam;
