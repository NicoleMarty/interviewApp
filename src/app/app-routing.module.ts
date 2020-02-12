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
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },

  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  {
    path: '',
    loadChildren: './pages/idea-list/idea-list.module#IdeaListPageModule'
  },
  {
    path: 'idea',
    loadChildren:
      './pages/idea-details/idea-details.module#IdeaDetailsPageModule'
  },
  {
    path: 'idea/:id',
    loadChildren:
      './pages/idea-details/idea-details.module#IdeaDetailsPageModule'
  },
  {
    path: 'details/:id',
    loadChildren:
      './pages/journal-details/journal-details.module#JournalDetailsPageModule'
  },
  {
    path: 'details',
    loadChildren:
      './pages/journal-details/journal-details.module#JournalDetailsPageModule'
  },
  {
    path: 'verify-email',
    loadChildren: () =>
      import('./pages/verify-email/verify-email.module').then(
        m => m.VerifyEmailPageModule
      )
  },
  {
    path: 'idea-list',
    loadChildren: () =>
      import('./pages/idea-list/idea-list.module').then(
        m => m.IdeaListPageModule
      )
  },
  {
    path: 'idea-details',
    loadChildren: () =>
      import('./pages/idea-details/idea-details.module').then(
        m => m.IdeaDetailsPageModule
      )
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
