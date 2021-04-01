import { Component, OnInit } from '@angular/core';
import {Monster} from '../../models/monster';
import {MONSTERS} from '../../moc-data/MONSTERS';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.css']
})
export class MonsterListComponent implements OnInit {
  monsters: Array<Monster> = MONSTERS;
  updateObject: Monster = {
    id: 0,
    name: "",
    image: "",
    detail: "",
    spells: []
  };

  constructor() { }

  ngOnInit(): void {
  }
  updateMonster(monster: Monster){
    this.updateObject = { ...monster};
  }

  parentRemove(removeObject: Monster){
    let cof = confirm('Bạn chắc muốn xóa');
    if(cof){
      this.monsters = this.monsters.filter(item => item.id != removeObject.id);
    }
  }

  saveFormSubmit(data: Monster){
    let existed = this.monsters.findIndex(el => el.id ==data.id);
    if(existed == -1){
      this.monsters.push(data);
    }else{
      this.monsters[existed] = {...data};
    }

    this.updateObject = {
      id: 0,
      name: "",
      image: "",
      detail: "",
      spells: []
    };
  }
}
