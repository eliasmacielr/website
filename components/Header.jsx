import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Typography } from '@mui/material';

export default function Header(props) {
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
      <header style={{ overflow: 'auto' }}>
        <Typography variant='h1' style={{ display: 'inline-flex' }}>Elias Maciel</Typography>
        <Link href="img/eliasmaciel_1000x1000.jpg">
          <Image
            src="/img/eliasmaciel.jpg"
            height={100}
            width={100}
            style={{ float: 'right' }}
            alt="Elias Maciel"
          />
        </Link>
      </header>
      <nav>
        <Link href="/"><Typography variant='button'>Home</Typography></Link> |
        <Link href="/projects"><Typography variant='button'>Projects</Typography></Link> |
        <Link href="/courses-teaching"><Typography variant='button'>Courses &amp; Teaching</Typography></Link> |
        <Link href="/contact-info"><Typography variant='button'>Contact &amp; Info</Typography></Link>
      </nav>
    </>
  );
}
