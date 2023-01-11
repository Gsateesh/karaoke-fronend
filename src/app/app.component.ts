import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Karaoke Is Here';
  audio : any;
  lyrics = 'Please wait';
  songLyrics = [
    {duration: 46, lyrics : "Aisa dekha nahi khoobsurat koi" },
{duration: 51, lyrics : "Jism jaise Ajanta ki murat koi" },
{duration: 56, lyrics : "Jism jaise nigahon pe jadoo koi" },
{duration: 61, lyrics : "Jism nagma koi jism khushboo koi" },
{duration: 67, lyrics : "Jism jaise mehakti hui chandni" },
{duration: 72, lyrics : "Jism jaise machalti hui ragini" },
{duration: 77, lyrics : "Jism jaise ke khilta hua ik chaman" },
{duration: 82, lyrics : "Jism jaise ke suraj ki pehli kiran" },
{duration: 87, lyrics : "Jism tarsha hua dilkasho dilnashin" },
{duration: 92, lyrics : "Sandli sandli marmari marmari" },
{duration: 101, lyrics : "	Husan-e-jaana ki tareef mumkin nahi" },
{duration: 105, lyrics : "	Husan-e-jaana ki tareef mumkin nahi" },
{duration: 110, lyrics : "	Afreen afreen afreen afreen" },
{duration: 115, lyrics : "	Tu bhi dekhe agar toh kahe humnashin" },
{duration: 120, lyrics : "	Afreen afreen afreen afreen" },
{duration: 125, lyrics : "	Husan-e-jaana ki tareef mumkin nahi" },
{duration: 130, lyrics : "	Husan-e-jaana ki tareef mumkin nahi…" },
{duration: 156, lyrics : "	Jane kaisi bandhi tune akhiyon ke dor" },
{duration: 162, lyrics : "	Mann mera khicha chala aaya teri aor" },
{duration: 167, lyrics : "	Mere chehre ki subah zulfon ki shaam" },
{duration: 172, lyrics : "	Mera sab kuch hai piya ab se tere naam" },
{duration: 177, lyrics : "	Nazron ne teri chhua toh hai ye jadoo hua" },
{duration: 180, lyrics : "	Hone lagi hoon main haseen" },
{duration: 189, lyrics : "	Afreen afreen afreen" },
{duration: 192, lyrics : "	Afreen afreen afreen" },
{duration: 198, lyrics : "	Afreen afreen afreen" },
{duration: 203, lyrics : "	Afreen afreen afreen" },

  ]
  OnInit(){


  }

  myFunction(event: any){
    // thisdio = document.getElementById("myVideo");
    console.log(parseInt(event.srcElement.currentTime))
    let flag = true;
    this.songLyrics.forEach( obj => {
      if(flag){
        if( obj.duration == parseInt(event.srcElement.currentTime) ){
          // console.log(">>", obj.duration)
          flag = false;
          this.lyrics = obj.lyrics;
        }
      }
    })
  }


}
