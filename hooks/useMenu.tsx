export const useMenu = () => {
  const isCurrentPage = (currentPath: string, menuLink: string) => {
    if (menuLink === currentPath) return true;

    return false;
  };

  return {
    isCurrentPage,
  };
};
