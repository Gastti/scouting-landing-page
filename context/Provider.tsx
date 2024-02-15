'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ProgressBar
                height="4px"
                color="#13cc3b"
                options={{ showSpinner: false }}
                shallowRouting
            />
            {children}
        </>
    );
};

export default Providers;