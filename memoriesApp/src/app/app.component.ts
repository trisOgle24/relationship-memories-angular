import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'memoriesApp';

  cards = [
    {
      titles: "Tristan's Honours Graduation",
      subtitle: "26 April 12:25",
      imageSrc: "../assets/Picture1.jpg",
      imageAlt: "Photo of a Shiba Inu",
      paragraph: "A day when you made me feel very special and handsome by taking many pictures and videos of me. I got a cool boyfriend mug on this day :)"
    },
    {
      titles: "Our Children's First Birthday",
      subtitle: "16 March 17:03",
      imageSrc: "../assets/Picture2.JPG",
      imageAlt: "Photo of a Shiba Inu",
      paragraph: "I think this picture is really good representation of how the day went. A lot of struggles to get the hats on, but a lot of laughs that came with the struggles. Thank you for loving the doggies as much as you do <3"
    }
  ]
}
