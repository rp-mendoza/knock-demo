'use client';
import { NotificationFeedPopover, NotificationIconButton } from "@knocklabs/react";
import { useRef, useState } from "react";

export function NotificationHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const notifButtonRef = useRef(null);




  return <><NotificationIconButton
    ref={notifButtonRef}
    onClick={(e) => setIsVisible(!isVisible)}
  />
    <NotificationFeedPopover
      buttonRef={notifButtonRef}
      isVisible={isVisible}
      onClose={() => setIsVisible(false)}
    />

  </>;
}