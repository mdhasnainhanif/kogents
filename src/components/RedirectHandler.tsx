"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getRedirectUrl } from '@/lib/redirects';

interface RedirectHandlerProps {
  pathname: string;
}

const RedirectHandler: React.FC<RedirectHandlerProps> = ({ pathname }) => {
  const router = useRouter();

  useEffect(() => {
    const redirectUrl = getRedirectUrl(pathname);
    if (redirectUrl) {
      // Use replace to avoid adding to history
      router.replace(redirectUrl);
    }
  }, [pathname, router]);

  return null; // This component doesn't render anything
};

export default RedirectHandler;
