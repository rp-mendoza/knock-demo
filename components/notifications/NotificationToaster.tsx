'use client';
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useKnockFeed } from "@knocklabs/react";

const NotificationToaster = () => {
    const { feedClient } = useKnockFeed();

    const onNotificationsReceived = ({ items }: any) => {
        items.forEach((notification: any) => {
            if (!notification?.seen_at) {
                toast(<div dangerouslySetInnerHTML={{ __html: notification.blocks[0].rendered }} />, { id: notification.id });
            }
        });

        feedClient.markAsSeen(items);
    };

    useEffect(() => {
        // Receive all real-time notifications on our feed
        feedClient.on("items.received.realtime", onNotificationsReceived);

        // Cleanup
        return () =>
            feedClient.off("items.received.realtime", onNotificationsReceived);
    }, [feedClient]);

    return <Toaster />;
};

export default NotificationToaster;