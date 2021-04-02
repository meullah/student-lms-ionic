import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./details/details.module').then((m) => m.DetailsPageModule),
  },
  {
    path: 'tabs/tab3',
    loadChildren: () =>
      import('./tab3/tab3.module').then((m) => m.Tab3PageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
