import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
// import { NotFoundComponent } from './shell/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users-list',
    pathMatch: 'full',
  },
  {
    path: 'users-list',
    loadChildren: () =>
      import('../app/features/users/users.module').then((m) => m.UsersModule),
  },
  //   {
  //     path: '**',
  //     component: NotFoundComponent,
  //   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
