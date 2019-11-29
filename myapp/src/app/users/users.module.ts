import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users.component';
import { ListComponent } from './components/list/list.component';
import { RouterModule } from '@angular/router';
import { usersRoute } from './users.routes';
import { UsersService } from './services/users.service';



@NgModule({
  declarations: [UsersComponent, ListComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(usersRoute)
  ],
  providers: [UsersService]
})
export class UsersModule { }
