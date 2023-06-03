import { Component } from '@angular/core';
import { Estado } from '../model/estado';
import { EstadoService } from '../services/estado.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent {

  estado$: Observable<Estado[]>;

  displayedColumns = ['id','name','sigla','dataCriacao','dataAtualizacao','actions'];

  constructor(
    private estadoService: EstadoService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ){

    this.estado$ = this.estadoService.findAll()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar estado.')
        return of([])
      })
    );
  }

  onError(erroMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: erroMsg
    });
  }

  ngOnInit(): void {

  }

  onAdd() {
    //console.log('onAdd');
    this.router.navigate(['new'],{relativeTo: this.route});
  }

}
