import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PositionService } from 'src/app/services/position.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-positions-form',
  templateUrl: './positions-form.component.html',
  styleUrls: ['./positions-form.component.css']
})
export class PositionsFormComponent implements OnInit {

  apiUrl: string = environment.ApiUrl;
  products = []

  constructor(private modalService: NgbModal, public positionService: PositionService, public productService: ProductService) { }

  @Input('categoryId') categoryId: number
  positions = []



  ngOnInit() {
    this.positionService.getPositionByIdCategory(this.categoryId)

    this.getAll();
  }



  addPositionModal(content) {
    this.modalService.open(content, { centered: true });
  }

  getAll() {
    this.positionService.getPositionByIdCategory(this.categoryId).subscribe(res => {
      this.positions = res
      console.log("getPositionByIdCategory", this.positions = res)
    })
  }



  deletePosition(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(x => x.productId !== id)
    })
  }

  editModal(content) {
    this.modalService.open(content, { centered: true });
  }

}
