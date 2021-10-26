import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // closer = document.getElementById('closer');
  // navbar = document.querySelector('.navbar');
  // cart = document.querySelector('.shopping-cart');
  // loginForm = document.querySelector('.login-form');
  // searchForm = document.querySelector('.header .search-form');
  // menuboton = document.getElementById('menu-btn');
  constructor() { }

  ngOnInit(): void {
  }
  // close() {
  //   this.closer.style.display = 'none';
  //   this.navbar.classList.remove('active');
  //   this.cart.classList.remove('active');
  //   this.loginForm.classList.remove('active');
  // }

  // menu() {
  //   this.closer.style.display = 'block';
  //   this.navbar.classList.toggle('active');
  // }
}


