import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import { Helmet } from "react-helmet";
import "react-vertical-timeline-component/style.min.css";
import { useState, useMemo } from "react";

import { client } from "../gql/index";
import { timelineExpsQuery } from "../gql/requests";
import TimelineCard from "../components/TimelineCard";

import logoIcon from "../assets/img/logo-icon.png";
import aboutImg from "../assets/img/aboutimg.svg";


export default function Home() {
  const [timelineExps, setTimelineExps] = useState([]);

  useMemo(() => {
    client
      .request(timelineExpsQuery)
      .then(data => {
        setTimelineExps(data.timelineExps);
      }).catch(err => {
        console.log(err);
        alert("Could not get timeline data :(");
      });
  }, []);

  return (
    <main>
      <Helmet>
        <title>Alerrad</title>
        <meta name="description" content="Alerrad - web dev portfolio" />
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
                className="btn1"
                onClick={() => {
                  window.scrollTo(0, document.body.scrollHeight);
                }}
              >
                Contact
              </button>
              <a href="https://read.cv/alerrad" className="btn2" target="_blank" rel="noreferrer">
                <button>Get CV</button>
              </a>
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
          <h3 className="centered">My modest</h3>
          <h1 className="centered purple" style={{ marginBottom: 50 }}>
            Experience
          </h1>
          <VerticalTimeline>
            {timelineExps.map(timelineExp => (
              <TimelineCard
                key={timelineExp.id}
                title={timelineExp.title}
                subtitle={timelineExp.subtitle}
                timestamp={timelineExp.timestamp}
                desc={timelineExp.desc}
              />
            ))}
          </VerticalTimeline>
        </div>
      </section>
    </main>
  );
}
