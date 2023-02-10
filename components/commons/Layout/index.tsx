import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { useDynamicHeader } from '../../../hooks/useDynamicHeader';
import { Header } from '../../home/Header';
import { Menu } from '../Menu';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const { getDynamicHeaderByPath } = useDynamicHeader();

  const path = router.pathname;

  const isHeaderDynamic = getDynamicHeaderByPath(path);

  return (
    <div className="bg-nth-gray-900 min-h-full font-display">
      <Header dynamic={isHeaderDynamic} />
      <Menu currentPage={path} />
      {children}
    </div>
  );
};
