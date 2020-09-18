import "core-js/features/set";
import "core-js/features/map";
import React from "react";
import { renderToString } from "react-dom/server";

function Movie({ record }) {
  return (
    <div>
      <div>{record.title}</div>
      <div>{record.year}</div>
      <div>
        <img src={record.poster} style={{ width: 100 }} />
      </div>
    </div>
  );
}

function MovieList({ records }) {
  return records.map((r, i) => <Movie key={i} record={r} />);
}

const print =
  global.print === "function" ? global.print : console.log.bind(console);

const data = [
  {
    title: "Himlens barn",
    year: "1997",
    genres: ["Drama", "Family"],
    poster:
      "MV5BZTYwZWQ4ZTQtZWU0MS00N2YwLWEzMDItZWFkZWY0MWVjODVhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY446_SX290_AL_.jpg",
    contentRating: "PG",
    duration: "PT89M",
    releaseDate: "1999-01-22",
    averageRating: 0,
    originalTitle: "Bacheha-Ye aseman",
    storyline:
      "Zahra's shoes are gone; her older brother Ali lost them. They are poor, there are no shoes for Zahra until they come up with an idea: they will share one pair of shoes, Ali's. School awaits. Will the plan succeed?                Written by\nEileen Berdon <eberdon@aol.com>",
    actors: ["Mohammad Amir Naji", "Amir Farrokh Hashemian", "Bahare Seddiqi"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZTYwZWQ4ZTQtZWU0MS00N2YwLWEzMDItZWFkZWY0MWVjODVhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY446_SX290_AL_.jpg",
  },
  {
    title: "Heat",
    year: "1995",
    genres: ["Action", "Crime", "Drama"],
    poster:
      "MV5BNGMwNzUwNjYtZWM5NS00YzMyLWI4NjAtNjM0ZDBiMzE1YWExXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY500_CR0,0,339,500_AL_.jpg",
    contentRating: "15",
    duration: "PT170M",
    releaseDate: "1996-02-16",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Hunters and their prey--Neil and his professional criminal crew hunt to score big money targets (banks, vaults, armored cars) and are, in turn, hunted by Lt. Vincent Hanna and his team of cops in the Robbery/Homicide police division. A botched job puts Hanna onto their trail while they regroup and try to put together one last big 'retirement' score. Neil and Vincent are similar in many ways, including their troubled personal lives. At a crucial moment in his life, Neil disobeys the dictum taught to him long ago by his criminal mentor--'Never have anything in your life that you can't walk out on in thirty seconds flat, if you spot the heat coming around the corner'--as he falls in love. Thus the stage is set for the suspenseful ending....                Written by\nTad Dibbern <DIBBERN_D@a1.mscf.upenn.edu>",
    actors: ["Al Pacino", "Robert De Niro", "Val Kilmer"],
    imdbRating: 8.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNGMwNzUwNjYtZWM5NS00YzMyLWI4NjAtNjM0ZDBiMzE1YWExXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY500_CR0,0,339,500_AL_.jpg",
  },
  {
    title: "Den stora flykten",
    year: "1963",
    genres: ["Adventure", "Drama", "History"],
    poster:
      "MV5BMjI2MTQwNDI3Nl5BMl5BanBnXkFtZTcwNDk4MTkzNA@@._V1_SY500_CR0,0,333,500_AL_.jpg",
    contentRating: "15",
    duration: "PT172M",
    releaseDate: "1963-09-21",
    averageRating: 0,
    originalTitle: "The Great Escape",
    storyline:
      "Based on a true story, a group of allied escape artist-type prisoners-of-war (POWs) are all put in an 'escape proof' camp. Their leader decides to try to take out several hundred all at once. The first half of the film is played for comedy as the prisoners mostly outwit their jailers to dig the escape tunnel. The second half is high adventure as they use boats and trains and planes to get out of occupied Europe.                Written by\nJohn Vogel <jlvogel@comcast.net>",
    actors: ["Steve McQueen", "James Garner", "Richard Attenborough"],
    imdbRating: 8.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI2MTQwNDI3Nl5BMl5BanBnXkFtZTcwNDk4MTkzNA@@._V1_SY500_CR0,0,333,500_AL_.jpg",
  },
  {
    title: "Chinatown",
    year: "1974",
    genres: ["Drama", "Mystery", "Thriller"],
    poster:
      "MV5BMTZiZTA5MWItNTgyMy00ZGZkLThjNGQtOWI0MTU5ZDI4NmJmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "15",
    duration: "PT130M",
    releaseDate: "1974-12-16",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "JJ 'Jake' Gittes is a private detective who seems to specialize in matrimonial cases. He is hired by Evelyn Mulwray when she suspects her husband Hollis, builder of the city's water supply system, of having an affair. Gittes does what he does best and photographs him with a young girl but in the ensuing scandal, it seems he was hired by an impersonator and not the real Mrs. Mulwray. When Mr. Mulwray is found dead, Jake is plunged into a complex web of deceit involving murder, incest and municipal corruption all related to the city's water supply.                Written by\ngarykmcd",
    actors: ["Jack Nicholson", "Faye Dunaway", "John Huston"],
    imdbRating: 8.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTZiZTA5MWItNTgyMy00ZGZkLThjNGQtOWI0MTU5ZDI4NmJmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Pans labyrint",
    year: "2006",
    genres: ["Drama", "Fantasy", "War"],
    poster:
      "MV5BMTU3ODg2NjQ5NF5BMl5BanBnXkFtZTcwMDEwODgzMQ@@._V1_SY500_CR0,0,339,500_AL_.jpg",
    contentRating: "15",
    duration: "PT118M",
    releaseDate: "2007-02-09",
    averageRating: 0,
    originalTitle: "El laberinto del fauno",
    storyline:
      "In 1944 falangist Spain, a girl, fascinated with fairy-tales, is sent along with her pregnant mother to live with her new stepfather, a ruthless captain of the Spanish army. During the night, she meets a fairy who takes her to an old faun in the center of the labyrinth. He tells her she's a princess, but must prove her royalty by surviving three gruesome tasks. If she fails, she will never prove herself to be the the true princess and will never see her real father, the king, again.                Written by\nTim",
    actors: ["Ivana Baquero", "Ariadna Gil", "Sergi L\u00f3pez"],
    imdbRating: 8.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3ODg2NjQ5NF5BMl5BanBnXkFtZTcwMDEwODgzMQ@@._V1_SY500_CR0,0,339,500_AL_.jpg",
  },
  {
    title: "Insidan ut",
    year: "2015",
    genres: ["Animation", "Adventure", "Comedy"],
    poster:
      "MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "7",
    duration: "PT95M",
    releaseDate: "2015-08-28",
    averageRating: 0,
    originalTitle: "Inside Out",
    storyline:
      "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Like all of us, Riley is guided by her emotions - Joy, Fear, Anger, Disgust and Sadness. The emotions live in Headquarters, the control center inside Riley's mind, where they help advise her through everyday life. As Riley and her emotions struggle to adjust to a new life in San Francisco, turmoil ensues in Headquarters. Although Joy, Riley's main and most important emotion, tries to keep things positive, the emotions conflict on how best to navigate a new city, house and school.                Written by\nPixar",
    actors: ["Amy Poehler", "Bill Hader", "Lewis Black"],
    imdbRating: 8.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Att leva",
    year: "1952",
    genres: ["Drama"],
    poster:
      "MV5BMWU4NmM5OTgtODk1MC00NThiLThkNjMtOWM5MGIzYjEyNmY5XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SY500_CR0,0,355,500_AL_.jpg",
    contentRating: "11",
    duration: "PT143M",
    releaseDate: "1966-09-12",
    averageRating: 0,
    originalTitle: "Ikiru",
    storyline:
      "Kanji Watanabe is a civil servant. He has worked in the same department for 30 years. His life is pretty boring and monotonous, though he once used to have passion and drive. Then one day he discovers that he has stomach cancer and has less than a year to live. After the initial depression he sets about living for the first time in over 20 years. Then he realises that his limited time left is not just for living life to the full but to leave something meaningful behind...                Written by\ngrantss",
    actors: ["Takashi Shimura", "Nobuo Kaneko", "Shin'ichi Himori"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMWU4NmM5OTgtODk1MC00NThiLThkNjMtOWM5MGIzYjEyNmY5XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SY500_CR0,0,355,500_AL_.jpg",
  },
  {
    title: "Min granne Totoro",
    year: "1988",
    genres: ["Animation", "Family", "Fantasy"],
    poster:
      "MV5BMjE3NzY5ODQwMV5BMl5BanBnXkFtZTcwNzY1NzcxNw@@._V1_SY345_SX250_AL_.jpg",
    contentRating: "Btl",
    duration: "PT86M",
    releaseDate: "2007-03-30",
    averageRating: 0,
    originalTitle: "Tonari no Totoro",
    storyline:
      "Two young girls, Satsuki and her younger sister Mei, move into a house in the country with their father to be closer to their hospitalized mother. Satsuki and Mei discover that the nearby forest is inhabited by magical creatures called Totoros (pronounced toe-toe-ro). They soon befriend these Totoros, and have several magical adventures.                Written by\nChristopher E. Meadows <cmeadows@nyx.cs.du.edu>",
    actors: ["Hitoshi Takagi", "Noriko Hidaka", "Chika Sakamoto"],
    imdbRating: 8.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NzY5ODQwMV5BMl5BanBnXkFtZTcwNzY1NzcxNw@@._V1_SY345_SX250_AL_.jpg",
  },
  {
    title: "Storstadshamn",
    year: "1954",
    genres: ["Crime", "Drama", "Thriller"],
    poster:
      "MV5BMjFiZDg3MDgtOTdiNC00ZGFiLWIyN2ItNDhkNGI5ZThkOTE3XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX246_CR0,0,246,377_AL_.jpg",
    contentRating: "15",
    duration: "PT108M",
    releaseDate: "1954-12-27",
    averageRating: 0,
    originalTitle: "On the Waterfront",
    storyline:
      "Terry Malloy dreams about being a prize fighter, while tending his pigeons and running errands at the docks for Johnny Friendly, the corrupt boss of the dockers union. Terry witnesses a murder by two of Johnny's thugs, and later meets the dead man's sister and feels responsible for his death. She introduces him to Father Barry, who tries to force him to provide information for the courts that will smash the dock racketeers.                Written by\nColin Tinto <cst@imdb.com>",
    actors: ["Marlon Brando", "Karl Malden", "Lee J. Cobb"],
    imdbRating: 8.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjFiZDg3MDgtOTdiNC00ZGFiLWIyN2ItNDhkNGI5ZThkOTE3XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX246_CR0,0,246,377_AL_.jpg",
  },
  {
    title: "Ran",
    year: "1985",
    genres: ["Action", "Drama"],
    poster:
      "MV5BZDBjZTM4ZmEtOTA5ZC00NTQzLTkyNzYtMmUxNGU2YjI5YjU5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY500_CR0,0,353,500_AL_.jpg",
    contentRating: "15",
    duration: "PT162M",
    releaseDate: "1985-11-15",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Japanese warlord Hidetori Ichimonji decides the time has come to retire and divide his fiefdom among his three sons. His eldest and middle sons - Taro and Jiro - agree with his decision and promise to support him for his remaining days. The youngest son Saburo disagrees with all of them arguing that there is little likelihood the three brothers will remain united. Insulted by his son's brashness, the warlord banishes Saburo. As the warlord begins his retirement, he quickly realizes that his two eldest sons selfish and have no intention of keeping their promises. It leads to war and only banished Saburo can possibly save him.                Written by\ngarykmcd",
    actors: ["Tatsuya Nakadai", "Akira Terao", "Jinpachi Nezu"],
    imdbRating: 8.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZDBjZTM4ZmEtOTA5ZC00NTQzLTkyNzYtMmUxNGU2YjI5YjU5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY500_CR0,0,353,500_AL_.jpg",
  },
  {
    title: "Room",
    year: "2015",
    genres: ["Drama"],
    poster:
      "MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "15",
    duration: "PT118M",
    releaseDate: "2016-03-18",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "ROOM tells the extraordinary story of Jack, a spirited 5-year-old who is looked after by his loving and devoted mother. Like any good mother, Ma dedicates herself to keeping Jack happy and safe, nurturing him with warmth and love and doing typical things like playing games and telling stories. Their life, however, is anything but typical--they are trapped--confined to a 10-by-10-foot space that Ma has euphemistically named Room. Ma has created a whole universe for Jack within Room, and she will stop at nothing to ensure that, even in this treacherous environment, Jack is able to live a complete and fulfilling life. But as Jack's curiosity about their situation grows, and Ma's resilience reaches its breaking point, they enact a risky plan to escape, ultimately bringing them face-to-face with what may turn out to be the scariest thing yet: the real world.                Written by\nA24",
    actors: ["Brie Larson", "Jacob Tremblay", "Sean Bridgers"],
    imdbRating: 8.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Guldfeber",
    year: "1925",
    genres: ["Adventure", "Comedy", "Drama"],
    poster:
      "MV5BZjEyOTE4MzMtNmMzMy00Mzc3LWJlOTQtOGJiNDE0ZmJiOTU4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY459_CR0,0,335,459_AL_.jpg",
    contentRating: "",
    duration: "PT95M",
    releaseDate: "1925-09-28",
    averageRating: 0,
    originalTitle: "The Gold Rush",
    storyline:
      "A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.                Written by\nJohn J. Magee <magee@helix.mgh.harvard.edu>",
    actors: ["Charles Chaplin", "Mack Swain", "Tom Murray"],
    imdbRating: 8.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZjEyOTE4MzMtNmMzMy00Mzc3LWJlOTQtOGJiNDE0ZmJiOTU4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY459_CR0,0,335,459_AL_.jpg",
  },
  {
    title: "Hacksaw Ridge",
    year: "2016",
    genres: ["Drama", "History", "War"],
    poster:
      "MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_SY500_CR0,0,323,500_AL_.jpg",
    contentRating: "15",
    duration: "PT139M",
    releaseDate: "2016-11-04",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "The true story of Desmond Doss, the conscientious objector who, at the Battle of Okinawa, won the Medal of Honor for his incredible bravery and regard for his fellow soldiers. We see his upbringing and how this shaped his views, especially his religious view and anti-killing stance. We see Doss's trials and tribulations after enlisting in the US Army and trying to become a medic. Finally, we see the hell on Earth that was Hacksaw Ridge.                Written by\ngrantss",
    actors: ["Andrew Garfield", "Sam Worthington", "Luke Bracey"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_SY500_CR0,0,323,500_AL_.jpg",
  },
  {
    title: "Hemligheten i deras \u00f6gon",
    year: "2009",
    genres: ["Drama", "Mystery", "Thriller"],
    poster:
      "MV5BMTgwNTI3OTczOV5BMl5BanBnXkFtZTcwMTM3MTUyMw@@._V1_SX338_CR0,0,338,499_AL_.jpg",
    contentRating: "15",
    duration: "PT129M",
    releaseDate: "2010-04-02",
    averageRating: 0,
    originalTitle: "El secreto de sus ojos",
    storyline:
      "In 1999, retired Argentinian federal justice agent Benjam\u00edn Esp\u00f3sito is writing a novel, using an old closed case as the source material. That case is the brutal rape and murder of Liliana Coloto. In addition to seeing the extreme grief of the victim's husband Ricardo Morales, Benjam\u00edn, his assistant Pablo Sandoval, and newly hired department chief Irene Men\u00e9ndez-Hastings were personally affected by the case as Benjam\u00edn and Pablo tracked the killer, hence the reason why the unsatisfactory ending to the case has always bothered him. Despite the department already having two other suspects, Benjam\u00edn and Pablo ultimately were certain that a man named Isidoro G\u00f3mez is the real killer. Although he is aware that historical accuracy is not paramount for the novel, the process of revisiting the case is more an issue of closure for him. He tries to speak to the key players in the case, most specifically Irene, who still works in the justice department and who he has always been attracted to ...                Written by\nHuggo",
    actors: ["Ricardo Dar\u00edn", "Soledad Villamil", "Pablo Rago"],
    imdbRating: 8.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgwNTI3OTczOV5BMl5BanBnXkFtZTcwMTM3MTUyMw@@._V1_SX338_CR0,0,338,499_AL_.jpg",
  },
  {
    title: "Bron \u00f6ver floden Kwai",
    year: "1957",
    genres: ["Adventure", "Drama", "War"],
    poster:
      "MV5BZTZmNjgyZmUtOTI2MC00MDI4LWJjOTgtNjc2YTc4YTk0ZWJjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,323,500_AL_.jpg",
    contentRating: "15",
    duration: "PT161M",
    releaseDate: "1958-07-18",
    averageRating: 0,
    originalTitle: "The Bridge on the River Kwai",
    storyline:
      "The film deals with the situation of British prisoners of war during World War II who are ordered to build a bridge to accommodate the Burma-Siam railway. Their instinct is to sabotage the bridge but, under the leadership of Colonel Nicholson, they are persuaded that the bridge should be constructed as a symbol of British morale, spirit and dignity in adverse circumstances. At first, the prisoners admire Nicholson when he bravely endures torture rather than compromise his principles for the benefit of the Japanese commandant Saito. He is an honorable but arrogant man, who is slowly revealed to be a deluded obsessive. He convinces himself that the bridge is a monument to British character, but actually is a monument to himself, and his insistence on its construction becomes a subtle form of collaboration with the enemy. Unknown to him, the Allies have sent a mission into the jungle, led by Warden and an American, Shears, to blow up the bridge.                Written by\nalfiehitchie",
    actors: ["William Holden", "Alec Guinness", "Jack Hawkins"],
    imdbRating: 8.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZTZmNjgyZmUtOTI2MC00MDI4LWJjOTgtNjc2YTc4YTk0ZWJjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,323,500_AL_.jpg",
  },
];

export function render() {
  print(renderToString(<MovieList records={data} />));
}

render();
