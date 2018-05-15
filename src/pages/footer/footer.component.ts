import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  // styleUrls: ['app/modules/footer/footer.component.css'],
  selector: 'footer',
  templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {

  @Input() isListPage:boolean;

  constructor(private _activatedRoute : ActivatedRoute) {
    
  }

  ngOnInit() {
    
  }

}
