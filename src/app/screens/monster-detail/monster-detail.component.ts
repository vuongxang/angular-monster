import { Component, OnInit,Input } from '@angular/core';
import { Monster } from 'src/app/models/monster';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MONSTERS} from '../../moc-data/MONSTERS';
@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: ['./monster-detail.component.css']
})
export class MonsterDetailComponent implements OnInit {
  monsterData: Monster = null;
  monsterId: number = null;
  monsters: Array<Monster> = MONSTERS;
  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params =>{
      this.monsterId = Number(params.get('monsterId'));
      });
      let mt = this.monsters.filter(mt =>{ return mt.id == this.monsterId });
      this.monsterData = mt[0];
      console.log(this.monsterData);
  }

}
