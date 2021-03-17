import { UrlObject } from 'url';

export interface IRoute {
    href: UrlObject |string;
    title: string;
    icon: any;
  }