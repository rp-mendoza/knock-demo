'use client';
import { KnockProvider, KnockFeedProvider } from "@knocklabs/react";
import NotificationToaster from "./NotificationToaster";

// We'll write this next

const NotificationToastProducer = () => {

    return (
        <KnockProvider apiKey={process.env.NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY || ''} userId={process.env.NEXT_PUBLIC_KNOCK_USER_ID || ''}>
            <KnockFeedProvider feedId={process.env.NEXT_PUBLIC_KNOCK_FEED_CHANNEL_ID || ''}>
                <NotificationToaster />
            </KnockFeedProvider>
        </KnockProvider>
    );
};


export default NotificationToastProducer;