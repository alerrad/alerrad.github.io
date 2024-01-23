import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Helmet } from "react-helmet";
import "react-vertical-timeline-component/style.min.css";

import logoIcon from "../assets/img/logo-icon.png";
import aboutImg from "../assets/img/aboutimg.svg";

function TimelineIcon() {
  return (
    <div
      style={{
        background: "#8525CF",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
      }}
    ></div>
  );
}

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Alerrad</title>
        <meta name="description" content="Alerrad - web dev portfolio"/>
      </Helmet>
      <section id="hero">
        <div className="container flex-box">
          <div className="stained-text">
            <h1>
              👋 Hi, I am <span className="purple">Zhansen</span>
            </h1>
            <p>Full-stack web dev & designer, from Kazakhstan, Astana</p>
            <div className="flex-box" id="actions">
              <button
                onClick={() => {
                  window.scrollTo(0, document.body.scrollHeight);
                }}
              >
                contact
              </button>
              <button>get CV</button>
            </div>
          </div>
          <img src={logoIcon} alt="hero-img" />
        </div>
      </section>
      <section id="about">
        <div className="container flex-box">
          <img src={aboutImg} alt="img-from-16-personalities" />
          <div className="stained-text">
            <h3>About me</h3>
            <h1 className="purple">ESTJ-A</h1>
            <p>
              I am a dedicated, self-taught, confident full-stack web dev &
              designer. I am experienced with:{" "}
              <span className="pink">
                ReactJS, NodeJS, TypeScript, Python, Docker, GraphQL, SQL, shell
                scripting, Figma, Adobe XD, Postman, WSL, MongoDB, C++, git.
              </span>{" "}
              I am currently learning machine learning & cybersecurity.
            </p>
            <p>
              Beyond the developer world, I am an artist, speedcuber, chess
              enjoyer, athlete and competitive programming enthusiast. I like
              meeting new people, exploring and trying out new things.
            </p>
            <img
              style={{ marginTop: "35px", width: "100%" }}
              src="https://www.codewars.com/users/alerrad/badges/large"
              alt="codewars"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h3 className="centered">My undeniable</h3>
          <h1 className="centered purple" style={{ marginBottom: 50 }}>
            Experience
          </h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              date="2017 - 2022"
              contentStyle={{
                background: "#333",
                color: "#fff",
                boxShadow: "none",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #333" }}
              icon={<TimelineIcon />}
            >
              <h3>Astana BIL</h3>
              <h5>School olympiads</h5>
              <p>
                I started my programming jeorney at school with competetive
                programming in C++
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="2022 Cep. - 2022 Nov."
              contentStyle={{
                background: "#333",
                color: "#fff",
                boxShadow: "none",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #333" }}
              icon={<TimelineIcon />}
            >
              <h3>Edlight digital</h3>
              <h5>Web designer</h5>
              <p>Developed responsive web page designs</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="2022-2025 present"
              contentStyle={{
                background: "#333",
                color: "#fff",
                boxShadow: "none",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #333" }}
              icon={<TimelineIcon />}
            >
              <h3>Astana IT University</h3>
              <h5>Cybersecurity bachelor</h5>
              <p>
                As a cybersecurity bachelor, I am currently studying ethical
                hacking, cryptography & improving my development skills
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="2023, July (Samsung campus Hackathon)"
              contentStyle={{
                background: "#333",
                color: "#fff",
                boxShadow: "none",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #333" }}
              icon={<TimelineIcon />}
            >
              <h3>Bilim Jarys</h3>
              <h5>School olympiads platform</h5>
              <p>
                Developed and designed front-end on reactJS working with custom
                REST API
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </section>
    </main>
  );
}
