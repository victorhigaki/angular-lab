import { Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { ListComponent } from "./components/list/list.component";

export const usersRoute: Routes = [
  {
    path: "",
    component: UsersComponent,
    children: [
      {
        path: "",
        component: ListComponent
      }
    ]
  }
];
