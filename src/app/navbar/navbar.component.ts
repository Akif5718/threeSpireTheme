import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).on('scroll',function(){
      if($(window).scrollTop()){
        $('nav').addClass('black');
      } 
      else
      {
        if ($(window).width() > 900) {
          $('nav').removeClass('black');
        }
        
      }
    })
    if ($(window).width() < 900) {
      $('nav').addClass('black');
      $('.menu').hide();
   }
   else {
    $('nav.black').css('background','none');
    $('nav').removeClass('black');
    $('.menu').show();
   }
    $(window).resize(function(){
      $('.menu').hide();
        $('.menu').removeClass('clickedToggle');
        $('ul').css('display','flex');
        $('ul').css('text-align','none');
        $('ul').css('float','right');
      if ($(window).width() < 900) {
        $('nav').addClass('black');
        $('.menu').hide();
     }
     else {
      $('nav').removeClass('black');
      $('.menu').show();
     }
    })
    $('.toggle').click(function(){
      if($('.menu').hasClass('clickedToggle'))
      {
        $('.menu').hide();
        $('.menu').removeClass('clickedToggle');
        $('ul').css('display','flex');
        $('ul').css('text-align','none');
        $('ul').css('float','right');
      }
      else
      {
        $('.menu').show();
        $('.menu').addClass('clickedToggle');
        $('ul').css('display','block');
        $('ul').css('text-align','center');
        $('ul').css('float','none');
        $('nav ul li').css('margin-bottom','50px');

      }
      
    })
  }

}
