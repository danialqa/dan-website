import Head from 'next/head';

type Props = {
  title: string;
};

export default function Helmet({ title }: Props) {
  return (
    <>
      <Head>
        <title>{`${title} | Danial Ghahremani`}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width,minimum-scale=1,maximum-scale=1.0,initial-scale=1,user-scalable=no,viewport-fit=true'
        />
        <meta name='description' content={`Danial Ghahremani's Website`} />
        <meta
          name='keywords'
          content='Developer, Front-end, Reactjs, Javascript, CSS, HTML'
        />

        <link
          rel='preload'
          href='/fonts/SofiaProBold'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/SofiaProLight'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/SofiaProMedium'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/SofiaProRegular'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/SofiaProSemiBold'
          as='font'
          crossOrigin=''
        />
      </Head>
    </>
  );
}
