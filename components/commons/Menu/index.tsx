import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { useMenu } from '../../../hooks/useMenu';

interface MenuProps {
  currentPage: string;
}

export const Menu = ({ currentPage }: MenuProps) => {
  const { isCurrentPage } = useMenu();

  const general = 'relative w-7 h-7';
  const current = 'relative w-9 h-9 filter brightness-0 invert';

  return (
    <nav className="fixed bottom-0 z-20 h-18 px-12 w-full bg-nth-gray-900 flex justify-between items-center">
      <Link href="/" className="p-2">
        <div className={isCurrentPage(currentPage, '/') ? current : general}>
          <Image src="/assets/home.svg" alt="Página Principal" fill className="object-contain" />
        </div>
      </Link>
      <Link href="/search" className="p-2">
        <div className={isCurrentPage(currentPage, '/search') ? current : general}>
          <Image src="/assets/search.svg" alt="Pesquisar" fill className="object-contain" />
        </div>
      </Link>
      <Link href="/cart" className="p-2">
        <div className={isCurrentPage(currentPage, '/cart') ? current : general}>
          <Image src="/assets/shopping-basket.svg" alt="Carrinho" fill className="object-contain" />
        </div>
      </Link>
      <Link href="/profile" className="p-2">
        <div className={isCurrentPage(currentPage, '/profile') ? current : general}>
          <Image src="/assets/user.svg" alt="Perfil" fill className="object-contain" />
        </div>
      </Link>
    </nav>
  );
};
