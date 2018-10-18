import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string = ""
  user: User;
  repositories: Repository[];

  constructor(public navCtrl: NavController, private githubService: GithubServiceProvider) {

  }

  getUserInformation(): void {
    this.githubService.getUserInformation(this.username).then((data:User) => {
      this.user = data;
      console.log(this.user);
    })
  }

  getRepositoryInformation(): void {
    this.githubService.getUserRepositories(this.username).then((data:Repository[]) => {
      this.repositories = data;
      console.log(this.repositories)
    })
  }

}
