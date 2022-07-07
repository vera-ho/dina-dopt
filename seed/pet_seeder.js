const mongoose = require('mongoose');
const Pet = require('../models/Pet');
const db = require('../config/keys.js').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to mongoDB'))
  .catch((err) => console.log(err));

const createPets = () =>
  Pet.create({
    name: 'Allosaurus',
    petType: 'Dinosaur',
    description:
      'Allosaurus is a large bipedal predator. Its skull is light, robust and equipped with dozens of sharp, serrated teeth. It averaged 8.5 meters (28 ft) in length, with the largest specimens estimated as being 10 m (33 ft) long.',
    price: 999,
    image_url:
      'https://dina-dopt-seed.s3.amazonaws.com/pet_images/allosaurus-paleorex-full.jpeg',
  });
Pet.create({
  name: 'Ambulocetus',
  petType: 'Dinosaur',
  description:
    'Ambulocetus is large—about 11 to 12 feet long—and has strong limbs, the animal probably cannot walk well on land. After all, it has squat legs that splay from its body, flipperlike hind feet, and it weighs about 400 pounds (180 kilograms).',
  price: 1500,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/ambulocetus-paleorex-full.jpeg',
});
Pet.create({
  name: 'Archaeopteryx',
  petType: 'Bird',
  description:
    'Similar in size to a Eurasian magpie, with the largest individuals possibly attaining the size of a raven, the largest species of Archaeopteryx could grow to about 0.5 m (1 ft 8 in) in length.',
  price: '70',
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/archaeopteryx-paleorex-full.jpeg',
});
Pet.create({
  name: 'Arctodus',
  petType: 'Bear',
  description:
    'Might be the biggest bear in North America. One-third of them weigh about 900 kg (1 short ton), the largest from Salt Lake Valley, Utah coming in at 957 kg (2,110 lb)',
  price: 1500,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/arctodus-paleorex-full.jpeg',
});
Pet.create({
  name: 'Bambiraptor',
  petType: 'Bird',
  description:
    'These birds cannot fly because their arms are too short to function as wings. They are able to glide on their forelegs',
  price: 50,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/bambiraptor-paleorex-full.jpeg',
});
Pet.create({
  name: 'Barbourofelis',
  petType: 'Cat',
  description:
    "Up to six feet long and 250 pounds. Barbourofelis also has a very small brain compared to its body size; its brain is similar in size to a bobcat's.",
  price: 750,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/Barbourofelis-paleorex-full.jpeg',
});
Pet.create({
  name: 'Brachiosaurus',
  petType: 'Dinosaur',
  description:
    'Brachiosaurus is estimated to have been between 18 and 21 meters (59 and 69 ft) long; weight estimates range from 28.3 to 58 metric tons (31.2 and 64 short tons). It could trim your trees.',
  price: 1900,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/brachiosaurus-paleorex-full.jpeg',
});
Pet.create({
  name: 'Chilotherium',
  petType: 'Rhino',
  description:
    'A large, robust animal reaching 1.5-1.8 m in height and a weight between 1 and 2.5 tons, depending on the species.',
  price: 1800,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/chilotherium-paleorex-full.jpeg',
});
Pet.create({
  name: 'Guanlong',
  petType: 'Dinosaur',
  description:
    "About 3 m (9.8 ft). Guanlong's head crest runs along its snout, from nostrils to eye sockets. It is distinctly delicate (about as thin as a tortilla and only 5-6 cm high), too flimsy for use as a weapon, and brightly coloured. It is Chinese.",
  price: 800,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/guanlong-paleorex-full.jpeg',
});
Pet.create({
  name: 'Hamipterus',
  petType: 'Bird',
  description:
    'The skull of Hamipterus is quite long, narrow, and tapering, with expanded tips to the upper and lower jaws, similar to tongs. The top of the skull has a long, bony crest running from near the tip of the snout to the rear of the skull. Also Chinese.',
  price: 650,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/hamipterus-paleorex-full.jpeg',
});
Pet.create({
  name: 'Microraptor',
  petType: 'Bird',
  description:
    'Adult specimens estimated up to 77 centimetres long (2.53 ft) and with a weight estimated up to 1 kilogram (2.2 lb)',
  price: 100,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/microraptor-paleorex-full.jpeg',
});
Pet.create({
  name: 'Pachycephalosaurus',
  petType: 'Dinosaur',
  description:
    'It is a herbivorous creature which is primarily known from a single skull and a few extremely thick skull roofs, at 22 centimetres (9 inches) thick.',
  price: 350,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/pachyecephalosaurus-paleorex-full.jpeg',
});
Pet.create({
  name: 'Parasaurolophus',
  petType: 'Dinosaur',
  description:
    'Parasaurolophus is a large, bipedal, herbivorous dinosaur which is about 7.5 m (25 ft) long and weighs about 2.6 tons.',
  price: 1250,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/parasaruolophus-paleorex-full.jpeg',
});
Pet.create({
  name: 'Psittacosaurus',
  petType: 'Dinosaur',
  description:
    'The species of Psittacosaurus vary in size and specific features of the skull and skeleton, but share the same overall body shape. The best-known—P. mongoliensis—can reach 2 metres (6.5 ft) in length.',
  price: 1400,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/psittacosaurus-paleorex-full.jpeg',
});
Pet.create({
  name: 'Pyroraptor',
  petType: 'Dinosaur',
  description:
    'The Pyroraptor is a smaller sized Dromaeosaurid, around 8 feet in general, around 2.5 meters long. Has a very narrow, and long skull used for snatching up smaller prey, or biting into flesh in a coordinated attack.',
  price: 1000,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/pyroraptor-paleorex-full.jpeg',
});
Pet.create({
  name: 'Scutellosaurus',
  petType: 'Dinosaur',
  description:
    'Scutellosaurus reaches lengths of 1.5 to 2 metres (about 5 to 6.5 feet). Its skull grows to about 9 cm (about 3.5 inches) in length, and it contains several broad incisors and a row of fluted leaf-shaped cheek teeth for feeding on plants.',
  price: 1400,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/scutellosaurus-paleorex-full.jpeg',
});
Pet.create({
  name: 'Smilodon',
  petType: 'Cat',
  description:
    'Sabertooth Tiger ranges from 360 to 800 pounds. Its front legs are especially powerful and its body is adapted for springing onto prey, but it is not a very fast runner',
  price: 1500,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/smilodon-paleorex-full.jpeg',
});
Pet.create({
  name: 'Stegoceras',
  petType: 'Dinosaur',
  description:
    'Stegoceras is a small, bipedal dinosaur about 2 to 2.5 metres (6.6 to 8.2 ft) long, and weighs around 10 to 40 kilograms (22 to 88 lb). The skull is roughly triangular with a short snout, and has a thick, broad, and relatively smooth dome on the top.',
  price: 1300,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/stegoceras-paleorex-full.jpeg',
});
Pet.create({
  name: 'Stenonychosaurus',
  petType: 'Dinosaur',
  description:
    'Stenonychosaurus is a small dinosaur, up to 0.9 metres (3.0 ft) in height, 3.5 metres (11 ft) in length,[10] and 35 kilograms (77 lb) to 50 kilograms (110 lb) in mass.',
  price: 700,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/stenonychosaurus-paleorex-full.jpeg',
});
Pet.create({
  name: 'Thylacosmilus',
  petType: 'Cat',
  description: 'Sabertoothed and about the size of a jaguar.',
  price: 900,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/thylacosmilus-paleoraptor-full.jpeg',
});
Pet.create({
  name: 'Titanis',
  petType: 'Bird',
  description:
    'Titanis is approximately 1.4 to 1.9 meters (4.6 to 6.2 ft) tall and around 150 kilograms (330 lb) in weight. It has long, agile legs, and three-toed feet with long talons. Cannot fly.',
  price: 300,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/titanis-paleorex-full.jpeg',
});
Pet.create({
  name: 'Triceratops',
  petType: 'Rhino',
  description: 'Three horns. Eats grass.',
  price: 2700,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/triceratops-paleorex-full.jpeg',
});
Pet.create({
  name: 'Tupandactylus',
  petType: 'Bird',
  description:
    'Tupandactylus is notable for its large cranial crest, composed partly of bone and partly of soft tissue, looks like a mohawk. Has a wingspan about 3 to 4 meters (9.8 to 13.1 ft)',
  price: 500,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/tupandactylus-paleorex-full.jpeg',
});
Pet.create({
  name: 'Utahraptor',
  petType: 'Dinosaur',
  description:
    'It is a heavy-built, ground-dwelling, bipedal carnivore. It contains a single species, Utahraptor ostrommaysi, which is one of the largest-known member of the family Dromaeosauridae, measuring 5.5 m (18 ft) and weighing 300 kg (660 lb).',
  price: 1400,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/utahraptor-paleorex-full.jpeg',
});
Pet.create({
  name: 'Velociraptor',
  petType: 'Dinosaur',
  description:
    'Velociraptor is roughly the size of a turkey, considerably smaller than the approximately 2 m (6+1⁄2 ft) tall and 90 kg (200 lb) reptiles seen in the novels and films',
  price: 2500,
  image_url:
    'https://dina-dopt-seed.s3.amazonaws.com/pet_images/velociraptor-paleorex-full.jpeg',
});

createPets().then(() => {
  mongoose.connection.close();
});
