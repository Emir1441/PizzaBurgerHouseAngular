import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {

  categories = []
  searchCategory = ''









  constructor(public categoryService: CategoryService, private modalService: NgbModal) { }



  ngOnInit(): void {




    this.getAll()


  }


  addImageModal(content) {
    this.modalService.open(content, { centered: true });
  }


  getAll() {
    this.categoryService.getAllCategory().subscribe(res => {
      this.categories = res
    })







  }
}







