import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  paginatedProducts: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 1;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data: any[]) => {
      this.products = data;
      this.filteredProducts = this.products;
      this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
      this.updatePaginatedProducts();
    });
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => 
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    this.currentPage = 1;
    this.updatePaginatedProducts();
  }

  updatePaginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedProducts();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedProducts();
    }
  }

  viewDetails(id: number) {
    this.router.navigate([`/product/${id}`]);
  }

  addProduct() {
    this.router.navigate(['/add-product']);
  }

  editProduct(id: number) {
    this.router.navigate([`/edit-product/${id}`]);
  }
  deleteProduct(id: number) { 
    this.apiService.deleteProduct(id).subscribe(() => { 
      this.products = this.products.filter(product => product.id !== id);
       this.filterProducts(); }); }
}
