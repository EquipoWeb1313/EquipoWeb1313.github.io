import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios:any="";
  indice:number=1;
  constructor() { }

  ngOnInit(): void {
    this.usuarios=localStorage.getItem("users");
    this.usuarios=JSON.parse(this.usuarios);
    if(this.usuarios!=null){
      this.indice=2;
    } 
    else{
      this.indice=1;
    }
    var i=0;
    for(i; i<this.usuarios.length;i++){
      this.usuarios[i]=JSON.parse(this.usuarios[i]);
    }
  }
}
