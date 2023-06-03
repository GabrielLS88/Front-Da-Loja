import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EstadoService } from '../services/estado.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-estado-form',
  templateUrl: './estado-form.component.html',
  styleUrls: ['./estado-form.component.css']
})
export class EstadoFormComponent implements OnInit{

form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: EstadoService,
    private _snackBar: MatSnackBar){
    this.form = this.formBuilder.group({
      nome: [null],
      sigla: [null],
      dataCriacao: [null],
      dataAtualizacao: [null]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => console.log(result), error => this.onError());
  }

  onCancel(){
    console.log(this.form.value);
  }

  private onError(){
    this._snackBar.open('Ocorreu um erro, verificar se á campos vazio.', '',{
      duration: 5000
    });
  }
}
