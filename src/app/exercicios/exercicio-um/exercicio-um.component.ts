import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-um',
  templateUrl: './exercicio-um.component.html',
  styleUrls: ['./exercicio-um.component.scss']
})
export class ExercicioUmComponent implements OnInit {

  actualSlide = 0;
  imgArr: string[] = [
    'https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/09/samraimi.jpg',
    'https://br.web.img3.acsta.net/newsv7/20/12/01/14/21/0821739.jpg',
    'https://www.proibidoler.com/wp-content/uploads/2019/01/shyamalan.jpg'
  ];

  constructor() {
    this.autoGo();
   }

  ngOnInit(): void {
  }

  autoGo(){
    setInterval(()=>{
      this.next();
    },5000);
  }

  next(){
    this.actualSlide++;
    if(this.actualSlide >= this.imgArr.length){
      this.actualSlide = 0;
    }
  }

  prev(){
    this.actualSlide--;
    if(this.actualSlide < 0){
      this.actualSlide = this.imgArr.length - 1;
    }
  }

}
