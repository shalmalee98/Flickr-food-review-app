import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../services/flickr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-images',
  templateUrl: './food-images.component.html',
  styleUrls: ['./food-images.component.css']
})
export class FoodImagesComponent implements OnInit {
  // images = [];
  // keyword: string;
  public foodList: any = [];
  public pageNumber: number = 1;
  public showLoader: boolean = false;

  constructor(private service: FlickrService, private router: Router) { }

  // ngOnInit() {
  //   this.search("food plates");
  // }

  // search(event: any) {
  //   // this.keyword = event.target.value.toLowerCase();
  //   this.keyword = "food plates";
  //   if (this.keyword && this.keyword.length > 0) {
  //     this.flickrService.search_keyword(this.keyword)
  //     .toPromise()
  //     .then(res => {
  //       this.images = res;
  //     });
  //   }
  // }

  // onScroll() {
  //   if (this.keyword && this.keyword.length > 0) {
  //     this.flickrService.search_keyword(this.keyword)
  //     .toPromise()
  //     .then(res => {
  //       this.images = this.images.concat(res);
  //     });
  //   }
  // }
  ngOnInit() {
    this.getFoodList();
  }

  getFoodList() {
    this.showLoader = true;
    this.service.getDishPics(this.pageNumber).subscribe(result => {
      this.foodList = result.photos.photo;
      this.showLoader = false;
    })
  }

  getImageUrl(food:any): string {
    return this.service.formFlickrData(food);
  }

  checkAlreadyReviewed(id:string): number {
    return this.service.getInitialStars(id);
  }

  foodSelected(food:any) {
    this.service.updateChosenFood(food);
    this.router.navigate(['/item']);
  }


}