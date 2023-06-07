import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../../../layout/layout';
import { MailContext } from '../../../../demo/components/apps/mail/context/mailcontext';
import AppMailTable from '../../../../demo/components/apps/mail/AppMailTable';
import AppMailLayout from '../../../../demo/components/apps/mail/AppMailLayout';
import type { Demo, Page } from '../../../../types/types';

const MailTrash: Page = () => {
    const [trashMails, setTrashMails] = useState<Demo.Mail[]>([]);
    const { mails } = useContext(MailContext);
    useEffect(() => {
        const _mails = mails.filter((d) => d.trash);
        setTrashMails(_mails);
    }, [mails]);

    return (
        <React.Fragment>
            <AppMailTable mails={trashMails} />
        </React.Fragment>
    );
};

MailTrash.getLayout = function getLayout(page) {
    return (
        <Layout>
            <AppMailLayout>{page}</AppMailLayout>
        </Layout>
    );
};

export default MailTrash;
