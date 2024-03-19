import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PluginLoaderService {
  constructor() {}

  public static init(app: PluginLoaderService): () => Promise<any> {
    return () =>
      new Promise<any>(async (resolve: any) => {
        await app.loadDynModule('dyn-lib');
        resolve();
      });
  }

  public async loadDynModule(moduleName: string): Promise<void> {
    // The issue is that this file may not exist at compilation time. As this library is not known yet.
    // e.g think of an api call returning what libraries could be available for loading.
    // Webpack has an ignore comment that could allow for an http request to be made /* webpackIgnore: true */ to prevent the bundle from including these files
    // Although in trying this, we get an error that the files could not be found
    try {
      console.log('Trying to load dynamic module...');
      await import(`/dist/${moduleName}/fesm2022/${moduleName}.mjs`).then((m) =>
        console.log(m)
      );
    } finally {
      console.log('finished loading');
    }
  }
}
