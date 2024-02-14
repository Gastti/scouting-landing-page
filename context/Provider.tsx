'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className='z-30 absolute'>
                <ProgressBar
                    height="4px"
                    color="#13cc3b"
                    options={{ showSpinner: false }}
                    shallowRouting
                />
            </div>
            {children}
        </>
    );
};

export default Providers;