'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const Redirector = () => {
    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirect');

    useEffect(() => {
        if (redirect) {
            console.log('Redirect query parameter found:', redirect);

            try {
                // Step 1: Decode the Base64 parameter
                const decodedUrl = atob(redirect);
                console.log('Decoded URL:', decodedUrl);

                // Step 2: Validate if the decoded URL is a valid link
                const url = new URL(decodedUrl);
                console.log('Validated URL:', url.href);

                // Step 3: Redirect to the decoded URL
                console.log('Redirecting to:', url.href);
                window.location.href = url.href;
            } catch (error) {
                console.error('Error processing redirect URL:', error);
            }
        } else {
            console.log('No redirect query parameter found.');
        }
    }, [redirect]);

    return (
        <div>
            <p>Redirecting...</p>
        </div>
    );
};

export default Redirector;
