export const useDynamicHeader = () => {
  const getDynamicHeaderByPath = (path: string) => {
    if (path === '/') return true;

    return false;
  };

  return { getDynamicHeaderByPath };
};
