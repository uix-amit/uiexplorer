import './global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='google-site-verification'
          content='9HBSiJfal9nid2wjQwDZQe69gSmQkisi3vC3JBhmzLs'
        />
        <title>Amit Kumbharkar</title>
        <meta
          name='description'
          content='Amit Kumbharkar, UI Developer, reactjs, nextjs, react, SASS, Angular, NgRx, RxJs, API Integration, NextJs, MFE, Micro Front-end, JavaScript, HTML5, Cascading Style Sheets, tailwind, SCSS, CSS, Git, jQuery, Front-end Development, Node.js, Bootstrap, TypeScript, Web Development, HTML, Responsive Web Design'
        />

        <meta property='og:url' content='https://uiexplorer.netlify.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Amit Kumbharkar' />
        <meta
          property='og:description'
          content='Amit Kumbharkar, UI Developer, reactjs, nextjs, react, SASS, Angular, NgRx, RxJs, API Integration, NextJs, MFE, Micro Front-end, JavaScript, HTML5, Cascading Style Sheets, tailwind, SCSS, CSS, Git, jQuery, Front-end Development, Node.js, Bootstrap, TypeScript, Web Development, HTML, Responsive Web Design'
        />
        <meta
          property='og:image'
          content='https://opengraph.b-cdn.net/production/documents/5f2b946a-6675-4443-8a7a-87c68fa0701b.jpg?token=U-ef5-P8BW0Hb-1D__9Wtl7KqG4A1r_inJVuO0w-zXw&height=350&width=770&expires=33242965394'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='uiexplorer.netlify.app' />
        <meta property='twitter:url' content='https://uiexplorer.netlify.app/' />
        <meta name='twitter:title' content='Amit Kumbharkar' />
        <meta
          name='twitter:description'
          content='Amit Kumbharkar, UI Developer, reactjs, nextjs, react, SASS, Angular, NgRx, RxJs, API Integration, NextJs, MFE, Micro Front-end, JavaScript, HTML5, Cascading Style Sheets, tailwind, SCSS, CSS, Git, jQuery, Front-end Development, Node.js, Bootstrap, TypeScript, Web Development, HTML, Responsive Web Design'
        />
        <meta
          name='twitter:image'
          content='https://opengraph.b-cdn.net/production/documents/5f2b946a-6675-4443-8a7a-87c68fa0701b.jpg?token=U-ef5-P8BW0Hb-1D__9Wtl7KqG4A1r_inJVuO0w-zXw&height=350&width=770&expires=33242965394'
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
