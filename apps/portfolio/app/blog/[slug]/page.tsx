import { gql } from '@apollo/client';
import { apollo } from 'apps/portfolio/apollo';

export interface PageProps {}

async function getBlogData(slug: string): Promise<any> {
  console.log(slug);
  const { data } = await apollo.query({
    query: gql`
      query FindBlog {
        blogModel(where: { slug: "my-learnings-about-monorepo-architecture" }) {
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

  // console.log(data.blogModel);

  return data.blogModel;
}

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const blogData = await getBlogData(slug);
  const content = { __html: blogData.content.html };
  return <div id='contentContainer' dangerouslySetInnerHTML={content}></div>;
}
