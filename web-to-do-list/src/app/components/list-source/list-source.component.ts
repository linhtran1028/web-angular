import { Component } from '@angular/core';
import { Repos } from '../../model/repos';
import { ListSourceService } from '../../service/list-source.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-source',
  templateUrl: './list-source.component.html',
  styleUrls: ['./list-source.component.css'],
})
export class ListSourceComponent {
  repos!: Repos[];

  title = 'template-form';
  userName = 'linhtr';
  pageNo = '1';
  sortOn = 'description';
  loading = false;
  errorMessage = '';

  constructor(private listSourceService: ListSourceService) {}

  getRepos() {
    this.loading = true;
    this.errorMessage = '';
    this.listSourceService
      .getRepos(this.userName, this.pageNo, this.sortOn)
      .subscribe(
        (res) => {
          this.repos = res;
        },
        (error) => {
          this.errorMessage = error.message;
          this.loading = false;
        },
        () => {
          this.loading = false;
        }
      );
  }
}
