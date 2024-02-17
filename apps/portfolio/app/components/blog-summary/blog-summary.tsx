import { Blog } from '@portfolio/models/blog';
import { formatDate } from 'date-fns';
import Link from 'next/link';

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
        <p>{subtitle}</p>
      </Link>
      <div className='ue-flex ue-gap-2 ue-items-center ue-flex-wrap ue-text-xs'>{tagsTemplate}</div>
      <p>Last updated on: {formatDate(updatedAt, 'dd/MM/yyyy')}</p>
    </div>
  );
}

export default BlogSummary;
