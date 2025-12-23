"use client";

import React from "react";

/**
 * Loads a stylesheet asynchronously by initially setting media="print" 
 * and switching to "all" once loaded.
 */
export default function DeferredStylesheet({ href }: { href: string }) {
    return (
        <link
            rel="stylesheet"
            href={href}
            media="print"
            onLoad={(e) => {
                e.currentTarget.media = "all";
            }}
        />
    );
}
