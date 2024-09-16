import PropTypes from "prop-types";
import {
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

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

function TimelineCard(props) {
    return (
        <VerticalTimelineElement
            date={props.timestamp}
            contentStyle={{
                background: "#333",
                color: "#fff",
                boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #333" }}
            icon={<TimelineIcon />}
        >
            <h3>{props.title}</h3>
            <h5>{props.subtitle}</h5>
            <p>{props.desc}</p>
        </VerticalTimelineElement>
    );
}

TimelineCard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    timestamp: PropTypes.string,
    desc: PropTypes.string,
};

export default TimelineCard;
