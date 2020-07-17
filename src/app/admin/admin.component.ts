import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart,ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet, SingleDataSet } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  constructor(private httpClient: HttpClient) {



   }
  q1:any;
  q2:any;
  q3:any;
  q4:any;
  reviews:any;
  questions=[[],[],[],[]];
  API_SERVER="https://api.vitaz.dev/";
  overallPieChartLabels: Label[] = ['Excellent', 'Very Good', 'Good','Not Good',"Worst"];
  overallPieChartData: MultiDataSet = [[0,0,0,0,0]];
  overallPieChartType: ChartType = 'doughnut';

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Stars', 'Not Rated'];
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [0,0,0,0,0,0], label: 'Star Based ' }
  ];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Stars', 'Not Rated'];
  public pieChartData: SingleDataSet = [0,0,0,0,0,0];
  public pieChartData2: SingleDataSet = [0,0,0,0,0,0];
  public pieChartData3: SingleDataSet = [0,0,0,0,0,0];

  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  dataSource :any = [];
  displayedColumns: string[] = ['Name', 'Email', 'Telephone', 'Feedback'];


  count(array,index){
    var count = 0;
    for(var i = 0; i < array.length; ++i){
        if(array[i] == index)
            count++;
    }
    return count;
  }
  ngOnInit(){
    this.httpClient.get(this.API_SERVER + 'feedbacks').subscribe(
      res => {
        console.log(res);
        for ( var item in res){
          this.questions[0].push(res[item]['q1'])
          this.questions[1].push(res[item]['q2'])
          this.questions[2].push(res[item]['q3'])
          this.questions[3].push(res[item]['q4'])
        }
        console.log(this.questions[3]);
        let q0=[this.count(this.questions[0],5), this.count(this.questions[0],4), this.count(this.questions[0],3), this.count(this.questions[0],2), this.count(this.questions[0],1), this.count(this.questions[0],0) ]
        let q1=[this.count(this.questions[1],5), this.count(this.questions[1],4), this.count(this.questions[1],3), this.count(this.questions[1],2), this.count(this.questions[1],1), this.count(this.questions[1],0) ]
        let q2=[this.count(this.questions[2],5), this.count(this.questions[2],4), this.count(this.questions[2],3), this.count(this.questions[2],2), this.count(this.questions[2],1), this.count(this.questions[2],0) ]

        let q3=[this.count(this.questions[3],5), this.count(this.questions[3],4), this.count(this.questions[3],3), this.count(this.questions[3],2), this.count(this.questions[3],1), this.count(this.questions[3],0) ]
        this.overallPieChartData=[[q3[0],q3[1],q3[2],q3[3],q3[4]]];
        this.pieChartData=q0;
        this.pieChartData2=q1;
        this.pieChartData3=q2;
        this.barChartData = [
          { data: q3, label: 'Star Based ' }
        ];
        this.dataSource=res;
        console.log(this.q4);
      });

  }
}
