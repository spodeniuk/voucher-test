import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import '../styles.scss';

const Root = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default appWithTranslation(Root);
