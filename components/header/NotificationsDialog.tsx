'use client';
import { FeedItem } from "@knocklabs/client";
import { KnockProvider, KnockFeedProvider, NotificationFeed, NotificationCell, NotificationIconButton, NotificationFeedPopover } from "@knocklabs/react";
import { useRef, useState } from "react";


const NotificationsDialog = (props: React.PropsWithChildren) => {
    const [isVisible, setIsVisible] = useState(false);
    const notifButtonRef = useRef(null);

    return (
        <KnockProvider apiKey={process.env.NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY || ''} userId={process.env.NEXT_PUBLIC_KNOCK_USER_ID || ''}>
            <KnockFeedProvider colorMode="dark" feedId={process.env.NEXT_PUBLIC_KNOCK_FEED_CHANNEL_ID || ''}>
                <>
                    <NotificationIconButton
                        ref={notifButtonRef}
                        onClick={(e) => setIsVisible(!isVisible)}
                        badgeCountType="unread"
                    />
                    <NotificationFeedPopover
                        buttonRef={notifButtonRef}
                        isVisible={isVisible}
                        onClose={() => setIsVisible(false)}
                    />
                </>
            </KnockFeedProvider >
        </KnockProvider>
    );
};

export default NotificationsDialog;