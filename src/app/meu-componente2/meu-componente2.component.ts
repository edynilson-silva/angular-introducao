import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';


import { AlunosService } from './../services/alunos.service';
import { ProjectsService } from './../services/projects.service';

@Component({
  selector: 'app-meu-componente2',
  templateUrl: './meu-componente2.component.html',
  styleUrls: ['./meu-componente2.component.css']
})
export class MeuComponente2Component implements OnInit, OnDestroy {
  alunos = [];
  nome = 'Silva';
  isVisible = false;
  myValue = 1;
  aluno = {
    dados: {
      nome: 'Maria'
    }
  }

  myList = [1, 2, 3, 4, 5];
  img = 'foto.png';

  searchText = '';
  projects = [];
  isAlive = true;
  //mySubscription = null;


  constructor(private alunosService: AlunosService, private projectService: ProjectsService) { 
    this.alunos = this.alunosService.getAlunos();
  }

  ngOnInit() {
   //this.mySubscription = this.projectService.projects.subscribe(
    this.projectService.projects
    .pipe(
      takeWhile(() => this.isAlive)
    )
    .subscribe(
      projects => {
        this.projects = projects;
        //this.handleClick();
      });
  }

  /* Retirar a inscrição do serviço */
  ngOnDestroy() {
    //this.mySubscription.unsubscribe();
    this.isAlive = false;
  }

  handleClick() {
    alert('Hi!');
  }

  getProjects(){
    this.projectService.getProjects(this.searchText);
  }

}
