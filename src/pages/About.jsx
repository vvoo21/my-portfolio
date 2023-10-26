import { useState } from 'react';
import { Timeline } from 'antd';
import '../styles/about.css';

const About = () => {
  const [mode] = useState('left');
  
  return (
    <div className="section">
      <h2 className="title">About me</h2>
      <Timeline
        mode={mode}
        items={[
          {
            label: "2023",
            children: "I continue to thrive as a Full-stack Web Developer, with 1 year and 2 months of experience, delivering high-quality web solutions and contributing to the field's advancement.",
          },
          {
            label: "2022",
            children: "I shifted my career focus to Full-stack Web Development, becoming proficient in a variety of languages and frameworks, including React, Redux, Ruby, and Ruby on Rails. I've successfully led over 20 web development projects.",
          },
          {
            label: "2021",
            children: 'I transitioned to the role of Secretary Coordinator, excelling in team leadership, process improvement, and event management.',
          },
          {
            label: "2018",
            children: "I earned a Bachelor of Business Administration degree and commenced my professional journey, initially working as an Import Coordinator.",
          },
        ]}
      />
    </div>
  );
}

export default About