import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@uiexplorer/ui-components';

import { gql } from '@apollo/client';
import { apollo } from '../apollo';
import experiences from './assets/data/experiences.json';
import emailImage from './assets/img/email.svg';
import downloadIcon from './assets/img/file-arrow-down.svg';
import githubImage from './assets/img/github.svg';
import linkedInImage from './assets/img/linkedin.svg';
import profileImage from './assets/img/profile.jpg';
import whatsAppImage from './assets/img/whatsapp.svg';
import ProjectCard from './components/project-card/projectCard';
import { Blog } from './models/blog';
import BlogSummary from './components/blog-summary/blog-summary';
// import twitterImage from './assets/img/twitter.svg';

async function getBlogList(): Promise<any> {
  const { data } = await apollo.query({
    query: gql`
      query BlogModels {
        blogModels(orderBy: createdAt_ASC) {
          author
          createdAt
          id
          likes
          slug
          subtitle
          tags
          title
          updatedAt
          bannerImage {
            url
          }
          content {
            html
          }
        }
      }
    `,
  });

  return data.blogModels;
}

export default async function Index() {
  const blogsList: Blog[] = await getBlogList();

  const myExperiences = experiences.map((experience, index) => (
    <ProjectCard key={index} {...experience}></ProjectCard>
  ));
  const myBlogs = blogsList.map((blog) => <BlogSummary key={blog.id} {...blog}></BlogSummary>);
  return (
    <div className='ue-flex ue-w-full ue-flex-col lg:ue-flex-row ue-gap-12 lg:ue-gap-24'>
      <div className='ue-flex ue-flex-col ue-w-full lg:ue-sticky ue-h-fit lg:ue-top-24'>
        <h1 className='ue-text-white ue-text-4xl ue-tracking-tight ue-font-bold'>
          Amit Kumbharkar
        </h1>
        <h2 className='ue-text-white ue-mb-6 ue-text-2xl'>
          Lead Engineer at SS&C Technologies Inc.
        </h2>
        <Image
          priority={false}
          className='ue-rounded-2xl ue-mb-6'
          src={profileImage}
          alt='Amit Kumbharkar'
          height={166}
        ></Image>
        <p>I build pixel-perfect, accessible products for the web and beyond.</p>
        <p className='ue-mt-6'>
          Innovative Lead Software Engineer offering 11+ years of international expertise in
          Frontend development. A seasoned professional with a background in full software
          development lifecycles. Quickly learns and masters new technologies while working in both
          team and independent settings.
        </p>
        {/* <h3 className='ue-uppercase ue-text-xl ue-text-white ue-my-6'>checkout my resume!</h3> */}
        <Button
          asChild
          className='ue-w-fit ue-my-6 ue-bg-white hover:!ue-bg-white !ue-text-[#0F172A] ue-uppercase'
        >
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://drive.google.com/file/d/1BiX7ApFJ3baK7nYMw7aaWuPuJz3TWROJ/view'
          >
            <Image width={16} height={16} src={downloadIcon} alt='GitHub' className='ue-mr-2' />
            resume
          </a>
        </Button>
        <ul className='ue-flex ue-gap-6'>
          <li>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/uiexplorer'>
              <Image width={24} height={24} src={githubImage} alt='GitHub' />
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://in.linkedin.com/in/amit-kumbharkar-667415bb'
            >
              <Image width={24} height={24} src={linkedInImage} alt='LinkedIn' />
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:amit.uiexplorer@gmail.com?subject=Discussion%3A%20%5Btopic%5D&body=Hello%20Amit%2C%0A%0AMy%20name%20is%20%5Byour%20name%5D%2C%20and%20I%20am%20mailing%20because%20I%20would%20like%20to%20arrange%20a%20meeting%20with%20you%20to%20discuss%20%5Btopic%5D.%20Would%20you%20be%20available%20for%20a%20meeting%20on%20%5Bdate%5D%20at%20%5Btime%5D%3F%20If%20not%2C%20let%20me%20know%20what%20dates%2Ftimes%20would%20work%20better%20for%20you.%0A%0ARegards%2C%0A%5Byour%20name%5D'
            >
              <Image width={24} height={24} src={emailImage} alt='Gmail' />
            </a>
          </li>
          <li>
            <a target='_blank' rel='noopener noreferrer' href='https://wa.link/ig0lzu'>
              <Image width={24} height={24} src={whatsAppImage} alt='WhatsApp' />
            </a>
          </li>
        </ul>
        {/* <hr className='ue-my-6' />
        <section id='recent-blogs'>{myBlogs}</section> */}
      </div>
      <div className='ue-flex ue-flex-col ue-gap-6 ue-w-full'>
        <section id='about' className='ue-flex ue-w-full ue-flex-col ue-gap-6'>
          <p>
            Back in 2012, I decided to try my hand at frontend development with jQuery & Bootstrap
            and tumbled head first into the rabbit hole of coding and web development. Fast-forward
            to today, and I&apos;ve had the privilege of building softwares across different domains
            for a{' '}
            <a
              href='https://atos.net/en/'
              target='_blank'
              rel='noopener noreferrer'
              className='ue-text-white'
            >
              huge corporation
            </a>
            , an{' '}
            <a
              href='https://www.xoriant.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='ue-text-white'
            >
              innovative tech firm
            </a>
            , an{' '}
            <a
              href='https://www.arrkgroup.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='ue-text-white'
            >
              amazing product for a startup
            </a>
            , and a{' '}
            <a
              href='https://www.ssctech.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='ue-text-white'
            >
              fintech
            </a>
            .
          </p>
          <p>
            My main focus these days is building products and leading projects for our clients at{' '}
            <a
              href='https://www.ssctech.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='ue-text-white'
            >
              SS&C Technologies Inc.
            </a>{' '}
            In my free time I&apos;m building an online video course that covers everything you need
            to know to build a web app with the <span className='ue-text-white'>Angular</span> or{' '}
            <span className='ue-text-white'>React & NextJs</span>.
          </p>
          <p>
            When I&apos;m not at the computer, I&apos;m usually trekking in the Himalayas, hanging
            out with my friends or family.
          </p>
        </section>
        <section id='experience' className='ue-flex ue-w-full ue-flex-col ue-gap-12'>
          {myExperiences}
          <Link className='ue-text-white' href='/projects'>
            View Full Project Archive
          </Link>
        </section>
      </div>
    </div>
  );
}
