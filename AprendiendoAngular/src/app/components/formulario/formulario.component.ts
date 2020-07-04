import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;
  public campo: string;
  public campoDos: string;

  constructor() {

    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: '',
    };
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    alert('Formulario enviado');
    console.log(this.user)
  }

  hasDadoClick(): void{
    alert('Has dado click');
  }

  hasSalido(): void{
    alert('Has salido');
  }

  hasPulsado(): void{
    alert('Has pulsado enter');
  }

}
