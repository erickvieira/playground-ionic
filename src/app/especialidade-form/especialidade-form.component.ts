import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'ps-especialidade-form',
  templateUrl: './especialidade-form.component.html',
  styleUrls: ['./especialidade-form.component.scss'],
})
export class EspecialidadeFormComponent implements OnInit {

  restricaoForm: FormGroup;
  perguntaFormBuilder: () => FormGroup;
  opcaoFormBuilder: () => FormGroup;

  constructor(
    public formBuilder: FormBuilder,
  ) {
    this.opcaoFormBuilder = () => formBuilder.group({
      descricao: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(280)
      ])],
      msg: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(280)
      ])],
      podeProsseguir: [false, Validators.required]
    });
    this.perguntaFormBuilder = () => formBuilder.group({
      descricao: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(280)
      ])],
      gatilho: ['', Validators.required],
      opcoes: formBuilder.array([]),
    });
    this.restricaoForm = formBuilder.group({
      idadeMin: ['', Validators.compose([
        Validators.min(0),
        Validators.max(200),
      ])],
      idadeMax: ['', Validators.compose([
        Validators.min(0),
        Validators.max(200),
      ])],
      sexo: ['', Validators.compose([
        Validators.maxLength(1),
        Validators.pattern(/^[amfAMF]$/)
      ])],
      msgPadrao: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(280)
      ])],
      perguntas: formBuilder.array([])
    });
  }

  get perguntasFormArray(): FormArray {
    return this.restricaoForm.get('perguntas') as FormArray;
  }

  opcoesFormArray(id: number): FormArray {
    return this.perguntasFormArray.at(id).get('opcoes') as FormArray;
  }

  private readonly pushFormArrayBuilder = (formArray: FormArray, formGroup: FormGroup) => () => {
    formArray.push(formGroup);
  }

  addPergunta() {
    this.pushFormArrayBuilder(this.perguntasFormArray, this.perguntaFormBuilder())();
  }

  addOpcao(idPergunta: number) {
    this.pushFormArrayBuilder(this.opcoesFormArray(idPergunta), this.opcaoFormBuilder())();
  }

  print() {
    console.log(this.restricaoForm.value);
  }

  ngOnInit() {}

}
