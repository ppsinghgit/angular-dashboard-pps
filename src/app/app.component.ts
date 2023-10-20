import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  Input,
} from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ChartsComponent } from './charts/charts.component';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  selectedTabInCharts: number;
  constructor(private modalService: NgbModal) {}
  openChartsModal() {
    const modalRef = this.modalService.open(ChartsComponent, {
      centered: true,
      backdrop: 'static',
      fullscreen: true,
    });
    modalRef.result.then((result) => {
      if (result) {
      }
    });
  }
}
