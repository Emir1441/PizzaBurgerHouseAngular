import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';




@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {


  constructor(
    public auth: AuthService,
    private router: Router, private modalService: NgbModal
    // , public userName: LoginPageComponent
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.auth.logout();
    this.router.navigate(['/pizza'])

  }

  // addProductModal(content) {
  //   this.modalService.open(content, { centered: true });
  // }
  // addImageModal(content) {
  //   this.modalService.open(content, { centered: true });
  // }


}
