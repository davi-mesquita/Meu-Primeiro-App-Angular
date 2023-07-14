import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class ProdutoService {
  constructor(private http : HttpClient){

  }
  protected UrlServiceV1: string = "http://localhost:3000/";

  obterProdutos() {
    this.http.get(this.UrlServiceV1 + "produtos")
  }

}