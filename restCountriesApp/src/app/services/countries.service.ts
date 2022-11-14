import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  /* A variable that is going to be used to make the request to the API. */
  baseUrl: string = 'https://restcountries.com/v3.1/all';

  /**
   * The constructor function is a special function that is called when a new instance of the class is
   * created
   * @param {HttpClient} httpClient - HttpClient - This is the service that we're going to use to make
   * the HTTP request.
   */
  constructor(private httpClient: HttpClient) { }

  getAllCountries(): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}`));
  }

}
