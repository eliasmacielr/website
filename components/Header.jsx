import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

import NavTabs from './NavTabs';
import { Divider } from '@mui/material';

export default function Header() {
  return (
    <>
      <Head>
        <title>Elias Maciel&apos;s Home Page</title>
        <meta name="description" content="Home Page of Elias Maciel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Elias, Maciel, Computer, Science, Web, Development, Lambda" />
        <meta name="author" content="Elias Maciel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header style={{ overflow: 'auto', display: 'flex' }}>
        <Typography variant='h1' style={{ display: 'inline-flex', alignItems: 'center' }}>Elias Maciel</Typography>
        <Link href="img/eliasmaciel_1000x1000.jpg" style={{ marginLeft: 'auto' }}>
          <Image
            src="/img/eliasmaciel.jpg"
            height={100}
            width={100}
            style={{ float: 'right' }}
            alt="Elias Maciel"
          />
        </Link>
      </header>
      <Divider />
      <NavTabs />
      <Divider />
    </>
  );
}
