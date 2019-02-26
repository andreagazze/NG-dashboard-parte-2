import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";
import { resolveDirective } from '@angular/core/src/render3/instructions';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.css']
})
export class EventiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('th').hide;
  }


  recuperaeventi() {
    var params = {}
    params['token'] = "6V7PDL5PRBBHE3AVHFAP";
    params['location.address'] = 'Rome';
     
    
    
    $.ajax({
      url: "https://www.eventbriteapi.com/v3/events/search/" ,
    
      data: params,
    
      success: function(data) {
          
        
       for (var i = 0; i < 10; i++)
       
       $("#eventi").append('<tr> <td>'+ (data.events[i].name.text) + '</td>' + '<td>' + (data.events[i].end.local) + '</td> </tr>');

         
      },
      error: function(xhr) {

      console.log(xhr);
      }
    });
  }


    recuperaeventi2() {
      $(function(){
        $.ajax({
         type:'GET',
         url:"https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=8ec58347383a461e8fbc05407c025e30&pageSize=10",
         data:'html',
         success: function(result){
            for(var i=0;i<10;i++)

              

              $("#news").append("<tr> <td>"+(result.articles[i].title)+"</td>"+"<td>"+(result.articles[i].source.name)+"</td>");
  
           
         },
        error: function(xhr) {
  
        console.log(xhr);
        }
      });
    
    
    
       });


      }
    }
    
    