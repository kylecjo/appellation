interface CardBase {
  title: string,
  description: string,
  category: Category,
  points: number
}

enum Category {
  HISTORICAL_FIGURE = 'Historical Figure',
  CELEBRITY = 'Celebrity',
  FICTIONAL_CHARACTER ='Fictional Character',
  ET_CETERA = 'Et Cetera',
}

const Cards: Array<CardBase> = [
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 4,
        description: "The title character from a horror film about an 18th century African prince turned vampire. Locked ina coffin for two centuries by Count Dracula, the box was purchased as part of an estate by two interior decorators who accidentally set him loose in 7Os Los Angeles.",
        title: "Blacula"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A person who wears a full body animal suit, often for conventions, roleplaying, or personal recreation. Their use in sexual activity is a controversial topic in the community. In a recent survey, 37% reported that it was an important part of their interest in the activity.",
        title: "A Furry"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A set of colorful wooden figurines that decrease in size and are placed inside of one another. Associated with a former Communist nation, they are often painted as women, but themes vary from babushkas to Star Wars characters to just Batmans all the way down.",
        title: "A Russian Nesting Doll"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "An American modernist painter whose work was inspired by the New Mexico landscape surrounding her home. She is perhaps most famous for the uncanny resemblance of many of her painted flowers to female genitalia, though she denied any similarity.",
        title: "Georgia OKeeffe"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "A prop comic famous for smashing watermelons with his trademark Sledge-O-Matic. He once sued his brother for touring under the comedians name and walked out of a Marc Maron interview when asked about the use of racist, homophobic, and xenophobic slurs in his act.",
        title: "Gallagher"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "The former Republican Senator whose name, in retribution for comparing homosexuality to bestiality, was redefined in a contest held by sex columnist Dan Savage as the frothy mixture of lube and fecal matter that is sometimes the byproduct of anal sex.",
        title: "Rick Santorum"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A virus that causes hemorrhagic fever, typically acquired by contact with an infected monkey, fruit bat, or person. Its most severe symptoms can include bleeding from the eyes, nose, ears, mouth, and rectum. There is no specific treatment for the disease.",
        title: "Ebola"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "A Japanese competitive eater who shocked the world in 2001 by eating 50 hot dogs and buns (HDB) in 12 minutes at Nathans Hot Dog Eating Contest, doubling the previous record. He once lost a hot dog eating contest (no buns) to a 1089 lb. Kodiak bear (31-50).",
        title: "Kobayashi"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "The deity of Pastafarianism, a parody religion opposing intelligent design. A contemporary version of Russells teapot, it is portrayed as a clump of pasta and meatballs with two eye stalks. It often appears touching Adams finger in Michelangelos Sistine Chapel ceiling painting.",
        title: "Flying Spaghetti Monster"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A Colombian drug lord and King of Cocaine, who at his peak trafficked 15 tons of the drug into the US per year. He was killed by authorities ina firefight in Medellin. According to a recent BBC report, a number of hippos from his menagerie still roam the Colombian countryside.",
        title: "Pablo Escobar"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A dancer and choreographer, who created musicals like All That Jazz and Cabaret. His style included turned-in knees, bowler hats, canes, and copious use of jazz hands—a technique where the performers hands are shown palms open to the audience with fingers splayed wide.",
        title: "Bob Fosse"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "Poet, author, and wife of Ted Hughes, who was known for her confessional style of poetry as well as her novel The Bell Jar. She had a history of depression, leading to her suicide at 30 from carbon monoxide poisoning after sticking her head into an unlit oven.",
        title: "Sylvia Plath"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "Literally goat sucker, this legendary American cryptid is often described as a reptile-like creature that attacks and drinks the blood of sheep and other livestock. Most supposed sightings have been attributed to dogs or wolves afflicted by the skin disease mange.",
        title: "El Chupacabra"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "A German theoretical physicist, creator of the uncertainty principle, and winner of a Nobel Prize in Physics for his development of quantum mechanics. His name was also used as an alias for the meth manufacturer Walter White in the series Breaking Bad.",
        title: "Heisenberg"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "A terrorist math professor, who sent explosive packages through the mail. When Penthouse offered to publish his manifesto, Industrial Society and Its Future, he asked to reserve the right to plant one more bomb, since the magazine was less respectable than others he solicited.",
        title: "The Unabomber (Ted Kaczynski)"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "One of most famous comedians of all time. He created Fat Albert and played Cliff Huxtable on the show bearing his name. He is known for wearing sweaters, eating Puddin Pops, and blaming much of the black incarceration rate on poor parenting.",
        title: "Bill Cosby"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 1,
        description: "A World War II icon, who represented American women working factory jobs. She is most often associated with the We Can Do It! Westinghouse poster, depicting her flexing in a blue work shirt and red kerchief. Her Canadian precursor was Ronnie the Bren Gun Girl.",
        title: "Rosie the Riveter"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "An Arctic whale with a large protruding tusk, which is actually an elongated canine tooth. Its name translates to corpse whale from the Old Norse, due to the similarity of its flesh tone with a drowned sailor. According to the Weebls Stuff song, they are so awesome.",
        title: "A Narwhal"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "An Ancient Greek hero and demigod from Homers Iliad, who defeated the Trojan warrior Hector as revenge for killing his friend and lover Patroclus. He was later killed by an arrow to his heel—the only part of his body that was vulnerable to physical injury.",
        title: "Achilles"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "A distant relative of humans that went extinct approximately 100,000 years ago. Latin for upright man, this hominid walked vertically and likely lived in small hunter-gatherer bands, but lacked the large cranial capacity of anatomically modern humans.",
        title: "Homo Erectus"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "A trope first featured in a 60s sci-fi film, where Nazi scientists remove this organ from the Fuhrers head and hide it in the fictional South American country of Mandoras. The film currently holds an approval rating of O% on the metareview site Rotten Tomatoes.",
        title: "Hitlers Brain"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "A Marxist leader in the Cuban Revolution, whose rebellious image has been commodified on T-shirts worldwide. The image, a high contrast version of the Guerrillero Heroico photograph by Alberto Korda, depicts him with mustache, beret, and implacable expression.",
        title: "Che Guevara"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "Secretary of War, 10th Chief Justice of the Supreme Court, and most obese president in US history. It is unclear whether the story of his getting stuck in a White House bathtub is true, but it was confirmed that on at least one occasion, he caused it to overflow.",
        title: "William Howard Taft"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "From a hypothetical scenario that poses the question of who would win ina fight: a single equine-sized fowl or fivescore fowl-sized equines. The question was made famous in a 2012 Reddit AMA with President Barack Obama. The comment received over 1,000 upvotes.",
        title: "100 Duck-Sized Horses"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A bipedal, feathered carnivore from the Cretaceous Period. It is one of the most well-known dinosaurs due to its prominent role in the 1993 film Jurassic Park, where it was depicted inaccurately as large and featherless, but quite acccurately as a clever girl.",
        title: "A Velociraptor"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "A science fiction author and the founder of Scientology. The religion derives from his self-help program Dianetics, which he modestly described as a milestone for man comparable to his discovery of fire and superior to his invention of the wheel and the arch.",
        title: "L. Ron Hubbard"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "Former KGB officer and current President of Russia. Under his rule, Russia has grown increasingly undemocratic. He cultivates a rugged image in state media, being shown riding half-dressed on horseback and discovering two Ancient Greek urns in the Black Sea.",
        title: "Shirtless Vladimir Putin"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "An abstract expressionist painter known for his drip paintings, which were created by laying the canvas on the floor and pouring paint from above. His painting, No. 5, 1948, was sold for $140M in 2006 by David Geffen—the second most expensive painting ever sold.",
        title: "Jackson Pollock"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A character in medieval folklore that led a group of children away from the town of Hamelin, Germany with a magic flute. In the tale, he was hired to clear the town of a rat infestation, but after receiving no payment, he used the flute to kidnap their children instead.",
        title: "The Pied Piper"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "An actor known for his odd line readings, dancing skills, and creepily handsome face. Despite being an Academy Award winning actor, he is perhaps best known for the Weapon of Choice music video and as Bruce Dickinson, an SNL character who asks for more cowbell.",
        title: "Christopher Walken"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "A Roman emperor known for his cruelty, extravagance, and sexual perversity. He was the first Roman emperor to be assassinated. He is best known for being the title character of a semi-pornographic film starring Malcolm McDowell that depicted his orgies in lengthy detail.",
        title: "Caligula"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A titan from Greek mythology, who was forced to hold up the celestial spheres as punishment for fighting the Olympian gods in the War of the Titans. He is often shown holding a sphere on his shoulders, which is now commonly mistaken to be the Earth.",
        title: "Atlas"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "The subject of a 24-hour media frenzy in 1987 when she fell down a well, setting a precedent for how cable news networks cover small local tragedies. At the time, President Reagan claimed that everybody in America became [her] godmothers and godfathers.",
        title: "Baby Jessica"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "The Editor-in-chief of WikiLeaks and alleged sexual predator. Fearing extradition to Sweden for sexual assault and the US for espionage relating to the Chelsea Manning leaks, he has been living in the Ecuadorian embassy in London since June 2012.",
        title: "Julian Assange"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A canine from a Russian physiologists classical conditioning experiments. By ringing a bell associated with food, he could induce the animal to salivate even with no food present. He extended these experiments to children, who underwent surgeries so he could better collect their saliva.",
        title: "Pavlovs Dog"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "Sometimes known as Blade Runner or the fastest man on no legs, this sprinter became the first double leg amputee to participate in the Olympics. He was subsequently charged with the murder of his girlfriend, but maintains that he confused her for an intruder.",
        title: "Oscar Pistorius"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 4,
        description: "A Cuban boy who was the subject of an international incident when his relatives attempted to keep him in the US against his fathers wishes that he return to Cuba. A famous image from the event shows an armed border agent discovering the boy cowering in a closet.",
        title: "Elian Gonzalez"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "An actor and President of the NRA, who starred in such films as The Ten Commandments, The Omega Man, and Planet of the Apes, where he was known for lines such as Take your stinking paws off me you damn dirty apes! He became a vociferous gun advocate in the 80s.",
        title: "Charlton Heston"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "A World of Warcraft player famous for going afk while his guild planned a complicated raid, then proceeded to run into the encounter screaming his own name and getting his guildmates killed. After being called stupid as hell, he cryptically replied At least | have chicken.",
        title: "Leeroy Jenkins"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A person who attends a party featuring electronic music, dancing, and visual effects. Attendees are often characterized as being under the influence of MDMA, using fluorescent glow sticks, sucking on pacifiers, applying Vicks VapoRub, and wearing phat pants.",
        title: "A Raver"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "A French conservationist and media figure, who devoted his life to the study of the ocean. Following his death, members of his crew alleged that scenes from his films were staged. For instance, pouring bleach into a container to get footage of an octopus scrambling out.",
        title: "Jacques Cousteau"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "A first baseman for the New York Yankees and member of baseballs Hall of Fame. He was the first baseball player to have his uniform number retired. Late in his career, he developed amyotrophic lateral sclerosis (ALS), which is now synonymous with his name.",
        title: "Lou Gehrig"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "The flamboyant weatherman for The Today Show who was known for being obese before having gastric bypass surgery. He was famously thrown to the ground reporting on Hurricane Wilma. He also writes mystery novels about Billy Blessing, a chef and amateur detective.",
        title: "Al Roker"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "The internet moniker of Eduard Khil, a Russian singer who became famous when his 1976 recording of | Am Glad, ‘Cause Im Finally Returning Back Home was uploaded to YouTube. Khil performs the song using nonsense syllable rather than the lyrics.",
        title: "Mr. Trololo"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "The hearing organ of the 4-time heavyweight champion boxer. It was partially torn off during a 1997 bout with Mike Tyson that is now known as The Bite Fight. In Round 3, Tyson bit into its outer rim with his teeth before spitting the piece of flesh onto the canvas.",
        title: "Evander Holyfields ear"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "A terrorist known variously as the principal architect of the 9/11 attacks by the 9/11 Commission and Ron Jeremy in a pillowcase by Horatio Sanz. An engineer by training, he designed a vacuum cleaner while being held at a secret CIA detention facility in Poland.",
        title: "Khalid Sheikh Mohammed"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 1,
        description: "A civil rights activist who refused to give up her seat in the colored section of a bus to a white passenger. Claudette Colvin had done the same nine months earlier, but NAACP leadership did not want a pregnant, unmarried teenager as the face of the movement.",
        title: "Rosa Parks"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "Winterfells stableboy in George R.R. Martins A Song of Ice and Fire and the Game of Thrones TV adaptation. He carries the crippled Bran Stark around in a large basket. Though his real name is Walder, he is only referred to by this name, since it is the only word he ever uses.",
        title: "Hodor"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A category inspired by the political slogans of the Occupy Wall Street movement of 2011 that classify the majority of US citizens who are not members of the economic elite. According to the IRS, all individuals earning less than $343,927 fall into this group.",
        title: "The 99%"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A performer of magic acts that often include demonstrating impossible tricks to a credulous audience. The term was preferred by the character Gob Bluth in the television series Arrested Development, whose performances often went horribly wrong.",
        title: "An Illusionist"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A member of a political movement that believes in the common ownership of the means of production. The concept was first developed by the German political philosopher Karl Marx and became the national ideology of the Soviet Union in the 20th century.",
        title: "A Communist"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 1,
        description: "A comedian once described by Jerry Seinfeld as the Picasso of our profession, who was famous for his open discussion of race. In a wellknown incident, while freebasing cocaine, he poured 151-proof rum over his body, lit a match, and ran down the street on fire.",
        title: "Richard Pryor"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A male vocal performer whose has an abnormally high vocal register, typically achieved by neutering the performer before puberty. There are today some natural performers with hormonal anomalies that give the same effect. The last castration for this occurred in the 1870s.",
        title: "A Castrato"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "The juvenile form of a slow-moving, hook-handed mammal whose fur is home to other creatures, including beetles and cockroaches. Popular on websites devoted to cuteness due to their perpetual smiles and docility. They are especially darling when taking a bath.",
        title: "A Baby Sloth"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "An informant or spy recruited to report on a target government or organization from the inside. They are named after a small, subterranean species of mammal. The term was popularized by John Le Carre in Tinker, Tailor, Soldier, Sey, but was first used by Francis Bacon in 1626.",
        title: "A Mole"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 1,
        description: "The Supreme Being, who monotheists often believe to be omniscient, omnipotent, omnipresent, and responsible for the creation of the universe. In the West, he is often depicted as an old white man witha long gray beard.",
        title: "God"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 1,
        description: "The lead singer-songwriter of the grunge rock band Nirvana, known for songs like Smells Like Teen Spirit and All Apologies. He had a history of mental illness and drug abuse, which led to his death in 1994 by a self-inflicted shotgun wound to the head.",
        title: "Kurt Cobain"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "The artist formerly known as, who released Purple Rain and the Batman soundtrack. In 201], the website Heavy Table published illustrations of his refrigerator, which contained 5 pounds of Dunk-a-roos, 18 varieties of mustard, Braunschweiger, and a quart of Yaks milk.",
        title: "Prince"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "A 79-year-old woman who won a lawsuit against the worlds largest fast-food chain after spilling a scalding drink onto her lap while riding in her grandsons 1989 Ford Probe. It soaked into her sweatpants, causing first-degree burns to her thighs, buttocks, and groin.",
        title: "The lady who spilled coffee on herself at McDonalds"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "Olympic figure skater, professional boxer, sex tape star, land speed record holder for vintage gas coupes, and felon. She became a pariah after conspiring with her husband, Jeff Gillooly, to break competitor Nancy Kerrigans leg by whacking it with a telescopic baton.",
        title: "Tonya Harding"
    },
    {
        category: Category.ET_CETERA,
        points: 1,
        description: "A term referencing facial hair and used for a person who conceals someone elses sexual orientation, either knowingly or unknowingly. This concept was an element in the 1984 film Broadway Danny Rose by Woody Allen and remains a popular comedic subject.",
        title: "A Beard"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 1,
        description: "A wartime diarist and Holocaust victim. After visiting the famous site where her family hid from the Nazis for nearly two years, the pop star Justin Bieber wrote, Truly inspiring to be able to come here. Anne was a great girl. Hopefully she would have been a belieber.",
        title: "Anne Frank"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "An IBM computer that defeated chess champion Garry Kasparov 2-1, with 3 draws. Kasparov demanded a rematch after accusing IBM of cheating. They declined and decommissioned it following the match. Due to its small sample size, it does not have an ELO rating.",
        title: "Deep Blue"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "A character from a fairy tale collected by the Brothers Grimm, who is imprisoned in a tower by an evil witch. She is widely associated with the command, said by those who want to visit her in her tower, Let down your hair, so that | may climb the golden stair.",
        title: "Rapunzel"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 4,
        description: "The minor character on the show Seinfeld. She is a beautiful women who Jerry cannot stay attracted to because of her large extremities. The episodes writer, David Mandel, created the character in response to his wifes own self-consciousness about this condition.",
        title: "Man Hands"
    },
    {
        category: Category.ET_CETERA,
        points: 1,
        description: "The alter ego of comedian Paul Reubens, who wears a high-cut grey suit, red bow tie, and heavy makeup. His character is often associated with a spastic dance performed to the song Tequila, which he used to win the respect of the Satans Helpers biker gang.",
        title: "Pee-wee Herman"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "The hero and title character of an 80s arcade game, where he navigates mazes and eats pellets, power pellets, and fruit while avoiding ghosts. One of gamings earliest breakout stars, he was soon usurped by his female counterpart in a far superior sequel.",
        title: "Pac-Man"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 1,
        description: "A 19th century actor and Confederate sympathizer, who derailed his and nearly that of his brother Edwins acting careers when he assassinated Abraham Lincoln. The original plan was to kidnap Lincoln and exchange him for a number of Confederate POWs.",
        title: "John Wilkes Booth"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "A race of short, orange-skinned folks from Willy Wonka & the Chocolate Factory, who work in the factory and sing moralizing songs. In an early version of Roald Dahls novel, they were depicted as African pygmies but were later rewritten to be white and blonde.",
        title: "An Oompa Loompa"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "The King of the Monsters, who first appeared in a series of Japanese films made in response to the atomic bombings of Hiroshima and Nagasaki. The monster typically has a reptilian look, walks on two legs, has a long tail, and has nuclear breath.",
        title: "Godzilla"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A childrens book character that takes readers through an insects transformation from larva to butterfly. The book received worldwide acclaim, selling over 30M copies. The competitive eater Kobayashi frequently gives this book out as a holiday gift.",
        title: "The Very Hungry Caterpillar"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "The title creature of a 2009 horror film where a sadistic German doctor forms one of these by sewing three individuals together, mouth to anus, forcing them to share a single digestive system. The films director explained that his work is partially a reflection on fascism.",
        title: "A Human Centipede"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 1,
        description: "The 16th President of the US, who abolished slavery and led the North to victory in the Civil War. He is often depicted wearing a top hat with his signature chin curtain beard. He was assassinated by the actor John Wilkes Booth while attending a play at Fords Theatre.",
        title: "Abraham Lincoln"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "The egg-laying dinosaur sidekick of Mario and Luigi. The name refers both to individuals and the entire species. They have long tongues that they use to eat things like Goombas, apples, and other objects, which can be excreted as eggs or expectorated as fireballs.",
        title: "Yoshi"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 1,
        description: "An American aviatrix, who was the first woman to fly solo across the Atlantic. She vanished mysteriously in 1937 while attempting to circumnavigate the globe. Many conspiracy theories emerged, from her being captured by the Japanese to her eloping with her navigator.",
        title: "Amelia Earhart"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "A bespectacled, know-it-all bird who famously answered the question How many licks does it take to get to the Tootsie Roll center of a Tootsie Pop? by licking the lollipop 3 times before biting into it with his sharp beak, then declaring that it takes only 3 licks.",
        title: "Mr. Owl"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "A psychiatrist, serial killer, cannibal, and antihero from The Silence of the Lambs novel and film. He was famously portrayed by Anthony Hopkins, who explains to Clarice that he once ate a census takers liver with fava beans and a nice Chianti. [slurping sounds]",
        title: "Hannibal Lector"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 1,
        description: "A Dutch post-Impressionist painter known for his depictions of wheat fields, sunflowers, and starry nights. He struggled with mental illness, once slicing off his left ear with a razor and delivering it to a brothel as amemento for his friend Paul Gauguin.",
        title: "Vincent Van Gogh"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A person who enforces language rules to an unusually high degree. According to knowyourmeme.com, one of the earliest uses was in 1995, when a user on the newsgroup alt.gothic called someone out for correcting the use of the term thusly for thus.",
        title: "A Grammar Nazi"
    },
    {
        category: Category.ET_CETERA,
        points: 1,
        description: "A mythological hybrid whose top half is human and bottom half is horse. The Greeks considered them savage, drunken beings. The myth persists today, including a famous tattoo of half Patrick Swayze, half horse and SNLs depiction of one of these on a failed job interview.",
        title: "A Centaur"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 1,
        description: "A surgeon credited with inventing a maneuver that prevents suffocation when a person is choking by jamming your fist into their abdomen. He also advocated for the technique be used to treat drowning (dont do it) and that malaria could treat cancer, Lyme disease, and HIV.",
        title: "Dr. Henry Heimlich"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "The title character of a Steven Soderbergh film about a male stripper who performs at Xquisite Strip Club. Played by Channing Tatum, the character is loosely based on Tatums real-life experience as a young stripper in Tampa, Florida.",
        title: "Magic Mike"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A large black bird and the subject of a poem by Edgar Allan Poe. In it, the bird visits a man grieving the loss of his love, Lenore. Sitting above him on a bust of the goddess Athena, the bird repeats the words nevermore to the mans inquiries, slowly driving him mad.",
        title: "The Raven"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "A would-be suicide bomber who tried and failed to blow up a plane with his casual footwear. He was caught trying to use a match to light a fuse mid-flight, explosive sneaker in his lap. The incident prompted the TSA to institute footwear screening at airports.",
        title: "The Shoe Bomber (Richard Reid)"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "An actor who appeared in an Apple ad that was remixed on YouTube to make his soeech sound slow and slurred (‘What do you think the greatest gift of the holidays is? Internet?). He has also appeared in The Fly, Jurassic Park, and many other films.",
        title: "Drunk Jeff Goldblum"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A legendary cryptid, who supposedly lives in a deep freshwater lake in the Scottish Highlands. Believers speculate that the creature is a marine dinosaur that somehow survived to modern day. The scientific community continues to regard the creature as a hoax.",
        title: "The Loch Ness Monster"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "A character from the Ghostbusters franchise, who appears as a transparent green blob composed of pure Ectoplasm. Ravenously consuming all food in sight, writer and actor Dan Aykroyd allegedly referred to him as The Ghost of John Belushi.",
        title: "Slimer"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 1,
        description: "The ex-wife of Prince Charles and mother of William and Harry. She died tragically in a Paris car crash, which was found to be the result of grossly negligent driving and to the presence of paparazzi. Her funeral was one of the most viewed events in television history.",
        title: "Princess Di"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A storytelling toy bear from the 80s, who had an audio cassette deck in his body. Stories such as The Wooly Whats-It: Learning Can Be Fun! and Tweeg and the Bounders: You Have to Earn the Things Worth Having tended to focus on promoting positive behavior.",
        title: "Teddy Ruxpin"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The title infant from a 7Os horror film by Roman Polanski. Its mother, played by Mia Farrow, fears that her husband made a Satanic pact with their neighbors in order for success in his acting career. At the conclusion, it is revealed that the child is actually the spawn of Satan.",
        title: "Rosemarys Baby"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A manifestation of the title character in J.R.R. Tolkiens fantasy series The Lord of the Rings. Frodo describes it as rimmed with fire, but was itself glazed, yellow as a cats, watchful and intent, and the black slit of its pupil opened ona pit, a window into nothing.",
        title: "The Eye of Sauron"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 1,
        description: "The founder of Kentucky Fried Chicken, whose likeness is also used on their logo. He is easily identified by his white hair, goatee, black-rimmed glasses, white suit, and string tie. His honorific title refers to a Kentucky tradition rather than a military rank.",
        title: "Colonel Sanders"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "The woman who gave birth to you and/or raised you. The word above or the actual name of your real-life caregiver are both valid.",
        title: "Your Mom"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "A person with a genetic disease that leaves them vulnerable to infection and forced to live in a completely sterile environment. One was famously portrayed on Seinfeld, where he fought with George over a Trivial Pursuit card that read Moops instead of Moors.",
        title: "Bubble Boy"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 1,
        description: "Former professional football player, actor, and Isotoner spokesman. He was found not guilty of murder in one of the most public trials of the 20th century. He wrote a book about the case called If | Did It and is currently incarcerated for the theft of his own sports memorabilia.",
        title: "O.J. Simpson"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A cook and Muppet that hails from Northern Europe. He wears a toque blanche and speaks in sing-songy gibberish. Humans from his country of origin often find the character offensive and claim that his accent totally sounds more like Norwegian anyway.",
        title: "The Swedish Chef"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A legendary ghost who is said to be conjured in a mirror by saying her name multiple times. Often attempted by young girls, the ghost is sometimes said to reveal the future and other times said to attempt to scratch the persons eyes out.",
        title: "Bloody Mary"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A young, red-headed thief who dresses in striped clothing and steals items from the McDonalds restaurant chain. Originally an old man with a long nose inexplicably called the Lone Jogger, he has since ceased being a villain in the McDonaldland universe.",
        title: "The Hamburglar"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A person infected with Hansens Disease, which sometimes results in the inability to feel pain and consequent loss of body parts. To prevent the spread of the disease, they were historically separated into isolated colonies—a practice still alive in India and China.",
        title: "A Leper"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A member of a fictional R&B group composed of anthropomorphic dried grapes from the West Coast. They came to prominence in claymation form, singing a cover of | Heard It Through the Grapevine in an advertisement. They were also popular as plastic toys.",
        title: "A California Raisin"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 1,
        description: "A subversive Jewish rabbi, who Christians believe to be the Son of God and Messiah of the Old Testament. He allegedly performed miracles, was crucified by the Romans, and rose from the dead. A middle initial is used in various oaths, but its origin is unclear.",
        title: "Jesus H. Christ"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A villain from the Star Trek franchise, who once controlled a portion of the earth during the Eugenics Wars of the 90s. Ricardo Montalban played the genetically engineered superhuman, delivering lines such as Revenge is a dish that is best served cold.",
        title: "Khan!"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The title character of a childrens game that teaches kids to eat marbles. Each of the four players simultaneously mash a plastic lever to get their character—a colorful version of the third largest land mammal—to consume as many of these inedible objects as possible.",
        title: "A Hungry Hungry Hippo"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A gigantic mythical sea monster that first appeared in Norse mythology. Because of its size, it was thought to have been inspired by giant squid sightings. In contemporary media, is often seen being released or unleashed upon an unsuspecting hero.",
        title: "The Kraken"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "The title of German leader Wilhelm Il, who ruled until the end of World War |. He was depicted in propaganda with an exaggerated handlebar mustache and Pickelhaube, the spiked helmet of the Prussian army. He was also once accused of stealing our word for twenty.",
        title: "The Kaiser"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The pretty racist mascot of a line of pancake mixes and syrups by the Quaker Oats Company. Her character was derived from a minstrel shows mammy-like figure. Like Uncle Ben, she represents an idealized view of domestic servitude in southern life.",
        title: "Aunt Jemima"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "An employee of a US Department of Homeland Security branch. Many of its employees are posted in airports to screen passengers and their property, including pat-downs and viewing x-rays. Their average salary is $25K-$38K per year, excluding swag.",
        title: "A TSA Agent"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A member of a robotic civilization in the Battlestar Galactica franchise. They were created somewhat by accident on Caprica and are unique in that they experience many common human emotions and are often not fully aware of their status as a robotic lifeform.",
        title: "A Cylon"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "The moniker of Umar Farouk Abdulmutallab, a would-be terrorist who attempted to blow up a passenger plane with explosives sewn into his unmentionables. His plan failed when the explosives were soiled due to his wearing the same pants for two weeks straight.",
        title: "The Underwear Bomber"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A monstrous deity created by H.P. Lovecraft. It is hundreds of meters tall and has the the arms and legs of aman, claws, the head of a giant octopus, and bat wings. Its mythos gained increased popularity from a series of allusions to it in the HBO series True Detective.",
        title: "Cthulhu"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "An elderly humanoid rat who was the sensei of the Teenage Mutant Ninja Turtles. In the 80s cartoon series, he was mutated from the great Samurai warrior, Hamato Yoshi. In other versions, however, this character was the pet rodent of Hamato Yoshi.",
        title: "Splinter"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A character from the Street Fighter video game series, who relies primarily on powerful kicks delivered with the aid of her remarkably muscular thighs. Her most famous move is the Lightning Kick, with the Spinning Bird Kick a close second. Her blood type is A.",
        title: "Chun-Li"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "Any non-magical character in the Harry Potter franchise. Their inability to perform magic was likely a hereditary trait and was used as a justification for persecution by an extremist group of magical persons, Death Eaters, who believed their own bloodlines should remain pure.",
        title: "A Muggle"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "An elephant from the childrens book by Jean de Brunhoff, who critics argue offers a justification for colonialism. In the book, he leaves the jungle, visits a city, returns ina green suit, introduces French civilization to his fellow elephants, and is crowned king.",
        title: "Babar"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A shapeshifting robot from Terminator 2. Made of liquid metal, Skynet sent it into the past to kill Edward Furlong, who was protected by Arnold Schwarzeneggers loveable, technologically inferior, T-800. Billy Idol was slated to play the character before a motorcycle accident.",
        title: "The T-1000"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A farm animal that suffers from a genetic disorder that causes its muscles to freeze for approximately 10 seconds when panicked. The condition is formally knows as myotonia congenita, which Buzzfeed once described as easily the cutest neurological disorder.",
        title: "A Fainting Goat"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A vampire mascot from the General Mills Corporations series of monster-based breakfast cereals. Like his colleagues Franken-Berry, Boo-Berry, Fruit Brute, and Yummy Mummy, his origin is a mystery. His tagline, Il vant to eat your cereal! seems a little on the nose.",
        title: "Count Chocula"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "An actor famous for his character Pee-wee Herman. He was arrested for masturbating in a Sarasota, FL adult theater in 1991. When confronted by police, he allegedly said Im Pee-wee Herman and suggested doing a local childrens benefit to take care of this.",
        title: "Paul Reubens"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "The subject of a famous internet photo showing a feline peeking out of a hole and, allegedly, watching you masturbate. In 2010, a Redditor indicated that the hole was actually in a wall, claiming This changes everything. The feline is said to have a rival in the basement.",
        title: "Ceiling Cat"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A 40-foot wooden effigy that is set on fire during a weeklong event in Nevada's Black Rock Desert. The organizers deny that it has any connection to similar wicker effigies that were built by ancient Druids for pagan Celtic rituals that some speculate involved human sacrifice.",
        title: "Burning Man"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A member of a Nepalese ethnic group that resides in the Himalayan mountain range. The term often refers to guides who assist climbers. Among the most famous of these in history was Tenzing Norgay, who reached the summit of Mount Everest with Edmund Hillary in 1953.",
        title: "A Sherpa"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A hero from the 90s childrens show that featured a team of teenagers that fought off aliens by transforming into superheroes and piloting robots called Zords. The show was often accused of racism for aligning each characters uniform color with the actors ethnicity.",
        title: "The Yellow Power Ranger"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A fuzzy interactive toy that became popular in the late 90s. Vaguely resembling an owl, it soeaks a unique language, learning English over time through interacting with its owner. When held upside down it says things like me scared and begins crying.",
        title: "A Furby"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A band of warm weather resulting in above-average temperatures for most of North America and wetter seasons for most of South America. This weather system inspired a Chris Farley SNL character that depicted the tropical storm as a boastful professional wrestler.",
        title: "El Nino"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "The percussionist for the popular 80s hair metal band known for hits like Love Bites and Pour Some Sugar on Me. He is best known for continuing to record and perform using a specially designed kit following the amputation of a limb after a drag racing accident.",
        title: "The one-armed drummer from Def Leppard"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A racial epithet used against members of a subjugated group, particularly African Americans, who display excessive deference to authority. The term is derived from the eponymous character in the 1852 novel by Harriet Beecher Stowe.",
        title: "Uncle Tom"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "A shock site linking unsuspecting victims to the file hello.jog, an image of a naked man stretching his anus several inches in diameter. The mans wedding band is clearly visible on his left ring finger. The site used the rare top-level domain for the Christmas Islands, .cx.",
        title: "Goatse"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A person who loses blood quickly because of a lower than average clotting rate, otherwise known as a hemophiliac. This term was made famous in the 1998 comedy Theres Something About Mary, where Ben Stillers character Ted damages his genitals with a zipper.",
        title: "A Bleeder"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 1,
        description: "The 1st President of the US. John Adams claimed that his famed toothlessness was the result of cracking Brazil nuts. His false teeth were not made of wood, but hippopotamus and elephant ivory. He had a previous pair most likely made from, no joke, slave teeth.",
        title: "George Washington"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The combined identity of Paul Fleming and Philip Chiang, the two founders of the eponymous Asian Fusion restaurant founded in Scottsdale, Arizona in 1993. They operate over 200 restaurants across the US, far more than its equally middlebrow competitor, Benihana.",
        title: "P.F. Chang"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "An automated vacuum cleaner marketed as a convenient way to clean ones home. Its sensors allow it to navigate each room, cleaning under furniture and in often-ignored corners. Cats have been known to ride it. It definitely does not record your daily movements.",
        title: "A Roomba"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "An Irish performer who came to prominence during the intermission of the 1994 Eurovision Song Contest. His show, Riverdance, melded tapping with Irish folk traditions, following his quest to defeat the dark lord Don Dorcha from destroying Planet Ireland.",
        title: "The Lord of the Dance"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A legendary Ancient Greek king who was prophesied to murder his father and marry his mother. The psychologist Sigmund Freud named his complex related to a persons unconscious desire to sexually possess their opposite sex parent after this person.",
        title: "Oedipus"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "An adolescent lycanthrope from an 80s film and recent TV series. Originally played by Michael J. Fox, he uses his powers to gain popularity at his high school and become their star basketball player, leading the Beavers to a state championship title.",
        title: "Teen Wolf"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "A luckdragon from the novel and film The Neverending Story, who was ridden by Bastian and Atreyu. He is depicted as a creepy, but sort of adorable, dragon with mostly dog-like features: paws, shaggy hair, and big floppy ears. He can fly even though he doesnt have wings.",
        title: "Falkor"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "A celebrity chef and former Food Network personality, who has received criticism for the excessive use of fat, salt, and sugar in her recipes. She was sued in 2013 for racial and sexual discrimination, such as using derogatory remarks toward African Americans.",
        title: "Paula Deen"
    },
    {
        category: Category.ET_CETERA,
        points: 1,
        description: "A member of an extinct species closely related to humans. Research suggests that interbreeding between the two groups occurred, with modern non-African humans possessing 1-4% of their genome. They made tools, built dwellings, and had a form of language.",
        title: "A Neanderthal"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A wooden object used by the Greeks to end the Trojan War. When the Trojans took it inside the city walls as a trophy, the soldiers hiding inside opened the city gates. This myth led to the use of the term for a type of malware that is doubtlessly on your parents computer right now.",
        title: "The Trojan Horse"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "In 2009, this woman gave birth toa living set of octuplets. Critics noted that she used in vitro fertilization despite having 6 children and being on public assistance. In order to support her family, in 2012, she appeared in the adult film Octomom Home Alone.",
        title: "Octomom (Nadya Suleman)"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "The wealthiest artist in the world, who is best known for selling a huge dead tiger shark preserved in formaldehyde for more than $8M. He once argued that the 9/11 terrorists need congratulating for achieving something which nobody would have thought possible.",
        title: "Damien Hirst"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A stereotype often associated with college-aged men. The website Code Switch defines them using four characteristics: jockish, dudely, stoner-ish, and preppy. These individuals are also often white, heterosexual, come from privilege, and espouse sexist attitudes.",
        title: "A Bro"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A person who compulsively collects things or refuses to discard possessions, resulting in an unmanageable amount of crap in their home. They are the subject of a popular reality TV show where professionals exploit the persons disorder for entertainment.",
        title: "A Hoarder"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "The informant who leaked information about Richard Nixons involvement in the Watergate scandal. Decades later, former FBI Director Mark Felt revealed himself as the informant. A Washington Post editor chose the alias as a reference to pornographic film from the 7Os.",
        title: "Deep Throat"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "A legendary actor, who portrayed classic characters such as Captain Kirk, TJ Hooker, the guy who saw a plane gremlin on The Twilight Zone, and the Priceline Negotiator. He also has a musical career that began with a sooken word performance of Elton Johns Rocket Man.",
        title: "William Shatner"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "The logo of an infant-focused food company. Based on the face of a person who grew up to be mystery novelist, Ann Turner Cook, the logo was Originally intended to bea sketch outline for a future painting, but has remained the companys official logo for decades.",
        title: "The Gerber Baby"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "A character from a nursery rhyme who falls off a wall and cant be put back together again. Typically portrayed as a humanoid egg, scholars have speculated that he represents Richard Ill, the humpback king who was defeated at Bosworth Field by Henry VII.",
        title: "Humpty Dumpty"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "The author of a controversial memoir about her attempt to use Confucian parenting techniques. While she describes some success with strict parenting, she has since argued that her book is about the softening of her style after her daughter rebelled at age 13.",
        title: "The Tiger Mom"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "The mascot of a company famous for their pre-packaged biscuit ingredients. He has been a staple in their advertising for decades, which usually features him being poked in the belly by a finger and responding by rubbing his stomach and giggling.",
        title: "Poppin Fresh, the Pillsoury Doughboy"
    },
    {
        category: Category.ET_CETERA,
        points: 1,
        description: "An unmanned aerial vehicle used in military operations that are too dangerous for manned aircraft. Their use is controversial, with critics pointing at their indiscriminant use, such as a 2008 airstrike against a wedding party that killed 47 Afghan civilians.",
        title: "A Drone"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "An orca at SeaWorld who raised questions about animal captivity by killing 3 people. In 2010, Mdtley Crue founder Tommy Lee wrote to SeaWorlds president stating that he knew humans still get into the pool and masturbate him with a cows vagina filled with hot water.",
        title: "Blackfish"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A fictional supervillain from the Teenage Mutant Ninja Turtles franchise. He is allied with Shredder, who built a mechanical body for him when, following his exile from Dimension X, he was transformed into a brain-like creature with a creaky voice.",
        title: "Krang"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "A 17th century German astronomer known for his work on planetary motion. In addition to being the namesake of a NASA space observatory, many earthbound institutions are named after him, mostly recently a blended learning university in Kigali, Rwanda.",
        title: "Johannes Kepler"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "The debonair, bipedal ungulate and mascot for an R.J. Reynolds brand of cigarettes. When internal documents demonstrated that the company was targeting children as future smokers, the character was retired and replaced with a more traditional quadruped in 1997.",
        title: "Joe Camel"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "The nom de sext of a former Congressman who resigned after he sent explicit photos of himself via Twitter. Despite losing his job over the photos, he was involved ina subsequent scandal after it was revealed that he continued sending explicit photos under this alias.",
        title: "Carlos Danger (Anthony Weiner)"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "The former Supreme Leader of the Democratic Peoples Republic of Korea and author of On the Art of the Cinema. His family is at the center of an elaborate personality cult in the so called Hermit Kingdom. A famous tumblr collected photos of him looking at things.",
        title: "Kim Jong-il"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "The title character from the 1993 film about a young boys attempts to rescue a killer whale from its cruel life as an amusement park attraction. At the films conclusion, he flees a whaling ship by jumping over a rock embankment and returns to his family.",
        title: "Free Willy"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 1,
        description: "A Revolutionary War hero and president of the Second Continental Congress. He was the first member to sign the Declaration of Independence, and his signature was so prominent that his name is now synonymous with signing ones name on a document.",
        title: "John Hancock"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "The good-natured host of a childrens show that begins with him singing, Its a wonderful day in the neighborhood, putting ona sweater and sneakers, and asking the viewers to be his neighbor. Each episode include a trip to the Neighborhood of Make-Believe.",
        title: "Mr. Rogers"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "An actor and martial artist who played the lead role in the show Kung Fu and Bill in the film Kill Bill. In 2009, he was found dead in the closet of his Bangkok hotel room. Evidence suggests that his death was the result of autoerotic asphyxiation.",
        title: "David Carradine"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "The 47th Vice President of the US. His blue collar image has led toa series of humorous articles in The Onion, such as Joe Biden Shows Up To Inauguration With Ponytail and Obama Issues Presidential Pardon To Get Biden Out Of Jail For Third Time This Year.",
        title: "Joe Biden"
    },
    {
        category: Category.ET_CETERA,
        points: 1,
        description: "The stage of development between embryo and birth. It is sometimes categorized by the presence of all major body organs (though not necessarily functioning), typically around the 11th week of gestation. In humans, it is approximately 1.2 in length from crown to rump.",
        title: "A Fetus"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "The host of the quiz show Jeopardy! for thirty years and counting. He has appeared self-deprecatingly as a version of himself in films and TV shows, including Seinfeld and Short Cuts. For the purposes of this card, he still has really great facial hair on his upper lip.",
        title: "Alex Trebek with a mustache"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "The title character in a trilogy of fish-out-of-water films about an Australian bushman struggling to find his way in big city America. Played by Paul Hogan, he famously threatens muggers, saying Thats not a knife. [draws his bowie knife] Thats a knife.",
        title: "Crocodile Dundee"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "A performer, civil rights activist, and the first black woman to star ina major film. She only performed for integrated audiences, though many of her acts, such as the exotic Danse Sauvage wearing a banana skirt, strike a contemporary viewer as still pretty messed up racially.",
        title: "Josephine Baker"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "The host of the quiz show Jeopardy! for thirty years and counting. He began hosting game shows in high school. For purposes of this card, he shaved the iconic facial hair on his upper lip in 2001. In 2008 he wore fake facial hair on his upper lip for April Fools Day.",
        title: "Alex Trebek without a mustache"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "The 6 foot tall, cherry-flavored mascot for a powdery drink mix that is combined with water and sugar. He is famous for making a dramatic entrance when children express thirst by smashing through a brick wall and yelling his catchphrase Oh yeah!",
        title: "The Kool-Aid Man"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "A cyclist who won the Tour de France for 7 consecutive years after losing a testicle to cancer. He founded Livestrong, which began the trend of people wearing colorful rubber bracelets. He later admitted to taking performance-enhancing drugs during all of his Tour wins.",
        title: "Lance Armstrong"
    },
    {
        category: Category.ET_CETERA,
        points: 1,
        description: "A person who has never engaged in sexual intercourse, either voluntarily or involuntarily. Once used only to refer to young women, it now describes any person who has not participated in that activity and can even be used metaphorically, as ina nonalcoholic drink.",
        title: "A Virgin"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "The victim of severe postpartum depression who drowned her five children in a bathtub. While initially sentenced to life in prison, she was later found not guilty by reason of insanity. Her case sparked an ongoing debate about mental health treatment in the US.",
        title: "Andrea Yates"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "An American folk hero and Steel Drivin Man. In the myth, he competed against a steam powered hammer to determine who could drill into rock the fastest. He wins the competition, but his heart gives out and he dies before being able to fully celebrate his victory.",
        title: "John Henry"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "A porcine Muppet and spouse of Kermit the Frog, who she frequently pounces on. A notorious diva and singer, she is modeled on the singer and actress Peggy Lee. Throughout her career, she has been used to symbolize the modern American woman.",
        title: "Miss Piggy"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "The facial hair of this American actor and 80s style icon. He is most famous for his title role in Magnum, P.|. as well as appearances in films such as Three Men and a Baby and Mr. Baseball. In addition to his upper lio decoration, his signature look included colorful Hawaiian shirts.",
        title: "Tom Sellecks mustache"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "A critic who popularized film review with his thumbs up, thumbs down system. Late in life, his lower jaw was removed to combat cancer of the salivary glands. He was unable to speak or eat normally, yet continued to write and review films both online and in print.",
        title: "Roger Ebert"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "The disgraced former Congressman, who sent explicit photographs of himself via Twitter. After one leaked, he was forced to resign. He was involved in a subsequent scandal after it was revealed that he continued sending photos under the alias Carlos Danger.",
        title: "Anthony Weiner"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A person who stands uncomfortably near a person while speaking. This term was first coined in The Raincoats, an episode of Seinfeld. In it, Elaines new boyfriend Aaron is described as being one of these, disrupting the personal space of anyone he speaks to.",
        title: "A Close Talker"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "An actor best known for the game based on six degrees of separation that bears his name, e.g. Andre the Giant and Christopher Guest appeared in The Princess Bride; Christopher Guest and this actor appeared in A Few Good Men; thus Andre the Giants number is 2).",
        title: "Kevin Bacon"
    },
    {
        category: Category.ET_CETERA,
        points: 1,
        description: "A rodent used in academic or commercial research, often as a precursor to human trials in the early stages of a project. They are regularly decapitated with scissors. A common trope of early psychology research was to place one ina maze to find a wedge of cheese.",
        title: "A Lab Rat"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "An avant-garde artist maligned for allegedly breaking up the Beatles. Despite her inability to carry a tune, many of her songs have topped the dance charts, mostly as remixes. She and John Lennon used their honeymoon to stage bed-ins to protest the Vietnam War.",
        title: "Yoko Ono"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A small rodent often kept as a pet. Numerous urban legends exist involving this animal and various celebrity anuses.",
        title: "A Gerbil"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "A man-eating great white that terrorizes the town of Amity Island ina film by Steven Spielberg. Not seen until well into the film, it is so large that Roy Scheider's character suggests the crew is gonna need a bigger boat. It was nicknamed Bruce after Spielbergs lawyer.",
        title: "The Shark from Jaws"
    },
    {
        category: Category.ET_CETERA,
        points: 1,
        description: "Meaning lizard king, this species of bipedal carnivore lived in western North America during the Cretaceous Period. They are the most widely known dinosaur in the world due to their adorably tiny arms and footsteps that vibrate cups of water.",
        title: "A T. Rex"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "A character from the board game Clue (aka Cluedo). He was originally named Yellow, but had his name changed to this condiment instead. In Hasbros latest update, he is now a former football player. In the classic film adaptation, he was played by Martin Mull.",
        title: "Colonel Mustard"
    },
    {
        category: Category.ET_CETERA,
        points: 1,
        description: "A creature used by adults to scare children into good behavior. Its description and motivations vary across cultures, but often include kidnapping misbehaving children. Variants of this monster include Latin Americas Sack Man and Egypts Man With Burnt Leg.",
        title: "The Boogeyman"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "The protagonist of a Washington Irving short story, who drinks moonshine, goes bowling with ghostly Dutchmen, falls asleep, and awakens decades into the future with a long, scraggly beard. He returns to his village and finds that his wife and friends have all died.",
        title: "Rip Van Winkle"
    },
    {
        category: Category.ET_CETERA,
        points: 1,
        description: "A person who engages in recreational intercourse outside of a monogamous relationship. Despite public declarations otherwise, in a recent study by the Kinsey Institute, these individuals make up 2-4% of married couples in North America—over 4 million people in total.",
        title: "A Swinger"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A common trope, where the physical duplicate of a character appears, but with inverted values. They are often depicted with subtle alterations, such as Spocks ruthless doppelganger having a goatee. The words above or your name prefixed by the second word are both valid.",
        title: "Your Evil Twin"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "The twins, rowers, and entrepreneurs best known for suing Facebook founder Mark Zuckerberg for $140M, claiming he stole their idea for the social networking site. They are now venture capitalists, and as of 2014, own nearly 1% of all Bitcoin in existence.",
        title: "The Winklevii"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "Known as The Dog Whisperer, he is a self-taught trainer famous for his TV show, where he goes into homes to deal with especially difficult animals. His methods rely on outdated beliefs about canine social structures, yet his advice is used by dog owners worldwide.",
        title: "Cesar Millan"
    },
    {
        category: Category.ET_CETERA,
        points: 1,
        description: "A device for cracking hard shells. They can be highly decorative, with individual wooden bodies depicting soldiers or royalty. In these versions, the shell is inserted into the figures mouth and a lever is pressed down, which crushes the shell and reveals the sweet, sweet meat inside.",
        title: "A Nutcracker"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "A human who transforms into a hirsute, bloodthirsty creature. Known as lycanthropy, this change is often triggered by a full moon. Suspected lycanthropes were persecuted in early modern Europe, and are now a staple figure in pop culture and party games.",
        title: "A Werewolf"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "One of the five teenagers who possess rings that allows them to control Earth, Fire, Wind, Water, or Heart. When their powers combine, they summon the environmental superhero Captain Planet to help fight villains such as Hoggish Greedly and Verminous Skumm.",
        title: "A Planeteer"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "A musician whose decadent, drug-fueled lifestyle is frequently parodied, notably in several True Hollywood Stories on The Chappelle Show. The popularity of depictions of his cocaine habits and use of the word bitch contributed to Chappelle leaving the show.",
        title: "Rick James"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "A painter and TV host, who starred in PBSs The Joy of Painting. He taught viewers how to paint fluffy white clouds and happy little trees using wet on wet painting. He supposedly hated his white-guy afro and kept it only for marketing purposes.",
        title: "Bob Ross"
    },
    {
        category: Category.ET_CETERA,
        points: 1,
        description: "The person reading this card. The word above or your actual name are both valid.",
        title: "You"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "The stage name of Jerome Silberman, who is best known for his collaboration with Mel Brooks in Blazing Saddles, The Producers, and other films. An image of him in Willy Wonka & the Chocolate Factory is used in the popular Condescending Wonka caption online.",
        title: "Gene Wilder"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "The self-styled Painter of Light™, whose paintings often featured cottages with glowing lights in overly saturated pastoral landscapes. He died, according to his mistress, very happy from acute intoxication of alcohol and Valium.",
        title: "Thomas Kinkade"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "A child beauty pageant contestant and star of a TLC reality show. She is known for her southern drawl, love of Go Go Juice (a blend of Mountain Dew and Red Bull), and open-minded attitude, having once said of her uncle, Aint nothing wrong with bein a little gay.",
        title: "Honey Boo Boo"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "Popularly, someone who believes in nothing. As a philosophical concept, a person who believes that major aspects of life or human inquiry are either not valid or do not exist. They are often portrayed as effete intellectuals, such as the wimpy German thugs in The Big Lebowski.",
        title: "A Nihilist"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A stock, semi-anonymous character who is introduced only to die soon after. The term derives from the costumes worn by extras in the original Star Trek television series who would accompany the lead actors to a hostile situation and be killed in order to heighten tension.",
        title: "A Redshirt"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "One of the the three parts of Sigmund Freuds model of the psyche that constitute mental life. This part contains a persons instincts and is the source of our impulse for sex and aggression. In adult life it becomes the most dark, inaccessible aspect of personality.",
        title: "The Id"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "A 19th century railroad worker and frequent citation in undergraduate psychology papers. His left frontal lobe was severely damaged following an explosion that drove an iron spike through his skull. The damage resulted in a radical change in his personality and behavior.",
        title: "Phineas Gage"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "Widely known as the voice of nature documentaries, he is considered a national treasure in the UK (though he rejects the term). He is so beloved that his replacement with Sigourney Weaver as the narrator in the American version of Planet Earth caused protests online.",
        title: "David Attenborough"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 4,
        description: "A character whose remains are dug up in Shakespeares Hamlet. He provokes a lengthy rumination on the ravages of time by Hamlet, leading to the most characteristic image from the play: the prince holding this characters skull aloft while delivering a monologue.",
        title: "Yorick"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "A Mexican actor who played Khan Noonien Singh in the original Star Trek series and Star Trek Il: The Wrath of Khan. He was also known for his endorsement of the Chrysler Cerdoba, where he praised the tastefulness of its appearance and its soft Corinthian leather.",
        title: "Ricardo Montalban"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A ministerial order of the first Christian church to whom God grants the power of transubstantiation during Mass. Although they take a vow of chastity, there have been many molestation scandals, perhaps due to the ready access their authority affords them.",
        title: "A Catholic Priest"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "An American cult leader and founder of the Peoples Temple. After the groups murder of a congressional delegation, he forced the mass suicide of its 910 members in their Guyana compound by drinking grape Kool-Aid laced with cyanide and sedatives.",
        title: "Jim Jones"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 4,
        description: "A character from a famous limerick that references an island 30 miles south of Cape Cod. The limerick describes this person as being particularly well-endowed, with the most popular rhyming couplet being Whose dick was so long he could suck it.",
        title: "A Man from Nantucket"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "A wealthy German industrialist, who protected his Jewish factory employees from deportation and death during the Holocaust. By the end of World War II, he had spent his entire fortune on bribes to Nazi officials and black-market items for the workers on his famous list.",
        title: "Oskar Schindler"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "The Empress and Autocrat of all the Russias, who led the countrys Golden Age: an era of revitalization and recognition as a great power of Europe. She took many lovers during her reign, leading to legends about her sexual proclivities, including an erotic desire for horses.",
        title: "Catherine the Great"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "Americas greatest chess player and one of its most famous racists. He defeated Boris Spassky in 1971 to become world champion. A recluse, he returned to the public eye in the 90s to invent a new Chess timing system and to be a public anti-Semite before dying in Iceland in 2008.",
        title: "Bobby Fischer"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "An ancient symbol that represents the cyclical nature of existence, eternal return, and rebirth. Its first known usage was in an Ancient Egyptian source, but appears across many cultures. It is most frequently depicted as a snake or serpent eating its own tail.",
        title: "Ouroboros"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 4,
        description: "The alleged equine lover of a Russian Empress who led the country through its Golden Age. She took many lovers during her reign, which gave rise to legends about her sexual proclivities, including an erotic desire for this kind of animal.",
        title: "Catherine the Greats Horse"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "The disgraced mayor of Toronto who confessed to smoking crack probably in one of my drunken stupors. Responding to allegations of sexual harassment, he said, It was said | want to eat her pussy. | would never do that. Ive got more than enough to eat at home.",
        title: "Rob Ford"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 4,
        description: "A Biblical figure who was spared from God's divine judgment against the cities of Sodom and Gomorrah. As the cities were being destroyed by fire and brimstone, her family was told by angels look not behind thee. She did and was transformed into a pillar of salt.",
        title: "Lots Wife"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 4,
        description: "The 9th President of the US, whose most notable accomplishment in office was dying 30 days, 12 hours, and 30 minutes into his term. The cause of death was pneumonia, which doctors failed to cure with a combination of opium, leeches, and Virginia snakeweed.",
        title: "William Henry Harrison"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "From a hypothetical scenario that poses the question of who would win in a fight: a single equine-sized fowl or fivescore fowl-sized equines. The question was made famous ina 2012 Reddit AMA with President Barack Obama. The comment received over 1,000 upvotes.",
        title: "A Horse-Sized Duck"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 4,
        description: "A minor character from the television show Twin Peaks. She carries a piece of a tree cradled in her arms at all times, and seems to act as a medium between the object and the outside world, such as when she claims that it saw something the night Laura Palmer died.",
        title: "Log Lady"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 4,
        description: "The German theoretical physicist and Nobel Prize winner, as an infant. He devised the worlds most famous equation, his mass-energy formula E=mc?. This could also refer to a series of potentially ineffective educational products designed for infants.",
        title: "Baby Einstein"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 4,
        description: "The villain from the 1986 film Labyrinth by Jim Henson. Played by David Bowie, a 40-year-old Bowie kidnaps the baby brother of a teenage Jennifer Connelly, who he then attempts to woo with his crystal orbs, giant codpiece, and teased-out blonde bangs.",
        title: "Jareth, the Goblin King"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 4,
        description: "A Danish noble and astronomer. At 20, he lost part of his nose in a duel and wore a replacement made of silver and gold. He owned a pet elk and hired a psychic dwarf named Jepp. He is rumored to have died from refusing to leave a banquet to urinate, because etiquette.",
        title: "Tycho Brahe"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 4,
        description: "An attorney and academic who was thrust into the spotlight when she accused Supreme Court nominee Clarence Thomas of sexual harassment. She claimed that Thomas, among other comments, once asked her Who has put pubic hair on my Coke?",
        title: "Anita Hill"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "The organizer and storyteller ina fantasy roleplaying campaign, most often associated with D&D. They manage all aspects of a game other than the direct actions of the player characters, and are commonly seen rolling 20-sided dice behind a protective cardboard screen.",
        title: "A Dungeon Master"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "An ursine internet meme, who fucking loves this white, powdery drug. The image, which shows the creatures roaring face covered in snow, is a parody of the binge trope in TV and film, such as Al Pacinos Scarface and Dave Chappelles Tyrone Biggums.",
        title: "Cocaine Bear"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "A canine who practices the Indian tradition of physical, mental, and spiritual transformation. In western cultures this practice is most often associated with physical exercise focused on stretching and the assumption of physical postures such as eagle and tree.",
        title: "A dog doing yoga"
    },
    {
        category: Category.ET_CETERA,
        points: 1,
        description: "A person who strips naked and runs through a public space, either for fun, on a dare, or as a political statement. The first recorded instance was in 1799, when a man was bet 10 guineas to run naked from Cornhill to Cheapside in London.",
        title: "A Streaker"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "The stage name of Gordon Sumner, former member of The Police and solo musician. Late in his career, he abandoned his rock sound for more mellow instruments like the sitar and lute. He is also rumored to possess legendary sexual stamina due to his devotion to tantric yoga.",
        title: "Sting"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "A literary concept of an individual or group that is uncorrupted by human civilization. It is often used today to signify condescension toward non-Western cultures, such as the portrayal of Native Americans in Dances with Wolves or the Navi in Avatar.",
        title: "The Noble Savage"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "An American artist and self described best totally unknown painter in the world. His improvisational style was praised by modernist contemporaries, including Andrew Wyeth. Like his beloved jazz, Hamilton believed the picture makes itself. When Im finished, | don't know how the hell | did it.",
        title: "Robert Hamilton"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 4,
        description: "A fertility god of the Ancient Greek countryside, where statues were erected of him in gardens to protect livestock, plants, and mens virility. He was easily recognized by his massive, permanent erection, which led to the medical term for that condition.",
        title: "Priapus"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 4,
        description: "The title character from a short story by Herman Melville, who is employed to copy legal documents by hand. After gaining a reputation as a hard worker, he unexpectedly refuses to do any further work, instead repeating | would prefer not to to all requests.",
        title: "Bartleby the Scrivener"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "The subject of an often imitated, never duplicated YouTube video of a prairie dog turning its head while the camera zooms in and the music from Young Frankenstein plays. The clip is frequently modified to show the prairie dog wearing costumes or being caught viewing elicit material.",
        title: "Dramatic Chipmunk"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "The P.E. instructor of the person reading this card. The word above or the actual name of your real-life P.E. instructor are both valid.",
        title: "Your High School Gym Teacher"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "A newscaster who falls from a platform after attempting to cheat during a light-hearted segment at Chateau Elan Winery. After falling out of frame, she is heard off camera making strange noises and saying, OW OW OW...STOP STOP... OOH OOH OOH...| cant breathe.",
        title: "Grape Lady"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "An ursine character who is popular on the website 4chan and is used to mock individuals with a sexual interest in minors. He sometimes appears accidentally in the press, such as a story in a Polish newspaper that this character would be the mascot for the 2010 Olympics.",
        title: "Pedobear"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 4,
        description: "The name of Apples personal assistant on iOS operation system that interacts with users through natural language. It has soawned a popular Tumblr consisting of ironic interactions, such as the search 1 have a gambling addiction returning a list of nearby casinos.",
        title: "Siri"
    },
    {
        category: Category.ET_CETERA,
        points: 1,
        description: "A magician, who in his most famous trick, the Chinese Water Torture Cell, escaped from a water-filled tank while he was hanging upside-down. He was also known for debunking psychics and mediums, a tradition carried on to this day by professional magicians.",
        title: "Harry Houdini"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "One of Jesuss twelve apostles, who betrayed him for 30 pieces of silver. He famously revealed Jesuss identity to Roman soldiers by giving him a kiss, and his name is now synonymous with betraying a person or even an abstract set of ideals.",
        title: "Judas Iscariot"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "The former Prime Minister of Italy, owner of A.C. Milan, and serial tax evader. He is notorious for soliciting prostitutes and for organizing a type of orgy known as a bunga bunga. It is rumored that the concept was introduced to him by Libyan dictator, Muammar Gaddafi.",
        title: "Silvio Berlusconi"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The assistant to a wizard in Disneys Fantasia. Played by Mickey Mouse, he enchants a broom to fetch water. Unable to control the magic, a flood ensues. Each time he attempts to destroy the broom and end the spell, it splits in half and continues its work at double pace.",
        title: "The Sorcerers Apprentice"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The title character of a Vladimir Nabokov novel, referring to the nickname given to 12-year-old Dolores Haze by her stepfather, the hebophile Humbert Humbert. Nabokov has expressed pleasure that because of him, people no longer name their children this.",
        title: "Lolita"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "The founder of the Silk Road, the amazon.com of illegal drugs. His identity remains a mystery, though the name suggests it belongs to multiple people, since it was lifted from a character in the The Princess Bride, where a mythical brigand is actually a series of individuals.",
        title: "The Dread Pirate Roberts"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "A child beauty pageant contestant and star of a TLC reality show. She is known for her southern drawl, love of Go Go Juice (a blend of Mountain Dew and Red Bull), and open-minded attitude, having once said of her uncle, Aint nothing wrong with bein a little gay.",
        title: "Honey Boo Boo"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A gorilla who was taught by her trainer to sign over 1,000 words of GSL (Gorilla Sign Language) and allegedly could understand 2,000 words of English. She chose a mate from a series of videotapes in an early form of online dating, though they have not yet mated.",
        title: "Koko"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 4,
        description: "The title character from a 1969 novel by Philip Roth that is told as an extended psychotherapy session by a young Jewish bachelor. The novel is notorious for its description of this character masturbating with a piece of raw liver, which his mother later serves for dinner.",
        title: "Portnoy"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "Hero or villain? Attorney or Presbyterian? All we know for sure is that he has internet access and $300 in disposable income.",
        title: "Nicholas Georgiton"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "An idiom that describes a primate so powerful and heavy that it can ignore the rights of others. The original source is a riddle that asks where it sits (A: Anywhere it wants.) This term is commonly confused with a similar expression about an elephant.",
        title: "The 800 Pound Gorilla"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 4,
        description: "A shepherd from Aesops Fables who tricked villagers by raising false alarm about his sheep being attacked. When a legitimate threat occurs, the villagers do not respond and the flock is devoured. The fable appears to have little effect on the likelinood of lying among children.",
        title: "The Boy Who Cried Wolf"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 4,
        description: "A living historian, who spends their free time roleplaying as a Confederate or Union soldier in Americas bloodiest war. A participant typically falls into one of three classes, from least to most authentic (and unbearable): farb, mainstream, and progressive.",
        title: "A Civil War Reenactor"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 4,
        description: "A species of Pokemon that resembles an orange dragon and is the evolved form of Charmeleon and the final evolution of Charmander. Despite its appearance, it is a fire/flying type, NOT a dragon type. Its Japanese name is Lizardon (JU? —FY).",
        title: "Charizard"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "A 12th century court jester to Henry Il. In exchange for his services (he was obliged to perform every year on the birthday of our Lord before his master, one jump, anda whistle, and one fart), he received a manor and 30 acres of land in the county of Suffolk.",
        title: "Roland the Farter, Flatulist to the King"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "A retired professional soccer player who helped lead Americas team to their 1999 World Cup win. The iconic photo of her in a sports bra sliding on her knees, yelling with her fists clenched in celebration, is actually of her teammate Brandi Chastain.",
        title: "Mia Hamm"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The title character of a 90s TV show about a 19th century aristocrat who sets up a clinic in Colorado Springs. Played by Jane Seymour, she introduces modern healing practices to the towns locals as well as to her rugged mountain man Byron Sully.",
        title: "Dr. Quinn, Medicine Woman"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The main villain in the Masters of the Universe fantasy world. He is the arch nemesis of He-Man and is typically shows with a blue humanoid body, bare skull, and purple hood. His goal is to learn the secrets of Castle Grayskull and use them to conquer the land of Eternia.",
        title: "Skeletor"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "The 9th tlatoani of Tenochtitlan and ruler of the Aztec Triple Alliance. During their first contact with Europeans, he was killed by conquistador Hernan Cortess men as the fled his capital. His revenge is a euphemism for contracting travelers diarrhea in Mexico.",
        title: "Montezuma"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The monomaniacal, peg-legged commander of the Pequod whaleship in Herman Melvilles novel Moby Dick. His quest for vengeance against the white whale drives him mad, leading to the death of his entire crew except Ishmael, the novels narrator.",
        title: "Captain Ahab"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "The star of a viral video that shows a high school student imitating lightsaber moves using a golf ball retriever. The tape leaked online after being left in the basement of his school, leading to dozens of remixes featuring music and advanced special effects.",
        title: "Star Wars Kid"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A sexist archetype in literature, film, and games of a helpless woman that must be saved by a male character, such as Princess Peach in the Mario franchise. A recent YouTube series by Feminist Frequency charted the plot device throughout the history of gaming.",
        title: "A Damsel in Distress"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "The co-anchor of CBS This Morning and Editor-at-large for O Magazine. She gained notoriety for her long-running relationship with a famous talk show host and Queen of All Media. Despite being married to a man, there are persistent rumors that the two are lovers.",
        title: "Oprahs best friend (Gayle)"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The male version of the mythological creature that is a woman from the waist up but has a fish tail in place of legs. Their behaviors and abilities range across cultures, and include having green teeth, the ability to cure illnesses, seducing women, and holding tridents.",
        title: "A Merman"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The nickname of the Office Assistant in Microsoft Office, who appears as the metal object used to hold sheets of paper together. He would tap on the monitor to get your attention. Supposedly, Microsofts internal name for it was TFC (The Fucking Clown).",
        title: "Clippy"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A political and economic classification for the group of individuals who earn up to a quarter of total income in the US. It was derived from the slogans of the Occupy Wall Street movement of 2011, which were meant to highlight growing economic inequality.",
        title: "The 1%"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The character in a song by the Beatles from their aloum Magical Mystery Tour. It is a reference toa Lewis Carrolls poem, also about a flippered marine mammal. The lyrics that follow, Goo Goo Ga Joob, possibly stated by the character, were drawn from Finnegans Wake.",
        title: "The Walrus"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "The personification of the nanny state, which comes from Oceanias totalitarian leader in George Orwells novel 1984. He is frequently reminded to be watching you, though in an instance of the novels doublethink, the expression is botha veiled threat and a reassurance.",
        title: "Big Brother"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "The deafblind author, leftist, and suffragist, whose teacher, Anne Sullivan, taught her to communicate by spelling words into her hands, beginning with the word doll. Their relationship was the subject of the biographical play and film The Miracle Worker.",
        title: "Helen Keller"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The title character of an 8Os sci-fi film about a cyborg policeman who is tasked by the evil Omni Consumer Products megacorporation to protect Detroit. In 2011, a group raised $67,436 on the crowdfunding site Kickstarter to create a 7 foot tall bronze statue of the character.",
        title: "Robocop"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "A shock image depicting a naked, masked woman lying on her back in the bath, with a fountain of yellowish-orange liquid surging from her anus onto her face, supposedly the result of an orange juice enema. The image was often alleged to be popular in Japan.",
        title: "Tubgirl"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A member of the Latter-Day Saints, inspired by the visions of 19th century American Joseph Smith. They were once infamous for some members practicing polygamy. Members taking part in endowment ceremonies wear special underwear called temple garments.",
        title: "A Mormon"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "The person widely believed to have sewn the first American flag for George Washington. Research by the National Museum of American History suggests that this story did not enter popular culture until its 1876 centennial celebration, casting doubt on the veracity of this claim.",
        title: "Betsy Ross"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "One of the the three parts of Sigmund Freuds model of the psyche that constitute mental life. This part forms a persons ability to punish themself for misbehavior. It often draws on cultural lessons, acting as a source of rules from parents and other authority figures.",
        title: "The Superego"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The title amphibian from a classic 80s arcade game, where you cross heavy traffic and hitch a ride on logs to cross a treacherous river. A real-life version was played with a Roomba decorated as the character. It made it across a highway 10 times before being flattened by an SUV.",
        title: "Frogger"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "This plumber-turned-pharmacist and title character of this Nintendo puzzle series. Clearly inspired by Tetris, the player organizes pills by color, ostensibly to eradicate viruses and definitely not to teach children how to raid their parents medicine cabinet.",
        title: "Dr. Mario"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A member of a Christian sect from PA Dutch country. They are known for wearing traditional dress and eschewing modern technology. Some practice Rumspringa, where restrictions are lifted for adolescents seeking to experience the temptations of the outside world.",
        title: "An Amish"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A rare occurrence where identical fetuses are joined together in utero. Classifications are based on where their bodies are joined, e.g. syncephalus (one head, single face, four ears, two bodies), cephalothoracopagus (fused bodies, two faces facing in opposite directions).",
        title: "Conjoined Twins"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A plastic toy depicting a being with distinctive tall, bright, and fuzzy hair. They were the subject of fads throughout the 70s, 80s, and 90s. The original version was carved by a poor Danish fisherman and woodcutter as a Christmas gift to his daughter.",
        title: "A Troll Doll"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "A 7'2\" Congolese-American basketball player best known for his incredibly deep voice, thick accent, and penchant for waving his index finger at opponents after stuffing them at the rim. He once described the restaurant Pasta Pasta as being named after pasta.",
        title: "Dikembe Mutombo"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The overweight owner of The Androids Dungeon & Baseball Card Shop on The Simpsons. His character has a masters degree in folklore mythology—he translated The Lord of the Rings into Klingon—and is known for his catchphrase Worst [blank] ever.",
        title: "Comic Book Guy"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "Useless to beat and effectively unrideable, this deceased animal is used in an idiom to explain that a point, once made, does not need to be re-stated. Similar the phrase, To slay the slain. This animal is substituted with a dog in other parts of the English speaking world.",
        title: "A Dead Horse"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "A piece of raw beef worn by Mother Monster to the 2010 MTV Video Music Awards. The pop diva stated that she wore the item to highlight her distaste for the militarys dont-ask-dont-tell policy. The item was preserved by a taxidermist, who turned it into jerky.",
        title: "Lady Gagas meat dress"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "A smooth jazz saxophonist, who is universally reviled by jazz aficionados while simultaneously being one of the best selling recording artists of all time. Using circular breathing, he set a world record for longest note recorded by holding an E-flat for 45 minutes and 47 seconds.",
        title: "Kenny G"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The title of both Ralph Ellisons novel about the struggle of black intellectuals in early 20th century America and H.G. Wells sci-fi novella about a avaricious, power-mad man who is able to alter his bodys refractive index to reflect no light.",
        title: "The Invisible Man"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The sentient computer from Stanley Kubricks 2001: A Space Odyssey. Initially a helpful part of the ship, it eventually turns on the crew, killing Dr. Poole before being disconnected by Dave. As its mind goes, it sings Daisy Bell while pleading for its life.",
        title: "Hal-9000"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "A singer, temporary member of Destinys Child, and sister of Beyonce. In 2014, TMZ published security footage of her physically assaulting her brother-in-law, Jay-Z, who along with Beyonce, did not retaliate. The cause of her outburst remains unknown.",
        title: "Solange Knowles"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The title character of a horror film based on a Stephen King story. She manifests telekinetic abilities after being bullied about her first period. In the films climax, she is doused in an upended bucket of pigs blood at prom, leading her to kill most of the attendees in an electrical fire.",
        title: "Carrie"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "One half of a famous paradox that asks what would happen if a thing that cannot be stopped encounters a thing that cannot be moved.",
        title: "An Immoveable Object"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A short-snouted, brachycephalic dog breed. Generations of inbreeding have led to compact breathing passages that leave them unable to regulate their body temperature by panting. Many airlines have restricted their transport due to in-air deaths.",
        title: "A Pug"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "One of the flying reindeer that pulls Santas sleigh in The Night Before Christmas. His name is also used in a fitness method and internet meme by Joanna Rohrback that is a soringy, rhythmic way of moving forward, similar to a horses gait and ideally induced by elation",
        title: "Prancer"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 1,
        description: "An iconic characters from Pee-wees Playhouse, a live-action childrens show created by and starring Paul Reubens. She is a talking and singing piece of blue furniture with large eyes and a mouth between her cushions. She has a weirdly flirtatious relationship with Pee-wee.",
        title: "Chairy"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 4,
        description: "A pachyderm that was smuggled into the US to perform in the circus. After killing her trainer, she was publicly executed by being fed carrots laced with cyanide and receiving a 6,600-volt AC current. The event was captured on film and used as a promotional stunt.",
        title: "The elephant that Thomas Edison electrocuted (Topsy)"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "A street magician known for his sleight of hand, silly endurance challenges, and being kind a douche. His stunts include getting buried for a long time, standing on a pole fora long time, holding his breath for a long time, and freaking Ricky Gervais out by stabbing himself.",
        title: "David Blaine"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The winged title character from an iOS game where you navigate through a set of pipes. The creator removed the game from the App Store, despite earning $50,000 per day, in the wake of criticism over alleged plagiarism of graphics and gameplay mechanics.",
        title: "Flappy Bird"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A minor character from the sitcom Seinfeld. He exerts strict control over his restaurants customers and practices price discrimination over the sale of his broth-based food. He was inspired by Al Yeganeh, a New York City chef, who famously took offense at the moniker.",
        title: "The Soup Nazi"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The large, mentally disabled friend of George in Of Mice and Men. He loves petting soft things, but is unable to control his strength, accidentally killing a puppy anda woman. George shoots him at the end of the novel to protect him from an angry lynch mob.",
        title: "Lennie Small"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A concept created by Nietzsche in Thus Spoke Zarathustra that roughly translates to Superman. A character in the book holds it up as a supreme goal for humanity to achieve. The term was incorrectly used by the Nazi regime to argue for a biologically superior race.",
        title: "The Ubermensch"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "A missionary and Nobel Peace Prize winner who claimed the world is being helped by the suffering of poor people. Her Home for the Dying Destitutes in Calcutta offered no significant medical care and only 7% of donations to her organization were directly used for charity.",
        title: "Mother Teresa"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 1,
        description: "The 42nd President of the US and tenor saxophonist. He was the second president to be impeached in office, due to charges related to receiving oral sex from a White House intern. The case famously depended on what the meaning of the word ‘is is.",
        title: "Bill Clinton"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The nickname of Jeffrey Lebowski in the Coen Brothers film The Big Lebowski. Played by Jeff Bridges, he is depicted as an unemployed slacker, pacifist, and bowler who drinks White Russians and listens to Creedence. He was based on the Seattle Seven member Jeff Dowd.",
        title: "The Dude"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A creature comprised of multiple rodents knotted at the tail. While specimens exist in museums of curiosities, it is unlikely to ever have existed. It is also the name of a character from the Teenage Mutant Ninja Turtles franchise who exerts a telepathic influence over rodents.",
        title: "A Rat King"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "One half of a famous paradox that asks what would happen if a thing that cannot be stopped encounters a thing that cannot be moved.",
        title: "An Unstoppable Force"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "The popular term for a gymnophobic, a person who fear nakedness. The condition was satirized on the show Arrested Development, where the character Tobias Funke would wear cutoff jean shorts at all times. As of 2014, the condition is still not recognized by the DSM.",
        title: "A Never Nude"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "An mythical figure in Ancient Greece, who along with his father Daedalus, escape from the Labyrinth with wax wings. He is warned not to fly too high or too low. Ignoring the warning, the sun melts the wax and he plummets into the sea.",
        title: "Icarus"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "An English musician known for her idiosyncratic vocal delivery, literary sensibility, hit singles such as Wuthering Heights and Babooshka. One of her Karate instructors has noted that many of her dance moves owe a debt to her martial arts training.",
        title: "Kate Bush"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A fan of the Insane Clown Posse. These individuals gather in the woods each year for an annual Gathering, where they celebrate their shared culture of wrestling, drinking Faygo soda, painting their faces, and listening to horrible, horrible, horrible music.",
        title: "A Juggalo"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A term for a young person involved in armed conflicts, either voluntarily or involuntarily. International conventions exist to limit this activity, yet it remains a widespread practice, with 200,000 to 300,000 young people currently serving in either rebel and government forces.",
        title: "A Child Soldier"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A person who uses social media to launch personal attacks, rumors, or embarrassing photos or videos. Victims have been known to take their own life. Rebecca Black claims to have been a victim after receiving many hateful comments on the YouTube page for her song Friday.",
        title: "A Cyberbully"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "The subject of a reality TV show, these individuals plan for their survival following the breakdown of civilization. They likely have a cache of weapons, canned goods for making bunker stew, and a belief that drinking ones own purified urine is not that big of a deal.",
        title: "A Doomsday Prepper"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "A piece from the 1995 board game by Klaus Teuber. In the games lore, it is the fictional islands most villainous character. Beginning on the desert hex, it soon begins stealing cards and siphoning resources at the direction of any player who roll a 7.",
        title: "The Robber from Settlers of Catan"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "A German director, whose films often feature his own philosophical narration Cl believe the common denominator of the universe is not harmony, but chaos, hostility, and murder.) He was once shot with an air rifle during an interview and continued as if nothing happened.",
        title: "Werner Herzog"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "An actor and musician who starred in Knight Rider and Baywatch. His daughter once recorded a video of him, shirtless and drunk, trying to eat a hamburger on the floor of a Las Vegas hotel room, while she lectured him on the importance of sobriety. Germans love him.",
        title: "David Hasselhoff"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "The Queen of France, who was guillotined during the French Revolution. Her last words were Pardon me sir, | meant not to do it, after stepping on her executioners foot. There is no evidence that she spoke the phrase most associated with her, Let them eat cake.",
        title: "Marie Antoinette"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "An actor, director, martial artist, and chemical engineer. He played Ivan Drago in Rocky IV and He-Man opposite Frank Langella. After earning his masters degree, he turned down a Fulbright Scholarship to MIT to become Grace Joness bodyguard.",
        title: "Dolph Lundgren"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "A London-based band formed by the Fairbrassin brothers in 1989, who are famous for their hit, Im Too Sexy, which pokes fun at the fashion industry with such notable lines as Yeah on the catwalk, yeah / | shake my little tush on the catwalk.",
        title: "Right Said Fred"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "The two dimensional silhouette caused by your body blocking a light source. Peter Pans famously ran away from him. Some particularly cowardly people are afraid of them.",
        title: "Your Own Shadow"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "An amateur bowler and alleged pederast in the Coen Brothers film The Big Lebowski. Played by John Turturro, he speaks with a heavy Cuban accent, paints his pinky fingers red, wears a hairnet, refers to himself in the third person, and is not to be fucked with.",
        title: "The Jesus"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A musician who performs using a reedless wind instrument. First used in 1860, this term is sometimes considered dated among players of the instrument. Notable performers include Sir James Galway, Jethro Tulls lan Anderson, and Michelle Flaherty from American Pie.",
        title: "A Flautist"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A person who smuggles illicit drugs across national borders. While methods vary, one involves swallowing latex balloons filled with the substance, which is later recovered in their feces. Detection of this method is difficult and is often only found on x-ray.",
        title: "A Coke Mule"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "A diver who hit his head on the board during the 1988 Olympic Games. It was later revealed that he was HIV positive at the time, though there was no chance of other athletes contracting the disease from the chlorinated water. Mario Lopez played him in a 1997 biopic.",
        title: "Greg Louganis"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "A former leader for the Liberian warlord Roosevelt Johnson. He claimed that before battle we would get drunk and drugged up, sacrifice a teenager, drink the blood, then strio down to our shoes and go into battle wearing colorful wigs and carrying imaginary purses.",
        title: "General Butt Naked"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "One of the the three parts of Sigmund Freuds model of the psyche that constitute mental life. It plays an executive function, mediating between raw instinct and external reality, such as your ability to delay immediate pleasure for long term objectives.",
        title: "The Ego"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "One of the most infamous and deadly culinary dishes. Known as Fugu in Japan, its preparation is strictly controlled, because its liver, ovaries, and eyes contain fatal levels of tetrodotoxin. These areas must be carefully removed to avoid asphyxiation and death.",
        title: "A Pufferfish"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "A cartoon feline with the body of a Pop-Tart. It is depicted flying in space with a rainbow trail, accompanied by an upbeat song with the Japanese word for Meow as its lyrics. A popular variation has users syncing the video to Slipknots song Psychosocial.",
        title: "Nyan Cat"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "Described by Nathan Rabin as a bubbly, shallow creature that exists solely in the imaginations of sensitive writer-directors to teach young men to embrace life and its infinite mysteries. Examples include Natalie Portman in Garden State and Zooey Deschanel in everything.",
        title: "A Manic Pixie Dream Girl"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "The hero of a 1982 arcade game, who navigates mazes and eats pellets, power pellets, and fruit while avoiding ghosts. One of gamings first female protagonists, the only visible difference between her and her male counterpart is a pixelated red bow.",
        title: "Ms. Pac-Man"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "The infamous head covering of the rapper, producer, and guest performer on Blurred Lines. Created for Vivienne Westwoods 1982-1983 collection, it was inspired by Peruvian women wearing bowler hats, full skirts, dancing with their babies tied on their back.",
        title: "Pharells hat"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A member of a music collective starring a trio of humanoids played by musicians wearing bald caps and makeup. To meet demand, dozens of new performers have been recruited, a process satirized on the show Arrested Development with the would-be recruit Tobias Funke.",
        title: "A Blue Man"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A putdown that describes a woman with a dull personality or lack of style. The term originated in hip hop and was featured in a comedy sketch of a doctor diagnosing the condition, which includes symptoms such as owning scented candles and ordering Pumpkin Spice lattes.",
        title: "A Basic Bitch"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "In gay culture, a person who prefers penetration during intercourse, usually through the anus. A survey of nearly 56,000 profiles on gay.com found that 32% of US respondents preferred bottom, 26% preferred top, and 42% preferred the versatile role.",
        title: "A Bottom"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A West African practitioner of a A419 scam, otherwise known as advance-fee fraud. Victims receive email messages from a person claiming to be displaced royalty who needs their help transferring funds out of their country in exchange for future payment.",
        title: "A Nigerian Prince"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "Cofounder of the worlds most popular social networking site— before Facebook. He became instantly recognizable because all users who joined the site would automatically friend him. He sold the site for $580M to Rupert Murdochs News Corporation.",
        title: "MySpace Tom"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "An Irish musician who sought controversy ON many occasions, most famously on a 1992 episode of SNL, where she protested the Catholic churchs sexual abuse scandal by tearing up a photo of Pope John Paul Il and saying Fight the real enemy.",
        title: "Sinead OConnor"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "The star of one of the first viral videos. In an audition, he planned to do a backflip followed by a display of nunchuck skills. Suffering from jet lag, he fell flat on his face, staggered to his feet, and while still attempting to showcase his nunchuck skills, stumbled off screen.",
        title: "Afro Ninja"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "A costumed roleplayer who appears in public as a fictional character. Dress is often inspired by manga, anime, comic books, video games, and films—really anything from nerd culture. While not synonymous, there is some overlap with LARPers, Furries, and reenactors.",
        title: "A Cosplayer"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "The 7-year-old star of a YouTube video where he deals with the effects of anesthesia. The child asks of his amused dad, Is this real life and fearfully demands to know whether its going to be forever after observing that he feels funny and that his father has four eyes.",
        title: "David After Dentist"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "An Australian conservationist and media personality known for his khaki shorts, accent, and trademark expression Crikey. He was killed in 2006 by a stingray striking him in his lungs and heart with its barb during the filming of a documentary titled Oceans Deadliest.",
        title: "Steve Irwin, the Crocodile Hunter"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A term for a beginner or novice at an activity, often used in reference to internet activity, such as online gaming or computer hacking. The term is spelled using leetspeak, the alohabet that uses alternative ASCII characters as a replacement for Latin letters.",
        title: "A nOOb"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "An idiom for an extremely enthusiastic or hard working person that supposedly originated among Canadian soldiers in World War Il. The term derives from the aquatic, dam-building rodents, who terraformed much of North America with their wooden structures.",
        title: "An Eager Beaver"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "A former US Congressman from Texas who was an important part of the Republican Revolution of the 90s and one of the co-creators of the infamous Contract with America. But for the purposes of this game, he really just has a very funny name.",
        title: "Dick Armey"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "A photographer and filmmaker, whose work often portrays herself in a series of costumes ranging from simple to outlandish. Through her photography, she is thought to be calling attention to the representation of women in society, media, and the arts.",
        title: "Cindy Sherman"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "A clairvoyant Pennsylvania groundhog, who uses the appearance of his own shadow to predict whether spring will arrive early or whether there will be six more weeks of winter. His predictions have been correct 39% of the time, less than random guessing.",
        title: "Punxsutawney Phil"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "The internet moniker of Fatso, a feline wearing a blue shirt and being manipulated to look like she was playing an instrument. The performance dates back to 1984, meaning that while she is long-dead, she continues to play off millions.",
        title: "Keyboard Cat"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "The first mammal to be cloned from an adult stem cell. Taken from a mammary gland, she proved that a cell from a specific body part could be used to replicate a new individual. She died at 6.5 years old of progressive lung disease, which is fairly common to her species.",
        title: "Dolly the Sheep"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "A boy from a Quaker Oats TV commercial that ran for over 12 years, beginning in 1972. The character spawned an urban legend that the actor from the commercial, John Gilchrist, died from ingesting a lethal combination of Pop Rocks and soda. He did not.",
        title: "Little Mikey"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "An actor who played Marty McFly in the Back to the Future franchise and the Reaganite Alex P. Keaton on Family Ties. In 2000, he semi-retired due to a Parkinsons disease diagnosis, but he continues to act and is an outspoken advocate for others with the disease.",
        title: "Michael J. Fox"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "A cat behaviorist, MFA, and host of the TV show My Cat from Hell. In the show, he is depicted as a traveling rock star who helps pet owners solve issues like scratching, peeing, and territorial behavior. He employs an idiosyncratic set of strategizes to befriend cats.",
        title: "Jackson Galaxy"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The title character who ages in reverse from a short story by F. Scott Fitzgerald and film adaptation by David Fincher. He is born as a 70-year-old man capable of speech and as time passes, grows younger instead of older.",
        title: "Benjamin Button"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "The stage name of Joseph Merrick, an Englishman with severe deformities who was exhibited as a freak before befriending a doctor who took him in and gave him a relatively good life. He loved theater and collected flowers. David Lynch made a biopic loosely based on him.",
        title: "The Elephant Man"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "The best friend, wingman, homoerotic volleyball partner, and Radar Intercept Officer for Maverick in the film Top Gun. Played by Anthony Edwards, he was tragically killed during a training exercise when he broke his neck ejecting from a F-14 aircraft.",
        title: "Goose"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "A simple-minded gardener from a Stephen King short story and film adaptation. He gains telepathic powers by being forced to play weird 90s virtual reality games. He eventually escapes capture by converting his consciousness into pure energy.",
        title: "The Lawnmower Man"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "The 3rd Vice President of the US, who shot Alexander Hamilton ina duel. He was famously the answer to question posed in a 1993 commercial directed by Michael Bay for the Got Milk? campaign, where a historian is unable to answer because his mouth is clogged with peanut butter.",
        title: "Aaron Burr"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "An actor known for his range, prolific work ethic, and self described Nouveau Shamanic acting style. Appearing in such films as Moonstruck, Adaptation, and Bad Lieutenant: Port of Call New Orleans, he is known for his manic, non-naturalistic performances.",
        title: "Nicolas Cage"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "The Enterprises first officer on Star Trek: The Next Generation. He is referred to as Number One by Captain Picard and often sits down by whipping one leg over the back of a chair. An unofficial Twitter account documents his perverted Google search history.",
        title: "Commander William T. Riker"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 4,
        description: "A serial murderer whose identity is still unknown. His name is a reference to letters sent by him to newspapers that included a 408character cipher, which he claimed revealed his identity. In one possible decoding, he claims that his victims will be his slaves in the afterlife.",
        title: "The Zodiac Killer"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "The original spinster from the novel Great Expectations. On the day of her wedding, she discovered that she had been defrauded by her betrothed. Heartbroken, from that day she lived alone in her mansion, shunned company, and never removed her wedding dress.",
        title: "Miss Havisham"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "An ancient Mesoamerican god and flying reptile whose name means feathered serpent. It has been claimed since the 16th century that Aztec leader Montezuma II believed the appearance of Spanish conquistador Hernan Cortes signaled his return.",
        title: "Quetzalcoatl"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "A sumo wrestler from the Street Fighter video game series. His character possesses above-average strength but below-average speed, except when executing his Hundred Violent Sumo Hands move, commonly known as the Hundred Hand Slap. His blood type is A.",
        title: "E. Honda"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "Flying, communal insects that are found on every continent except Antarctica. They often live in large hives knows as colonies, with a queen, workers, and drones. Many species of these produce honey, which humans harvest in a series of hives known as an apiary.",
        title: "Bees!"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "The antagonist of the Metroid video game franchise. She is typically depicted as a brain in a vat with spikes and a single eyeball, though she sometimes transforms into a bipedal monster that looks kind of like an old lady. She also appeared in the Captain N cartoon series.",
        title: "Mother Brain"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "The Fresh Prince of Bel-Ajirs cousin and Uncle Phils heir. Played by Alfonso Ribeiro, he is depicted as a preppy young Republican, who is probably best known for his spazzy dance to Tom Joness song Its Not Unusual and being slapped on the back of the head.",
        title: "Carlton Banks"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "A fuzzy pet from the Gremlins horror-comedy franchise. His owners were implored by Mr. Wing to follow three simple rules in caring for their Mogwai: (1) Do not expose him to bright light; (2) Do not get him wet; and (3) Do not feed him after midnight.",
        title: "Gizmo"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "A character from the sitcom Perfect Strangers. He is a rustic from the island of Mypos, who Cousin Larry acclimates to big city Chicago. Features of the character include celebrating with the dance of joy and exclaiming Dont be ridiculous when it is he who is being ridiculous.",
        title: "Balki Bartokomous"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "A character and internet meme that stalks children, often shown as a tall figure in a gray suit with a featureless face. He allegedly inspired two 12-year-old Wisconsin girls to stab a classmate 19 times. One claimed that he watches her, can read minds, and can teleport.",
        title: "Slender Man"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "The fictional, deceased paramour of the Notre Dame linebacker, who had supposedly died the same day as his grandmother. When it was revealed that the woman (aka Lennay Kekua aka Ronaiah Tuiasosopo) never existed, he was forced to admit that he had been catfished.",
        title: "Manti Teos girlfriend"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "A bounty hunter from the Star Wars franchise. In the original 1977 version of his confrontation with Han Solo at Chalmuns Spaceport Cantina, Han shoots and kills him before he fires a shot. In the films rerelease, he takes the first shot and misses, leading to the meme Han shot first.",
        title: "Greedo"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A schoolyard taunt that calls attention to a person with a fair complexion that possesses clusters of darker spots comprised of concentrated melanin on the front surface of their head. The condition is exacerbated by exposure to the sun.",
        title: "A Freckleface"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "A guest correspondent on SNLs Weekend Update. He recommends New Yorks hottest clubs, followed by a description of their outlandish patrons like Black George Washington, sunburned drifters with soap sud beards, sherpas, and guys with afros in graduation caps.",
        title: "Stefon"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "The title character of Samuel Becketts absurdist play, who Vladimir and Estragon wait for. Beckett claimed that his name derived from the French slang term for boot. Americans typically mispronounce the name by emphasizing its second syllable.",
        title: "Godot"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "A NASA employee who traveled from Houston to Orlando carrying, according to her wiki, latex gloves, a black wig, BB pistol, pepper spray, a tan trench coat, 2-pound drilling hammer, rubber tubing, and plastic garbage bags. She denies wearing the undergarments in question.",
        title: "The astronaut who drove across the country wearing Space diapers to kidnap her boyfriend"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "A character from an SNL skit played by Christopher Walken. The humor is derived from the characters gag name that refers to performing oral sex on a woman, e.g. Sometimes [he] just rubs you the wrong way and his stated preference for the Deep South.",
        title: "Colonel Angus"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "A Canadian astronaut who became the face of NASA while commandading the ISS in 2013. He has a vast social media following, one of the most popular Reddit AMAs of all time, and a hit YouTube video of him covering Bowies Space Oddity while literally in space.",
        title: "Chris Hadfield"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "A fish-like humanoid who commanded the Rebel Alliances fleet in Star Wars: Episode VI. He planned a sneak attack on the second Death Star as it orbited the forest moon of Endor. Imperial forces knew of the impending assault, leading to his iconic line Its a trap!",
        title: "Admiral Ackbar"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "A theoretical physicist and cosmologist who made major contributions to the field of general relativity. He has a motor neuron disease that leaves him almost entirely paralyzed. He communicates exclusively through a speech generating device.",
        title: "Stephen Hawking"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "The combined exploits of folks from the Sunshine State, collected ina popular Twitter profile. Examples include someone who Disguises Himself As ‘The Sun, Steals Logo Towel and someone who Accidentally Shoots Himself in the Head While Celebrating New Years Eve.",
        title: "Florida Man"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "The lead character in Dostoyevskys novel Crime and Punishment. Impoverished in St. Petersburg, he murders a pawnbroker with an axe, which he justifies through a theory that some people have the right to commit murder. He confesses his crime and is exiled to Siberia.",
        title: "Raskolnikov"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "Your canine companion in an NES game where you used the systems Zapper light gun to shoot waterfowl as they emerge from bushes. While ostensibly meant to be to fetch your kills, this characters primary role was to laugh at your pitiful performance.",
        title: "Duck Hunt Dog"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "A boxer from Nintendos Punch-Out!! franchise. He is depicted as an obese, tan, large-mouthed man wearing a crown and boxer shorts. He wears two bandages in an X pattern over his navel, suggesting his weak point. He cannot recover from being knocked down.",
        title: "King Hippo"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "The protagonist of Nathaniel Hawthornes The Scarlet Letter. Set in 17th century New England, she has an affair and conceives a child with the minister of her church. After being found guilty of adultery, she is forced to wear a scarlet A on her dress as a signal of shame.",
        title: "Hester Prynne"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 4,
        description: "The single-horned title character from an 80s animated film, who discovers that she is the only remaining member of her species. Voiced by Mia Farrow, she is pursued by a creature called the Red Bull. Defeating him, she returns her kind back into the world.",
        title: "The Last Unicorn"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A person who avoids acting like an inconsiderate jerk. Or anything in the world outside the slang word for male genitalia. Or a person who goes by any other name than the nickname for Richard.",
        title: "Not a Dick"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A Biblical hero and proto-suicide bomber, who once slew an entire army with the jawbone of an ass. God commanded him not to cut his hair, but his lover Delilah was bribed into shaving it, leading to his imprisonment, blinding, and suicide by pulling down a Philistine temple.",
        title: "Samson"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "An immortal, broadsword-wielding character from an 80s action film. The films tagline, There can be only one, refers to a contest to gain each others power and knowledge through defeating and then beheading their rivals in a duel—a process referred to as Quickening.",
        title: "A Highlander"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A Russian occultist and advisor to Tsar Nicolas Il, who wielded extraordinary power over the Romanov family. He was assassinated by a group of nobles in 1916, and his body was recovered from the Neva River having been poisoned, shot, beaten, and drowned.",
        title: "Rasputin"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "A writer best known for his novel Infinite Jest and essays on American culture. Suffering from depression, he hanged himself in 2008 after ceasing to take the antidepressant phenelzine. [1] He covered a prolific range of topics, from cruise ship culture to tennis pro Roger Federer. [2] His father reports this was a lifelong condition.",
        title: "David Foster Wallace"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "An orangutan from the Planet of the Apes. Living in the East Coast Ape City during the 40th century, he paradoxically serves as Minister of Science and Chief Defender of the Faith. He was immortalized in a song from The Simpsons that parodies Falcos Rock Me Amadeus.",
        title: "Dr. Zaius"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "The most famous mime in history, who frequently performed under the name Bip the Clown. He referred to his craft as the art of silence, creating many of the quintessential mime performances, including Walking in the Wind and Trapped in a Box.",
        title: "Marcel Marceau"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "An animal, native to South Africa and related to the weasel, made popular by a YouTube video narrated by Randall. This animal is now almost always described as Badass and Cra-zy. Furthermore, its often noted that this animal dont care or really doesnt give a shit.",
        title: "A Honey Badger"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "The subject of a viral video first uploaded on YouTube in 2006 and emblematic of cute culture. It stars a mother and infant from the fuzzy, bear-like species. The infant expels air from its nose to the surprise of the mother. The video has been viewed more than 200 million times.",
        title: "Sneezing Baby Panda"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A business magnate and aviator, who set world air soeed records and created the failed Spruce Goose. He suffered from extreme germophobia and OCD, leading to rumors of him refusing to cut his hair, wearing tissue boxes as shoes, and storing his urine in jars.",
        title: "Howard Hughes"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "One of Noahs sons from the Hebrew Bible, who was allegedly cursed in the Book of Genesis for seeing the nakedness of his father after Noah had passed out drunk in a tent. Because his name translates to black or burnt, this curse was later used to explain dark skin pigmentation.",
        title: "Ham"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "A figure skater who won Olympic gold in 1988, but is perhaps now most famous as a semi-recurring character in the South Park franchise. In their feature film, the boys parody him as inspirational figure with a song that references What Would Jesus Do?",
        title: "Brian Boitano"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "A member of TLC who died in a car crash days after her chauffeur killed a boy walking on the side of the road. She wore glasses with a condom covering one of the lenses, and burned down her own mansion by setting fire to her abusive boyfriends shoes.",
        title: "Lisa Left Eye Lopes"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "The patriarch of Wes Andersons 2001 film about an eccentric, troubled New York family. Played by Gene Hackman, he is a disbarred lawyer, former convict, unapologetic racist, absentee father, and 17-year resident of the Lindbergh Palace Hotel.",
        title: "Royal Tenenbaum"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "An Ancient Greek scientist who is most famous for determining the volume of objects with irregular shapes. The legend is that he solved the problem after noticing the level of the water change during a bath. He sprung out naked and took to the streets shouting Eureka!",
        title: "Archimedes"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A noble who rode naked on a horse through the streets of Coventry in order to relieve the town of the excessive taxation of her husband. She asked all residents to stay home and shut their windows. Only a tailor disregarded her order, who became known as Peeping Tom.",
        title: "Lady Godiva"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "The title of John Montagu, the 18th century British noble who invented using two slices of bread as a wrapper for food. The legend is that he was an avid gambler who did not have time for meals between card games, so would have servants bring him meat between slices of bread.",
        title: "The Earl of Sandwich"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "An astronomer and public intellectual best known for hosting the PBS series Cosmos. He is easily identified by his strange vocal delivery of words like billions. He was also responsible for curating the Pioneer plaque and the Golden Record for the Voyager spacecraft.",
        title: "Carl Sagan"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "Purveyor of bling to the rich and famous. He supplied Kanye West's Jesus Piece—and was asked by Kanye, in Diamonds from Sierra Leone not to lie about the source of his diamonds. He was sentenced to prison for his connection to the Detroit-based Black Mafia Family.",
        title: "Jacob the Jeweler"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "An actor who played the blind, VISOR-wearing Chief Engineer Geordi La Forge on Star Trek: The Next Generation. He is also the driving force behind Reading Rainbow, which recently raised slightly more than Monikers on Kickstarter ($5.4M),.",
        title: "LeVar Burton"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A Jazz Age novelist and wife of the author of The Great Gatsby, who described her as the first American Flapper. They were also one of the first celebrity couples of the 20th century, and their marriage was notorious for its alcoholism, recriminations, and instability.",
        title: "Zelda Fitzgerald"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "An escaped slave who became a prominent abolitionist and spy during the Civil War. She rescued more than 70 slaves with the help of the Underground Railroad, earning her the nickname Moses. Later in her life she became a prominent figure in the suffrage movement.",
        title: "Harriet Tubman"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "The religious figure who unified the Arabian Peninsula under Islam. He claimed to have received a revelation from God in a cave and began preaching a new religion. Visual depictions of Muhammad usually show him with a veiled face or represented as a flame.",
        title: "The Prophet Muhammad (PBUH)"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A con man whose name is synonymous with a famous scam where a swindler pays returns to investors using money paid by new investors. He made millions using this technique, and after spending time in prison, he fled to Florida and sold swampland as valuable real estate.",
        title: "Charles Ponzi"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The actually pretty racist mascot of a top-selling rice brand. Wearing a tuxedo and bow tie, this characters name references a term commonly used in the American South to denote older male servants. In 2007, the company promoted the character to chairman of the board.",
        title: "Uncle Ben"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "The device regulating the heart rhythms of the 46th Vice President of the US, who was infamous for expanding the powers of his office as well as shooting his best friend in the face. He had its wireless services disabled to prevent terrorists from potentially interfering with it.",
        title: "Dick Cheneys pacemaker"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A Mexican painter and feminist icon known for her vivid, tropical self-portraits. She is easily identified by her prominent unibrow. She was married to Mexican painter Diego Rivera, but had numerous affairs with men and women, including Josephine Baker.",
        title: "Frida Kahlo"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "The farm animal blamed for the Great Chicago Fire of 1871, who allegedly knocked over a lantern while being milked. The bovine and its owner were posthumously exonerated, though not before inspiring Brian Wilson to write a song about its pyrokinetic abilities.",
        title: "Mrs. OLearys Cow"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "An Ancient Greek king who Zeus punished for his hubris by forcing him to roll a boulder up a hill, only to see it roll back down and be forced to repeat this process endlessly. The myth of his struggle was used for philosophical purposes by Albert Camus.",
        title: "Sisyphus"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "The presumptive heir to the Austro-Hungarian Empire until his assassination in 1914. This acted as the catalyst for the beginning of World War |. He was an avid hunter, keeping a diary of nearly 300,000 kills—100,000 of which were displayed at his castle in Konopiste.",
        title: "Archduke Franz Ferdinand"
    },
    {
        category: Category.ET_CETERA,
        points: 1,
        description: "In gay culture, a large, hairy, and often hyper-masculine man. It was likely first popularized as a term in the 1979 article Whos Who in the Zoo? which categorized gay men as one of 7 types of animals. Subcategories of this include cubs, ewoks, and grizzlies.",
        title: "A Bear"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A serial killer who raped and murdered more than 30 teenage boys in the 7Os, storing their remains in the crawlspace of his Chicago home. He was well-liked in the community, appearing at charity events and childrens parties dressed as his character Pogo the Clown.",
        title: "John Wayne Gacy, Jr."
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A Supreme Court Justice who is known for never questioning appellants during oral arguments. His appointment was clouded by allegations of his sexual harassment, such as asking Who has put pubic hair on my Coke? and referencing the porn star Long Dong Silver.",
        title: "Clarence Thomas"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "A 7'4\", 520 lb. Frenchman who was the first wrestler inducted into the WWE Hall of Fame. He played the rhyming Turkish wrestler Fezzik in The Princess Bride. His ability to consume alcohol was so legendary that doctors used it to baseline how much anesthesia to administer him.",
        title: "Andre the Giant"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "The stage name of Ellen Naomi Cohen, a member of the band that performed hits like California Dreamin and Monday Monday. She struggled with obesity most of her life, and it was long rumored that she died by choking on either a ham sandwich or a chicken bone.",
        title: "Mama Cass"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "The long-time lover and short-time wife of Adolf Hitler. They married less than 2 days before she killed herself with a cyanide capsule while Hitler shot himself in the head with his Walther PPK pistol. Their bodies were then set on fire as Russian forces bombarded Berlin.",
        title: "Eva Braun"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "The infant son of the first aviator to fly solo across the Atlantic. He was kidnapped in what was called the Crime of the Century. The investigation lasted over two years, culminating in the execution by electric chair of Bruno Hauptmann, who maintained his innocence.",
        title: "The Lindbergh Baby"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "In the weeks leading up to Christmas, shopping complexes often employ this person to play a fat, jolly, gift-giving figure. A grotto is usually set uo where children can pose for photographs while sitting on his lap and requesting presents.",
        title: "A Mall Santa"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 4,
        description: "A character from Franz Kafkas novella The Metamorphosis, who wakes up one day to find himself transformed into a large insect. He slowly loses his ability to communicate, becomes a burden on his family, and eventually wills himself to die somehow.",
        title: "Gregor Samsa"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "An American novelist, playwright, and Princeton professor. Her works in In a Region of Ice and A Garden of Earthly Delights and nearly 40 other novels. Born in 1938, she still writes in longhand and her productivity and discipline are legendary among writers.",
        title: "Joyce Carol Oates"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A hairdresser who created the iconic wedge bob cut of the 60s. He parlayed his fame into an international brand of beauty products that included salons, shampoos, conditioners, and commercials featuring the tagline If you dont look good, we dont look good.",
        title: "Vidal Sassoon"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A person who plays a large double reeded woodwind. Despite its warm, dark tone, it is often considered one of the most obscure instruments in the modern orchestra. Among its most famous passages is the Grandfathers Theme in Sergei Prokofievs Peter and the Wolf.",
        title: "A Bassoonist"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A composer and conductor known as The March King. He created many marches still in use today, such as The Stars and Stripes Forever. He also designed a large brass instrument that wraps around the body of the musician, which he named after himself.",
        title: "John Philip Sousa"
    },
    {
        category: Category.ET_CETERA,
        points: 1,
        description: "A monster from the Ghostbusters franchise made of spongy candy and wearing a sailor hat and red neckerchief as he rampages through New York. Dan Aykroyd described him as harmless and puff and cute, but given the right circumstances, everything can become evil.",
        title: "The Stay Puft Marshmallow Man"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "The eccentric subject of a Werner Herzog documentary, who lived with Alaskan bears for 13 summers and was in love with [his] animal friends. In 2003, he and his girlfriend were killed and eaten by one of the bears—the first such death in the parks history.",
        title: "Grizzly Man (Timothy Treadwell)"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A New York City cook and laundress, who is believed to have infected over 50 people with a deadly bacterial disease. She herself displayed no symptoms of infection and was quarantined against her will for nearly three decades until her death at 70.",
        title: "Typhoid Mary"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A legendary 19th century mountain man, who was famous for fighting and capturing bears. During a play fight with one of his bears, his scalp was dislodged, leaving the brain tissue permanently exposed. He died after a monkey bit into the open wound, causing an infection.",
        title: "Grizzly Adams"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A person who assumes the persona of a character in a fictional setting, often created by them. The concept was inspired by Dungeons & Dragons and other early roleplaying games, but spans genres from high fantasy to steampunk to zombie apocalypse.",
        title: "A LARPer"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "The former mayor of Washington, DC, who narrowly suffered an electoral defeat after a videotape leaked of him smoking crack. He was later reelected mayor after serving six months in federal prison. He is currently on the DC City Council and remains a controversial figure.",
        title: "Marion Barry"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "The medical term for Gaetan Dugas, a Canadian flight attendant who was among a group of homosexual men that traveled widely and were very sexually active, facilitating the early spread of the virus. This term now refers to the first case of a condition more generally.",
        title: "Patient Zero"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A lawyer who gained international fame for his successful defense of O.J. Simpson during his murder trial. He is often associated with the phrase If it doesnt fit, you must acquit, referring to the murderers gloves that was supposedly too small for Simpsons hand.",
        title: "Johnnie Cochran"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "A legendary Victorian murderer also known as The Demon Barber of Fleet Street. He has a lever in his shop that drops customers through a trapdoor, who he finishes off with a razor. His accomplice, Mrs. Lovett, helps dispose of the bodies by baking them into savory pies.",
        title: "Sweeney Todd"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "The extraterrestrial from a famous action-horror film series. Sometimes referred to as a Xenomorph, these creatures are organized around a single queen, which gives birth to creatures that follow a lifecycle from egg to facehugger to chestburster to adult.",
        title: "The Alien from Alien"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "The fictional mascot of the National Federation of Coffee Growers of Colombia. With his mule Conchita, he is a national symbol for Colombian coffee. Played by Carlos Sanchez and others, his tagline, iDisfrute de un buen cafe! has been widely parodied in pop culture.",
        title: "Juan Valdez"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "A member of an old timey profession who cleared ash and soot from the area that provides ventilation for a fireplace. This practice once involved significant child labor, since they were the only ones small enough to fit into the space. Most began their training at age six.",
        title: "A Chimney Sweep"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The title character from a film by Jim Jarmusch about a freelance hitman employed by the Mafia, who strictly follows Hagakure, the code of the samurai. The film itself is a blend of the samurai and gangster genres, with a soundtrack produced by RZA of the Wu-Tang Clan.",
        title: "Ghost Dog"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "The subject of a prolonged legal case over whether to terminate life support. Diagnosed as being ina persistent vegetative state by her doctors, her husband and parents battled over whether to remove her feeding tube, despite her having signed a do not resuscitate order.",
        title: "Terri Schiavo"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "A pervy fashion photographer known for his candid style, glasses, and thumbs up gesture. He often shows his subjects against a white background, sometimes posing with them. He has been accused of making inappropriate sexual advances several times in his career.",
        title: "Terry Richardson"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "An artist known for her physically demanding performance pieces. In The Artist is Present, she sat staring at museumgoers silently for two months. Over her career, she has been groped, scalded, nearly stabbed, nearly raped, and nearly shot during performances.",
        title: "Marina Abramovic"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A gag name that references female genitalia, used to trick a person into saying it without knowledge of the double meaning. While popularized by the film Porkys, its first use was by Jim Davidson & John Elmo in their series of prank calls to Jersey Citys Tube Bar in the 7Os.",
        title: "Mike Hunt"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "An R&B musician who recorded I Believe | Can Fly and Trapped in the Closet. In 2002, a video leaked of him allegedly urinating on an underage girl, according a 21-count indictment. He was found not guilty, though many still believe him to be a sexual predator.",
        title: "R. Kelly"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "A superhero from the Marvel Comics universe, who gained her powers after receiving a blood transfusion from her cousin, Dr. Bruce Banner. Like him, she transforms into a green, raging creature. Unlike him, she is able to retain her reason and personality while doing so.",
        title: "She-Hulk"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "A journalist who shouted This is a farewell kiss from the Iraqi people, you dog and hurled his footwear at the 43rd US president, who narrowly avoided the projectiles by ducking under his podium. A copper statue of the footwear was erected in Tikrit to commemorate the event.",
        title: "The guy who threw his shoes at George W. Bush"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "The subject of the book Heaven is for Real: A Little Boys Astounding Story of His Trip to Heaven and Back. He claims to have had visions of Jesus riding a rainbow-colored horse while in surgery. Skeptics claim that it was the result of hallucinations under anesthesia.",
        title: "Colton Burpo"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The Maid of Orleans and 15th century martyr who claimed God instructed her to take back France from the English. After predicting several military outcomes, she was given a substantial role in strategic decision-making. She was eventually captured and burned at the stake.",
        title: "Joan of Arc"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "A stock character in banal headlines from The Onion. He believes, for instance, that his Intelligence Probably Just Too Intimidating For Most Women, that he Could Eat, and that he is a Passionate Defender Of What He Imagines Constitution To Be.",
        title: "Area Man"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 3,
        description: "A thought experiment where this feline is both alive and dead due to quantum entanglement. It was originally used to critique an interpretation of quantum mechanics, but now appears often in popular culture, ranging from A Serious Man to Yu-Gi-Oh! GX.",
        title: "Schrddingers Cat"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "In gay culture, a person who tends to prefer the penetrating role, either in oral or anal sex. In a survey of nearly 56,000 profiles on gay.com, researchers found that 32% of US respondants preferred bottom, 42% preferred versatile, and 26% preferred this role.",
        title: "A Top"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "The Pumpkin King of Halloween Town from the film The Nightmare Before Christmas. He organizes all Halloween festivities and one year becomes obsessed with taking over Christmas as well. He appears as a gangly skeleton dressed ina pin-striped suit and bat bow tie.",
        title: "Jack Skellington"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 2,
        description: "The eponymous host of a childrens science show, who Bill Nye credited with creating a generation of US scientists. A popular YouTube supercut shows him being a dick to kids on the show, sarcastically asking questions like Havent you ever seen a sliced banana before?",
        title: "Mr. Wizard"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "A White House intern who had an affair with Bill Clinton during his second term. She famously kept a blue dress that had the presidents semen on it, which was used in an investigation that led to his impeachment. She later became a spokesperson for Jenny Craig.",
        title: "Monica Lewinsky"
    },
    {
        category: Category.ET_CETERA,
        points: 4,
        description: "In gay culture, a controversial term that sometimes refers to a partner who can receive penetration for a long time, sometimes to a partner who is looking for an especially well-endowed top, and sometimes to a partner who just prefers being a bottom.",
        title: "A Power Bottom"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "The moniker of Paul Yosemitebear Vasquez, a one-time MMA fighter (O-1) and YouTube star who reacts to prismatic light, noting that there are two of them and that they are so intense. As he breaks down into tears he asks What does this mean?",
        title: "Double Rainbow Guy"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The title character from a 1990 comedy about a detective who goes undercover at an elementary school and discovers his love of teaching. Played by Arnold Schwarzenegger, the film is famous for the line Its not a tumor! which he delivers in his thick Austrian accent.",
        title: "Kindergarten Cop"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "A doctor and euthanasia activist who was nicknamed Dr. Death during his trial for second-degree murder of terminally ill patients who sought his assistance. He was also a jazz flautist and composer, and released the aloum A Very Still Life on the label Lucid Subjazz in 1997.",
        title: "Jack Kevorkian"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "The internet name for Tardar Sauce, a feline who gained celebrity due to her permanently negative expression. Her owner attributes her appearance to feline dwarfism as well as an underbite. In 2013, she appeared on the front pages of The Wall Street Journal & NY Magazine.",
        title: "Grumpy Cat"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "A long-haired Italian model who posed for countless romance novel covers. He entered the realm of self-parody as the sookesman for | Cant Believe Its Not Butter. He also released an album of soliloquies on love and killed a seagull with his face while riding a roller coaster.",
        title: "Fabio"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "A teacher of alternative medicine and Transcendental Meditation, who mixes a vague understanding of physics with more standard new age practices. Arguably the worlds most famous guru, he has been referred to as the David Beckham of personal/spiritual growth.",
        title: "Deepak Chopra"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "A Japanese sushi master and subject of a 2011 documentary bearing his name. His 10-seat bar is one of the most difficult restaurants in the world to get a reservation, despite the 20-course tasting menu costing ¥30,000 (nearly $300) and being located in a Tokyo subway station.",
        title: "Jiro"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "An actor best known as Lieutenant Horatio Caine on the CBS series CSI: Miami. At the beginning of each show, he delivers a quippy one-liner while simultaneously putting on his trademark sunglasses before the show cuts to its theme song, Wont Get Fooled Again.",
        title: "David Caruso"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "A competitive eater best known for dethroning Kobayashi as the worlds top hot dog eater by using Kobayashis own strategies against him. As of 2014, he holds the world record of eating 69 hot dogs and buns (HDB). He also holds a similar record for deep fried asparagus.",
        title: "Joey Chestnut"
    },
    {
        category: Category.ET_CETERA,
        points: 2,
        description: "An octet that appears in the song The Twelve Days of Christmas, an English Christmas carol that lists a series of gifts given by my true love on each of those days. These individuals, who tend to dairy cows, are first presented on the eighth day of Christmas.",
        title: "8 Maids-a-Milking"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "An abusive husband whose wife cut off his penis. He made every effort to profit from the incident, starring in several porn movies centered around his reattached member and starting a band called The Severed Parts. He continued to abuse women in subsequent relationships.",
        title: "John Wayne Bobbitt"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "An actor known for his walrus-like white mustache and pronunciation of the word Diabetes. He played an old grump in Cocoon and several other films in the 80s. He was also a spokesperson for a range of old-people products, like Quaker Oats and Diabeetus supplies.",
        title: "Wilford Brimley"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "The creator of annoying anti-virus software, who in 2012 fled Belize for Guatemala under suspicion of murder. Vice Media accidentally gave away his location and he was deported to the US. He is often photographed shirtless with young women and assault weapons.",
        title: "John McAfee"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "A meme of the actor who played Noah in The Notebook and stomped onamans head until it exploded in Drive, showing him in deep thought with captions of Hey girl, followed by empowering yet seductive quips like Il stood with Wendy Davis, but I'd lie down anywhere with you.",
        title: "Feminist Ryan Gosling"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "An internet catchphrase that signals a person being like one of these, normally used after completing an activity with particular skill. The term originated in a song by Slim Thug and was featured ina subsequent parody version from the comedy group The Lonely Island.",
        title: "A Boss"
    },
    {
        category: Category.CELEBRITY,
        points: 1,
        description: "An overweight comedian known for his iconic roles on TV and film. He portrayed a guy who lives in a van down by the river, a fat guy ina little coat, and sometimes just a guy who falls down and breaks things. He died of a cocaine and morphine overdose at 33.",
        title: "Chris Farley"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 4,
        description: "A humanoid common in conspiracy theories about a race of shapeshifting lizard people who control governments around the world. On a 2011 radio show, Louis C.K. once repeatedly asked former US Secretary of Defense Donald Rumsfeld if he was one of these.",
        title: "A Reptilian"
    },
    {
        category: Category.CELEBRITY,
        points: 4,
        description: "An actor famous for his role in Chico and the Man as well as Stanley Kubricks 1980 horror film, where he plays the telepathic chef and erotic art connoisseur Dick Hallorann. Late in the film, he is killed by an axe blow to the chest by the psychopathic writer Jack Torrance.",
        title: "The black guy from The Shining (Scatman Crothers)"
    },
    {
        category: Category.ET_CETERA,
        points: 3,
        description: "A promotional model, often a scantily clad woman, who is paid to interact with potential costumers at conventions and other public events. Nintendo infamously demoed its 3DS console by chaining them to bikini-wearing members of this profession.",
        title: "A Booth Babe"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "A cat celebrity known for her oerma-kitten appearance, whose tongue hangs out because of a short lower jaw and toothlessness. Her appetite is unaffected. Her owner, Mike, studied reiki to care for her and calls her a fantastic waddler.",
        title: "Lil Bub"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "The title character of the cult classic TV show starring New Zealand actor Lucy Lawless. The show was a spinoff of Hercules: The Legendary Journeys and featured her weekly adventures and pursuit of the greater good in a mythological version of Ancient Greece.",
        title: "Xena, Warrior Princess"
    },
    {
        category: Category.HISTORICAL_FIGURE,
        points: 4,
        description: "A Supreme Court Justice known for her advocacy for womens rights and collection of jabots, a lace neck ruffle. She has a fervid online following, with tumblrs dedicated to images of her with captions such as Notorious and All them fives need to listen when a ten is talking.",
        title: "Ruth Bader Ginsburg"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 2,
        description: "Initially a villain in the McDonaldland universe, this purple monster was retconned as a loveable hero. He also appears in a meme featuring a crudely drawn version posing seductively and asking Ronald McDonald if he wants some McNuggies.",
        title: "Grimace"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "The pseudonym of a mysterious UK graffiti artist. His work uses stencils to depict satirical characters, often interacting with the environment. Though nominated for an Academy Award as a documentary, his film Exit Through the Gift Shop is now widely accepted as a hoax.",
        title: "Banksy"
    },
    {
        category: Category.CELEBRITY,
        points: 3,
        description: "An area of the head of the actor known for his roles in Gladiator, Walk the Line, and Im Still Here. In 2014, a video was uploaded to YouTube showing that the creases on the actors forehead, when viewed upside down, form a funny little face.",
        title: "Joaquin Phoenixs forehead"
    },
    {
        category: Category.CELEBRITY,
        points: 2,
        description: "A 2010 meme based on a photo of the actor known for his starring roles in Speed, Point Break, The Matrix, and other blockbusters. He is shown sitting on a bench by himself, eating a sandwich, and looking forlorn. The action figure of this comes in two sizes: Teeny and Little.",
        title: "Sad Keanu"
    },
    {
        category: Category.FICTIONAL_CHARACTER,
        points: 3,
        description: "The title character and Bond girl in the 13th film of the series. She leads a cephalopod cult and circus troupe from a floating palace in Udaipur, India, which is inexplicably part of an Afghan plot to force European disarmament by using a nuclear weapon.",
        title: "Octopussy"
    }
];

export default Cards;
