import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit, OnDestroy {

  private debouncerSuscription?: Subscription;

  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();
  @Input() placeholder : string = '';
  @Input() initValue:  string = '';

  debouncer: Subject<string> = new Subject();
  termino : string = '';

  constructor() { }

  ngOnInit(): void {

    if(this.initValue){
      this.termino = this.initValue;
    }

    this.debouncerSuscription= this.debouncer
      .pipe(
        debounceTime(300))
      .subscribe( valor =>{
        this.onDebounce.emit(valor);        
    })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  buscar(){
    this.onEnter.emit(this.termino);
    
  }
  
  teclaPresionada(){
    this.debouncer.next(this.termino);
    
  }

}
