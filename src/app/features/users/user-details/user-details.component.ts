import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from 'src/app/models/user.model';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: Details | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private detailsService: DetailsService
  ) {
    console.log('hello from user-details');
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.user = this.detailsService.getDetailsById(Number(id));
  }
}
