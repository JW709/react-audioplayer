import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import './index.css';

function Song(source, artist, title, album, description, id) {
  this.source = source;
  this.artist = artist;
  this.title = title;
  this.album = album;
  this.description = description;
  this.id = id;
}

const songs = [
  new Song('/6_inch.mp3', 'Beyoncé', '6 Inch (feat. The Weeknd)', 'Lemonade', "Six inch heels, she walked in the club like nobody's business. Goddamn, she murdered everybody and I was her witness", 0),
  new Song('/all_night.mp3', 'Beyoncé', 'All Night', 'Lemonade', "I found the truth beneath your lies. And true love never has to hide. Trade your broken wings for mine. I've seen your scars and kissed your crimes", 1),
  new Song('/daddy_lessons.mp3', 'Beyoncé', 'Daddy Lessons', 'Lemonade', "With his gun, with his head held high. He told me not to cry", 2),
  new Song('/dont_hurt_yourself.mp3', 'Beyoncé', 'Dont Hurt yourself (feat. Jack White', 'Lemonade', "I am the dragon breathing fire. Beautiful mane I'm the lion.", 3),
  new Song('/formation.mp3', 'Beyoncé', 'Formation', 'Lemonade', "El Camino with the seat low,Sippin' Cuervo with no chaser.", 4),
  new Song('/forward.mp3', 'Beyoncé', 'Forward (feat. James Blake)', 'Lemonade', "It's time to listen, it's time to fight.", 5),
  new Song('/freedom.mp3', 'Beyoncé', 'Freedom (feat. Kendrick Lamar)', 'Lemonade', "Freedom, Freedom. Where are you? Cause I need freedom too!.", 6),
  new Song('/hold_up.mp3', 'Beyoncé', 'Hold Up', 'Lemonade', "Hold up, they don't love you like I love you", 7),
  new Song('/sorry.mp3', 'Beyoncé', 'Sorry', 'Lemonade', "You better call Becky with the good hair.", 8), 
  new Song('/adele.mp3', 'Adele', "Send My Love (To Your New Lover", '25', "Send my love to your new lover, treat her better.", 9),
  new Song('/calvin_harris.mp3', 'Calvin Harris', 'This is What You Came For (feat. Rhianna)', 'Single', "Baby, this is what you came for. Lightning strikes every time she moves.", 10),
  new Song('/closer.mp3', 'The Chainsmokers', 'Closer (feat. Halsey', 'Collage', "Hey, I was doing just fine before I met you. I drink too much and that's an issue but I'm okay.", 11),
  new Song('/cold_water.mp3', 'Major Lazer', 'Cold Water (feat. Justin Bieber & MØ)', 'XMas Party Best', "'Cause we all get lost sometimes, you know? It's how we learn and how we grow.", 12),
  new Song('/company.mp3', 'Justin Bieber', 'Company', 'Purpose', "It ain't about the complications. I'm all about the elevation.", 13),
  new Song('/crash.mp3', 'Usher', 'Crash', 'Hard II Love', "And I really, really, wanna love you, and I'm really, really only yours. Even if it don't last forever, I wanna let you know. We really had something special, it's hard tryna let it go. I'm just being honest, I'm still in the moment.", 14),
  new Song('/jason_derulo.mp3', 'Jason Durolo', "If it Ain't Love", 'Single', "Each time we dine. We do it again, again and again.", 15),
  new Song('/keys.mp3', 'DJ KHaled', 'I Got the Keys (feat. JAY-Z & Future)', 'Major Keys', "Radar, radar oh, bitches ain't even on my radar. Radar, radar oh, you ain't on my radar. Radar, radar, no, no, you ain't on my radar.", 16),
]

ReactDOM.render((
  <Router>
    <App songs={songs} />
  </Router>
),document.getElementById('root'));
