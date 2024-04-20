const pets = [
    {
      id: 1,
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      
    },
    {
      id: 2,
      name: "Trouble",
      imageUrl: "https://vignette4.wikia.nocookie.net/poohadventures/images/a/af/Rex.jpg/revision/latest?cb=20120601021411",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
    
    },
    {
      id: 3,
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
    },
    {
      id: 4,
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      
    },
    {
      id: 5,
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      
    },
    {
      id: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      
    },
    {
      id: 7,
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      
    },
    {
      id: 8,
      imageUrl: "https://pbs.twimg.com/profile_images/1488679573998948356/1wjxxmEB_400x400.png",
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      
    },
    {
      id: 9,
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      
    },
    {
      id: 10,
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      
    },
    {
      id: 11,
      imageUrl: "https://imgix.bustle.com/inverse/6e/d5/21/62/fdc6/4690/9c62/2b83586ce986/ducky-not-actually-duck-like.jpeg?w=374&h=196&fit=crop&crop=faces&auto=format%2Ccompress",
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
     
    },
    {
      id: 12,
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      
    },
    {
      id: 13,
      imageUrl: "https://images.ctfassets.net/sfnkq8lmu5d7/4Ma58uke8SXDQLWYefWiIt/3f1945422ea07ea6520c7aae39180101/2021-11-24_Singleton_Puppy_Syndrome_One_Puppy_Litter.jpg?w=1000&h=750&fl=progressive&q=70&fm=jpg",
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      
    },
    {
      id: 14,
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      
    },
    {
      id: 15,
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      
    },
    {
      id: 16,
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/51f0c929b83d6ee2eb474b08f788e3cc2448f972de34a5e593284def9fdb45f9.jpg",
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      
    },
    {
      id: 17,
      imageUrl: "https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/8/11/811db2f8-213d-11e7-9400-eb7c9e2abeb8/58f1105a19858.image.jpg",
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      
    },
    {
      id: 18,
      imageUrl: "https://blenderartists.org/uploads/default/original/4X/0/9/1/091951be334cb86cdb8666aa80e7685f532ee79b.jpeg",
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      
    },
    {
      id: 19,
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/funny-dog-captions-1563456605.jpg",
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      
    },
    {
      id: 20,
      imageUrl: "https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o=",
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      
    },
    {
      id: 21,
      imageUrl: "https://lh4.googleusercontent.com/proxy/845brGDWMT_DwIytn7FhL2Httc506ooWevzE799tgbmKmaOdwdMwhLOXRDbUZdYrNEiLkFL3QTW7dov9Mbh9xilJG0mQtyJtAlRPjYvcgirxMxEd4-DDxDaAbD4f5qk_tknGGstH",
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      
    },
    {
      id: 22,
      imageUrl: "https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_4x3.png",
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      
    },
    {
      id: 23,
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      
    },
    {
      id: 24,
      imageUrl: "https://i.pinimg.com/564x/7f/26/e7/7f26e71b2c84e6b16d4f6d3fd8a58bca.jpg",
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      
    },
    {
      id: 25,
      imageUrl: "https://t3.ftcdn.net/jpg/01/93/38/40/360_F_193384026_F34lj9rX9W4ixlVZBrTJmijK010Tdv0j.jpg",
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      
    },
    {
      id: 26,
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      
    },
    {
      id: 27,
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      
    },
    {
      id: 28,
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      
    },
    {
      id: 29,
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat", 
    },
    {
      id: 30,
      imageUrl: "https://ih1.redbubble.net/image.3930996492.3368/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",  
    }
  ];

  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };
//empty string to pull info into
  
  const cardsOnDom = (pets) => {
  let domString = "";
   for (const pet of pets) {
    domString += `<div class="pet-card" style="width: 18rem;">
    <h3 class="card-name">${pet.name}</h3>
    <img src="${pet.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-color">${pet.color}</p>
      <p class="card-skill">${pet.specialSkill}</p>
      <p class="card-type">${pet.type}</p>
    </div>
  </div>`;
  }
 renderToDom("#app", domString);
};


//add filter
const filter = (array, typeOfPet) => {
  const typeArray = [];

   array.forEach((item) => {
   if (item.type === typeOfPet) {
     typeArray.push(item);
     }
   });

  for (const member of array) {
    if (member.type === typeOfPet) {
      typeArray.push(member);
    }
  }
  cardsOnDom(pets);
  return typeArray;
};


//add buttons
const allBtn= document.querySelector("#allpets-btn");
const dogsBtn= document.querySelector("#dog-btn");
const catsBtn = document.querySelector("#cat-btn");
const dinoBtn = document.querySelector("#dino-btn");

//add event listener
allBtn.addEventListener("click", () => {
  cardsOnDom(pets);
});
dogsBtn.addEventListener("click", () => {
  cardsOnDom(pets);
});
catsBtn.addEventListener("click", () => {
  cardsOnDom(pets);
});
dinoBtn.addEventListener("click", () => {
  cardsOnDom(pets);
});

//add click event with filter
dogsBtn.addEventListener("click", () => {
 const dogmember = filter(pets, "dog");
cardsOnDom(dogmember);
});

catsBtn.addEventListener("click", () => {
  const catmember = filter(pets, "cat");
 cardsOnDom(catmember);
 });

 dinoBtn.addEventListener("click", () => {
  const dinomember = filter(pets, "dino");
 cardsOnDom(dinomember);
 });

//add a new pet form

const form = document.querySelector('form');

const createPet = (e) => {
  e.preventDefault();

  const newPetObj = {
    id: pets.length +1, //name of our array,
    imageUrl: document.querySelector("#imageUrl").value,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value,
  };
    pets.push(newPetObj);
    cardsOnDom(pets);
    form.reset();
  };
  form.addEventListener("submit", createPet);
