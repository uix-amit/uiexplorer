'use client';

import Image from 'next/image';

import ProjectCard from './components/projectCard';
import experiences from './assets/data/experiences.json';
import githubImage from './assets/img/github.svg';
import linkedInImage from './assets/img/linkedin.svg';
// import twitterImage from './assets/img/twitter.svg';

export default function Index() {
  const myExperiences = experiences.map((experience, index) => <ProjectCard key={index} {...experience}></ProjectCard>);
  return (
    <div className="ue-flex ue-w-full ue-flex-col lg:ue-flex-row ue-gap-12 lg:ue-gap-24">
      <div className="ue-flex ue-flex-col ue-w-full lg:ue-sticky ue-h-fit lg:ue-top-24">
        <h1 className="ue-text-white ue-text-4xl ue-tracking-tight ue-font-bold">Amit Kumbharkar</h1>
        <h2 className="ue-text-white ue-mb-6 ue-text-2xl">Lead Engineer at SS&C Technologies Inc.</h2>
        <p>I build pixel-perfect, accessible products for the web and beyond.</p>
        <p className="ue-mt-6">
          Innovative Lead Software Engineer offering 11+ years of international expertise in Frontend development. A
          seasoned professional with a background in full software development lifecycles. Quickly learns and masters
          new technologies while working in both team and independent settings.
        </p>
        <ul className="ue-flex ue-gap-6 ue-mt-6">
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiexplorer">
              <Image width={24} height={24} src={githubImage} alt="GitHub" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://in.linkedin.com/in/amit-kumbharkar-667415bb">
              <Image width={24} height={24} src={linkedInImage} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
      <div className="ue-flex ue-flex-col ue-gap-6 ue-w-full">
        <section id="about" className="ue-flex ue-w-full ue-flex-col ue-gap-6">
          <p>
            Back in 2012, I decided to try my hand at frontend development with jQuery & Bootstrap and tumbled head
            first into the rabbit hole of coding and web development. Fast-forward to today, and I&apos;ve had the
            privilege of building softwares across diffrent domains for a{' '}
            <a href="https://atos.net/en/" target="_blank" rel="noopener noreferrer" className="ue-text-white">
              huge corporation
            </a>
            , an{' '}
            <a href="https://www.xoriant.com/" target="_blank" rel="noopener noreferrer" className="ue-text-white">
              innovative tech firm
            </a>
            , an{' '}
            <a href="https://www.arrkgroup.com/" target="_blank" rel="noopener noreferrer" className="ue-text-white">
              amazing product for a startup
            </a>
            , and a{' '}
            <a href="https://www.ssctech.com/" target="_blank" rel="noopener noreferrer" className="ue-text-white">
              fintech
            </a>
            .
          </p>
          <p>
            My main focus these days is building products and leading projects for our clients at{' '}
            <a href="https://www.ssctech.com/" target="_blank" rel="noopener noreferrer" className="ue-text-white">
              SS&C Technologies Inc.
            </a>{' '}
            In my free time I&apos;m building an online video course that covers everything you need to know to build a
            web app with the <span className="ue-text-white">Angular</span> or{' '}
            <span className="ue-text-white">React & NextJs</span>.
          </p>
          <p>
            When I&apos;m not at the computer, I&apos;m usually trekking in the Himalayas, hanging out with my friends
            or family.
          </p>
        </section>
        <section id="experience" className="ue-flex ue-w-full ue-flex-col ue-gap-12">
          {myExperiences}
        </section>
      </div>
    </div>
  );
}
