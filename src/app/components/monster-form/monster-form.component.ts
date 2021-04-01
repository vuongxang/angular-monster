import { Component, OnInit, 
        Input,Output, EventEmitter } from '@angular/core';
import { Monster } from 'src/app/models/monster';
import { Spell } from 'src/app/models/spell';
@Component({
  selector: 'app-monster-form',
  templateUrl: './monster-form.component.html',
  styleUrls: ['./monster-form.component.css']
})
export class MonsterFormComponent implements OnInit {

  @Input() formObject: Monster;
  @Output() submitForm = new EventEmitter<Monster>();
  lstspells: Array<Spell> = [
    {
      id: 1,
      name: "Xoay"
    },
    {
      id: 2,
      name: "lộn"
    },
    {
      id: 3,
      name: "bay"
    },
    {
      id: 4,
      name: "lượn"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  submitMonsterForm(event){
    event.preventDefault();
    this.submitForm.emit(this.formObject);
  }

  addSpell2FormObject(item: Spell, event){
    
    if(event.target.checked == true){
      let index = this.formObject.spells.findIndex(e => e.id == item.id);  
      if(index == -1){
        this.formObject.spells.push(item);
      }
    }else{
      this.formObject.spells = this.formObject.spells.filter(e => e.id != item.id);
    }
  }

  setCheckedCheckbox(item: Spell){
    if(this.formObject.spells == undefined){
      this.formObject.spells = [];
    }
    let index = this.formObject.spells.findIndex(el => el.id == item.id );
    return index != -1;
  }

  resetForm(): Monster{
    return {
      id: 0,
      name: "",
      image: "",
      detail: "",
      spells: []
    };
  }

}
