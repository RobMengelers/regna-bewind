import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pages } from "../navigation";

export default function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title =
      (pages.find(([path]) => path === pathname)?.[1] ||
        "Pagina niet gevonden") + " | Regna Bewind";
    window.scrollTo(0, 0);
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [pathname]);
  return null;
}
