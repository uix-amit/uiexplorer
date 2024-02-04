import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from 'date-fns';

import { Blog } from '@portfolio/models/blog';
import Link from 'next/link';

const currentDifference = (creationDate: Date): string => {
  console.log('differenceInHours: ', differenceInHours(new Date(), creationDate));
  switch (true) {
    case differenceInYears(new Date(), creationDate) > 0:
      return `${differenceInYears(new Date(), creationDate)} years ago`;
    case differenceInMonths(new Date(), creationDate) > 0:
      return `${differenceInMonths(new Date(), creationDate)} months ago`;
    case differenceInDays(new Date(), creationDate) > 0:
      return `${differenceInDays(new Date(), creationDate)} days ago`;
    case differenceInHours(new Date(), creationDate) > 0:
      return `${differenceInHours(new Date(), creationDate)} hours ago`;
    case differenceInMinutes(new Date(), creationDate) > 0:
      return `${differenceInMinutes(new Date(), creationDate)} minutes ago`;
    default:
      return 'now';
  }
};

export function BlogSummary({ title, subtitle, updatedAt, tags, slug }: Blog) {
  const tagsTemplate = tags.map((tag, index) => (
    <span className='ue-rounded-full ue-bg-white ue-text-slate-900 ue-px-3 ue-py-1' key={index}>
      {tag}
    </span>
  ));
  return (
    <div className='ue-flex ue-flex-col ue-gap-3'>
      <Link href={`/blog/${slug}`}>
        <h3 className='ue-text-xl ue-capitalize ue-text-white'>{title}</h3>
      </Link>
      <div className='ue-flex ue-gap-2 ue-items-center ue-flex-wrap'>
        {tagsTemplate}
        {currentDifference(new Date(updatedAt))}
      </div>
      <p>{subtitle}</p>
    </div>
  );
}

export default BlogSummary;
