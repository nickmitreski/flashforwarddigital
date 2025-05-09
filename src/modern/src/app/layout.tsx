import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView, trackPageExit, resetClickedFeatures } from '@/utils/analytics';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view when component mounts
    trackPageView(pathname);

    // Track page exit when component unmounts
    return () => {
      const clickedFeatures = JSON.parse(localStorage.getItem('clicked_features') || '[]');
      trackPageExit(pathname, clickedFeatures);
      resetClickedFeatures();
    };
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
} 