import { RecoilRoot, useRecoilSnapshot } from 'recoil';
import { AppProps } from 'next/app';
import 'styles/core.scss';
import { Fragment, useEffect } from 'react';
import Head from 'next/head';

function DebugObserver() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.log('Recoil Action: The following atoms were modified:');
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.log(
        `Recoil Action: State[${node.key}]`,
        snapshot.getLoadable(node),
      );
    }
  }, [snapshot]);

  return null;
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>BOILERPLATE</title>
      </Head>
      <RecoilRoot>
        <DebugObserver />
        <Component {...pageProps} />
      </RecoilRoot>
    </Fragment>
  );
}
