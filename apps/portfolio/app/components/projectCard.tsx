'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@uiexplorer/ui-components';

export interface ProjectCardProps {
  company: string;
  tenure: string;
  position: string;
  projects: string[];
  description: string[];
  technologies: string[];
}

export function ProjectCard(props: ProjectCardProps) {
  const { company, tenure, position, projects, description, technologies } = props;
  const projectsTemplate = projects.map((project, index) => (
    <span key={index}>{`${project}${index + 1 !== projects.length ? ', ' : ''}`}</span>
  ));
  const descriptionTemplate = description.map((responsibility, index) => (
    <li key={index}>{responsibility}</li>
  ));
  const technologiesTemplate = technologies.map((technology, index) => (
    <li className='ue-rounded-full ue-bg-slate-900 ue-text-white ue-px-3 ue-py-1' key={index}>
      {technology}
    </li>
  ));

  return (
    <Card>
      <CardHeader>
        <CardTitle className='ue-flex ue-flex-col ue-gap-2 sm:ue-flex-row sm:ue-gap-0 ue-justify-between'>
          <span>{company}</span>
          <span>{tenure}</span>
        </CardTitle>
        <CardDescription className='ue-flex ue-flex-col'>
          <span>{position}</span>
          <span>{projectsTemplate}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ol className='ue-list-disc ue-pl-4'>{descriptionTemplate}</ol>
      </CardContent>
      <CardFooter>
        <ul className='ue-flex ue-gap-2 ue-flex-wrap'>{technologiesTemplate}</ul>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
