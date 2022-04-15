import Image from 'next/image';

import { Helmet } from 'components';

import { Box, Flex, Text } from 'components';

export default function Home() {
  return (
    <div className='container'>
      <Helmet title='Front-end Developer' />

      <Flex color='#fff' margin='150px 0 0 0'>
        <Image
          src='/images/me.png'
          width={533}
          height={261}
          layout='intrinsic'
        />

        <Box>
          <Box
            maxWidth='395px'
            background='gray1'
            padding='20px'
            borderRadius='23px'
          >
            <Text fontSize='18px'>I’m a Front-End Developer</Text>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}
