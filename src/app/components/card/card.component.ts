import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  clubs = [
    {
      name: 'Troy',
      address: 'Trg kralja Milana bb',
      rating: '4.0',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcityofnis.rs%2F2021%2F02%2F22%2Ftroy-night-club%2F&psig=AOvVaw1yrQkJTxGfPI240Yr40XOe&ust=1665259097117000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjextnzzvoCFQAAAAAdAAAAABAE'
    },
    {
      name: 'Club 2',
      address: 'Balkansa 2',
      rating: '3.2',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcityofnis.rs%2F2021%2F02%2F22%2Ftroy-night-club%2F&psig=AOvVaw1yrQkJTxGfPI240Yr40XOe&ust=1665259097117000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjextnzzvoCFQAAAAAdAAAAABAE'
    },
    {
      name: 'Stars Club',
      address: 'Obrenoviceva 20',
      rating: '2.0',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcityofnis.rs%2F2021%2F02%2F22%2Ftroy-night-club%2F&psig=AOvVaw1yrQkJTxGfPI240Yr40XOe&ust=1665259097117000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjextnzzvoCFQAAAAAdAAAAABAE'
    },
    {
      name: 'Feedback',
      address: 'Balkansa 2a',
      rating: '4.6',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcityofnis.rs%2F2021%2F02%2F22%2Ftroy-night-club%2F&psig=AOvVaw1yrQkJTxGfPI240Yr40XOe&ust=1665259097117000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjextnzzvoCFQAAAAAdAAAAABAE'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
