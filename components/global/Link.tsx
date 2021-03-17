import {Link as MuiLink} from "@material-ui/core";
import clsx from "clsx";
import NextLink from "next/link";
import React from "react";
import {UrlObject} from "url";
import {useActiveLink} from "../../utils/hooks/useActiveLink";

interface NextComposedProps {
  as?: string | object;
  href: string | UrlObject;
  prefetch?: boolean;
  className?: string;
  children?: React.ReactNode;
  newTab?: boolean;
}

const NextComposed = React.forwardRef(
  (
    props: NextComposedProps,
    ref: ((instance: HTMLAnchorElement | null) => void) | React.MutableRefObject<HTMLAnchorElement | null> | null
  ) => {
    const {as, href, newTab, prefetch, ...other} = props;

    return (
      <NextLink href={href} as={as}>
        <a ref={ref} {...other} target={newTab ? "_blank" : "_self"} />
      </NextLink>
    );
  }
);

interface StyledLinkProps {
  activeClassName?: string;
  as?: string | object;
  className?: string;
  href: string | UrlObject;
  innerRef?: ((instance: HTMLAnchorElement | null) => void) | React.RefObject<HTMLAnchorElement> | null;
  naked?: boolean;
  onClick?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) &
    ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void);
  onMouseLeave?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) &
    ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void);
  onMouseEnter?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) &
    ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void);
  onMouseOver?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) &
    ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void);
  onMouseOut?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) &
    ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void);
  prefetch?: boolean;
  children?: React.ReactNode;
  newTab?: boolean;
}

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props: StyledLinkProps) {
  const {href, activeClassName = "active", className: classNameProps, innerRef, naked, ...other} = props;
  const isActive = useActiveLink(href);

  const pathname = typeof href === "string" ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: isActive,
  });

  if (naked) {
    return <NextComposed className={className} ref={innerRef} href={href} {...other} />;
  }

  return (
    <MuiLink
      color='textPrimary'
      component={NextComposed}
      className={className}
      ref={innerRef}
      href={pathname ? pathname : ""}
      {...other}
    />
  );
}

export default React.forwardRef(
  (
    props: StyledLinkProps,
    ref: ((instance: HTMLAnchorElement | null) => void) | React.MutableRefObject<HTMLAnchorElement | null> | null
  ) => <Link {...props} innerRef={ref} />
);
