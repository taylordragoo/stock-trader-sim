import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../../../layout/layout';
import { Toast } from 'primereact/toast';
import { MailContext } from '../../../../demo/components/apps/mail/context/mailcontext';
import AppMailTable from '../../../../demo/components/apps/mail/AppMailTable';
import AppMailLayout from '../../../../demo/components/apps/mail/AppMailLayout';
import type { Demo, Page } from '../../../../types/types';

const MailArchived: Page = () => {
    const [archivedMails, setArchivedMails] = useState<Demo.Mail[]>([]);
    const { mails } = useContext(MailContext);
    useEffect(() => {
        const _mails = mails.filter((d) => d.archived);
        setArchivedMails(_mails);
    }, [mails]);

    return (
        <React.Fragment>
            <Toast></Toast>
            <AppMailTable mails={archivedMails} />
        </React.Fragment>
    );
};

MailArchived.getLayout = function getLayout(page) {
    return (
        <Layout>
            <AppMailLayout>{page}</AppMailLayout>
        </Layout>
    );
};

export default MailArchived;
