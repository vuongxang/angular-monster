import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Monster } from '../../models/monster';

@Component({
  selector: 'app-monster-unit',
  templateUrl: './monster-unit.component.html',
  styleUrls: ['./monster-unit.component.css']
})
export class MonsterUnitComponent implements OnInit {
  @Input() monsterData: Monster;
  @Output() delete = new EventEmitter<Monster>();
  @Output() updateEvent = new EventEmitter<Monster>();

  constructor() { }

  ngOnInit(): void {
  }

  updateMonster(){
    this.updateEvent.emit(this.monsterData);
  }
  removeMonster(){
    this.delete.emit(this.monsterData);
  }
}
