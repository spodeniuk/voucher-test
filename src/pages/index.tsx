import { useState } from 'react';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Layout } from '@/shared/components/grid';
import { Button } from '@/shared/components/ui';
import { CreateVoucherModal } from '@/shared/components/modals';

const Home = () => {
    const { t } = useTranslation();
    const [createVoucherIsOpen, setCreateVoucherIsOpen] = useState(false);

    return (
        <Layout>
            <Button onClick={setCreateVoucherIsOpen.bind(null, true)}>
                {t('createVoucherButton')}
            </Button>
            <CreateVoucherModal
                isOpen={createVoucherIsOpen}
                onClose={setCreateVoucherIsOpen.bind(null, false)}
            />
        </Layout>
    );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            ...(await serverSideTranslations(locale || 'en', 'common')),
        },
    };
}

export default Home;
