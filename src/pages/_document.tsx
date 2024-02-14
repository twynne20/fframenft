import { Html, Head, Main, NextScript } from "next/document";
import { config } from '@/config/config';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Pepe Mint.. test.. test.." />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={'${config.hostUrl}/image_191_ratio.png'} />
        <meta property="og:image" content={'${config.hostUrl}/image_191_ratio.png'} />
        <meta property="fc::frame:post_url" content={'${config.hostUrl}/api/mint'}/>
        <meta property="fc::frame:button:1" content="Mint NFT"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
