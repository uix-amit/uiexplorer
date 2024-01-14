import Link from 'next/link';
import Image from 'next/image';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@uiexplorer/ui-components';
import projects from '../assets/data/projects.json';
import arrowLeft from '../assets/img/arrow-left.svg';
import newTab from '../assets/img/new-tab.svg';

export interface ProjectsProps {
  year: number;
  project: string;
  company: string;
  technologiesUsed: string[];
  link: string;
}

export default function Index() {
  return (
    <div className='ue-flex ue-flex-col ue-gap-6'>
      <Link className='ue-flex ue-gap-2 ue-w-fit' href='/'>
        <Image height={16} width={16} src={arrowLeft} alt='back'></Image>
        Amit Kumbharkar
      </Link>
      <h1 className='ue-text-4xl ue-text-white'>All Projects</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='ue-w-24'>Year</TableHead>
            <TableHead className='ue-w-56'>Project</TableHead>
            <TableHead className='ue-hidden md:ue-table-cell ue-w-48'>Made at</TableHead>
            <TableHead className='ue-hidden md:ue-table-cell'>Built with</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.project}>
              <TableCell className='font-medium'>{project.year}</TableCell>
              <TableCell className='ue-text-white'>
                {project.link ? (
                  <a
                    className='ue-flex ue-gap-1 ue-pr-2 ue-justify-between'
                    href={`https://${project.link}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span>{project.project}</span>
                    <Image height={13} width={13} src={newTab} alt={project.link}></Image>
                  </a>
                ) : (
                  project.project
                )}
              </TableCell>
              <TableCell className='ue-hidden md:ue-table-cell'>{project.company}</TableCell>
              <TableCell className='ue-hidden md:ue-flex ue-gap-3 ue-flex-wrap ue-py-6'>
                {project.technologiesUsed.map((technology, index) => (
                  <span
                    className='ue-rounded-full ue-bg-slate-800 ue-text-white ue-px-3 ue-py-1'
                    key={index}
                  >
                    {technology}
                  </span>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
