'use client';
import { FeedItem } from "@knocklabs/client";
import { KnockProvider, KnockFeedProvider, NotificationFeed, NotificationCell, NotificationIconButton, NotificationFeedPopover } from "@knocklabs/react";
import { useRef, useState } from "react";
import { useKnockFeed } from "@knocklabs/react";


const OOTBNotificationFeed = (props: React.PropsWithChildren) => {

    return (
        <KnockProvider apiKey={process.env.NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY || ''} userId={process.env.NEXT_PUBLIC_KNOCK_USER_ID || ''}>
            <KnockFeedProvider defaultFeedOptions={{
                auto_manage_socket_connection: true,
                __experimentalCrossBrowserUpdates: true,
                page_size: 5
            }} feedId={process.env.NEXT_PUBLIC_KNOCK_FEED_CHANNEL_ID || ''}>
                <>
                    <NotificationFeed renderItem={({ item, ...props }) => {
                        const { feedClient } = useKnockFeed();
                        return <>
                            <NotificationCell
                                {...props}
                                item={item}
                            />
                            <button className="border border-gray-600 bg-black text-white p-2 rounded" onClick={() => feedClient.markAsRead(item)}>acknowledge</button>
                        </>;
                    }} />
                </>
            </KnockFeedProvider >
        </KnockProvider >
    );
};

export default OOTBNotificationFeed;