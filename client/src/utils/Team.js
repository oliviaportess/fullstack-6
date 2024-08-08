import React from "react";
import '../App.css';
import jacquelynPhoto from '../images/jacquelyn.jpg';
import oliviaPhoto from '../images/olivia.jpg';
import paolaPhoto from '../images/paola.png';
import phoebePhoto from '../images/phoebe.jpeg';
import soojinPhoto from '../images/soojin.jpg';
import rayahPhoto from '../images/rayah.jpg';

const teamMembers = [
  {
    name: "Jacquelyn",
    photo: jacquelynPhoto,
    hobbies: [
      "My favourite hobby is swimming.",
      "I do this as it is refreshing and it is good for my breathing."
    ]
  },
  {
    name: "Olivia",
    photo: oliviaPhoto,
    hobbies: [
      "I love hiking, my favourite hike to date was the Milford Track in New Zealand.",
      "Being outdoors and connecting with nature helps me ground myself."
    ]
  },
  {
    name: "Paola",
    photo: paolaPhoto,
    hobbies: [
      "I love cooking, but I love eating even more!",
      "Experimenting with new recipes and flavors is a fantastic way to relax and feel creative."
    ]
  },
  {
    name: "Phoebe",
    photo: phoebePhoto,
    hobbies: [
      "I have a series of old-person hobbies, including gardening, crocheting and crosswords.",
      "They are all excellent, creative and meditative. Old people have it right."
    ]
  },
  {
    name: "Soo-Jin",
    photo: soojinPhoto,
    hobbies: [
      "My main hobby is K-pop dancing!",
      "I love performing and have also filmed a few dance cover videos."
    ]
  },
  {
    name: "Rayah",
    photo: rayahPhoto,
    hobbies: [
      "I love going to the gym and working out, my favourite thing to do in the gym is sprinting.",
      "I adore going to the gym! I tend to go almost everyday first thing in the morning. My favourite thing to do in the gym is sprinting and lower body. I absoloutely detest doing core workouts."
    ]
  },
  {
    name: "Rania",
    photo: "",
    hobbies: [
      "Hey there! I'm someone who finds joy in the little things. Playing the piano is my way of unwinding, whether it’s getting lost in a classical piece or just jamming out to something fun.",
      "I'm a huge foodie. I love checking out new restaurants to find my next favorite dish. And when I'm not eating out, I'm probably in the kitchen trying to whip up something delicious myself.",
      "Beyond food and music, I’m into photography. Snapping pics of cool places and moments is a hobby that keeps me exploring. I also love traveling; it’s awesome to see new places and experience different cultures."
    ]
  },
]


const DisplayTeam = () => {
  return (
    <>
      <h1>Team Introduction</h1>
      {teamMembers.map((member, index) => (
        <div key={index}>
          <h2 className="yourName">{member.name}</h2>
          <img src={member.photo} alt={member.name} />
          <ul>
            {member.hobbies.map((hobby, index) => (
              <li key={index}>
                <p className="about">{hobby}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default DisplayTeam;