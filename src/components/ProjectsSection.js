import React from 'react';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';
import Titles from './Titles';
import projects from '../assets/data/projects';
import Button from './Button';

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .project__button {
    text-align: center;
    padding: 20px;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

export default function ProjectsSection() {
  return (
    <ProjectSectionStyle>
      <div className="container">
        <Titles
          subheading="I have implemented what I have learnt so far"
          heading="Featured Projects"
        />
        <div className="projects__allItems">
          {projects.map((project) => (
            <ProjectItem
              title={project.name}
              img={project.img}
              desc={project.desc}
            />
          ))}
        </div>
        <div className="project__button">
          <Button btnLink="/projects" btnText="View All" outline />
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
