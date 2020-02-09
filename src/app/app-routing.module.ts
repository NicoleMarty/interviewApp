import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
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
