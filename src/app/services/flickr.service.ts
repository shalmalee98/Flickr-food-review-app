import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface FlickrPhoto {
  farm: string;
  id: string;
  secret: string;
  server: string;
  title: string;
}

export interface FlickrOutput {
  photos: {
    photo: FlickrPhoto[];
  };
}



@Injectable({
  providedIn: 'root'
})
export class FlickrService {
  // prevKeyword: string;
  // currPage = 1;
  public chosenFood: any = {};
  private flickrParams = {
    params: {
      api_key:'60ce4b7833830460f1bb6cfec5fd7f20',
      format:'json',
      nojsoncallback:'1',
      per_page:'30'
    }
  }
  private flickrUrl = "https://api.flickr.com/services/rest/";

  constructor(private http: HttpClient) { }

  // search_keyword(keyword: string) {
  //   if (this.prevKeyword === keyword) {
  //     this.currPage++;
  //   } else {
  //     this.currPage = 1;
  //   }
  //   this.prevKeyword = keyword;
  //   const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
  //   const params = `api_key=${environment.flickr.key}&text=${keyword}&format=json&nojsoncallback=1&per_page=12&page=${this.currPage}`;

  //   return this.http.get(url + params).pipe(map((res: FlickrOutput) => {
  //     const urlArr = [];
  //     res.photos.photo.forEach((ph: FlickrPhoto) => {
  //       const photoObj = {
  //         url: `https://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}`,
  //         title: ph.title
  //       };
  //       urlArr.push(photoObj);
  //     });
  //     return urlArr;
  //   }));
  // }

  getDishPics(pageNumber:number): Observable<any> {
    const API_URL = this.flickrUrl;
    this.flickrParams.params['method'] = 'flickr.photos.search';
    this.flickrParams.params['tags'] = 'food plates';
    this.flickrParams.params['text'] = 'food plates';
    this.flickrParams.params['page'] = pageNumber.toString();
    return this.http.get<any>(API_URL,this.flickrParams);
  }
  
  getDishInfo(photoId:number): Observable<any> {
    const API_URL = this.flickrUrl;
    this.flickrParams.params['method'] = 'flickr.photos.getInfo';
    this.flickrParams.params['photo_id'] = photoId;
    return this.http.get<any>(API_URL,this.flickrParams);
  }
  
  formFlickrData(food:any): string {
    return 'http://farm'+food.farm+'.static.flickr.com/'+food.server+'/'+food.id+'_'+food.secret+'.jpg';
  }
  
  createToast(message:string, backgroundColor:string) {
    console.log("tst");
    let snackbar = document.getElementById("snackbar");
    console.log(snackbar);
    snackbar.className = "showToast";
    snackbar.style.background = backgroundColor || "#000";
    snackbar.innerHTML = message;
    setTimeout(() => {
      snackbar.className = snackbar.className.replace("showToast", "");
    }, 3000);
  }

  updateChosenFood(food:any) {
    this.chosenFood = food;
  }

  getInitialStars(id:string): number {
    if(localStorage.getItem('pid'+id)!=null) {
      return JSON.parse(localStorage.getItem('pid'+id)).reviewStars;
    }
    else return 0;
  }

}
