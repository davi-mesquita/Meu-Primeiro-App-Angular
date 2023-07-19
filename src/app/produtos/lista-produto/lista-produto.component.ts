import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from './../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html'
})
export class ListaProdutoComponent implements OnInit {
    constructor(private ProdutoService: ProdutoService) { }

    public produtos : Produto[];

    ngOnInit(): void {
        this.ProdutoService.obterProdutos()
        .subscribe({
          next: produtos => {
            this.produtos = produtos;
            console.log(produtos);
          },
          error : e => console.log(e)
      });
        
    }
}
