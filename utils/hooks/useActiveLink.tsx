import {useRouter} from "next/router";
import {UrlObject} from "url";

export const useActiveLink = (href: string | UrlObject) => {
  const router = useRouter();
  const pathname = typeof href === "string" ? href : href.pathname;
  const isActive = router.pathname === pathname;
  return isActive;
};
