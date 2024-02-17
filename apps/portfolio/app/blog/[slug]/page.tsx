import { gql } from '@apollo/client';
import { apollo } from 'apps/portfolio/apollo';
import Image from 'next/image';
import Link from 'next/link';

export interface PageProps {}

async function getBlogData(slug: string): Promise<any> {
  const { data } = await apollo.query({
    query: gql`
      query FindBlog($slug: String!) {
        blogModel(where: { slug: $slug }) {
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
            json
          }
        }
      }
    `,
    variables: { slug },
  });

  return data.blogModel;
}

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const blogData = await getBlogData(slug);
  const content = blogData.content.json.children;
  return (
    <div className='ue-text-white ue-flex ue-flex-col ue-gap-6'>
      <h1 className='ue-text-3xl'>{blogData.title}</h1>
      <h2 className='ue-text-2xl ue-text-slate-300'>{blogData.subtitle}</h2>
      <Image src={content[1].src} alt='banner image' width={1024} height={447}></Image>
      <p>{content[2].children[0].text}</p>
      <h3 className='ue-text-xl'>{content[3].children[0].text}</h3>
      <p>{content[4].children[0].text}</p>
      <ol className='ue-list-decimal ue-ml-4 ue-flex ue-flex-col ue-gap-3'>
        {content[5].children.map((item: any, index: number) => (
          <li key={index}>
            <span className='ue-font-bold ue-text-lg'>{item.children[0].children[0].text}</span>
            {item.children[0].children[1].text}
          </li>
        ))}
      </ol>
      <p>{content[6].children[0].text}</p>
      <h3 className='ue-text-xl'>{content[7].children[0].text}</h3>
      <p>{content[8].children[0].text}</p>
      <ol className='ue-list-decimal ue-ml-4 ue-flex ue-flex-col ue-gap-3'>
        {content[9].children.map((item: any, index: number) => (
          <li key={index}>
            <span className='ue-font-bold ue-text-lg'>{item.children[0].children[0].text}</span>
            {item.children[0].children[1].text}
          </li>
        ))}
      </ol>
      <p>{content[10].children[0].text}</p>
      <h3 className='ue-text-xl'>{content[11].children[0].text}</h3>
      <p>{content[12].children[0].text}</p>
      <ol className='ue-list-decimal ue-ml-4 ue-flex ue-flex-col ue-gap-3'>
        {content[13].children.map((item: any, index: number) => (
          <li key={index}>
            <span className='ue-font-bold ue-text-lg'>{item.children[0].children[0].text}</span>
            {item.children[0].children[1].text}
          </li>
        ))}
      </ol>
      <p>{content[14].children[0].text}</p>
      <h3 className='ue-text-xl'>{content[15].children[0].text}</h3>
      <p>{content[16].children[0].text}</p>
      <h3 className='ue-text-xl'>{content[17].children[0].text}</h3>
      <p>{content[18].children[0].text}</p>
      <ol className='ue-list-decimal ue-ml-4 ue-flex ue-flex-col ue-gap-3 ue-text-sm'>
        {content[19].children.map((item: any, index: number) => (
          <li key={index}>
            <Link
              target='_blank'
              referrerPolicy='no-referrer-when-downgrade'
              href={item.children[0].children[1].href}
              className='ue-font-bold ue-text-lg'
            >
              {item.children[0].children[1].children[0].text}
            </Link>
            {item.children[0].children[2].text}
          </li>
        ))}
      </ol>
      <p className='ue-text-sm'>{content[20].children[0].text}</p>
      <p className='ue-text-sm'>
        <span>{content[21].children[0].text}</span>
        <Link
          target='_blank'
          referrerPolicy='no-referrer-when-downgrade'
          href={content[21].children[1].href}
          className='ue-font-bold'
        >
          {content[21].children[1].children[0].text}
        </Link>
        <span>{content[21].children[2].text}</span>
        <Link
          target='_blank'
          referrerPolicy='no-referrer-when-downgrade'
          href={content[21].children[3].href}
          className='ue-font-bold'
        >
          {content[21].children[3].children[0].text}
        </Link>
      </p>
    </div>
  );
}
