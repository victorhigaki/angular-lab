import { Injectable } from "@angular/core";
import { BaseService } from "src/app/shared/services/base.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UsersService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
    this.controller = "users";
  }
}
