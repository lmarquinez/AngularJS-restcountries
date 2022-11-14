import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';
import { CountriesService } from 'src/app/services/countries.service';


@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  arrCountries: Country[] = [];
  constructor(private countriesService: CountriesService) { }

  async ngOnInit(): Promise<void> {

    try {
      let response = await this.countriesService.getAllCountries();
      this.arrCountries = response;
      console.log(this.arrCountries)
    }
    catch (err: any) {
      console.log(err.error)
    }
  }

}
