export const useMenu = () => {
  const isCurrentPage = (currentPath: string, menuLink: string) => {
    console.log('currentPath', currentPath);
    console.log('menuLink', menuLink);

    if (menuLink === currentPath) return true;

    return false;
  };

  return {
    isCurrentPage,
  };
};
