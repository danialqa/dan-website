import Link from 'next/link';
import { useRouter } from 'next/router';

import { Box, Flex, Text } from 'components';

import { HeaderWrapper } from './header.style';

export default function Header() {
  const { pathname } = useRouter();

  const routesList = [
    {
      title: 'Who i am',
      subTitle: 'about',
      href: '/',
    },
    {
      title: 'What I can do',
      subTitle: 'skills',
      href: '/skills',
    },
    {
      title: `What I've been up to`,
      subTitle: 'experiences',
      href: '/experiences',
    },
    {
      title: `I can help`,
      subTitle: 'contact',
      href: '/contact',
    },
  ];

  return (
    <HeaderWrapper>
      <Box position="absolute" top="30px" left="30px">
        <Text fontSize="25px" fontFamily="SofiaPro-Bold" margin="0 6px 0 0">
          Danial
        </Text>
        <Text fontSize="25px">Ghahremani</Text>
      </Box>

      <Flex
        flexGap="35px"
        justifyContent="flex-end"
        alignItems="center"
        align="center"
        marginTop="30px"
        padding="0 30px 0 0"
      >
        {routesList?.map((item) => (
          <Link href={item.href} key={item.subTitle}>
            <a className={`nav-item ${pathname === item.href ? 'active' : ''}`}>
              <Text lineHeight="20px" fontSize="17px">
                {item.title}
              </Text>
              <Box>
                <Text lineHeight="18px" color="gray2">
                  {item.subTitle}
                </Text>
              </Box>
            </a>
          </Link>
        ))}
      </Flex>
    </HeaderWrapper>
  );
}
