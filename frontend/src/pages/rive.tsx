import * as React from 'react';
import { Layout as RiveLayout, useRive, UseRiveParameters } from 'rive-react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function RivePage() {
  const loaderParams: UseRiveParameters = {
    src: '/rive/basketbal.riv',
    autoplay: true,
    layout: new RiveLayout({ minX: 500, minY: 500 }),
  };

  const { RiveComponent: Loader } = useRive(loaderParams);

  return (
    <Layout>
      <Seo templateTitle='Rive' />

      <main>
        <section className=''>
          <div className='min-h-screen py-20 layout'>
            <div style={{ height: '500px', width: '500px' }}>
              <Loader />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
