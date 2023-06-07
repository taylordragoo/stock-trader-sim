import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../../../layout/layout';
import { Toast } from 'primereact/toast';
import { MailContext } from '../../../../demo/components/apps/mail/context/mailcontext';
import AppMailTable from '../../../../demo/components/apps/mail/AppMailTable';
import AppMailLayout from '../../../../demo/components/apps/mail/AppMailLayout';
import type { Demo, Page } from '../../../../types/types';

const MailImportant: Page = () => {
    const [importantMails, setImportantMails] = useState<Demo.Mail[]>([]);
    const { mails } = useContext(MailContext);
    useEffect(() => {
        const _mails = mails.filter((d) => d.important && !d.spam && !d.trash && !d.archived);
        setImportantMails(_mails);
    }, [mails]);

    return (
        <React.Fragment>
            <Toast></Toast>
            <AppMailTable mails={importantMails} />
        </React.Fragment>
    );
};

MailImportant.getLayout = function getLayout(page) {
    return (
        <Layout>
            <AppMailLayout>{page}</AppMailLayout>
        </Layout>
    );
};

export default MailImportant;
