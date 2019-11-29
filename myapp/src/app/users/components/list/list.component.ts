import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  result: any;
  ColumnMode = ColumnMode;

  usersForm = new FormGroup({

  })

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.listAll().subscribe(res => this.result = res);
  }

  edit() {}

}
