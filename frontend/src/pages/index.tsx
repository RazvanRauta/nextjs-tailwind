import * as React from 'react';
import { useQuery } from 'react-query';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { getAllTechs } from '@/api/technologies';

export default function HomePage() {
  const { data, isSuccess } = useQuery(
    'techs',
    async () => await getAllTechs()
  );

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-center text-white layout'>
            <h1 className='text-lg'>Hello</h1>
            {isSuccess &&
              data &&
              data.map((post) => <p key={post.name}>{post.name}</p>)}
          </div>
        </section>
      </main>
    </Layout>
  );
}

/**
 * Default info that you should change:
 * components/Seo.tsx
 * next-sitemap.js
 * public/favicon
 *
 * Please refer to the README.md
 */
