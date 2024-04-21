import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-heart',
  templateUrl: './icon-heart.component.html',
  styleUrls: ['./icon-heart.component.css']
})
export class IconHeartComponent {
  @Input() isFavourite!: boolean;
}
