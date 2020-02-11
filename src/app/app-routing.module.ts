import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path: 'signup',
    loadChildren: './pages/signup/signup.module#SignupPageModule'
  },
  {
    path: 'reset-password',
    loadChildren:
      './pages/reset-password/reset-password.module#ResetPasswordPageModule'
  },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  {
    path: 'details/:id',
    loadChildren:
      './pages/journal-details/journal-details.module#JournalDetailsPageModule'
  },
  {
    path: 'details',
    loadChildren:
      './pages/journal-details/journal-details.module#JournalDetailsPageModule'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
