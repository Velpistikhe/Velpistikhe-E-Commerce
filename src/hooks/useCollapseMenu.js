import { useEffect, useState } from "react";

const COLLAPSE_MENU_KEY = "collapseMenu";

const useCollapseMenu = () => {
  const [collapsed, setCollapsed] = useState(() => {
    try {
      const stored = localStorage.getItem(COLLAPSE_MENU_KEY);

      return stored !== null ? JSON.parse(stored) : false;
    } catch (error) {
      return false;
    }
  });

  useEffect(() => {
    const stored = localStorage.getItem(COLLAPSE_MENU_KEY);

    if (stored !== null) return setCollapsed(JSON.parse(stored));

    return setCollapsed(true);
  }, []);

  useEffect(() => {
    if (collapsed !== null)
      return localStorage.setItem(COLLAPSE_MENU_KEY, collapsed);
  }, [collapsed]);

  return [collapsed, setCollapsed];
};

export default useCollapseMenu;
