import React from "react";
import Agentbox from "./Agentbox";
import agentimage1 from "../images/s1.png";
import agentimage2 from "../images/s2.png";
import agentimage3 from "../images/s3.png";

function Agent() {
  return (
    <div className="agent">
      <div className="a-heading">
        <h1>Agents</h1>
        <p>
          Choose the agents from your own. Everyone has a speciality in his
          area.
        </p>
      </div>
      <div className="b-container">
        <Agentbox image={agentimage1} name="Harsh" />
        <Agentbox image={agentimage2} name="Ajay" />
        
      </div>
    </div>
  );
}

export default Agent;
