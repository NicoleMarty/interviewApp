import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TabsPage } from './tabs.page'

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab1/login',
        loadChildren: '../tab1/login/login.module#LoginPageModule'
      },
      {
        path: 'tab1/signup',
        loadChildren: '../tab1/signup/signup.module#SignupPageModule'
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'tab3/art',
        loadChildren: '../tab3/art/art.module#ArtPageModule'
      },
      {
        path: 'tab3/art/:id',
        loadChildren:
          '../tab3/art-details/art-details.module#ArtDetailsPageModule'
      },
      {
        path: 'tab3/supplies',
        loadChildren: '../tab3/supplies/supplies.module#SupplyPageModule'
      },
      {
        path: 'tab3/supplies/:id',
        loadChildren:
          '../tab3/supplies-details/supplies-details.module#SupplyDetailsPageModule'
      },
      {
        path: 'tab3/art/upload',
        loadChildren: '../tab3/art/upload/upload.module#UploadPageModule'
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
