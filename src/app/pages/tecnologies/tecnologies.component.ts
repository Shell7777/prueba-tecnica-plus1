import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tecnologias } from 'src/app/shared/mock/tecnologies';
@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.css']
})
export class TecnologiesComponent {
  data:any = {};
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const value = params.get('id');
      if (value!== null) {
        this.data = tecnologias[+value-1];
      } 
    });
  }
}
