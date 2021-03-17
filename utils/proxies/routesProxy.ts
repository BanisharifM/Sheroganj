// import myProxy from ".";
// import {NextRouteImpl, TRoutePathConstructor} from "../../constants/routes";
export {}
// export const routesProxy = <T extends Record<string, TRoutePathConstructor>>(routePaths: T) =>
//   new myProxy(routePaths, {
//     get(target, p, r): NextRouteImpl {
//       if (p in target) {
//         const path = target[p] as TRoutePathConstructor;
//         if (typeof path === "string") {
//           return new NextRouteImpl(path);
//         } else {
//           return new NextRouteImpl(path.href, path.name);
//         }
//       } else {
//         return Reflect.get(target, p, r);
//       }
//     },
//   });
