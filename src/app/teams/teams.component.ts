import { Component, OnInit } from '@angular/core';
import {HttpClient , HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  readonly seletedgetteamA = [];
  readonly selectedgetteamB = [];
  TeamA=[] ;
  TeamB=[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.getteamA();
    this.getteamB();
  }

  getteamA(){
    this.http.get('http://localhost:3000/TeamA',).
    subscribe((data:any) => {
      console.log(data)
      this.TeamA = data;
});
}
getteamB(){
  this.http.get('http://localhost:3000/TeamB',).
  subscribe((res:any) => {
    console.log(res)
    this.TeamB = res;
});
}
AtoB(fromcol: any[], tocol: any[]) {
  const selections = fromcol === this.TeamA ? this.TeamA : this.TeamB;
  selections.forEach(selectedRecord => {
    const removedRecordIndex = fromcol.findIndex(record => record === selectedRecord);
    const removedRecord = fromcol.splice(removedRecordIndex, 1)[0];
    tocol.push(removedRecord);
  });
  selections.length = 0;
}
BtoA(tocol: any[], fromcol: any[]) {
  const selections = fromcol === this.TeamA ? this.TeamA : this.TeamB;
  selections.forEach(selectedRecord => {
    const removedRecordIndex = fromcol.findIndex(record => record === selectedRecord);
    const removedRecord = fromcol.splice(removedRecordIndex, 1)[0];
    tocol.push(removedRecord);
  });
  selections.length = 0;
}


onSelectionChanged(event, record, column) {
  const selections = column === this.TeamA ? this.TeamA : this.TeamB;
  event.target.checked? selections.push(record): selections.splice(selections.findIndex(selection => selection.Id === record.Id), 1)
}
}
