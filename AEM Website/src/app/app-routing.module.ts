import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./main/main.module').then(moduleToLoad => moduleToLoad.MainModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about-us/about-us.module').then(moduleToLoad => moduleToLoad.AboutUsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(moduleToLoad => moduleToLoad.ContactModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then(moduleToLoad => moduleToLoad.GalleryModule)
  },
  {
    path: 'career',
    loadChildren: () => import('./career/career.module').then(moduleToLoad => moduleToLoad.CareerModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
