import { Component, Input } from '@angular/core';
import ISearchableEntity from 'src/app/models/ISearchableEntity';

@Component({
  selector: 'app-searchable-entity-card',
  templateUrl: './searchable-entity-card.component.html'
})
export class SearchableEntityCardComponent {
  @Input() entity: ISearchableEntity = {} as ISearchableEntity;

}
