import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Textspeech from './TextSpeech';
import BotpressChat from './Botpress';

const ChapterDetail = () => {
  const { chapterNumber } = useParams(); // Get the chapter number from the URL
  const [slokas, setSlokas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    fetchSlokas();
  }, [chapterNumber]); // Fetch slokas whenever the chapterNumber changes

  const fetchSlokas = async () => {
    try {
      // Simulate API call with setTimeout
      setTimeout(() => {
        const allSlokas = [{
            "slokaNumber": 1,
            "chapterNumber": 1,
            "speaker": "Dhritarashtra",
            "language": "en",
            "sloka": "dhritarashtra uvacha\ndharma-kshetre kuru-kshetre samaveta yuyutsavah\nmamakah pandavashchaiva kimakurvata sanjaya",
            "meaning": "Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?"
          },
          {
            "slokaNumber": 2,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "sanjaya uvacha\ndrishtva tu pandavanikam vyudham duryodhanastada\nacharyamupasangamya raja vachanamabravit",
            "meaning": "Sanjay said: On observing the Pandava army standing in military formation, King Duryodhan approached his teacher Dronacharya, and said the following words."
          },
          {
            "slokaNumber": 3,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "pashyaitam pandu-putranam acharya mahatim chamum\nvyudham drupada-putrena tava shishyena dhimata",
            "meaning": "Duryodhan said: Respected teacher! Behold the mighty army of the sons of Pandu, so expertly arrayed for battle by your own gifted disciple, the son of Drupad."
          },
          {
            "slokaNumber": 4,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "atra shura maheshvasa bhimarjuna-sama yudhi\nyuyudhano viratashcha drupadashcha maha-rathah",
            "meaning": "Behold in their ranks are many powerful warriors, like Yuyudhan, Virat, and Drupad, wielding mighty bows and equal in military prowess to Bheem and Arjun. There are also accomplished heroes like Dhrishtaketu, Chekitan, the gallant King of Kashi, Purujit, Kuntibhoj, and Shaibya—all the best of men. In their ranks, they also have the courageous Yudhamanyu, the gallant Uttamauja, the son of Subhadra, and the sons of Draupadi, who are all great warrior chiefs."
          },
          {
            "slokaNumber": 5,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "dhrishtaketushchekitanah kashirajashcha viryavan\npurujit kuntibhojashcha shaibyashcha nara-pungavah",
            "meaning": "Behold in their ranks are many powerful warriors, like Yuyudhan, Virat, and Drupad, wielding mighty bows and equal in military prowess to Bheem and Arjun. There are also accomplished heroes like Dhrishtaketu, Chekitan, the gallant King of Kashi, Purujit, Kuntibhoj, and Shaibya—all the best of men. In their ranks, they also have the courageous Yudhamanyu, the gallant Uttamauja, the son of Subhadra, and the sons of Draupadi, who are all great warrior chiefs."
          },
          {
            "slokaNumber": 6,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "yudhamanyushcha vikranta uttamaujashcha viryavan\nsaubhadro draupadeyashcha sarva eva maha-rathah",
            "meaning": "Behold in their ranks are many powerful warriors, like Yuyudhan, Virat, and Drupad, wielding mighty bows and equal in military prowess to Bheem and Arjun. There are also accomplished heroes like Dhrishtaketu, Chekitan, the gallant King of Kashi, Purujit, Kuntibhoj, and Shaibya—all the best of men. In their ranks, they also have the courageous Yudhamanyu, the gallant Uttamauja, the son of Subhadra, and the sons of Draupadi, who are all great warrior chiefs."
          },
          {
            "slokaNumber": 7,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "asmakam tu vishishta ye tannibodha dwijottama\nnayaka mama sainyasya sanjnartham tanbravimi te",
            "meaning": "O best of Brahmins, hear too about the principal generals on our side, who are especially qualified to lead. These I now recount unto you."
          },
          {
            "slokaNumber": 8,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "bhavanbhishmashcha karnashcha kripashcha samitinjayah\nashvatthama vikarnashcha saumadattis tathaiva cha",
            "meaning": "There are personalities like yourself, Bheeshma, Karna, Kripa, Ashwatthama, Vikarn, and Bhurishrava, who are ever victorious in battle."
          },
          {
            "slokaNumber": 9,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "anye cha bahavah shura madarthe tyaktajivitah\nnana-shastra-praharanah sarve yuddha-visharadah",
            "meaning": "Also, there are many other heroic warriors, who are prepared to lay down their lives for my sake. They are all skilled in the art of warfare, and equipped with various kinds of weapons."
          },
          {
            "slokaNumber": 10,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "aparyaptam tadasmakam balam bhishmabhirakshitam\nparyaptam tvidametesham balam bhimabhirakshitam",
            "meaning": "The strength of our army is unlimited and we are safely marshalled by Grandsire Bheeshma, while the strength of the Pandava army, carefully marshalled by Bheem, is limited."
          },
          {
            "slokaNumber": 11,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "ayaneshu cha sarveshu yatha-bhagamavasthitah\nbhishmamevabhirakshantu bhavantah sarva eva hi",
            "meaning": "Therefore, I call upon all the generals of the Kaurava army now to give full support to Grandsire Bheeshma, even as you defend your respective strategic points."
          },
          {
            "slokaNumber": 12,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "tasya sanjanayan harsham kuru-vriddhah pitamahah\nsimha-nadam vinadyochchaih shankham dadhmau pratapavan",
            "meaning": "Then, the grand old man of the Kuru dynasty, the glorious patriarch Bheeshma, roared like a lion, and blew his conch shell very loudly, giving joy to Duryodhan."
          },
          {
            "slokaNumber": 13,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "tatah shankhashcha bheryashcha panavanaka-gomukhah\nsahasaivabhyahanyanta sa shabdastumulo ’bhavat",
            "meaning": "Thereafter, conches, kettledrums, bugles, trumpets, and horns suddenly blared forth, and their combined sound was overwhelming."
          },
          {
            "slokaNumber": 14,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "tatah shvetairhayairyukte mahati syandane sthitau\nmadhavah pandavashchaiva divyau shankhau pradadhmatuh",
            "meaning": "Then, from amidst the Pandava army, seated in a glorious chariot drawn by white horses, Madhav and Arjun blew their Divine conch shells."
          },
          {
            "slokaNumber": 15,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "panchajanyam hrishikesho devadattam dhananjayah\npaundram dadhmau maha-shankham bhima-karma vrikodarah",
            "meaning": "Hrishikesh blew his conch shell, called Panchajanya, and Arjun blew the Devadutta. Bheem, the voracious eater and performer of herculean tasks, blew his mighty conch, called Paundra."
          },
          {
            "slokaNumber": 16,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "anantavijayam raja kunti-putro yudhishthirah\nnakulah sahadevashcha sughosha-manipushpakau",
            "meaning": "King Yudhishthir, blew the Anantavijay, while Nakul and Sahadev blew the Sughosh and Manipushpak. The excellent archer and king of Kashi, the great warrior Shikhandi, Dhrishtadyumna, Virat, and the invincible Satyaki, Drupad, the five sons of Draupadi, and the mighty-armed Abhimanyu, son of Subhadra, all blew their respective conch shells, O Ruler of the earth."
          },
          {
            "slokaNumber": 17,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "kashyashcha parameshvasah shikhandi cha maha-rathah\ndhrishtadyumno viratashcha satyakish chaparajitah",
            "meaning": "King Yudhishthir, blew the Anantavijay, while Nakul and Sahadev blew the Sughosh and Manipushpak. The excellent archer and king of Kashi, the great warrior Shikhandi, Dhrishtadyumna, Virat, and the invincible Satyaki, Drupad, the five sons of Draupadi, and the mighty-armed Abhimanyu, son of Subhadra, all blew their respective conch shells, O Ruler of the earth."
          },
          {
            "slokaNumber": 18,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "drupado draupadeyashcha sarvashah prithivi-pate\nsaubhadrashcha maha-bahuh shankhandadhmuh prithak prithak",
            "meaning": "King Yudhishthir, blew the Anantavijay, while Nakul and Sahadev blew the Sughosh and Manipushpak. The excellent archer and king of Kashi, the great warrior Shikhandi, Dhrishtadyumna, Virat, and the invincible Satyaki, Drupad, the five sons of Draupadi, and the mighty-armed Abhimanyu, son of Subhadra, all blew their respective conch shells, O Ruler of the earth."
          },
          {
            "slokaNumber": 19,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "sa ghosho dhartarashtranam hridayani vyadarayat\nnabhashcha prithivim chaiva tumulo abhyanunadayan",
            "meaning": "The terrific sound thundered across the sky and the earth, and shattered the hearts of your sons, O Dhritarasthra."
          },
          {
            "slokaNumber": 20,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "atha vyavasthitan drishtva dhartarashtran kapi-dhwajah\npravritte shastra-sampate dhanurudyamya pandavah\nhrishikesham tada vakyam idam aha mahi-pate",
            "meaning": "At that time, the son of Pandu, Arjun, who had the insignia of Hanuman on the flag of his chariot, took up his bow. Seeing your sons arrayed against him, O King, Arjun then spoke the following words to Shree Krishna."
          },
          {
            "slokaNumber": 21,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "arjuna uvacha\nsenayor ubhayor madhye ratham sthapaya me ’chyuta",
            "meaning": "Arjun said: O Infallible One, please take my chariot to the middle of both armies, so that I may look at the warriors arrayed for battle, whom I must fight in this great combat."
          },
          {
            "slokaNumber": 22,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "yavadetan nirikshe ’ham yoddhu-kaman avasthitan\nkairmaya saha yoddhavyam asmin rana-samudyame",
            "meaning": "Arjun said: O Infallible One, please take my chariot to the middle of both armies, so that I may look at the warriors arrayed for battle, whom I must fight in this great combat."
          },
          {
            "slokaNumber": 23,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "yotsyamanan avekshe ’ham ya ete ’tra samagatah\ndhartarashtrasya durbuddher yuddhe priya-chikirshavah",
            "meaning": "I desire to see those who have come here to fight on the side of the evil-minded son of Dhritarasthra, wishing to please him."
          },
          {
            "slokaNumber": 24,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "sanjaya uvacha\nevam ukto hrishikesho gudakeshena bharata\nsenayor ubhayor madhye sthapayitva rathottamam",
            "meaning": "Sanjay said: O Dhritarasthra, having thus been addressed by Arjun, the conqueror of sleep, Shree Krishna then drew the magnificent chariot between the two armies."
          },
          {
            "slokaNumber": 25,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "bhishma-drona-pramukhatah sarvesham cha mahi-kshitam\nuvacha partha pashyaitan samavetan kurun iti",
            "meaning": "In the presence of Bheeshma, Dronacharya, and all the other kings, Shree Krishna said: O Parth, behold these Kurus gathered here."
          },
          {
            "slokaNumber": 26,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "tatrapashyat sthitan parthah pitrin atha pitamahan\nacharyan matulan bhratrin putran pautran sakhims tatha\nshvashuran suhridash chaiva senayor ubhayor api",
            "meaning": "There, Arjun could see stationed in both armies, his fathers, grandfathers, teachers, maternal uncles, brothers, cousins, sons, nephews, grand-nephews, friends, fathers-in-law, and well-wishers."
          },
          {
            "slokaNumber": 27,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "tan samikshya sa kaunteyah sarvan bandhun avasthitan\nkripaya parayavishto vishidann idam abravit",
            "meaning": "Seeing all his relatives present there, Arjun, the son of Kunti, was overwhelmed with compassion, and with deep sorrow, spoke the following words."
          },
          {
            "slokaNumber": 28,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "arjuna uvacha\ndrishtvemam sva-janam krishna yuyutsum samupasthitam\nsidanti mama gatrani mukham cha parishushyati",
            "meaning": "Arjun said: O Krishna, seeing my own kinsmen arrayed for battle here and intent on killing each other, my limbs are giving way and my mouth is drying up."
          },
          {
            "slokaNumber": 29,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "vepathush cha sharire me roma-harshash cha jayate",
            "meaning": "My whole body shudders; my hair is standing on end. My bow, the Gāṇḍīv, is slipping from my hand, and my skin is burning all over. My mind is in quandary and whirling in confusion; I am unable to hold myself steady any longer. O Krishna, killer of the Keshi demon, I only see omens of misfortune. I do not foresee how any good can come from killing my own kinsmen in this battle."
          },
          {
            "slokaNumber": 30,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "gandivam sramsate hastat tvak chaiva paridahyate\nna cha shaknomy avasthatum bhramativa cha me manah",
            "meaning": "gandivam sramsate hastat tvak chaiva paridahyate\nna cha shaknomy avasthatum bhramativa cha me manah"
          },
          {
            "slokaNumber": 31,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "nimittani cha pashyami viparitani keshava\nna cha shreyo ’nupashyami hatva sva-janam ahave",
            "meaning": "My whole body shudders; my hair is standing on end. My bow, the Gāṇḍīv, is slipping from my hand, and my skin is burning all over. My mind is in quandary and whirling in confusion; I am unable to hold myself steady any longer. O Krishna, killer of the Keshi demon, I only see omens of misfortune. I do not foresee how any good can come from killing my own kinsmen in this battle"
          },
          {
            "slokaNumber": 32,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "na kāṅkṣhe vijayaṁ kṛiṣhṇa na cha rājyaṁ sukhāni cha\nkiṁ no rājyena govinda kiṁ bhogair jīvitena vā",
            "meaning": "O Krishna, I do not desire victory, kingdom, or the happiness accruing to it. Of what avail will be a kingdom, pleasures, or even life itself, when the very persons for whom we covet them, are standing before us for battle?"
          },
          {
            "slokaNumber": 33,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "yesham arthe kankshitam no rajyam bhogah sukhani cha\nta ime ’vasthita yuddhe pranams tyaktva dhanani cha",
            "meaning": "O Krishna, I do not desire victory, kingdom, or the happiness accruing to it. Of what avail will be a kingdom, pleasures, or even life itself, when the very persons for whom we covet them, are standing before us for battle?"
          },
          {
            "slokaNumber": 34,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "acharyah pitarah putras tathaiva cha pitamahah\nmatulah shvashurah pautrah shyalah sambandhinas tatha",
            "meaning": "Teachers, fathers, sons, grandfathers, maternal uncles, grandsons, fathers-in-law, grand-nephews, brothers-in-law, and other kinsmen are present here, staking their lives and riches. O Madhusudan, I do not wish to slay them, even if they attack me. If we kill the sons of Dhritarashtra, what satisfaction will we derive from the dominion over the three worlds, what to speak of this Earth?"
          },
          {
            "slokaNumber": 35,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "etan na hantum ichchhami ghnato ’pi madhusudana\napi trailokya-rajyasya hetoh kim nu mahi-krite",
            "meaning": "Teachers, fathers, sons, grandfathers, maternal uncles, grandsons, fathers-in-law, grand-nephews, brothers-in-law, and other kinsmen are present here, staking their lives and riches. O Madhusudan, I do not wish to slay them, even if they attack me. If we kill the sons of Dhritarashtra, what satisfaction will we derive from the dominion over the three worlds, what to speak of this Earth?"
          },
          {
            "slokaNumber": 36,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "nihatya dhartarashtran nah ka pritih syaj janardana\npapam evashrayed asman hatvaitan atatayinah",
            "meaning": "O Maintainer of all living entities, what pleasure will we derive from killing the sons of Dhritarasthra? Even though they may be aggressors, sin will certainly come upon us if we slay them. Hence, it does not behoove us to kill our own cousins, the sons of Dhritarashtra, and friends. O Madhav (Krishna), how can we hope to be happy by killing our own kinsmen?"
          },
          {
            "slokaNumber": 37,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "tasman narha vayam hantum dhartarashtran sa-bandhavan\nsva-janam hi katham hatva sukhinah syama madhava",
            "meaning": "O Maintainer of all living entities, what pleasure will we derive from killing the sons of Dhritarasthra? Even though they may be aggressors, sin will certainly come upon us if we slay them. Hence, it does not behoove us to kill our own cousins, the sons of Dhritarashtra, and friends. O Madhav (Krishna), how can we hope to be happy by killing our own kinsmen?"
          },
          {
            "slokaNumber": 38,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "yady apy ete na pashyanti lobhopahata-chetasah\nkula-kshaya-kritam dosham mitra-drohe cha patakam",
            "meaning": "Their thoughts are overpowered by greed and they see no wrong in annihilating their relatives or wreaking treachery upon friends. Yet, O Janardan (Krishna), why should we, who can clearly see the crime in killing our kindred, not turn away from this sin?"
          },
          {
            "slokaNumber": 39,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "katham na jneyam asmabhih papad asman nivartitum\nkula-kshaya-kritam dosham prapashyadbhir janardana",
            "meaning": "Their thoughts are overpowered by greed and they see no wrong in annihilating their relatives or wreaking treachery upon friends. Yet, O Janardan (Krishna), why should we, who can clearly see the crime in killing our kindred, not turn away from this sin?"
          },
          {
            "slokaNumber": 40,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "kula-kshaye pranashyanti kula-dharmah sanatanah\ndharme nashte kulam kritsnam adharmo ’bhibhavaty uta",
            "meaning": "When a dynasty is destroyed, its traditions get vanquished, and the rest of the family becomes involved in irreligion."
          },
          {
            "slokaNumber": 41,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "adharmabhibhavat krishna pradushyanti kula-striyah\nstrishu dushtasu varshneya jayate varna-sankarah",
            "meaning": "With the preponderance of vice, O Krishna, the women of the family become immoral; and from the immorality of women, O descendent of Vrishni, unwanted progeny are born."
          },
          {
            "slokaNumber": 42,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "sankaro narakayaiva kula-ghnanam kulasya cha\npatanti pitaro hy esham lupta-pindodaka-kriyah",
            "meaning": "An increase in unwanted children results in hellish life both for the family and for those who destroy the family. Deprived of sacrificial offerings, the ancestors of such corrupt families also fall."
          },
          {
            "slokaNumber": 43,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "doshair etaih kula-ghnanam varna-sankara-karakaih\nutsadyante jati-dharmah kula-dharmash cha shashvatah",
            "meaning": "Through the evil deeds of those who destroy the family tradition and thus give rise to unwanted progeny, a variety of social and family welfare activities are ruined."
          },
          {
            "slokaNumber": 44,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "utsanna-kula-dharmanam manushyanam janardana\nnarake ‘niyatam vaso bhavatityanushushruma",
            "meaning": "O Janardan (Krishna), I have heard from the learned that those who destroy family traditions dwell in hell for an indefinite period of time."
          },
          {
            "slokaNumber": 45,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "aho bata mahat papam kartum vyavasita vayam\nyad rajya-sukha-lobhena hantum sva-janam udyatah",
            "meaning": "Alas! How strange it is that we have set our mind to perform this great sin with horrifying consequences. Driven by the desire for kingly pleasures, we are intent on killing our own kinsmen. It would be better if, with weapons in hand, the sons of Dhritarashtra kill me unarmed and unresisting on the battlefield."
          },
          {
            "slokaNumber": 46,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "en",
            "sloka": "yadi mam apratikaram ashastram shastra-panayah\ndhartarashtra rane hanyus tan me kshemataram bhavet",
            "meaning": "Alas! How strange it is that we have set our mind to perform this great sin with horrifying consequences. Driven by the desire for kingly pleasures, we are intent on killing our own kinsmen. It would be better if, with weapons in hand, the sons of Dhritarashtra kill me unarmed and unresisting on the battlefield."
          },
          {
            "slokaNumber": 47,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "en",
            "sloka": "sanjaya uvacha\nevam uktvarjunah sankhye rathopastha upavishat\nvisrijya sa-sharam chapam shoka-samvigna-manasah",
            "meaning": "Sanjay said: Speaking thus, Arjun cast aside his bow and arrows, and sank into the seat of his chariot, his mind in distress and overwhelmed with grief."
          },
          {
            "slokaNumber": 1,
            "chapterNumber": 1,
            "speaker": "Dhritarashtra",
            "language": "te",
            "sloka": "ధర్మక్షేత్రే కురుక్షేత్రే సమవేతా యుయుత్సవః ।\nమామకాః పాండవాశ్చైవ కిమకుర్వత సంజయ ।।",
            "meaning": "ధృతరాష్ట్రుడు పలికెను: ఓ సంజయా, ధర్మభూమి అయిన కురుక్షేత్రంలో కూడియుండి, మరియు యుద్ధ కాంక్షతో ఉన్న నా పుత్రులు మరియు పాండు పుత్రులు ఏమి చేసిరి?"
          },
          {
            "slokaNumber": 2,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "సంజయ ఉవాచ ।\nదృష్ట్వా తు పాండవానీకం వ్యూఢం దుర్యోధనస్తదా ।\nఆచార్యముపసంగమ్య రాజా వచనమబ్రవీత్ ।।",
            "meaning": "సంజయుడు పలికెను: సైనిక వ్యూహాత్మకంగా నిలిపి ఉన్న పాండవ సైన్యాన్ని చూచిన దుర్యోధనుడు తన గురువు ద్రోణాచార్యుడిని సమీపించి, ఈ విధంగా పలికెను."
          },
          {
            "slokaNumber": 3,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "పశ్యైతాం పాండుపుత్రాణామ్ ఆచార్య మహతీం చమూమ్ ।\nవ్యూఢాం ద్రుపదపుత్రేణ తవ శిష్యేణ ధీమతా ।।",
            "meaning": "దుర్యోధనుడు అన్నాడు: గౌరవనీయులైన గురువర్యా! ద్రుపదుని పుత్రుడైన, ప్రతిభావంతుడైన మీ శిష్యుడిచే అత్యంత వ్యూహాత్మకంగా నిలుపబడిన ఈ పాండవుల మహా సైన్యాన్ని చూడుము."
          },
          {
            "slokaNumber": 4,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "అత్ర శూరా మహేష్వాసా భీమార్జునసమా యుధి ।\nయుయుధానో విరాటశ్చ ద్రుపదశ్చ మహారథః ।।",
            "meaning": "వారి పక్షాన సైన్యంలో ఉన్న ఎంతోమంది శక్తివంతమైన యోధులను వీక్షించండి - యుయుధానుడు, విరాటుడు, మరియు ద్రుపదుడు వంటివారు గొప్ప ధనుస్సులను ధరించి ఉన్నారు మరియు వారు యుద్ధ శౌర్యంలో భీమార్జునులతో సమానమైన వారు. అక్కడున్న పరాక్రమవంతులైన ధృష్టకేతుడు, చేకితానుడు, వీరుడైన కాశీరాజు, పురుజిత్తు, కుంతిభోజుడు మరియు శైబ్యుడు - వీరందరూ ఉత్తమ పురుషులే. వారి సైన్యంలో ఇంకా, ధైర్యశాలి యుధామన్యుడు, వీరుడైన ఉత్తమౌజుడు, సుభద్ర కుమారుడు, మరియు ద్రౌపదీ పుత్రులు ఉన్నారు, వీరందరూ శ్రేష్ఠమైన యుద్ధ వీరులే."
          },
          {
            "slokaNumber": 5,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "ధృష్టకేతుశ్చేకితానః కాశిరాజశ్చ వీర్యవాన్ ।\nపురుజిత్ కుంతిభోజశ్చ శైబ్యశ్చ నరపుంగవః ।।",
            "meaning": "వారి పక్షాన సైన్యంలో ఉన్న ఎంతోమంది శక్తివంతమైన యోధులను వీక్షించండి - యుయుధానుడు, విరాటుడు, మరియు ద్రుపదుడు వంటివారు గొప్ప ధనుస్సులను ధరించి ఉన్నారు మరియు వారు యుద్ధ శౌర్యంలో భీమార్జునులతో సమానమైన వారు. అక్కడున్న పరాక్రమవంతులైన ధృష్టకేతుడు, చేకితానుడు, వీరుడైన కాశీరాజు, పురుజిత్తు, కుంతిభోజుడు మరియు శైబ్యుడు - వీరందరూ ఉత్తమ పురుషులే. వారి సైన్యంలో ఇంకా, ధైర్యశాలి యుధామన్యుడు, వీరుడైన ఉత్తమౌజుడు, సుభద్ర కుమారుడు, మరియు ద్రౌపదీ పుత్రులు ఉన్నారు, వీరందరూ శ్రేష్ఠమైన యుద్ధ వీరులే."
          },
          {
            "slokaNumber": 6,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "యుధామన్యుశ్చ విక్రాంత ఉత్తమౌజాశ్చ వీర్యవాన్ ।\nసౌభద్రో ద్రౌపదేయాశ్చ సర్వ ఏవ మహారథాః ।।",
            "meaning": "వారి పక్షాన సైన్యంలో ఉన్న ఎంతోమంది శక్తివంతమైన యోధులను వీక్షించండి - యుయుధానుడు, విరాటుడు, మరియు ద్రుపదుడు వంటివారు గొప్ప ధనుస్సులను ధరించి ఉన్నారు మరియు వారు యుద్ధ శౌర్యంలో భీమార్జునులతో సమానమైన వారు. అక్కడున్న పరాక్రమవంతులైన ధృష్టకేతుడు, చేకితానుడు, వీరుడైన కాశీరాజు, పురుజిత్తు, కుంతిభోజుడు మరియు శైబ్యుడు - వీరందరూ ఉత్తమ పురుషులే. వారి సైన్యంలో ఇంకా, ధైర్యశాలి యుధామన్యుడు, వీరుడైన ఉత్తమౌజుడు, సుభద్ర కుమారుడు, మరియు ద్రౌపదీ పుత్రులు ఉన్నారు, వీరందరూ శ్రేష్ఠమైన యుద్ధ వీరులే."
          },
          {
            "slokaNumber": 7,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "అస్మాకం తు విశిష్టా యే తాన్నిబోధ ద్విజోత్తమ ।\nనాయకా మమ సైన్యస్య సంజ్ఞార్థం తాన్ బ్రవీమి తే ।।",
            "meaning": "ఓ బ్రాహ్మణోత్తమా, మన పక్షంలో ఉన్న ప్రధాన యోధుల గురించి కూడా వినుము, వీరు నాయకులుగా అత్యంత యోగ్యమైన వారు. మీ ఎఱుకకై ఇప్పుడు వీరి గురించి తెలుపుచున్నాను."
          },
          {
            "slokaNumber": 8,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "భవాన్ భీష్మశ్చ కర్ణశ్చ కృపశ్చ సమితింజయః ।\nఅశ్వత్థామా వికర్ణశ్చ సౌమదత్తిస్తథైవ చ ।।",
            "meaning": "మీరును, భీష్ముడు, కర్ణుడు, కృపాచార్యుడు, అశ్వత్థామ, వికర్ణుడు మరియు భూరిశ్రవుడు - వీరందరూ ఎప్పటికీ యుద్ధములో విజయులే."
          },
          {
            "slokaNumber": 9,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "అన్యే చ బహవః శూరా మదర్థే త్యక్తజీవితాః ।\nనానాశస్త్ర ప్రహరణాః సర్వే యుద్ధవిశారదాః ।।",
            "meaning": "ఇంకా చాలా మంది వీరయోధులు కూడా నా కోసం ప్రాణాలు అర్పించటానికి సిద్దంగా వున్నారు. వీరందరూ యుద్ధవిద్యలో ప్రావీణ్యం కలవారు మరియు అనేక రకములైన ఆయుధములను కలిగిఉన్నారు."
          },
          {
            "slokaNumber": 10,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "అపర్యాప్తం తదస్మాకం బలం భీష్మాభిరక్షితమ్।\nపర్యాప్తం త్విదమేతేషాం బలం భీమాభిరక్షితం ।।",
            "meaning": "మన సైనిక బలం అపరిమితమైనది, మరియు మనం భీష్మ పితామహుడిచే రక్షింపబడుతున్నాము, కానీ, భీముడిచే జాగ్రత్తగా ఏర్పాటుచేయబడి రక్షింపబడుచున్న పాండవ సైన్యం, పరిమితమైనది."
          },
          {
            "slokaNumber": 11,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "అయనేషు చ సర్వేషు యథాభాగమవస్థితాః ।\nభీష్మమేవాభిరక్షంతు భవంతః సర్వ ఏవ హి ।।",
            "meaning": "కావున, కౌరవ సేనానాయకులందరికీ, మీ మీ వ్యూహాత్మక స్థానాలను పరిరక్షిస్తూ భీష్మ పితామహుడికి పూర్తి సహకారం అందించమని పిలుపునిస్తున్నాను."
          },
          {
            "slokaNumber": 12,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "తస్య సంజనయన్హర్షం కురువృద్ధః పితామహః ।\nసింహనాదం వినద్యోచ్చైః శంఖం దధ్మౌ ప్రతాపవాన్ ।।",
            "meaning": "అప్పుడు, కురువృద్ధుడు, మహోన్నత మూలపురుషుడైన భీష్మ పితామహుడు, సింహంలా గర్జించాడు, మరియు తన శంఖాన్ని పెద్ద శబ్దంతో పూరిస్తూ, దుర్యోధనుడికి హర్షమును కలుగచేసెను."
          },
          {
            "slokaNumber": 13,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "తతః శంఖాశ్చ భేర్యశ్చ పణవానకగోముఖాః ।\nసహసైవాభ్యహన్యంత స శబ్దస్తుములోఽభవత్ ।।",
            "meaning": "ఆ తరువాత, శంఖములు, డోళ్ళు, ఢంకాలు, భేరీలు, మరియు కొమ్ము వాయిద్యములు ఒక్కసారిగా మ్రోగినవి, మరియు వాటన్నిటి కలిసిన శబ్దం భయానకముగా ఉండెను."
          },
          {
            "slokaNumber": 14,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "తతః శ్వేతైర్హయైర్యుక్తే మహతి స్యందనే స్థితౌ ।\nమాధవః పాండవశ్చైవ దివ్యౌ శంఖౌ ప్రదధ్మతుః ।।",
            "meaning": "ఆ తరువాత, పాండవ సైన్యం మధ్యలోనుండి, తెల్లని గుఱ్ఱములు పూన్చి ఉన్న ఒక అద్భుతమైన రథంలో కూర్చుని ఉన్న, మాధవుడు మరియు అర్జునుడు తమ దివ్య శంఖములను పూరించారు."
          },
          {
            "slokaNumber": 15,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "పాంచజన్యం హృషీకేశో దేవదత్తం ధనంజయః ।\nపౌండ్రం దధ్మౌ మహాశంఖం భీమకర్మా వృకోదరః ।।",
            "meaning": "హృషీకేశుడు, పాంచజన్యం అనబడే శంఖాన్ని పూరించాడు, మరియు అర్జునుడు దేవదత్తాన్ని పూరించాడు. గొప్పగా భుజించే వాడు, అత్యంత కష్టసాధ్యకార్యములను చేయునట్టి భీముడు, పౌండ్రం అనబడే బ్రహ్మాండమైన శంఖమును పూరించెను."
          },
          {
            "slokaNumber": 16,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "అనంతవిజయం రాజా కుంతీపుత్రో యుధిష్ఠిరః ।\nనకులః సహదేవశ్చ సుఘోషమణిపుష్పకౌ ।।",
            "meaning": "ఓ భూమండలాన్ని పాలించేవాడా! యుధిష్ఠిర మహారాజు అనంతవిజయాన్ని పూరించాడు, నకుల సహదేవులు, సుఘోష మణిపుష్పకములను పూరించారు. గొప్ప విలుకాడైన కాశీ రాజు, మహారథుడైన శిఖండి, ధృష్టద్యుమ్నుడు, విరాటుడు, మరియు అజేయుడైన సాత్యకి, ద్రుపదుడు, ద్రౌపది యొక్క ఐదుగురు కుమారులు, మరియు భుజబలము కలవాడు, సుభద్రా పుత్రుడు అయిన అభిమన్యుడు, వీరందరూ తమ తమ శంఖములను పూరించారు."
          },
          {
            "slokaNumber": 17,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "కాశ్యశ్చ పరమేష్వాసః శిఖండీ చ మహారథః ।\nధృష్టద్యుమ్నో విరాటశ్చ సాత్యకిశ్చాపరాజితః ।।",
            "meaning": "ఓ భూమండలాన్ని పాలించేవాడా! యుధిష్ఠిర మహారాజు అనంతవిజయాన్ని పూరించాడు, నకుల సహదేవులు, సుఘోష మణిపుష్పకములను పూరించారు. గొప్ప విలుకాడైన కాశీ రాజు, మహారథుడైన శిఖండి, ధృష్టద్యుమ్నుడు, విరాటుడు, మరియు అజేయుడైన సాత్యకి, ద్రుపదుడు, ద్రౌపది యొక్క ఐదుగురు కుమారులు, మరియు భుజబలము కలవాడు, సుభద్రా పుత్రుడు అయిన అభిమన్యుడు, వీరందరూ తమ తమ శంఖములను పూరించారు."
          },
          {
            "slokaNumber": 18,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "ద్రుపదో ద్రౌపదేయాశ్చ సర్వశః పృథివీపతే ।\nసౌభద్రశ్చ మహాబాహుః శంఖాన్ దధ్ముః పృథక్ పృథక్ ।।",
            "meaning": "ఓ భూమండలాన్ని పాలించేవాడా! యుధిష్ఠిర మహారాజు అనంతవిజయాన్ని పూరించాడు, నకుల సహదేవులు, సుఘోష మణిపుష్పకములను పూరించారు. గొప్ప విలుకాడైన కాశీ రాజు, మహారథుడైన శిఖండి, ధృష్టద్యుమ్నుడు, విరాటుడు, మరియు అజేయుడైన సాత్యకి, ద్రుపదుడు, ద్రౌపది యొక్క ఐదుగురు కుమారులు, మరియు భుజబలము కలవాడు, సుభద్రా పుత్రుడు అయిన అభిమన్యుడు, వీరందరూ తమ తమ శంఖములను పూరించారు."
          },
          {
            "slokaNumber": 19,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "స ఘోషో ధార్తరాష్ట్రాణాం హృదయాని వ్యదారయత్ ।\nనభశ్చ పృథివీం చైవ తుములోఽభ్యనునాదయన్ ।।",
            "meaning": "ఓ ధృతరాష్ట్రా, ఆ భీకరమైన శబ్దానికి భూమ్యాకాశములు దద్దరిల్లెను; అది మీ తనయుల హృదయాలను బ్రద్దలు చేసెను."
          },
          {
            "slokaNumber": 20,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "అథ వ్యవస్థితాన్ దృష్ట్వా ధార్తరాష్ట్రాన్ కపిధ్వజః ।\nప్రవృత్తే శస్త్రసంపాతే ధనురుద్యమ్య పాండవః ।।\nహృషీకేశం తదా వాక్యమిదమాహ మహీపతే ।",
            "meaning": "ఆ సమయంలో, తన రథం జెండాపై హనుమంతుని చిహ్నం కలిగివున్న పాండుపుత్రుడు అర్జునుడు, తన ధనుస్సుని తీసుకున్నాడు. సమరానికి ఎదురుగా నిలిచిఉన్న మీ పుత్రులను చూసి, ఓ రాజా, అర్జునుడు శ్రీకృష్ణుడితో ఇలా అన్నాడు."
          },
          {
            "slokaNumber": 21,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "అర్జున ఉవాచ ।\nసేనయోరుభయోర్మధ్యే రథం స్థాపయ మేఽచ్యుత ।।",
            "meaning": "అర్జునుడు ఇలా అన్నాడు: ఓ అచ్యుతా (శ్రీకృష్ణా), దయచేసి నా రథాన్ని రెండు సైన్యాల మధ్యకి తీసుకువెళ్ళుము. ఈ మహా పోరాటంలో, రణరంగంలో నిలిచియున్న ఎవరెవరితో యుద్ధం చేయవలసి ఉన్నదో నేను చూడాలి."
          },
          {
            "slokaNumber": 22,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "యావదేతాన్ నిరీక్షేఽహం యోద్ధుకామానవస్థితాన్ ।\nకైర్మయా సహ యోద్ధవ్యమ్ అస్మిన్ రణసముద్యమే ।।",
            "meaning": "అర్జునుడు ఇలా అన్నాడు: ఓ అచ్యుతా (శ్రీకృష్ణా), దయచేసి నా రథాన్ని రెండు సైన్యాల మధ్యకి తీసుకువెళ్ళుము. ఈ మహా పోరాటంలో, రణరంగంలో నిలిచియున్న ఎవరెవరితో యుద్ధం చేయవలసి ఉన్నదో నేను చూడాలి."
          },
          {
            "slokaNumber": 23,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "యోత్స్యమానానవేక్షేఽహం య ఏతేఽత్ర సమాగతాః ।\nధార్తరాష్ట్రస్య దుర్బుద్ధేః యుద్ధే ప్రియచికీర్షవః ।।",
            "meaning": "దుర్బుద్ధిగల ధృతరాష్ట్రుని పుత్రున్ని సంతోషపెట్టడం కొరకు అతని పక్షాన యుద్ధానికి వచ్చియున్న అందరిని ఒకసారి నాకు చూడాలనిపిస్తున్నది."
          },
          {
            "slokaNumber": 24,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "సంజయ ఉవాచ ।\nఏవముక్తో హృషీకేశో గుడాకేశేన భారత ।\nసేనయోరుభయోర్మధ్యే స్థాపయిత్వా రథోత్తమమ్ ।।",
            "meaning": "సంజయుడు ఇలా అన్నాడు: ఓ ధృతరాష్ట్రా, ఈ విధంగా, నిద్రని జయించినవాడైన, అర్జునుడు కోరిన విధంగా, శ్రీ కృష్ణుడు ఆ వైభవోపేతమైన రథమును రెండు సైన్యముల మధ్యకు నడిపించి నిలిపెను."
          },
          {
            "slokaNumber": 25,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "భీష్మద్రోణప్రముఖతః సర్వేషాం చ మహీక్షితామ్ ।\nఉవాచ పార్థ పశ్యైతాన్ సమవేతాన్ కురూనితి ।।",
            "meaning": "భీష్ముడు, ద్రోణాచార్యుడు, మరియు ఇతర రాజుల సమక్షంలో, శ్రీ కృష్ణుడు ఇలా అన్నాడు: ఓ పార్థా, ఇక్కడ కూడి ఉన్న కురు వంశస్థులను చూడుము."
          },
          {
            "slokaNumber": 26,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "తత్రాపశ్యత్ స్థితాన్ పార్థః పితౄనథ పితామహాన్ ।\nఆచార్యాన్మాతులాన్భ్రాతౄన్ పుత్రాన్ పౌత్రాన్ సఖీంస్తథా ।।\nశ్వశురాన్ సుహృదశ్చైవ సేనయోరుభయోరపి ।",
            "meaning": "అక్కడ, రెండు సైన్యములలోనూ ఉన్న తన తండ్రులను, తాతలను, గురువులను, మేనమామలను, సోదరులను, దాయాదులను, పుత్రులను, మనుమలను, మిత్రులను, మేనల్లుళ్లను, మరియు శ్రేయోభిలాషులను అర్జునుడు చూచెను."
          },
          {
            "slokaNumber": 27,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "తాన్ సమీక్ష్య స కౌంతేయః సర్వాన్ బంధూనవస్థితాన్ ।।\nకృపయా పరయావిష్టో విషీదన్నిదమబ్రవీత్ ।",
            "meaning": "అక్కడున్న తన బంధువులందరినీ చూసిన కుంతీ పుత్రుడు అర్జునుడు, కారుణ్య భావం ఉప్పొంగినవాడై, తీవ్ర దుఃఖంతో ఈ విధంగా పలికెను."
          },
          {
            "slokaNumber": 28,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "అర్జున ఉవాచ ।\nదృష్ట్వేమం స్వజనం కృష్ణ యుయుత్సుం సముపస్థితమ్ ।।\nసీదంతి మమ గాత్రాణి ముఖం చ పరిశుష్యతి ।",
            "meaning": "అర్జునుడు ఇలా అన్నాడు: ఓ కృష్ణా, యుద్ధానికి బారులు తీరి ఒకరినొకరు చంపుకోటానికి పూనుకుంటున్న నా బంధువులను చూసి, నా అవయవాలు పట్టు తప్పుతున్నాయి మరియు నా నోరు ఎండిపోవుచున్నది."
          },
          {
            "slokaNumber": 29,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "వేపథుశ్చ శరీరే మే రోమహర్షశ్చ జాయతే ।।",
            "meaning": "నా శరీరమంతా వణుకుచున్నది; నా వెంట్రుకలు నిక్కబొడుచుకుంటున్నాయి. నా విల్లు, గాండీవం, చేజారిపోతున్నది, మరియు నా చర్మమంతా మండిపోవుచున్నది. నా మనస్సు ఏమీ తోచని స్థితిలో అయోమయంగా తిరుగుతున్నది; ఇక నన్ను నేను స్థిరంగా ఉంచుకోలేకపోతున్నాను. ఓ కృష్ణా, కేశి రాక్షసుడను సంహరించినవాడా, అంతటా అశుభ శకునములే కనపడుతున్నాయి. ఈ యుద్ధంలో సొంత బంధువులనే చంపుకోవటం వలన, మంచి ఎలా కలుగుతుందో నేను చూడలేకున్నాను."
          },
          {
            "slokaNumber": 30,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "గాండీవం స్రంసతే హస్తాత్ త్వక్చైవ పరిదహ్యతే ।\nన చ శక్నోమ్యవస్థాతుం భ్రమతీవ చ మే మనః ।।",
            "meaning": "నా శరీరమంతా వణుకుచున్నది; నా వెంట్రుకలు నిక్కబొడుచుకుంటున్నాయి. నా విల్లు, గాండీవం, చేజారిపోతున్నది, మరియు నా చర్మమంతా మండిపోవుచున్నది. నా మనస్సు ఏమీ తోచని స్థితిలో అయోమయంగా తిరుగుతున్నది; ఇక నన్ను నేను స్థిరంగా ఉంచుకోలేకపోతున్నాను. ఓ కృష్ణా, కేశి రాక్షసుడను సంహరించినవాడా, అంతటా అశుభ శకునములే కనపడుతున్నాయి. ఈ యుద్ధంలో సొంత బంధువులనే చంపుకోవటం వలన, మంచి ఎలా కలుగుతుందో నేను చూడలేకున్నాను."
          },
          {
            "slokaNumber": 31,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "నిమిత్తాని చ పశ్యామి విపరీతాని కేశవ ।\nన చ శ్రేయోఽనుపశ్యామి హత్వా స్వజనమాహవే ।।",
            "meaning": "నా శరీరమంతా వణుకుచున్నది; నా వెంట్రుకలు నిక్కబొడుచుకుంటున్నాయి. నా విల్లు, గాండీవం, చేజారిపోతున్నది, మరియు నా చర్మమంతా మండిపోవుచున్నది. నా మనస్సు ఏమీ తోచని స్థితిలో అయోమయంగా తిరుగుతున్నది; ఇక నన్ను నేను స్థిరంగా ఉంచుకోలేకపోతున్నాను. ఓ కృష్ణా, కేశి రాక్షసుడను సంహరించినవాడా, అంతటా అశుభ శకునములే కనపడుతున్నాయి. ఈ యుద్ధంలో సొంత బంధువులనే చంపుకోవటం వలన, మంచి ఎలా కలుగుతుందో నేను చూడలేకున్నాను."
          },
          {
            "slokaNumber": 32,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "న కాంక్షే విజయం కృష్ణ న చ రాజ్యం సుఖాని చ ।\nకిం నో రాజ్యేన గోవింద కిం భోగైర్జీవితేన వా ।।",
            "meaning": "ఓ కృష్ణా, నాకు విజయం కానీ, రాజ్యం కానీ, వాటివల్ల వచ్చే సుఖం కానీ అక్కరలేదు. మనం ఎవరికోసమైతే ఇదంతా కోరుకుంటున్నామో వారే మన ఎదురుగా యుద్ధం కోసం ఉన్నప్పుడు, రాజ్యంతో కానీ, సుఖాల వలన కానీ, ఇక ఈ జీవితం వల్ల కానీ ప్రయోజనం ఏముంది?"
          },
          {
            "slokaNumber": 33,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "యేషామర్థే కాంక్షితం నో రాజ్యం భోగాః సుఖాని చ ।\nత ఇమేఽవస్థితా యుద్ధే ప్రాణాంస్త్యక్త్వా ధనాని చ ।।",
            "meaning": "ఓ కృష్ణా, నాకు విజయం కానీ, రాజ్యం కానీ, వాటివల్ల వచ్చే సుఖం కానీ అక్కరలేదు. మనం ఎవరికోసమైతే ఇదంతా కోరుకుంటున్నామో వారే మన ఎదురుగా యుద్ధం కోసం ఉన్నప్పుడు, రాజ్యంతో కానీ, సుఖాల వలన కానీ, ఇక ఈ జీవితం వల్ల కానీ ప్రయోజనం ఏముంది?"
          },
          {
            "slokaNumber": 34,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "ఆచార్యాః పితరః పుత్రాస్తథైవ చ పితామహాః ।\nమాతులాః శ్వశురాః పౌత్రాః శ్యాలాః సంబంధినస్తథా ।।",
            "meaning": "గురువులు, తండ్రులు, కొడుకులు, తాతలు, మేనమామలు, మనుమలు, మామలు, బావ మరుదులు, ఇంకా ఇతర బంధువులు, వీరందరూ తమ ప్రాణాలను, ధనాన్ని పణంగా పెట్టి మరీ, ఇక్కడ చేరి వున్నారు. ఓ మధుసూదనా, నా మీద వారు దాడి చేసిననూ నేను వారిని సంహరింపను. ధృతరాష్ట్రుని పుత్రులను సంహరించిననూ, ఈ భూ-మండలమే కాదు, ముల్లోకములపై ఆధిపత్యం సాధించినా సరే, ఏం తృప్తి ఉంటుంది మనకు?"
          },
          {
            "slokaNumber": 35,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "ఏతాన్న హంతుమిచ్ఛామి ఘ్నతోఽపి మధుసూదన ।\nఅపి త్రైలోక్యరాజ్యస్య హేతోః కిం ను మహీకృతే ।।",
            "meaning": "గురువులు, తండ్రులు, కొడుకులు, తాతలు, మేనమామలు, మనుమలు, మామలు, బావ మరుదులు, ఇంకా ఇతర బంధువులు, వీరందరూ తమ ప్రాణాలను, ధనాన్ని పణంగా పెట్టి మరీ, ఇక్కడ చేరి వున్నారు. ఓ మధుసూదనా, నా మీద వారు దాడి చేసిననూ నేను వారిని సంహరింపను. ధృతరాష్ట్రుని పుత్రులను సంహరించిననూ, ఈ భూ-మండలమే కాదు, ముల్లోకములపై ఆధిపత్యం సాధించినా సరే, ఏం తృప్తి ఉంటుంది మనకు?"
          },
          {
            "slokaNumber": 36,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "నిహత్య ధార్తరాష్ట్రాన్నః కా ప్రీతిః స్యాజ్జనార్దన ।\nపాపమేవాశ్రయేదస్మాన్ హత్వైతానాతతాయినః ।।",
            "meaning": "ఓ జనార్దనా, (సర్వ భూతముల సంరక్షకుడు, పోషకుడు అయినవాడా), ధృతరాష్ట్ర తనయులను చంపి మనము ఎలా సంతోషముగా ఉండగలము? వారు దుర్మార్గపు దురాక్రమణదారులయినా, వారిని సంహరిస్తే మనకు పాపం తప్పకుండా చుట్టుకుంటుంది. కాబట్టి స్వంత దాయాదులైన ధృతరాష్ట్రుని పుత్రులను మరియు స్నేహితులను చంపటం మనకు తగదు. ఓ మాధవా (కృష్ణా), మన సొంత వారినే చంపుకుని మనం సుఖంగా ఎలా ఉండగలము?"
          },
          {
            "slokaNumber": 37,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "తస్మాన్నార్హా వయం హంతుం ధార్తరాష్ట్రాన్ స్వబాంధవాన్ ।\nస్వజనం హి కథం హత్వా సుఖినః స్యామ మాధవ ।।",
            "meaning": "ఓ జనార్దనా, (సర్వ భూతముల సంరక్షకుడు, పోషకుడు అయినవాడా), ధృతరాష్ట్ర తనయులను చంపి మనము ఎలా సంతోషముగా ఉండగలము? వారు దుర్మార్గపు దురాక్రమణదారులయినా, వారిని సంహరిస్తే మనకు పాపం తప్పకుండా చుట్టుకుంటుంది. కాబట్టి స్వంత దాయాదులైన ధృతరాష్ట్రుని పుత్రులను మరియు స్నేహితులను చంపటం మనకు తగదు. ఓ మాధవా (కృష్ణా), మన సొంత వారినే చంపుకుని మనం సుఖంగా ఎలా ఉండగలము?"
          },
          {
            "slokaNumber": 38,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "యద్యప్యేతే న పశ్యంతి లోభోపహతచేతసః ।\nకులక్షయకృతం దోషం మిత్రద్రోహే చ పాతకమ్ ।।",
            "meaning": "వారి ఆలోచనలు దురాశచే నిండిపోయి, బంధువులను సర్వనాశనం చేయటంలో గాని లేదా మిత్రులపై విశ్వాసఘాతుకత్వం చేయటంలో గానీ, వారు దోషం చూడటం లేదు. కానీ, ఓ జనార్దనా (కృష్ణా), మనవారినే చంపటంలో ఉన్న దోషాన్ని చక్కగా చూడగలిగిన మనము, ఈ పాపపు పని నుండి ఎందుకు తప్పుకోకూడదు?"
          },
          {
            "slokaNumber": 39,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "కథం న జ్ఞేయమస్మాభిః పాపాదస్మాన్నివర్తితుమ్ ।\nకులక్షయకృతం దోషం ప్రపశ్యద్భిర్జనార్దన ।।",
            "meaning": "వారి ఆలోచనలు దురాశచే నిండిపోయి, బంధువులను సర్వనాశనం చేయటంలో గాని లేదా మిత్రులపై విశ్వాసఘాతుకత్వం చేయటంలో గానీ, వారు దోషం చూడటం లేదు. కానీ, ఓ జనార్దనా (కృష్ణా), మనవారినే చంపటంలో ఉన్న దోషాన్ని చక్కగా చూడగలిగిన మనము, ఈ పాపపు పని నుండి ఎందుకు తప్పుకోకూడదు?"
          },
          {
            "slokaNumber": 40,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "కులక్షయే ప్రణశ్యంతి కులధర్మాః సనాతనాః ।\nధర్మే నష్టే కులం కృత్స్నమధర్మోఽభిభవత్యుత ।।",
            "meaning": "వంశ నాశనం జరిగినప్పుడు, ఆ వంశాచారములన్నీ అంతరించిపోవును, మరియు మిగిలిన కుటుంబసభ్యులు అధర్మపరులగుదురు."
          },
          {
            "slokaNumber": 41,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "అధర్మాభిభవాత్ కృష్ణ ప్రదుష్యంతి కులస్త్రియః ।\nస్త్రీషు దుష్టాసు వార్ష్ణేయ జాయతే వర్ణసంకరః ।।",
            "meaning": "దుర్గుణాలు ప్రబలిపోవటం వలన, ఓ కృష్ణా, కులస్త్రీలు నీతి తప్పిన వారు అగుదురు; మరియు స్త్రీల యొక్క అనైతిక ప్రవర్తన వలన, ఓ వృష్ణి వంశస్థుడా, అవాంఛిత సంతానం జన్మిస్తారు."
          },
          {
            "slokaNumber": 42,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "సంకరో నరకాయైవ కులఘ్నానాం కులస్య చ ।\nపతంతి పితరో హ్యేషాం లుప్తపిండోదకక్రియాః ।।",
            "meaning": "అవాంఛిత సంతానం పెరగటం వలన కులమునకు, కుల నాశనము చేసిన వారికి కూడా నరకము ప్రాప్తించును. శ్రాద్ధ తర్పణములు లుప్తమయిన కారణముగా ఆ భ్రష్టుపట్టిన వంశ పూర్వీకులు కూడా పతనమౌదురు."
          },
          {
            "slokaNumber": 43,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "దోషైరేతైః కులఘ్నానాం వర్ణసంకరకారకైః ।\nఉత్సాద్యంతే జాతిధర్మాః కులధర్మాశ్చ శాశ్వతాః ।।",
            "meaning": "కుటుంబ ఆచారము నాశనము చేసి, అవాంఛిత సంతానం పెంపొందటానికి కారణమైన వారి దుష్ట చేష్టల వలన అనేకానేక సామాజిక, కుటుంబ సంక్షేమ ధర్మములు నశించిపోవును."
          },
          {
            "slokaNumber": 44,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "ఉత్సన్నకులధర్మాణాం మనుష్యాణాం జనార్దన ।\nనరకేఽనియతం వాసో భవతీత్యనుశుశ్రుమ ।।",
            "meaning": "ఓ జనార్దనా (కృష్ణా), కులాచారములను నాశనం చేసిన వారు నిరవధికముగా నరకములోనే ఉంటారని, నేను పండితుల నుండి వినియున్నాను."
          },
          {
            "slokaNumber": 45,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "అహో బత మహత్పాపం కర్తుం వ్యవసితా వయమ్ ।\nయద్రాజ్యసుఖలోభేన హంతుం స్వజనముద్యతాః ।।",
            "meaning": "అయ్యో! ఎంత ఆశ్చర్యం, దారుణమైన పరిణామాలు కలుగచేసే ఈ మహాపాపం చేయటానికి మనం నిశ్చయించాము. రాజ్య సుఖములపై కాంక్షతో, మన బంధువులనే చంపటానికి సిద్ధ పడ్డాము. ఆయుధాలు చేతిలో ఉన్న ధృతరాష్ట్రుని పుత్రులు, ఆయుధాలు లేకుండా ప్రతిఘటించకుండా ఉన్న నన్ను యుద్ధభూమిలో చంపివేసినా సరే, అది దీనికంటే మేలే."
          },
          {
            "slokaNumber": 46,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "te",
            "sloka": "యది మామప్రతీకారమశస్త్రం శస్త్రపాణయః ।\nధార్తరాష్ట్రా రణే హన్యుః తన్మే క్షేమతరం భవేత్ ।।",
            "meaning": "అయ్యో! ఎంత ఆశ్చర్యం, దారుణమైన పరిణామాలు కలుగచేసే ఈ మహాపాపం చేయటానికి మనం నిశ్చయించాము. రాజ్య సుఖములపై కాంక్షతో, మన బంధువులనే చంపటానికి సిద్ధ పడ్డాము. ఆయుధాలు చేతిలో ఉన్న ధృతరాష్ట్రుని పుత్రులు, ఆయుధాలు లేకుండా ప్రతిఘటించకుండా ఉన్న నన్ను యుద్ధభూమిలో చంపివేసినా సరే, అది దీనికంటే మేలే."
          },
          {
            "slokaNumber": 47,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "te",
            "sloka": "సంజయ ఉవాచ ।\nఏవముక్త్వార్జునః సంఖ్యే రథోపస్థ ఉపావిశత్ ।\nవిసృజ్య సశరం చాపం శోకసంవిగ్నమానసః ।।",
            "meaning": "సంజయుడు పలికెను: ఈ విధంగా పలికిన అర్జునుడు, దీనస్థితిలో, తీవ్ర శోకసంతప్తుడై తన బాణాలను, ధనుస్సును పక్కన జారవిడిచి, రథంలో కూలబడ్డాడు."
          },
          {
            "slokaNumber": 1,
            "chapterNumber": 1,
            "speaker": "Dhritarashtra",
            "language": "hi",
            "sloka": "धृतराष्ट्र उवाच।\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥",
            "meaning": "धृतराष्ट्र ने कहाः हे संजय! कुरुक्षेत्र की पवित्र भूमि पर युद्ध करने की इच्छा से एकत्रित होने के पश्चात, मेरे और पाण्डु पुत्रों ने क्या किया?"
          },
          {
            "slokaNumber": 2,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "सञ्जय उवाच।\nदृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा।\nआचार्यमुपसङ्गम्य राजा वचनमब्रवीत् ॥",
            "meaning": "संजय ने कहाः हे राजन्! पाण्डवों की सेना की व्यूहरचना का अवलोकन कर राजा दुर्योधन ने अपने गुरु द्रोणाचार्य के पास जाकर इस प्रकार के शब्द कहे।"
          },
          {
            "slokaNumber": 3,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम्।\nव्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता ॥",
            "meaning": "दुर्योधन ने कहाः पूज्य आचार्य! पाण्डु पुत्रों की विशाल सेना का अवलोकन करें, जिसे आपके द्वारा प्रशिक्षित बुद्धिमान शिष्य द्रुपद के पुत्र ने कुशलतापूर्वक युद्ध करने के लिए सुव्यवस्थित किया है।"
          },
          {
            "slokaNumber": 4,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "अत्र शूरा महेष्वासा भीमार्जुनसमा युधि ।\nयुयुधानो विराटश्च द्रुपदश्च महारथः॥",
            "meaning": "यहाँ इस सेना में भीम और अर्जुन के समान बलशाली युद्ध करने वाले महारथी युयुधान, विराट और द्रुपद जैसे अनेक शूरवीर धनुर्धर हैं। यहाँ पर इनके साथ धृष्टकेतु, चेकितान काशी के पराक्रमी राजा कांशिराज, पुरूजित, कुन्तीभोज और शैव्य सभी महान सेना नायक हैं। इनकी सेना में पराक्रमी युधमन्यु, शूरवीर, उत्तमौजा, सुभद्रा और द्रोपदी के पुत्र भी हैं जो सभी निश्चय ही महाशक्तिशाली योद्धा हैं।"
          },
          {
            "slokaNumber": 5,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् ।\nपुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः॥",
            "meaning": "यहाँ इस सेना में भीम और अर्जुन के समान बलशाली युद्ध करने वाले महारथी युयुधान, विराट और द्रुपद जैसे अनेक शूरवीर धनुर्धर हैं। यहाँ पर इनके साथ धृष्टकेतु, चेकितान काशी के पराक्रमी राजा कांशिराज, पुरूजित, कुन्तीभोज और शैव्य सभी महान सेना नायक हैं। इनकी सेना में पराक्रमी युधमन्यु, शूरवीर, उत्तमौजा, सुभद्रा और द्रोपदी के पुत्र भी हैं जो सभी निश्चय ही महाशक्तिशाली योद्धा हैं।"
          },
          {
            "slokaNumber": 6,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान् ।\nसौभद्रो द्रौपदेयाश्च सर्व एव महारथाः॥",
            "meaning": "यहाँ इस सेना में भीम और अर्जुन के समान बलशाली युद्ध करने वाले महारथी युयुधान, विराट और द्रुपद जैसे अनेक शूरवीर धनुर्धर हैं। यहाँ पर इनके साथ धृष्टकेतु, चेकितान काशी के पराक्रमी राजा कांशिराज, पुरूजित, कुन्तीभोज और शैव्य सभी महान सेना नायक हैं। इनकी सेना में पराक्रमी युधमन्यु, शूरवीर, उत्तमौजा, सुभद्रा और द्रोपदी के पुत्र भी हैं जो सभी निश्चय ही महाशक्तिशाली योद्धा हैं।"
          },
          {
            "slokaNumber": 7,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम।\nनायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते ॥",
            "meaning": "हे ब्राह्मण श्रेष्ठ! हमारे पक्ष की ओर के उन सेना नायकों के संबंध में भी सुनिए, जो सेना को संचालित करने में विशेष रूप से निपुण हैं। अब मैं आपके समक्ष उनका वर्णन करता हूँ।"
          },
          {
            "slokaNumber": 8,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "भवान्भीष्मश्च कर्णश्च कृपश्च समितिञ्जयः ।\nअश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च ॥",
            "meaning": "इस सेना में सदा विजयी रहने वाले आपके समान भीष्म, कर्ण, कृपाचार्य, अश्वत्थामा, विकर्ण तथा सोमदत्त का पुत्र भूरिश्रवा आदि महा पराक्रमी योद्धा हैं जो युद्ध में सदा विजेता रहे हैं।"
          },
          {
            "slokaNumber": 9,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "अन्ये च बहवः शूरा मदर्थे त्यक्तजीविताः।\nनानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः ॥",
            "meaning": "यहाँ हमारे पक्ष में अन्य अनेक महायोद्धा भी हैं जो मेरे लिए अपने जीवन का बलिदान करने के लिए तत्पर हैं। वे युद्ध कौशल में पूर्णतया निपुण और विविध प्रकार के शस्त्रों से सुसज्जित हैं।"
          },
          {
            "slokaNumber": 10,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम्।\nपर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम् ॥",
            "meaning": "हमारी शक्ति असीमित है और हम सब महान सेना नायक भीष्म पितामह के नेतृत्व में पूरी तरह से संरक्षित हैं जबकि पाण्डवों की सेना की शक्ति भीम द्वारा भलीभाँति रक्षित होने के पश्चात भी सीमित है।"
          },
          {
            "slokaNumber": 11,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "अयनेषु च सर्वेषु यथाभागमवस्थिताः।\nभीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि ॥",
            "meaning": "अतः मैं कौरव सेना के सभी योद्धागणों से भी आग्रह करता हूँ कि सब अपने मोर्चे पर अडिग रहते हुए भीष्म पितामह की पूरी सहायता करें।"
          },
          {
            "slokaNumber": 12,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "तस्य सञ्जनयन्हर्षं कुरुवृद्धः पितामहः।\nसिंहनादं विनद्योच्चैः शङ्ख दध्मौ प्रतापवान् ॥",
            "meaning": "तत्पश्चात कुरूवंश के वयोवृद्ध परम यशस्वी महायोद्धा भीष्म पितामह ने सिंह-गर्जना जैसी ध्वनि करने वाले अपने शंख को उच्च स्वर से बजाया जिसे सुनकर दुर्योधन हर्षित हुआ।"
          },
          {
            "slokaNumber": 13,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः।\nसहसैवाभ्यहन्यन्त स शब्दस्तुमुलोऽभवत् ॥",
            "meaning": "इसके पश्चात शंख, नगाड़े, बिगुल, तुरही तथा सींग अचानक एक साथ बजने लगे। उनका समवेत स्वर अत्यन्त भयंकर था।"
          },
          {
            "slokaNumber": 14,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ।\nमाधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः॥",
            "meaning": "तत्पश्चात पाण्डवों की सेना के बीच श्वेत अश्वों द्वारा खींचे जाने वाले भव्य रथ पर आसीन माधव और अर्जुन ने अपने-अपने दिव्य शंख बजाये।"
          },
          {
            "slokaNumber": 15,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "पाञ्चजन्यं हृषीकेशो देवदत्तं धनञ्जयः।\nपौण्ड्रं दध्मौ महाशङ्ख भीमकर्मा वृकोदरः॥",
            "meaning": "ऋषीकेश भगवान् कृष्ण ने अपना पाञ्चजन्य शंख बजाया, अर्जुन ने देवदत्त शंख तथा अतिभोजी एवं अति दुष्कर कार्य करने वाले भीम ने पौण्डू नामक भीषण शंख बजाया।"
          },
          {
            "slokaNumber": 16,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "अनन्तविजयं राजा कुन्तीपुत्रो युधिष्ठिरः।\nनकुलः सहदेवश्च सुघोषमणिपुष्पकौ ॥",
            "meaning": "हे पृथ्वीपति राजन्! राजा युधिष्ठिर ने अपना अनन्त विजय नाम का शंख बजाया तथा नकुल और सहदेव ने सुघोष एवं मणिपुष्पक नामक शंख बजाये। श्रेष्ठ धनुर्धर काशीराज, महा योद्धा शिखण्डी, धृष्टद्युम्न, विराट, अजेय सात्यकि, द्रुपद, द्रौपदी के पांच पुत्रों तथा सुभद्रा के महाबलशाली पुत्र वीर अभिमन्यु आदि सबने अपने-अपने अलग-अलग शंख बजाये।"
          },
          {
            "slokaNumber": 17,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "काश्यश्च परमेष्वासः शिखण्डी च महारथः।\nधृष्टद्युम्नो विराटश्च सात्यकिश्चापराजितः॥",
            "meaning": "हे पृथ्वीपति राजन्! राजा युधिष्ठिर ने अपना अनन्त विजय नाम का शंख बजाया तथा नकुल और सहदेव ने सुघोष एवं मणिपुष्पक नामक शंख बजाये। श्रेष्ठ धनुर्धर काशीराज, महा योद्धा शिखण्डी, धृष्टद्युम्न, विराट, अजेय सात्यकि, द्रुपद, द्रौपदी के पांच पुत्रों तथा सुभद्रा के महाबलशाली पुत्र वीर अभिमन्यु आदि सबने अपने-अपने अलग-अलग शंख बजाये।"
          },
          {
            "slokaNumber": 18,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "द्रुपदो द्रौपदेयाश्च सर्वशः पृथिवीपते।\nसौभद्रश्च महाबाहुः शङ्खान्दध्मुः पृथक् पृथक्॥",
            "meaning": "हे पृथ्वीपति राजन्! राजा युधिष्ठिर ने अपना अनन्त विजय नाम का शंख बजाया तथा नकुल और सहदेव ने सुघोष एवं मणिपुष्पक नामक शंख बजाये। श्रेष्ठ धनुर्धर काशीराज, महा योद्धा शिखण्डी, धृष्टद्युम्न, विराट, अजेय सात्यकि, द्रुपद, द्रौपदी के पांच पुत्रों तथा सुभद्रा के महाबलशाली पुत्र वीर अभिमन्यु आदि सबने अपने-अपने अलग-अलग शंख बजाये।"
          },
          {
            "slokaNumber": 19,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "स घोषो धार्तराष्ट्राणां हृदयानि व्यदारयत्।\nनभश्च पृथिवीं चैव तुमुलोऽभ्यनुनादयन् ॥",
            "meaning": "हे धृतराष्ट्र! इन शंखों से उत्पन्न ध्वनि द्वारा आकाश और धरती के बीच हुई गर्जना ने आपके पुत्रों के हृदयों को विदीर्ण कर दिया।"
          },
          {
            "slokaNumber": 20,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "अथ व्यवस्थितान्दृष्ट्वा धार्तराष्ट्रान् कपिध्वजः।\nप्रवृत्ते शस्त्रसम्पाते धनुरुद्यम्य पाण्डवः।\nहृषीकेशं तदा वाक्यमिदमाह महीपते ॥",
            "meaning": "उस समय हनुमान के चिह्न की ध्वजा लगे रथ पर आसीन पाण्डु पुत्र अर्जुन अपना धनुष उठा कर बाण चलाने के लिए उद्यत दिखाई दिया। हे राजन! आपके पुत्रों को अपने विरूद्ध व्यूह रचना में खड़े देख कर अर्जुन ने श्रीकृष्ण से यह वचन कहे।"
          },
          {
            "slokaNumber": 21,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "सेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत ॥",
            "meaning": "अर्जुन ने कहा! हे अच्युत! मेरा रथ दोनों सेनाओं के बीच खड़ा करने की कृपा करें ताकि मैं यहाँ एकत्रित युद्ध करने की इच्छा रखने वाले योद्धाओं जिनके साथ मुझे इस महासंग्राम में युद्ध करना है, को देख सकूं।"
          },
          {
            "slokaNumber": 22,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "यावदेतानिरीक्षेऽहं योद्धकामानवस्थितान्।\nकैर्मया सह योद्धव्यमस्मिन् रणसमुद्यमे ॥",
            "meaning": "अर्जुन ने कहा! हे अच्युत! मेरा रथ दोनों सेनाओं के बीच खड़ा करने की कृपा करें ताकि मैं यहाँ एकत्रित युद्ध करने की इच्छा रखने वाले योद्धाओं जिनके साथ मुझे इस महासंग्राम में युद्ध करना है, को देख सकूं।"
          },
          {
            "slokaNumber": 23,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "योत्स्यमानानवेक्षेऽहं य एतेऽत्र समागताः।\nधार्तराष्ट्रस्य दुर्बुद्धेयुद्धे प्रियचिकीर्षवः ॥",
            "meaning": "मैं उन लोगों को देखने का इच्छुक हूँ जो यहाँ पर धृतराष्ट्र के दुश्चरित्र पुत्रों को प्रसन्न करने की इच्छा से युद्ध लड़ने के लिए एकत्रित हुए हैं।"
          },
          {
            "slokaNumber": 24,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "सञ्जय उवाच।\nएवमुक्तो हृषीकेशो गुडाकेशेन भारत।\nसेनयोरुभयोर्मध्ये स्थापयित्वा रथोत्तमम्॥",
            "meaning": "संजय ने कहा-हे भरतवंशी धृतराष्ट्र! निद्रा पर विजय पाने वाले अर्जुन द्वारा इस प्रकार के वचन बोले जाने पर तब भगवान श्रीकृष्ण ने उस भव्य रथ को दोनों सेनाओं के बीच में ले जाकर खड़ा कर दिया।"
          },
          {
            "slokaNumber": 25,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम्।\nउवाच पार्थ पश्यैतान्समवेतान्कुरूनिति ॥",
            "meaning": "भीष्म, द्रोण तथा अन्य सभी राजाओं की उपस्थिति में भगवान श्रीकृष्ण ने कहा कि हे पार्थ! यहाँ पर एकत्रित समस्त कुरुओं को देखो।"
          },
          {
            "slokaNumber": 26,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "तत्रापश्यत्स्थितान् पार्थः पितृनथ पितामहान्।\nआचार्यान्मातुलान्भ्रातृन्पुत्रान्पौत्रान्सखींस्तथा\nश्वशुरान्सुहृदश्चैव सेनयोरुभयोरपि ॥",
            "meaning": "अर्जुन ने वहाँ खड़ी दोनों पक्षों की सेनाओं के बीच अपने पिता तुल्य चाचाओं-ताऊओं, पितामहों, गुरुओं, मामाओं, भाइयों, चचेरे भाइयों, पुत्रों, भतीजों, मित्रों, ससुर, और शुभचिन्तकों को भी देखा।"
          },
          {
            "slokaNumber": 27,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "तान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान्।\nकृपया परयाविष्टो विषीदन्निदमब्रवीत् ॥",
            "meaning": "जब कुन्तिपुत्र अर्जुन ने अपने बंधु बान्धवों को वहाँ देखा तब उसका मन अत्यधिक करुणा से भर गया और फिर गहन शोक के साथ उसने निम्न वचन कहे।"
          },
          {
            "slokaNumber": 28,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "अर्जुन उवाच। दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्।\nसीदन्ति मम गात्राणि मुखं च परिशुष्यति ॥",
            "meaning": "अर्जुन ने कहा! हे कृष्ण! युद्ध करने की इच्छा से एक दूसरे का वध करने के लिए यहाँ अपने वंशजों को देखकर मेरे शरीर के अंग कांप रहे हैं और मेरा मुंह सूख रहा है।"
          },
          {
            "slokaNumber": 29,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "वेपथुश्च शरीरे मे रोमहर्षश्च जायते ॥",
            "meaning": "मेरा सारा शरीर काँप रहा है, मेरे शरीर के रोएं खड़े हो रहे हैं, मेरा धनुष ‘गाण्डीव' मेरे हाथ से सरक रहा है और मेरी पूरी त्वचा में जलन हो रही है। मेरा मन उलझ रहा है और मुझे घबराहट हो रही है। अब मैं यहाँ और अधिक खड़ा रहने में समर्थ नहीं हूँ। केशी राक्षस को मारने वाले हे केशव! मुझे केवल अमंगल के लक्षण दिखाई दे रहे हैं। युद्ध में अपने वंश के बंधु बान्धवों का वध करने में मुझे कोई अच्छाई नही दिखाई देती है और उन्हें मारकर मैं कैसे सुख पा सकता हूँ?"
          },
          {
            "slokaNumber": 30,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "गाण्डीवं स्रंसते हस्तात्त्वक्चै व परिदह्यते।\nन च शक्नोम्यवस्थातुं भ्रमतीव च मे मनः ॥",
            "meaning": "मेरा सारा शरीर काँप रहा है, मेरे शरीर के रोएं खड़े हो रहे हैं, मेरा धनुष ‘गाण्डीव' मेरे हाथ से सरक रहा है और मेरी पूरी त्वचा में जलन हो रही है। मेरा मन उलझ रहा है और मुझे घबराहट हो रही है। अब मैं यहाँ और अधिक खड़ा रहने में समर्थ नहीं हूँ। केशी राक्षस को मारने वाले हे केशव! मुझे केवल अमंगल के लक्षण दिखाई दे रहे हैं। युद्ध में अपने वंश के बंधु बान्धवों का वध करने में मुझे कोई अच्छाई नही दिखाई देती है और उन्हें मारकर मैं कैसे सुख पा सकता हूँ?"
          },
          {
            "slokaNumber": 31,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "निमित्तानि च पश्यामि विपरीतानि केशव।\nन च श्रेयोऽनुपश्यामि हत्वा स्वजनमाहवे ॥",
            "meaning": "मेरा सारा शरीर काँप रहा है, मेरे शरीर के रोएं खड़े हो रहे हैं, मेरा धनुष ‘गाण्डीव' मेरे हाथ से सरक रहा है और मेरी पूरी त्वचा में जलन हो रही है। मेरा मन उलझ रहा है और मुझे घबराहट हो रही है। अब मैं यहाँ और अधिक खड़ा रहने में समर्थ नहीं हूँ। केशी राक्षस को मारने वाले हे केशव! मुझे केवल अमंगल के लक्षण दिखाई दे रहे हैं। युद्ध में अपने वंश के बंधु बान्धवों का वध करने में मुझे कोई अच्छाई नही दिखाई देती है और उन्हें मारकर मैं कैसे सुख पा सकता हूँ?"
          },
          {
            "slokaNumber": 32,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "न काळे विजयं कृष्ण न च राज्यं सुखानि च।\nकिं नो राज्येन गोविन्द किं भोगैर्जीवितेनवा ॥",
            "meaning": "हे कृष्ण! मुझे विजय, राज्य और इससे प्राप्त होने वाला सुख नहीं चाहिए। ऐसा राज्य सुख या अपने जीवन से क्या लाभ प्राप्त हो सकता है क्योंकि जिन लोगों के लिए हम यह सब चाहते हैं, वे सब इस युद्धभूमि में हमारे समक्ष खड़े हैं।"
          },
          {
            "slokaNumber": 33,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "येषामर्थे काक्षितं नो राज्यं भोगाः सुखानि च\nत इमेऽवस्थिता युद्धे प्राणांस्त्यक्त्वा धनानि च।॥",
            "meaning": "हे कृष्ण! मुझे विजय, राज्य और इससे प्राप्त होने वाला सुख नहीं चाहिए। ऐसा राज्य सुख या अपने जीवन से क्या लाभ प्राप्त हो सकता है क्योंकि जिन लोगों के लिए हम यह सब चाहते हैं, वे सब इस युद्धभूमि में हमारे समक्ष खड़े हैं।"
          },
          {
            "slokaNumber": 34,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "आचार्याः पितरः पुत्रास्तथैव च पितामहाः।\nमातुलाः श्वशुराः पौत्राः श्यालाः सम्बन्धिनस्तथा ॥",
            "meaning": "हे मधुसूदन! जब आचार्यगण, पितृगण, पुत्र, पितामह, मामा, पौत्र, ससुर, भांजे, साले और अन्य संबंधी अपने प्राण और धन का दाव लगाकर यहाँ उपस्थित हुए हैं। यद्यपि वे मुझपर आक्रमण भी करते हैं तथापि मैं इनका वध क्यों करूं? यदि फिर भी हम धृतराष्ट्र के पुत्रों का वध करते हैं तब भले ही इससे हमें पृथ्वी के अलावा तीनों लोक भी प्राप्त क्यों न होते हों तब भी उन्हें मारने से हमें सुख कैसे प्राप्त होगा?"
          },
          {
            "slokaNumber": 35,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "एतान्न हन्तुमिच्छामि नतोऽपि मधुसूदन।\nअपि त्रैलोक्यराज्यस्य हेतोः किं नु महीकृते ॥",
            "meaning": "हे मधुसूदन! जब आचार्यगण, पितृगण, पुत्र, पितामह, मामा, पौत्र, ससुर, भांजे, साले और अन्य संबंधी अपने प्राण और धन का दाव लगाकर यहाँ उपस्थित हुए हैं। यद्यपि वे मुझपर आक्रमण भी करते हैं तथापि मैं इनका वध क्यों करूं? यदि फिर भी हम धृतराष्ट्र के पुत्रों का वध करते हैं तब भले ही इससे हमें पृथ्वी के अलावा तीनों लोक भी प्राप्त क्यों न होते हों तब भी उन्हें मारने से हमें सुख कैसे प्राप्त होगा?"
          },
          {
            "slokaNumber": 36,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "निहत्य धार्तराष्ट्रान्नः का प्रीतिः स्याज्जनार्दन।\nपापमेवाश्रयेदस्मान्हत्वैतानाततायिनः॥",
            "meaning": "हे समस्त जीवों के पालक! धृतराष्ट्र के पुत्रों का वध करके हमें क्या सुख प्राप्त होगा? यद्यपि वे सब अत्याचारी हैं फिर भी यदि हम उनका वध करते हैं तब निश्चय ही उन्हें मारने का हमें पाप लगेगा। इसलिए अपने चचेरे भाइयों, धृतराष्ट्र के पुत्रों और मित्रों सहित अपने स्वजनों का वध करना हमारे लिए किसी भी दृष्टि से उचित नहीं है। हे माधव! इस प्रकार अपने वंशजों का वध कर हम सुख की आशा कैसे कर सकते हैं?"
          },
          {
            "slokaNumber": 37,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "तस्मान्नार्हा वयं हन्तुं धार्तराष्ट्रान्स्वबान्धवान्।\nस्वजनं हि कथं हत्वा सुखिनः स्याम माधव ॥",
            "meaning": "हे समस्त जीवों के पालक! धृतराष्ट्र के पुत्रों का वध करके हमें क्या सुख प्राप्त होगा? यद्यपि वे सब अत्याचारी हैं फिर भी यदि हम उनका वध करते हैं तब निश्चय ही उन्हें मारने का हमें पाप लगेगा। इसलिए अपने चचेरे भाइयों, धृतराष्ट्र के पुत्रों और मित्रों सहित अपने स्वजनों का वध करना हमारे लिए किसी भी दृष्टि से उचित नहीं है। हे माधव! इस प्रकार अपने वंशजों का वध कर हम सुख की आशा कैसे कर सकते हैं?"
          },
          {
            "slokaNumber": 38,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "यद्यप्येते न पश्यन्ति लोभोपहतचेतसः।\nकुलक्षयकृतं दोषं मित्रद्रोहे च पातकम् ॥",
            "meaning": "यद्यपि लोभ से अभिभूत विचारधारा के कारण वे अपने स्वजनों के विनाश या प्रतिशोध के कारण और अपने मित्रों के साथ विश्वासघात करने में कोई दोष नही देखते हैं। तथापि हे जनार्दन! जब हमें स्पष्टतः अपने बंधु बान्धवों का वध करने में अपराध दिखाई देता है तब हम ऐसे पापमय कर्म से क्यों न दूर रहें?"
          },
          {
            "slokaNumber": 39,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "कथं न ज्ञेयमस्माभिः पापादस्मानिवर्तितुम्।\nकुलक्षयकृतं दोषं प्रपश्यद्भिर्जनार्दन ॥",
            "meaning": "यद्यपि लोभ से अभिभूत विचारधारा के कारण वे अपने स्वजनों के विनाश या प्रतिशोध के कारण और अपने मित्रों के साथ विश्वासघात करने में कोई दोष नही देखते हैं। तथापि हे जनार्दन! जब हमें स्पष्टतः अपने बंधु बान्धवों का वध करने में अपराध दिखाई देता है तब हम ऐसे पापमय कर्म से क्यों न दूर रहें?"
          },
          {
            "slokaNumber": 40,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः।\nधर्मे नष्टे कुलं कृत्स्नमधर्मोऽभिभवत्युत ॥",
            "meaning": "जब कुल का नाश हो जाता है तब इसकी कुल परम्पराएं भी नष्ट हो जाती हैं और कुल के शेष परिवार अधर्म में प्रवृत्त होने लगते हैं।"
          },
          {
            "slokaNumber": 41,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "अधर्माभिभवात्कृष्ण प्रदुष्यन्ति कुलस्त्रियः।\nस्त्रीषु दुष्टासु वार्ष्णेय जायते वर्णसङ्करः॥",
            "meaning": "अधर्म की प्रबलता के साथ हे कृष्ण! कुल की स्त्रियां दूषित हो जाती हैं और स्त्रियों के दुराचारिणी होने से हे वृष्णिवंशी! अवांछित संतानें जन्म लेती हैं।"
          },
          {
            "slokaNumber": 42,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "सङ्करो नरकायैव कुलजानां कुलस्य च।\nपतन्ति पितरो ह्येषां लुप्तपिण्डोदकक्रियाः॥",
            "meaning": "अवांछित सन्तानों की वृद्धि के परिणामस्वरूप निश्चय ही परिवार और पारिवारिक परम्परा का विनाश करने वालों का जीवन नारकीय बन जाता है। जल तथा पिण्डदान की क्रियाओं से वंचित हो जाने के कारण ऐसे पतित कुलों के पित्तरों का भी पतन हो जाता है।"
          },
          {
            "slokaNumber": 43,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "दोषैरेतैः कुलजानां वर्णसङ्करकारकैः।\nउत्साद्यन्ते जातिधर्माः कुलधर्माश्च शाश्वताः॥",
            "meaning": "अपने दुष्कर्मों से कुल परम्परा का विनाश करने वाले दुराचारियों के कारण समाज में अवांछित सन्तानों की वृद्धि होती है और विविध प्रकार की सामुदायिक और परिवार कल्याण की गतिविधियों का भी विनाश हो जाता है।"
          },
          {
            "slokaNumber": 44,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "उत्सन्नकुलधार्माणां मनुष्याणां जनार्दन।\nनरकेऽनियतं वासो भवतीत्यनुशुश्रुम ॥",
            "meaning": "हे जनार्दन! मैंने गुरुजनों से सुना है कि जो लोग कुल परंपराओं का विनाश करते हैं, वे अनिश्चितकाल के लिए नरक में डाल दिए जाते हैं।"
          },
          {
            "slokaNumber": 45,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "अहो बत महत्पापं कर्तुं व्यवसिता वयम्।\nयद्राज्यसुखलोभेन हन्तुं स्वजनमुद्यताः॥",
            "meaning": "ओह! कितने आश्चर्य की बात है कि हम मानसिक रूप से इस महा पापजन्य कर्म करने के लिए उद्यत हैं। राजसुख भोगने की इच्छा के प्रयोजन से हम अपने वंशजों का वध करना चाहते हैं। यदि धृतराष्ट्र के शस्त्र युक्त पुत्र मुझ निहत्थे को रणभूमि में प्रतिरोध किए बिना भी मार देते हैं तब यह मेरे लिए श्रेयस्कर होगा।"
          },
          {
            "slokaNumber": 46,
            "chapterNumber": 1,
            "speaker": "Arjuna",
            "language": "hi",
            "sloka": "यदि मामप्रतीकारमशस्त्रं शस्त्रपाणयः।\nधार्तराष्ट्रा रणे हन्युस्तन्मे क्षेमतरं भवेत् ॥",
            "meaning": "ओह! कितने आश्चर्य की बात है कि हम मानसिक रूप से इस महा पापजन्य कर्म करने के लिए उद्यत हैं। राजसुख भोगने की इच्छा के प्रयोजन से हम अपने वंशजों का वध करना चाहते हैं। यदि धृतराष्ट्र के शस्त्र युक्त पुत्र मुझ निहत्थे को रणभूमि में प्रतिरोध किए बिना भी मार देते हैं तब यह मेरे लिए श्रेयस्कर होगा।"
          },
          {
            "slokaNumber": 47,
            "chapterNumber": 1,
            "speaker": "Sanjaya",
            "language": "hi",
            "sloka": "सञ्जय उवाच।\nएवमुक्त्वार्जुनः सङ्खये रथोपस्थ उपाविशत्।\nविसृज्य सशरं चापं शोकसंविग्नमानसः॥",
            "meaning": "संजय ने कहा-इस प्रकार यह कह कर अर्जुन ने अपना धनुष और बाणों को एक ओर रख दिया और शोकाकुल चित्त से अपने रथ के आसन पर बैठ गया, उसका मन व्यथा और दुख से भर गया।"
          }]
        // Filter slokas based on the selected chapter number
        const chapterSlokas = allSlokas.filter(
          (sloka) => sloka.chapterNumber === parseInt(chapterNumber)
        );

        setSlokas(chapterSlokas);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError('Failed to fetch slokas.');
      setLoading(false);
    }
  };

  // Filter slokas based on selected language
  const filteredSlokas = slokas.filter(
    (sloka) => slokas.length > 0 && sloka.language === selectedLanguage
  );

  if (loading) {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen p-8 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Chapter {chapterNumber} - Slokas</h1>

      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-4 py-2 rounded ${selectedLanguage === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white'}`}
          onClick={() => setSelectedLanguage('en')}
        >
          EN
        </button>
        <button
          className={`px-4 py-2 rounded ${selectedLanguage === 'hi' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white'}`}
          onClick={() => setSelectedLanguage('hi')}
        >
          HI
        </button>
        <button
          className={`px-4 py-2 rounded ${selectedLanguage === 'te' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white'}`}
          onClick={() => setSelectedLanguage('te')}
        >
          TE
        </button>
      </div>

      <div className="space-y-6">
        {chapterNumber === '1' ? (
          filteredSlokas.length > 0 ? (
            filteredSlokas.map((sloka) => (
              <div key={sloka.slokaNumber} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">
                  Sloka {sloka.slokaNumber} - {sloka.speaker}
                </h2>
                <p className="text-gray-300 mb-4 whitespace-pre-line">{sloka.sloka}</p>
                <p className="text-sm text-gray-400 italic">{sloka.meaning}</p>
                <Textspeech text={sloka.sloka + sloka.meaning} />
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">No slokas available for this chapter.</p>
          )
        ) : (
          <p className="text-gray-400 text-center">No slokas available for this chapter.</p>
        )}
      </div>
      <BotpressChat />
    </div>
  );
};

export default ChapterDetail;
