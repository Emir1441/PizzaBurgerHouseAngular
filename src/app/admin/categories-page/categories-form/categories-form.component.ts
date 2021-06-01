import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Category } from 'src/app/models/model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {
  form: FormGroup;
  isNew = true;
  category: Category

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private router: Router) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      categoryName: new FormControl(null, Validators.required)
    })
    this.form.disable();
    this.route.params.pipe(switchMap(
      (params: Params) => {
        if (params['categoryId']) {
          this.isNew = false
          return this.categoryService.getCategoryById(params['categoryId']);
        }
        return of(null)
      }
    )).subscribe(res => {
      if (res) {
        this.category = res
        this.form.patchValue({
          categoryId: res.categoryId,
          categoryName: res.categoryName
        })
      }
      this.form.enable()
    })
  }
  deleteCategory() {
    const decision = window.confirm(`Вы хотите удалить категорию ${this.category.categoryName}`)
    if (decision) {
      this.categoryService.deleteCategory(this.category.categoryId).subscribe()
    }
    this.router.navigate(['admin/category'])
  }
  onSubmit() {
    let obs$
    if (this.isNew) {
      obs$ = this.categoryService.addCategory(this.form.value)
      console.log('Add Form', this.form.value)
      this.router.navigate(['/admin/category'])
    } else {
      obs$ = this.categoryService.editCategory(this.category.categoryId, this.form.value)
      console.log('Update Form', this.category.categoryId, this.form.value)
    }
    obs$.subscribe()
  }
}