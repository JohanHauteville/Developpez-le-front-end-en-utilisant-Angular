import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OlympicService } from '../core/services/olympic.service';
import { Olympic } from '../core/models/Olympic';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  olympic$!: Observable<Olympic | undefined>;
  olympicData: Olympic | undefined;
  totalMedalCount!: number;
  totalAthletes!: number;

  constructor(private route: ActivatedRoute, private olympicServices: OlympicService) { }

  dataId = +this.route.snapshot.params['id'];
  // olympic: Olympic = this.olympicServices.getOneOlympic(this.dataId)
  ngOnInit(): void {
    const dataId = +this.route.snapshot.params['id'];
    this.olympic$ = this.olympicServices.getOneOlympic(dataId)
    this.olympic$.pipe(
      map(data => data?.participations.reduce(((acc, current) => acc + current.medalsCount), 0))
    ).subscribe(totalMedalCount => {
      this.totalMedalCount = <number>totalMedalCount;
    });
    this.olympic$.pipe(
      map(data => data?.participations.reduce(((acc, current) => acc + current.athleteCount), 0))
    ).subscribe(totalAthletes => {
      this.totalAthletes = <number>totalAthletes;
    });
    this.olympic$.subscribe(data => {
      this.olympicData = data;
    });

  }
  
  

}
