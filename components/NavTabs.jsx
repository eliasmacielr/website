import * as React from 'react';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function NavTabs() {
  return (
    <nav>
      <Box sx={{
        width: '100%',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}>
        <Link href="/"><Typography variant='button'>Home</Typography></Link>
        <Link href="/projects"><Typography variant='button'>Projects</Typography></Link>
        <Link href="/courses-teaching"><Typography variant='button'>Courses &amp; Teaching</Typography></Link>
        <Link href="/contact-info"><Typography variant='button'>Contact &amp; Info</Typography></Link>
      </Box>
    </nav>
  );
}
