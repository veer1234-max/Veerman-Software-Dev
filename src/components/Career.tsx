import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UNHACK Hackathon</h4>
                <h5>UNHACK, York University</h5>
              </div>
              <h3>2024 Winter</h3>
            </div>
            <p>
              Worked in a team-based environment to design and develop a functional prototype within a limited timeframe, 
              simulating real-world product development. Contributed to ideation, implementation, and testing, rapidly 
              iterating based on feedback and evolving requirements. Gained experience in building end-to-end features 
              under pressure while maintaining code quality and functionality.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Google Developer Student Club</h5>
              </div>
              <h3>2024 Fall - 2025 Winter</h3>
            </div>
            <p>
              Collaborated within a developer community to build and explore real-world applications using modern technologies 
              such as React, Python, and Git. Participated in hands-on workshops and project-based learning focused on full-stack 
              development, cloud technologies, and software engineering best practices. Contributed to collaborative coding environments, 
              improving code quality through debugging, version control, and peer discussions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Algorithmic Problem Solver</h4>
                <h5>CS Hub, York University</h5>
              </div>
              <h3>2025 Fall</h3>
            </div>
            <p>
              Actively engaged in a student-led computing community focused on solving algorithmic and data structure problems in 
              collaborative sessions. Worked with peers to analyze, debug, and optimize solutions, strengthening problem-solving 
              skills and coding efficiency. Participated in technical discussions on algorithms and system design, reinforcing 
              strong foundations in computer science concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
