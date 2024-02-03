import './global.css';

export const metadata = {
  title: 'Amit Kumbharkar',
  description:
    'Amit Kumbharkar, UI Developer, reactjs, nextjs, react, SASS, Angular, NgRx, RxJs, API Integration, NextJs, MFE, Micro Front-end, JavaScript, HTML5, Cascading Style Sheets, tailwind, SCSS, CSS, Git, jQuery, Front-end Development, Node.js, Bootstrap, TypeScript, Web Development, HTML, Responsive Web Design',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='google-site-verification'
          content='9HBSiJfal9nid2wjQwDZQe69gSmQkisi3vC3JBhmzLs'
        />
      </head>
      <body className='ue-flex ue-flex-col ue-items-center ue-py-24 ue-bg-slate-900 ue-text-slate-400 ue-p-4'>
        <main className='ue-max-w-screen-xl ue-px-0 lg:ue-px-24'>{children}</main>
        <footer className='ue-pt-12 ue-max-w-screen-xl ue-px-0 lg:ue-px-24 ue-text-center'>
          Coded in{' '}
          <a
            href='https://code.visualstudio.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='ue-text-white'
          >
            Visual Studio Code
          </a>{' '}
          by yours truly. Built with{' '}
          <a
            href='https://nextjs.org/'
            target='_blank'
            rel='noopener noreferrer'
            className='ue-text-white'
          >
            Next.js
          </a>{' '}
          and{' '}
          <a
            href='https://tailwindcss.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='ue-text-white'
          >
            Tailwind CSS
          </a>{' '}
          , deployed with{' '}
          <a
            href='https://www.netlify.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='ue-text-white'
          >
            netlify
          </a>
          . All text is set in the{' '}
          <a
            href='https://fonts.google.com/specimen/Roboto'
            target='_blank'
            rel='noopener noreferrer'
            className='ue-text-white'
          >
            Roboto
          </a>{' '}
          &{' '}
          <a
            href='https://fonts.google.com/specimen/Montserrat'
            target='_blank'
            rel='noopener noreferrer'
            className='ue-text-white'
          >
            Montserrat
          </a>
          .
        </footer>
      </body>
    </html>
  );
}
