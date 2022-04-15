import Image from 'next/Image';

import { Helmet } from 'components';

import { Box, Flex, Text } from 'components';

export default function Home() {
  return (
    <div className="container">
      <Helmet title="Front-end Developer" />

      <Flex color="#fff">
        <Image
          src="/images/me.png"
          width={533}
          height={261}
          layout="intrinsic"
        />

        <Box>
          <Box
            maxWidth="395px"
            background="gray1"
            padding="20px"
            borderRadius="23px"
          >
            <Text fontSize="18px">
              I’m a Front-End Developer and aslo a UI/UX designer! based in
              Tehran, IRAN
            </Text>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}
