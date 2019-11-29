import { Routes } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { UsersModule } from './users/users.module';

export const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "users",
    pathMatch: "full"
  },
  {
    path: "users",
    loadChildren: () => UsersModule
  }
];
