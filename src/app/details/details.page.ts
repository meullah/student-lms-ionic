import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  details: any;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.details = this.dataService.studentDetails;
    console.log(this.details);
  }
}
