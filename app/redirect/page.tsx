'use client';

import { useEffect } from 'react';

const Redirector = () => {
    useEffect(() => {
        const queryString = window.location.search; // Get the full query string
        const base64String = queryString.startsWith('?') ? queryString.slice(1) : queryString; // Remove the leading '?'
        console.log('Base64 string from URL:', base64String);

        try {
            // Decode the Base64 parameter
            const decodedUrl = atob(base64String);
            console.log('Decoded URL:', decodedUrl);

            // Validate if the decoded URL is a valid link
            const url = new URL(decodedUrl);
            console.log('Validated URL:', url.href);

            // Redirect to the decoded URL
            console.log('Redirecting to:', url.href);
            window.location.href = url.href;
        } catch (error) {
            console.error('Error processing redirect URL:', error);
        }
    }, []);

    return (
        <div>
            <p>Redirecting...</p>
        </div>
    );
};

export default function Page() {
    return <Redirector />;
}
