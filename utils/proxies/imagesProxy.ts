import myProxy from "./index";

export const imagesProxy = <T extends Record<string, Record<string, string>>>(
  imagesBasePath: string,
  allImages: T,
  imagesInnerPaths: {[k in keyof typeof allImages]: string}
) =>
  new myProxy(allImages, {
    get(target, p, r) {
      if (p in target) {
        const image = target[p];
        const innerPath = imagesInnerPaths[p];
        let baseAddress: string;
        if (innerPath !== "") {
          baseAddress = `${imagesBasePath}${innerPath}/`;
        } else {
          baseAddress = `${imagesBasePath}${innerPath}`;
        }
        return new myProxy(image, {
          get(innerTarget, prop, receiver) {
            if (prop in innerTarget) {
              const imageName = innerTarget[prop];
              return `${baseAddress}${imageName}`;
            }
            return Reflect.get(innerTarget, prop, receiver);
          },
        });
      }
      return Reflect.get(target, p, r);
    },
  }) as T;
