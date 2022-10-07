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
      image: "../../assets/images/troy-2.png"
    },
    {
      name: 'Club 2',
      address: 'Balkanska 2',
      rating: '3.2',
      image: '../../assets/images/club-2.png'
    },
    {
      name: 'Stars Club',
      address: 'Obrenoviceva 20',
      rating: '2.0',
      image: '../../assets/images/stars.png'
    },
    {
      name: 'Feedback',
      address: 'Balkansa 2a',
      rating: '4.6',
      image: '../../assets/images/feedback.png'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
