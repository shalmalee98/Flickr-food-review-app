import { Component, OnInit, Output } from '@angular/core';
// import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
// import { ForeignService } from '../foreign.service';
import { FlickrService } from '../services/flickr.service';

@Component({
  selector: 'app-food-individual',
  templateUrl: './food-individual.component.html',
  styleUrls: ['./food-individual.component.css']
})
export class FoodIndividualComponent implements OnInit {

  public subscriber: Subscription;
  public chosenFood: any = {};
  public userReview: any = {};
  public initialStars: number = 0;

  constructor(private service:FlickrService) { }

  ngOnInit() {
    if(localStorage.getItem('pid'+this.service.chosenFood.id)!=null) {
      this.userReview = JSON.parse(localStorage.getItem('pid'+this.service.chosenFood.id));
      this.initialStars = this.userReview.reviewStars;
    }
    this.service.getDishInfo(this.service.chosenFood.id).subscribe(result => {
      this.chosenFood = result.photo;
      console.log(this.chosenFood);
    },error => {
      console.log(error);
    });

  }

  getImageUrl() {
    return this.service.formFlickrData(this.chosenFood);
  }

  onRatingSet(stars:any) {
    this.userReview.reviewStars = stars;
  }

  createPhotoReview() {
    console.log(this.userReview);

    if(this.userReview["reviewText"] || this.userReview["reviewText"].length!==0) {
      localStorage.setItem('pid'+this.chosenFood.id,JSON.stringify(this.userReview));
      this.service.createToast("Review added successfully","green");
    }
    else {
      this.service.createToast("Please provide your opinion","red");
    }
  }
}

