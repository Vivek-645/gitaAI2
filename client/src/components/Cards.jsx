import React from 'react';
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';


const chapters = [{
    "chapterName": "Arjuna Visada Yoga",
    "chapterNumber": 1,
    "verseCount": 47,
    "language": "en",
    "yogaName": "Karma Yoga",
    "meaning": "Arjuna's Dilemma",
    "summary": "The first chapter of the Bhagavad Gita - Arjuna Vishada Yoga introduces the setup, the setting, the characters and the circumstances that led to the epic battle of Mahabharata, fought between the Pandavas and the Kauravas. It outlines the reasons that led to the revelation of the of Bhagavad Gita.\\nAs both armies stand ready for the battle, the mighty warrior Arjuna, on observing the warriors on both sides becomes increasingly sad and depressed due to the fear of losing his relatives and friends and the consequent sins attributed to killing his own relatives. So, he surrenders to Lord Krishna, seeking a solution. Thus, follows the wisdom of the Bhagavad Gita."
  },
  {
    "chapterName": "Sankhya Yoga",
    "chapterNumber": 2,
    "verseCount": 72,
    "language": "en",
    "yogaName": "Karma Yoga",
    "meaning": "Transcendental Knowledge",
    "summary": "The second chapter of the Bhagavad Gita is Sankhya Yoga. This is the most important chapter of the Bhagavad Gita as Lord Krishna condenses the teachings of the entire Gita in this chapter. This chapter is the essence of the entire Gita. \\nSankhya Yoga can be categorized into 4 main topics - \\n1. Arjuna completely surrenders himself to Lord Krishna and accepts his position as a disciple and Krishna as his Guru. He requests Krishna to guide him on how to dismiss his sorrow.\\n2. Explanation of the main cause of all grief, which is ignorance of the true nature of Self.\\n3. Karma Yoga - the discipline of selfless action without being attached to its fruits.\\n4. Description of a Perfect Man - One whose mind is steady and one-pointed."
  },
  {
    "chapterName": "Karma Yoga",
    "chapterNumber": 3,
    "verseCount": 43,
    "language": "en",
    "yogaName": "Karma Yoga",
    "meaning": "Path of Selfless Service",
    "summary": "The third chapter of the Bhagavad Gita is Karma Yoga or the Path of Selfless Service. Here Lord Krishna emphasizes the importance of karma in life. He reveals that it is important for every human being to engage in some sort of activity in this material world. Further, he describes the kinds of actions that lead to bondage and the kinds that lead to liberation. Those persons who continue to perform their respective duties externally for the pleasure of the Supreme, without attachment to its rewards get liberation at the end."
  },
  {
    "chapterName": "Jnana Karma Sanyasa Yoga",
    "chapterNumber": 4,
    "verseCount": 42,
    "language": "en",
    "yogaName": "Karma Yoga",
    "meaning": "Path of Knowledge and the Disciplines of Action",
    "summary": "The fourth chapter of the Bhagavad Gita is Jnana Karma Sanyasa Yoga. In this chapter, Krishna glorifies the Karma Yoga and imparts the Transcendental Knowledge (the knowledge of the soul and the Ultimate Truth) to Arjuna. He reveals the reason behind his appearance in this material world. He reveals that even though he is eternal, he reincarnates time after time to re-establish dharma and peace on this Earth. His births and activities are eternal and are never contaminated by material flaws. Those persons who know and understand this Truth engage in his devotion with full faith and eventually attain Him. They do not have to take birth in this world again."
  },
  {
    "chapterName": "Karma Sanyasa Yoga",
    "chapterNumber": 5,
    "verseCount": 29,
    "language": "en",
    "yogaName": "Karma Yoga",
    "meaning": "Path of Renunciation",
    "summary": "The fifth chapter of the Bhagavad Gita is Karma Sanyasa Yoga. In this chapter, Krishna compares the paths of renunciation in actions (Karma Sanyas) and actions with detachment (Karma Yoga) and explains that both are means to reach the same goal and we can choose either. A wise person should perform his/her worldly duties without attachment to the fruits of his/her actions and dedicate them to God. This way they remain unaffected by sin and eventually attain liberation."
  },
  {
    "chapterName": "Dhyana Yoga",
    "chapterNumber": 6,
    "verseCount": 47,
    "language": "en",
    "yogaName": "Karma Yoga",
    "meaning": "Path of Meditation",
    "summary": "The sixth chapter of the Bhagavad Gita is Dhyana Yoga. In this chapter, Krishna reveals the Yoga of Meditation and how to practise this Yoga. He discusses the role of action in preparing for Meditation, how performing duties in devotion purifies one's mind and heightens one's spiritual consciousness. He explains in detail the obstacles that one faces when trying to control their mind and the exact methods by which one can conquer their mind. He reveals how one can focus their mind on Paramatma and unite with the God."
  },
  {
    "chapterName": "Gyaan Vigyana Yoga",
    "chapterNumber": 7,
    "verseCount": 30,
    "language": "en",
    "yogaName": "Bhakti Yoga",
    "meaning": "Self-Knowledge and Enlightenment",
    "summary": "The seventh chapter of the Bhagavad Gita is Gyaan Vigyana Yoga . In this chapter, Krishna reveals that he is the Supreme Truth, the principal cause and the sustaining force of everything. He reveals his illusionary energy in this material world called Maya, which is very difficult to overcome but those who surrender their minds unto Him attain Him easily. He also describes the four types of people who surrender to Him in devotion and the four kinds that don't. Krishna confirms that He is the Ultimate Reality and those who realize this Truth reach the pinnacle of spiritual realization and unite with the Lord."
  },
  {
    "chapterName": "Akshara Brahma Yoga",
    "chapterNumber": 8,
    "verseCount": 28,
    "language": "en",
    "yogaName": "Bhakti Yoga",
    "meaning": "Path of the Eternal God",
    "summary": "The eighth chapter of the Bhagavad Gita is Akshara Brahma Yoga. In this chapter, Krishna reveals the importance of the last thought before death. If we can remember Krishna at the time of death, we will certainly attain him. Thus, it is very important to be in constant awareness of the Lord at all times, thinking of Him and chanting His names at all times. By perfectly absorbing their mind in Him through constant devotion, one can go beyond this material existence to Lord's Supreme abode."
  },
  {
    "chapterName": "Raja Vidya Yoga",
    "chapterNumber": 9,
    "verseCount": 34,
    "language": "en",
    "yogaName": "Bhakti Yoga",
    "meaning": "Yoga through the King of Sciences",
    "summary": "The ninth chapter of the Bhagavad Gita is Raja Vidya Yoga. In this chapter, Krishna explains that He is Supreme and how this material existence is created, maintained and destroyed by His Yogmaya and all beings come and go under his supervision. He reveals the Role and the Importance of Bhakti (transcendental devotional service) towards our Spiritual Awakening. In such devotion, one must live for the God, offer everything that he possesses to Him and do everything for Him only. One who follows such devotion becomes free from the bonds of this material world and unites with the Lord."
  },
  {
    "chapterName": "Vibhooti Yoga",
    "chapterNumber": 10,
    "verseCount": 42,
    "language": "en",
    "yogaName": "Bhakti Yoga",
    "meaning": "Yoga through Appreciating the Infinite Opulences of God",
    "summary": "The tenth chapter of the Bhagavad Gita is Vibhooti Yoga. In this chapter, Krishna reveals Himself as the cause of all causes. He describes His various manifestations and opulences in order to increase Arjuna's Bhakti. Arjuna is fully convinced of Lord's paramount position and proclaims him to be the Supreme Personality. He prays to Krishna to describe more of His divine glories which are like nectar to hear."
  },
  {
    "chapterName": "Vishwaroopa Darshana Yoga",
    "chapterNumber": 11,
    "verseCount": 55,
    "language": "en",
    "yogaName": "Bhakti Yoga",
    "meaning": "Yoga through Beholding the Cosmic Form of God",
    "summary": "The eleventh chapter of the Bhagavad Gita is Vishwaroopa Darshana Yoga. In this chapter, Arjuna requests Krishna to reveal His Universal Cosmic Form that encompasses all the universes, the entire existence. Arjuna is granted divine vision to be able to see the entirety of creation in the body of the Supreme Lord Krishna."
  },
  {
    "chapterName": "Bhakti Yoga",
    "chapterNumber": 12,
    "verseCount": 20,
    "language": "en",
    "yogaName": "Bhakti Yoga",
    "meaning": "The Yoga of Devotion",
    "summary": "The twelfth chapter of the Bhagavad Gita is Bhakti Yoga. In this chapter, Krishna emphasizes the superiority of Bhakti Yoga (the path of devotion) over all other types of spiritual disciplines and reveals various aspects of devotion. He further explains that the devotees who perform pure devotional service to Him, with their consciousness, merged in Him and all their actions dedicated to Him, are quickly liberated from the cycle of life and death. He also describes the various qualities of the devotees who are very dear to Him."
  },
  {
    "chapterName": "Ksetra Ksetrajna Vibhaaga Yoga",
    "chapterNumber": 13,
    "verseCount": 35,
    "language": "en",
    "yogaName": "Jnana Yoga",
    "meaning": "Yoga through Distinguishing the Field and the Knower of the Field",
    "summary": "The thirteenth chapter of the Bhagavad Gita is Ksetra Ksetrajna Vibhaaga Yoga. The word kshetra means the field, and the kshetrajna means the knower of the field. We can think of our material body as the field and our immortal soul as the knower of the field. In this chapter, Krishna discriminates between the physical body and the immortal soul. He explains that the physical body is temporary and perishable whereas the soul is permanent and eternal. The physical body can be destroyed but the soul can never be destroyed. The chapter then describes God, who is the Supreme Soul. All the individual souls have originated from the Supreme Soul. One who clearly understands the difference between the body, the Soul and the Supreme Soul attains the realization of Brahman."
  },
  {
    "chapterName": "Gunatraya Vibhaga Yoga",
    "chapterNumber": 14,
    "verseCount": 27,
    "language": "en",
    "yogaName": "Jnana Yoga",
    "meaning": "Yoga through Understanding the Three Modes of Material Nature",
    "summary": "The fourteenth chapter of the Bhagavad Gita is Gunatraya Vibhaga Yoga. In this chapter, Krishna reveals the three gunas (modes) of the material nature - goodness, passion and ignorance which everything in the material existence is influenced by. He further explains the essential characteristics of each of these modes, their cause and how they influence a living entity affected by them. He then reveals the various characteristics of the persons who have gone beyond these gunas. The chapter ends with Krishna reminding us of the power of pure devotion to God and how attachment to God can help us transcend these gunas."
  },
  {
    "chapterName": "Purushottama Yoga",
    "chapterNumber": 15,
    "verseCount": 20,
    "language": "en",
    "yogaName": "Jnana Yoga",
    "meaning": "The Yoga of the Supreme Divine Personality",
    "summary": "The fifteenth chapter of the Bhagavad Gita is Purushottama Yoga. In Sanskrit, Purusha means the All-pervading God, and Purushottam means the timeless & transcendental aspect of God. Krishna reveals that the purpose of this Transcendental knowledge of the God is to detach ourselves from the bondage of the material world and to understand Krishna as the Supreme Divine Personality, who is the eternal controller and sustainer of the world. One who understands this Ultimate Truth surrenders to Him and engages in His devotional service."
  },
  {
    "chapterName": "Daivasura Sampad Vibhaga Yoga",
    "chapterNumber": 16,
    "verseCount": 24,
    "language": "en",
    "yogaName": "Jnana Yoga",
    "meaning": "Yoga through Discerning the Divine and Demoniac Natures",
    "summary": "The sixteenth chapter of the Bhagavad Gita is Daivasura Sampad Vibhaga Yoga. In this chapter, Krishna describes explicitly the two kinds of natures among human beings - divine and demoniac. Those who possess demonaic qualities associate themselves with the modes of passion and ignorance do not follow the regulations of the scriptures and embrace materialistic views. These people attain lower births and further material bondage. But people who possess divine qualities, follow the instructions of the scriptures, associate themselves with the mode of goodness and purify the mind through spiritual practices. This leads to the enhancement of divine qualities and they eventually attain spiritual realization."
  },
  {
    "chapterName": "Sraddhatraya Vibhaga Yoga",
    "chapterNumber": 17,
    "verseCount": 28,
    "language": "en",
    "yogaName": "Jnana Yoga",
    "meaning": "Yoga through Discerning the Three Divisions of Faith",
    "summary": "The seventeenth chapter of the Bhagavad Gita is Sraddhatraya Vibhaga Yoga. In this chapter, Krishna describes the three types of faith corresponding to the three modes of the material nature. Lord Krishna further reveals that it is the nature of faith that determines the quality of life and the character of living entities. Those who have faith in passion and ignorance perform actions that yield temporary, material results while those who have faith in goodness perform actions in accordance with scriptural instructions and hence their hearts get further purified."
  },
  {
    "chapterName": "Moksha Sanyaas Yoga",
    "chapterNumber": 18,
    "verseCount": 78,
    "language": "en",
    "yogaName": "Jnana Yoga",
    "meaning": "Yoga through the Perfection of Renunciation and Surrender",
    "summary": "The eighteenth chapter of the Bhagavad Gita is Moksha Sanyas Yoga. Arjuna requests the Lord to explain the difference between the two types of renunciations - sanyaas(renunciation of actions) and tyaag(renunciation of desires). Krishna explains that a sanyaasi is one who abandons family and society in order to practise spiritual discipline whereas a tyaagi is one who performs their duties without attachment to the rewards of their actions and dedicating them to the God. Krishna recommends the second kind of renunciation - tyaag. Krishna then gives a detailed analysis of the effects of the three modes of material nature. He declares that the highest path of spirituality is pure, unconditional loving service unto the Supreme Divine Personality, Krishna. If we always remember Him, keep chanting His name and dedicate all our actions unto Him, take refuge in Him and make Him our Supreme goal, then by His grace, we will surely overcome all obstacles and difficulties and be freed from this cycle of birth and death."
  },
  {
    "chapterName": "అర్జున విషాద యోగము",
    "chapterNumber": 1,
    "verseCount": 47,
    "language": "te",
    "yogaName": "కర్మ యోగము",
    "meaning": "అర్జున విషాద యోగము",
    "summary": "దాయాదులైన కౌరవులు, పాండవుల మధ్య మొదలవ్వబోతున్న గొప్ప మహాభారత సంగ్రామ యుద్ధభూమి యందు భగవద్గీత చెప్పబడింది. ఈ భారీ యుద్ధానికి దారి తీసిన పరిణామాల యొక్క వివరణాత్మక వర్ణన ఈ పుస్తకం యొక్క ఉపోద్ఘాతంలో, భగవద్గీత సమయ పరిస్థితి అనే భాగంలో చెప్పబడింది.  \n    ధృతరాష్ట్ర మహారాజు మరియు అతని మంత్రి సంజయుడికి మధ్య జరిగిన సంభాషణ రూపంలో భగవద్గీత విశదీకరింపబడటం మొదలౌతుంది. ధృతరాష్ట్రుడు అంధుడైన కారణం చేత, తానే స్వయంగా యుద్ధభూమి యందు లేడు, అందుకే సంజయుడు అతనికి యుద్ధరంగ విశేషాలని యథాతథంగా చెప్తున్నాడు. సంజయుడు, మహాభారతాన్ని రచించిన మహాత్ముడైన వేద వ్యాసుని శిష్యుడు. వేద వ్యాసునికి సుదూరంలో జరిగే విషయాలని చూసే దివ్యశక్తి వుంది. అదే శక్తిని సంజయుడికి, యుద్ధభూమిలో జరిగే విశేషాలని ధృతరాష్ట్రునికి వివరించటానికి, ఆయన ప్రసాదించాడు."
  },
  {
    "chapterName": "సాంఖ్య యోగము",
    "chapterNumber": 2,
    "verseCount": 72,
    "language": "te",
    "yogaName": "కర్మ యోగము",
    "meaning": "సాంఖ్య యోగము",
    "summary": "ఈ అధ్యాయములో అర్జునుడు, పరిస్థితిని తట్టుకోవడంలో ఉన్న తన పూర్తి అశక్తతని పునరుద్ఘాటించి, ఆసన్నమైన యుద్ధంలో తన విధిని నిర్వర్తించడానికి నిరాకరిస్తాడు. ఆ తరువాత శ్రీ కృష్ణుడిని తన ఆధ్యాత్మిక గురువుగా ఉండమని పద్ధతి ప్రకారముగా, మర్యాదపూర్వకంగా ప్రాధేయపడి, తను ఉన్న ఈ పరిస్థితిలో ఏమి చెయ్యాలో తనకు దిశానిర్దేశము చేయమని శ్రీ కృష్ణుడిని బ్రతిమాలతాడు. శరీరము నశించినా, నశించిపోని, మరణము లేని ఆత్మ గురించి చెప్పటం ద్వారా దివ్య జ్ఞానాన్ని విశదీకరించటం ప్రారంభిస్తాడు, ఆ పరమాత్మ. ఒక మనిషి పాత బట్టలు త్యజించి, ఎలాగైతే కొత్త బట్టలు ధరిస్తాడో, ఆత్మ అనేది కేవలం ఒక జీవిత కాలం నుండి ఇంకో జీవిత కాలానికి శరీరాలను మార్చుకుంటుంది. ఆ తరువాత శ్రీ కృష్ణుడు సామాజిక బాధ్యతల గురించి ప్రస్తావిస్తాడు. ధర్మాన్ని పరిరక్షించడానికి యుద్ధం చేయవలసిన తన క్షత్రియ బాధ్యతలను అర్జునుడికి గుర్తుచేస్తాడు. సామాజిక బాధ్యతని నిర్వర్తించటం ఒక పవిత్రమైన ధర్మమని, అది స్వర్గలోకాల వైపు దారి చూపుతుందని, అదేసమయంలో, కర్తవ్య ఉల్లంఘన వలన అవమానము, మరియు అపకీర్తి కలుగుతాయని చెప్తాడు.\n    అర్జునుడిని ప్రాపంచిక స్థాయిలో ఉత్తేజిత పరిచిన శ్రీ కృష్ణుడు, తదుపరి, కర్మ శాస్త్రాన్ని లోతుగా విశదీకరిస్తాడు. కర్మ ఫలాలపై అనురక్తి పెంచుకోకుండా కర్మలను ఆచరించమని అర్జునుడికి సూచిస్తాడు. ప్రతిఫలాన్ని ఆశించకుండా కర్మలని ఆచరించడాన్ని 'బుద్ధి యోగము' అంటాడు. బుద్ధిని ఉపయోగించి మనము కర్మ ప్రతిఫల కాంక్షని నిగ్రహించాలి. ఇలాంటి దృక్పథంతో పని చేస్తే, బంధాన్ని కలిగించే కర్మలే, బంధ-నాశక కర్మలుగా మారిపోయి, అర్జునుడు దుఃఖ రహిత స్థితికి చేరుకుంటాడు.\n    దివ్య జ్ఞానంలో స్థితులై ఉన్న వారి లక్షణాల గురించి అర్జునుడు అడుగుతాడు. దానికి జవాబుగా, శ్రీ కృష్ణుడు, ఆధ్యాత్మిక జ్ఞానంలో స్థితులై ఉన్న వారు మోహము, భయం, మరియు క్రోధములకు అతీతంగా ఎలా ఉంటారో విశదీకరించాడు. వారు సుఖ-దుఃఖాలను సమానంగా స్వీకరిస్తూ, అన్ని పరిస్థితులలో ప్రశాంతంగా ఉంటారు; వారి ఇంద్రియములు నిగ్రహించబడి ఉంటాయి; వారి మనస్సు ఎప్పుడూ భగవంతునిలో లీనమై ఉంటుంది; మానసిక క్లేశములైన - కామము, క్రోధము, మరియు లోభములు - ఎలా ఎదుగుతాయో, మరియు వాటిని ఎలా నిర్మూలించవచ్చో, దశల వారీగా శ్రీ కృష్ణుడు విశదీకరిస్తాడు."
  },
  {
    "chapterName": "కర్మ యోగము",
    "chapterNumber": 3,
    "verseCount": 43,
    "language": "te",
    "yogaName": "కర్మ యోగము",
    "meaning": "కర్మ యోగము",
    "summary": "అన్ని ప్రాణులూ తమ తమ ప్రకృతి సిద్ధమైన స్వాభావిక లక్షణంచే ఏదో ఒక పని చేస్తూనే ఉంటాయనీ, మరియు ఎవరూ కూడా ఒక్క క్షణం కూడా కర్మలు చేయకుండా ఉండలేరనీ, ఈ అధ్యాయంలో వివరిస్తున్నాడు, శ్రీ కృష్ణుడు. ఏవో కాషాయి వస్త్రాలు ధరించి బాహ్యంగా సన్యాసం ప్రదర్శిస్తూ, లోలోన ఇంద్రియ వస్తువులపై చింతనచేసే వారు కపటులు. వారికన్నా, బాహ్యంగా కర్మలు ఆచరిస్తూనే ఉన్నా, లోనుండి మమకార రాహిత్యంతో ఉండే, కర్మ యోగము ఆచరించే వారు, ఉన్నతమైన వారు. భగవంతుని సృష్టి వ్యవస్థలో ప్రతి ప్రాణికి తన వంతుగా నిర్వర్తించే బాధ్యతలు ఉంటాయని శ్రీ కృష్ణుడు తదుపరి వక్కాణిస్తున్నాడు. మనము చేయవలసిన ధర్మాన్ని భగవంతుడు ఇచ్చిన కర్తవ్యంగా చేసినప్పుడు ఆ పని 'యజ్ఞం' అవుతుంది. యజ్ఞం చేయటం సహజంగానే దేవతలకు ప్రీతి కలిగిస్తుంది, దాంతో వారు భౌతిక అభ్యుదయం ప్రసాదిస్తారు. అలాంటి యజ్ఞం వానలు కురిపిస్తుంది, వానలతో జీవనాధారమైన ధాన్యం వస్తుంది. ఈ చక్రంలో తమ బాధ్యతని స్వీకరించటానికి నిరాకరించిన వారు పాపిష్టులు; వారు తమ ఇంద్రియ లౌల్యం కోసమే జీవించేవారు మరియు వారి జీవితాలు వ్యర్థమైనవి.\nఆత్మ యందే స్థితులై ఉండే జ్ఞానోదయమైనవారు, సామాన్య జనులలా కాకుండా, తమ శారీరక బాధ్యతలను నిర్వర్తించే అవసరం లేదు, ఎందుకంటే వారు ఉన్నతమైన ఆత్మ స్థాయి విధులు నిర్వర్తిస్తుంటారు కాబట్టి. కానీ వారు తమ సామాజిక విధులను విస్మరిస్తే, అది పెద్దవారి అడుగు జాడలలో నడిచే సామాన్య జనుల మనస్సులలో కలత కలిగిస్తుంది. కాబట్టి, అందరూ అనుకరించటానికి, ప్రపంచానికి ఒక మంచి ఉదాహరణ చూపటం కోసం జ్ఞానులు, ఎలాంటి స్వార్థ ప్రయోజనం లేకుండా కర్మలు ఆచరిస్తూనే ఉండాలి. ఇది, అజ్ఞానులు పరిపక్వత లేకుండా అకాలంగా తమ విధులను త్యజించటాన్ని ఇది నిరోధిస్తుంది. ఈ ప్రయోజనం కోసమే జ్ఞానోదయమైన జనక మహారాజు వంటి రాజులు, తమ కార్యకలాపాలను నిర్వర్తించారు.\n    తమకు ఇష్టం లేకపోయినా, ఏదో బలవంతమైన ప్రభావం చేతనా అన్నట్టు, జనులు ఎందుకు పాపపు కర్మలను చేస్తారు అని తదుపరి అర్జునుడు ప్రశ్నిస్తాడు. ప్రపంచంలో అన్నిటినీ నాశనం చేసే పాపిష్టి శత్రువు కామమే అని, ఆ పరమాత్మ వివరిస్తాడు. నిప్పు పొగచే మరియు అద్దం దుమ్ముచే కప్పి వేయబడ్డట్టుగా, కోరికలు జ్ఞానాన్ని కప్పివేసి, బుద్ధిని దూరంగా లాగేస్తాయి. తదుపరి, శ్రీ కృష్ణుడు, పాప స్వరూపమైన, కోరికలు అనే శత్రువుని సంహరించమని మరియు తన ఇంద్రియములు, మనస్సు, బుద్ధిని నియంత్రణలోకి తెమ్మని, అర్జునుడికి శంఖారావ పిలుపునిస్తున్నాడు."
  },
  {
    "chapterName": "జ్ఞాన, కర్మ, సన్న్యాస యోగము",
    "chapterNumber": 4,
    "verseCount": 42,
    "language": "te",
    "yogaName": "కర్మ యోగము",
    "meaning": "జ్ఞాన, కర్మ, సన్న్యాస యోగము",
    "summary": "నాలుగవ అధ్యాయంలో, శ్రీ కృష్ణుడు, తను ఉపదేశించే ఈ జ్ఞానంపై, దాని యొక్క సనాతనమైన మూలాన్ని తెలియచేయటం ద్వారా, అర్జునుడి విశ్వాసాన్ని దృఢపరుస్తున్నాడు. ఈ సనాతనమైన శాస్త్రాన్ని తాను ప్రారంభంలో సూర్య భగవానుడికి చెప్పానని, ఆ తరువాత పరంపరగా మహాత్ములైన రాజులకు అందించబడింది అని కృష్ణుడు వివరించాడు. ఇప్పుడు అదే మహోన్నతమైన యోగ శాస్త్రమును, తన ప్రియ మిత్రుడు, భక్తుడు అయిన అర్జునుడికి తెలియపరుస్తున్నాడు. ఇప్పుడు ప్రస్తుతం తన కళ్ళెదురుగా ఉన్న శ్రీ కృష్ణుడు, ఎన్నో యుగాల క్రితం సూర్య భగవానునికి ఈ శాస్త్రాన్ని ఎలా చెప్పాడని అర్జునుడు అడుగుతాడు. జవాబుగా, శ్రీ కృష్ణుడు తన అవతార దివ్య రహస్యాన్ని తెలియపరుస్తాడు. భగవంతుడు సనాతనుడు, పుట్టుకలేని వాడు అయినా, తన యోగమాయా శక్తిచే, ధర్మాన్ని పరిరక్షించటానికి, ఈ భూలోకం లోకి దిగివస్తాడని చెప్తాడు. కానీ, ఆయన జన్మ, కర్మలు దివ్యమైనవి, అవి ఎన్నటికీ భౌతిక దోషములచే కళంకితం కావు. ఈ రహస్యం తెలిసినవారు, దృఢవిశ్వాసంతో భక్తిలో నిమగ్నమౌతారు, మరియు ఆయనను పొందిన తరువాత, ఈ లోకంలో తిరిగి జన్మనెత్తరు.\n    తదుపరి, ఈ అధ్యాయం, కర్మల స్వభావాన్ని విశదీకరిస్తుంది మరియు - కర్మ, అకర్మ, మరియు వికర్మ అనబడే మూడు సూత్రాలను వివరిస్తుంది. ఏంతో నిమగ్నమైన పనులలో ఉన్నా, కర్మ యోగులు,  ఏవిధంగా అకర్మ స్థితిలో ఉంటారో, తద్వారా ఎలా కర్మ బంధాలలో చిక్కుకోరో ఇది వివరిస్తుంది. ఈ విజ్ఞానంతో ప్రాచీన మునులు - జయాపజయాలతో సంబంధం లేకుండా, సుఖ-దుఃఖాలను ఒకేలాగ పరిగణిస్తూ, కేవలం ఒక యజ్ఞం లాగా భగవంతుని ప్రీతి కోసం తమ పనులను/కర్మలను ఆచరించేవారు. యజ్ఞం అనేది అనేక రకాలుగా ఉంటుంది, అందులో చాలా రకాలు ఇక్కడ చెప్పబడ్డాయి. యజ్ఞం అనేది సరిగ్గా అర్పణచేయబడ్డప్పుడు దాని అవశేషం అమృతంలా అవుతుంది. అలాంటి అమృతం స్వీకరించినప్పుడు, కర్తలు మలిన శుద్ధి చేయబడుతారు. కాబట్టి యజ్ఞం అనేది ఎప్పుడైనా సరైన దృక్పథంతో, సరైన జ్ఞానంతో చెయ్యబడాలి. ఈ జ్ఞానమనే నావ సహాయంతో ఘోర పాపాత్ములు కూడా లౌకిక దుఃఖ సాగరాన్ని దాటవచ్చు. పరమ సత్యాన్ని అనుభవపూర్వకంగా తెలుసుకున్న ఒక నిజమైన ఆధ్యాత్మిక గురువు ద్వారా, ఇటువంటి జ్ఞానాన్ని నేర్చుకోవాలి. అర్జునుడి గురువుగా, అతన్ని జ్ఞానమనే ఖడ్గం తీసుకుని తన హృదయంలో జనించిన సందేహాలని ముక్కలుగా ఖండించి, లేచి తన కర్తవ్యాన్ని నిర్వర్తించమంటున్నాడు, శ్రీ కృష్ణుడు."
  },
  {
    "chapterName": "కర్మ సన్యాస యోగము",
    "chapterNumber": 5,
    "verseCount": 29,
    "language": "te",
    "yogaName": "కర్మ యోగము",
    "meaning": "కర్మ సన్యాస యోగము",
    "summary": "ఈ అధ్యాయం 'కర్మ సన్యాస' (పనులను త్యజించటం) మార్గాన్ని 'కర్మ యోగ' (భక్తి యుక్తంగా పనిచేయటం) మార్గంతో పోల్చి చూపుతుంది. రెండూ కూడా ఒకే లక్ష్యం దిశగా దారితీస్తాయని, మనం వీటిలో దేనినైనా ఎంచుకోవచ్చు, అని శ్రీ కృష్ణుడు వివరిస్తున్నాడు. కానీ, మనస్సు ఎంతో పరిశుద్ధమైనదిగా ఉంటే తప్ప కర్మ సన్యాసం అనేది పరిపూర్ణంగా/దోషరహితంగా చేయలేము, మరియు భక్తితో పనిచేయటం ద్వారానే ఆ చిత్త శుద్ధి సాధించవచ్చు. కాబట్టి, కర్మ యోగమే సాధారణంగా చాలామందికి సరియైన దారి. కర్మ యోగులు తమ ప్రాపంచిక విధులను పవిత్రమైన బుద్ధితో, ఫలాసక్తి విడిచి, భగవత్ అర్పితముగా చేస్తారు. ఈ విధముగా, తామరాకుకు తాను తేలియాడే నీటి యొక్క తడి అంటనట్టు, వారికి పాపము అంటదు. \n    జ్ఞాన ప్రకాశంచే వారు ఈ శరీరము అనేది, ఆత్మ వసించే నవ ద్వారాల నగరమని తెలుసుకుంటారు. ఈ విధంగా, వారు తాము కర్తలము కాము అని, తాము భోక్తలము కూడా కాము అని తెలుసుకుంటారు. వారు అందరి పట్ల సమత్వ దృష్టి కలిగి ఉంటారు, ఒక బ్రాహ్మణుడు, ఆవు, ఏనుగు, కుక్క, చండాలుడు అందరినీ సమానంగా చూస్తారు. అటువంటి నిజమైన జ్ఞానులైన జనులు దోషరహిత మైన దైవీ గుణాలు పెంపొందించుకొంటారు మరియు పరమ సత్యము యందు స్థితులై ఉంటారు. ప్రాపంచిక జనులు, ఇంద్రియ వస్తువిషయముల నుండి వచ్చే సుఖాల కోసం ఏంతో శ్రమిస్తారు, కానీ, అవే నిజముగా దుఃఖ హేతువులు అని తెలుసుకోరు. కానీ, కర్మ యోగులు వాటి యందు ఆసక్తి కలిగి ఉండరు; ప్రతిగా, తమలోనే ఉన్న భగవంతుని ఆనందాన్ని ఆస్వాదిస్తారు.\n    ఈ అధ్యాయం, తదుపరి, కర్మ సన్యాస మార్గాన్ని వివరిస్తుంది. కర్మ సన్యాసులు ఇంద్రియమనోబుద్ధుల నియంత్రణకు ఎన్నో నిష్ఠలు పాటిస్తారు. వారు బాహ్యమైన భోగ సంబంధ అన్ని తలంపులని త్యజించి, కామ, క్రోధ, భయముల నుండి స్వేచ్ఛ పొందుతారు. ఈ నియమనిష్ఠలన్నిటినీ భగవత్ భక్తితో సంపూర్ణము చేసి, శాశ్వతమైన శాంతిని పొందుతారు."
  },
  {
    "chapterName": "ధ్యాన యోగము",
    "chapterNumber": 6,
    "verseCount": 47,
    "language": "te",
    "yogaName": "కర్మ యోగము",
    "meaning": "ధ్యాన యోగము",
    "summary": "ఈ అధ్యాయంలో, శ్రీ కృష్ణుడు, ఐదవ అధ్యాయంలో నుండీ ఉన్న వస్తున్న 'కర్మ యోగ' (ప్రాపంచిక విధులు నిర్వర్తిస్తూనే ఆధ్యాత్మిక అభ్యాసం చేయటం) మరియు 'కర్మ సన్యాస' (సన్యాస ఆశ్రమంలో ఆధ్యాత్మికత అభ్యాసం చేయటం) మార్గాలను పోల్చి, విశ్లేషణను కొనసాగిస్తూనే, మొదటి మార్గాన్నే సిఫారసు చేస్తున్నాడు. మనం కర్మలను భక్తితో చేసినప్పుడు, అది మన మనస్సుని పవిత్రం చేసి మన ఆధ్యాత్మిక విజ్ఞానాన్ని స్థిరపరుస్తుంది. అప్పుడు మనస్సు ప్రశాంతత పొందిన తరువాత, ధ్యానమే, మన ఉన్నతికి ప్రధాన ఉపకరణము అవుతుంది. ధ్యానము ద్వారా యోగులు తమ మనస్సుని జయించటానికి శ్రమిస్తారు, ఎందుకంటే అశిక్షితమైన నిగ్రహింపబడని మనస్సు మన ప్రధాన శత్రువు, కానీ, సుశిక్షితమైన నియంత్రణలో ఉన్న మనస్సు మన మంచి మిత్రుడు. తీవ్రమైన కఠిన నిష్ఠలు పాటించటం ద్వారా ఒక వ్యక్తి ఆధ్యాత్మిక పథంలో పురోగతి సాధించలేడని శ్రీ కృష్ణుడు అర్జునుడిని హెచ్చరిస్తున్నాడు; కాబట్టి తినటంలో, పనిలో, వినోదంలో, మరియు నిద్రలో మిత సంయమనం పాటించాలని ఉపదేశించాడు. తదుపరి, మనస్సుని భగవంతునితో ఏకం (సంయోగం) చేయటానికి 'సాధన' ని వివరిస్తాడు. ఎలాగైతే గాలి వీచని చోట దీపం నిశ్చలంగా ఉంటుందో, అదే విధంగా సాధకుడు మనస్సుని ధ్యానం యందు నిలకడతో ఉంచాలి. నియంత్రణ చేయటానికి మనస్సు నిజానికి చాలా క్లిష్టమైనది, కానీ, అభ్యాసము, వైరాగ్యములతో దీనిని నియంత్రించవచ్చు. కాబట్టి, మనస్సు ఎక్కడికి పోయినా, దానిని తిరిగి తెచ్చి, భగవంతుని వైపే విడువకుండ కేంద్రీకరించాలి. ఎప్పుడైతే మనస్సు పరిశుద్ధమవుతుందో, అది అలౌకిక స్థితిలో నిలుస్తుంది. ఈ యొక్క 'సమాధి' అన్న పరమానంద స్థితి లో వ్యక్తి అనంతమైన దివ్యానందాన్ని అనుభవిస్తాడు.\nఅర్జునుడు తదుపరి శ్రీ కృష్ణుడిని, ఆధ్యాత్మిక మార్గంలో ప్రారంభమై కూడా చంచలమైన మనస్సు వల్ల లక్ష్యాన్ని చేరుకోలేని సాధకుడి గతి ఏమిటి అని ప్రశ్నిస్తాడు. భగవత్ ప్రాప్తి కోసం ప్రయాస పడే వ్యక్తి ఎప్పుడూ చెడిపోడు అని శ్రీ కృష్ణుడు హామీ ఇస్తాడు. భగవంతుడు ఎల్లప్పుడూ మన అన్ని పూర్వ జన్మల ఆధ్యాత్మిక పురోగతి లెక్క చూసుకుని, దానిని మళ్ళీ తదుపరి జన్మలలో పునరుత్తేజింప చేస్తాడు; దీనితో మనం ఎక్కడ విడిచిపెట్టామో అక్కడ నుండి తిరిగి ప్రయాణం మొదలు పెట్టవచ్చు. ఎన్నో జన్మల నుండి పోగైన సాధన ఫలంగా యోగులు ఈ జన్మలోనే భగవంతుడిని చేరుకుంటారు. తపస్వులు (మునులు), జ్ఞానులు (చదువుకున్నవారు, వేద శాస్త్ర పండితులు), మరియు కర్మీల కంటే యోగులే (భగవంతునితో ఏక మవ్వటానికి పరిశ్రమించే వారు) శ్రేష్ఠమైన వారు అని ప్రకటిస్తూ ఈ అధ్యాయం ముగుస్తుంది. ఇంకా, యోగులందరిలో కెల్లా, భగవంతుని పట్ల ప్రేమ యుక్త భక్తిలో నిమగ్నమయ్యే వారే అత్యున్నతమైన వారు."
  },
  {
    "chapterName": "జ్ఞాన విజ్ఞాన యోగము",
    "chapterNumber": 7,
    "verseCount": 30,
    "language": "te",
    "yogaName": "భక్తి యోగము",
    "meaning": "జ్ఞాన విజ్ఞాన యోగము",
    "summary": "భగవంతుని శక్తుల యొక్క భౌతిక మరియు ఆధ్యాత్మిక విస్తారాన్ని వివరించటంతో ఈ అధ్యాయం మొదలౌతుంది. ఇవన్నీ కూడా తన నుండే ఉద్భవించాయని, దారంలో గుచ్చబడిన పూసల వలె తన యందే స్థితమై ఉన్నాయని శ్రీ కృష్ణుడు వివరిస్తున్నాడు. ఆయనే ఈ సమస్త సృష్టికి మూలము, మరియు మళ్ళీ ఇదంతా ఆయనలోకే తిరిగి లయమైపోతుంది. ఆయన యొక్క భౌతిక ప్రాకృతిక శక్తి, మాయ, బలీయమైనది దానిని అధిగమించటం చాలా కష్టము, కానీ, ఆయనకి శరణాగతి చేసినవారు ఆయన కృపకు పాత్రులై, మాయను సునాయాసముగా దాటిపోగలరు. తనకు శరణాగతి చేయని నాలుగు రకాల మనుష్యుల గూర్చి, మరియు తన యందు భక్తిలో నిమగ్నమయ్యే నాలుగు రకాల మనుష్యుల గురించి శ్రీ కృష్ణుడు వివరిస్తాడు. తన భక్తులలో, ఎవరైతే జ్ఞానముతో తనను భజిస్తారో, తమ మనోబుద్ధులను ఆయనతో ఐక్యం చేస్తారో, వారు తనకు అత్యంత ప్రియమైన వారిగా పరిగణిస్తాను అని అంటున్నాడు. తమ బుద్ధి ప్రాపంచిక కోరికలతో కొట్టుకోపోయిన కొందరు, దేవతలకు శరణాగతి చేస్తారు. కానీ, ఈ దేవతలు కేవలం తాత్కాలిక భౌతిక ఫలాలని మాత్రమే ఇవ్వగలరు, వాటిని కూడా తమకు భగవంతుడు ప్రసాదించిన శక్తి ద్వారానే ఇస్తారు. అందుకే, మనం భక్తితో నిమగ్నమవ్వటానికి, భగవంతుడే అత్యంత యోగ్యుడు. సర్వజ్ఞత, సర్వవ్యాపకత్వము మరియు సర్వశక్తిమత్వం వంటి దివ్య గుణములను కలిగి ఉండి, తనే పరమ సత్యమని మరియు అంతిమ లక్ష్యమని, శ్రీ కృష్ణుడు వక్కాణిస్తున్నాడు. కానీ, ఆయన నిజ వ్యక్తిత్వం, తన యోగమాయా శక్తి యొక్క తెరచే కప్పివేయబడి ఉంది, అందుకే తన యొక్క దివ్య మంగళ స్వరూపము యొక్క నిత్య శాశ్వతమైన స్వభావం అందరికీ తెలియదు. ఆయనను మనం ఆశ్రయిస్తే, ఆయనే తన గురించి జ్ఞానాన్ని ప్రసాదిస్తాడు మరియు ఆయనను తెలుసుకున్న తరువాత మనకు కూడా ఆత్మ జ్ఞానము మరియు కర్మ-క్షేత్రము గురించి జ్ఞానం, అవగతమవుతుంది."
  },
  {
    "chapterName": "అక్షర బ్రహ్మ యోగము",
    "chapterNumber": 8,
    "verseCount": 28,
    "language": "te",
    "yogaName": "భక్తి యోగము",
    "meaning": "అక్షర బ్రహ్మ యోగము",
    "summary": "ఉపనిషత్తులలో విస్తారంగా చెప్పబడిన చాలా పదాలని మరియు విషయాలని ఈ అధ్యాయం క్లుప్తంగా వివరిస్తుంది. ఇది మరణం తరువాత ఆత్మ యొక్క గమ్యాన్ని నిర్ణయించే కారకాలను కూడా వివరిస్తుంది. మనం మరణ సమయంలో భగవంతుడిని స్మరించగలిగితే, ఆయనను ఖచ్చితంగా పొందగలము. కాబట్టి, రోజువారి పనులు చేస్తూనే, ఆయనను అన్ని సమయాల్లో స్మరిస్తూనే ఉండాలి. ఆ స్వామి యొక్క గుణములు, లక్షణములు, మరియు మహిమలు గుర్తు చేసుకుంటూ ఆయనను స్మరించవచ్చు. దృఢ సంకల్పముతో యోగ ధ్యానములో మనస్సుని నామ సంకీర్తన ద్వారా ఆయనపైనే కేంద్రీకరించాలి. మన మనస్సుని సంపూర్ణంగా అనన్య భక్తితో ఆయన పైనే నిమగ్నం చేసినప్పుడు మనము ఈ భౌతిక జగత్తుకి అతీతంగా ఆధ్యాత్మిక స్థాయిలోనికి వెళతాము.\n    ఆ తర్వాత, ఈ అధ్యాయం, భౌతిక జగత్తు లోని రకరకాల లోకాల గురించి ప్రస్తావిస్తుంది. సృష్టి క్రమంలో, ఈ లోకాలు మరియు వాటిలో అసంఖ్యాకమైన జీవ రాశులు ఎలా వచ్చాయో, మరలా ప్రళయ కాలంలో ఎలా తిరిగి లయం అవుతాయో, ఈ అధ్యాయం చెపుతుంది. కానీ, ఈ యొక్క వ్యక్త, అవ్యక్త సృష్టికి అతీతంగా, భగవంతుని దివ్య ధామము ఉంటుంది. ప్రకాశవంతమైన మార్గాన్ని అనుసరించినవారు, అంతిమంగా దివ్య ధామాన్ని చేరుకుంటారు, మరియు ఈ మృత్యు లోకానికి తిరిగిరారు; చీకటి మార్గాన్ని అనుసరించేవారు, ఈ జన్మ, వ్యాధి, వృద్దాప్యం, మరియు మృత్యువు యొక్క అంతం లేని చక్రంలో పడి తిరుగుతూనే ఉంటారు."
  },
  {
    "chapterName": "రాజ విద్యా యోగము",
    "chapterNumber": 9,
    "verseCount": 34,
    "language": "te",
    "yogaName": "భక్తి యోగము",
    "meaning": "రాజ విద్యా యోగము",
    "summary": "ఏడవ మరియు ఎనిమిదవ అధ్యాయాలలో శ్రీ కృష్ణుడు, యోగ ప్రాప్తికి, భక్తియే అన్నింటికన్నా సులువైన మార్గమని, భక్తియే అత్యున్నత యోగ విధానమని ప్రకటించి ఉన్నాడు. తొమ్మిదవ అధ్యాయంలో - విస్మయాన్నీ, పూజ్యభావాన్నీ మరియు భక్తినీ ఉత్పన్నం చేసే - తన యొక్క సర్వోత్కృష్ట మహిమలను గురించి చెప్తున్నాడు. తాను అర్జునుడి ముందు తన సాకార రూపంలో నిలబడి ఉన్నా, తాను ఒక సామాన్య మానవుడినే అని అపోహ పడవద్దని తెలియచేస్తున్నాడు. తాను ఏ విధంగా, తన ఈ యొక్క భౌతిక శక్తిని ఆధీనంలో ఉంచుకొని, సృష్టి ప్రారంభంలో అనేకానేక జీవ రాశులను సృష్టించి, ప్రళయ సమయంలో తిరిగి వాటిని తనలోకే లయం చేసుకుంటాడో మరియు తదుపరి సృష్టి చక్రంలో మరల వాటిని వ్యక్తపరుస్తాడో, వివరిస్తాడు. అంతటా బ్రహ్మాండంగా వీచే గాలి కూడా ఆకాశంలోనే ఎలా స్థితమై ఉంటుందో, అలాగే సమస్త జీవ రాశులూ ఆయన యందే నివసిస్తూ ఉంటాయి. అయినా, తన దివ్య యోగ మాయా శక్తి ద్వారా, ఆయన తటస్థంగా, నిర్లిప్తంగా, ఈ అన్ని కార్యక్రమాలకు కేవలం సాక్షిగా, అన్నీ గమనిస్తూ ఉండిపోతాడు.\n    హిందూ ధర్మంలో ఉన్న ఎంతో మంది దేవుళ్ళ/దేవతల అయోమయాన్ని శ్రీ కృష్ణుడు ఇక్కడ - ఆరాధనా విషయముగా కేవలం ఒకే భగవంతుడు ఉంటాడు - అని వివరించటం ద్వారా పరిష్కరిస్తున్నాడు. ఆయనే లక్ష్యము, ఆధారము, ఆశ్రయము మరియు సర్వ భూతముల నిజమైన స్నేహితుడు. వేదాలలో పేర్కొనబడిన కర్మ కాండల పట్ల ఆసక్తి ఉన్నవారు స్వర్గాది లోకాలను పొందుతారు, మరియు వారి పుణ్య ఫలం క్షయం అయిపోయిన తరువాత తిరిగి భూలోకానికి చేరుకుంటారు. కానీ, ఆ పరమేశ్వరుని పట్ల అనన్య భక్తితో నిమగ్నమై ఉన్నవారు ఆయన పరంధామమునకే చేరుకుంటారు. ఈ విధంగా శ్రీ కృష్ణుడు తన పట్ల ఉండే అనన్య భక్తి యొక్క సర్వోన్నత శ్రేష్ఠతను ఎంతగానో కొనియాడాడు. ఇటువంటి భక్తిలో, మన దగ్గర ఉన్నదంతా ఆయనకే సమర్పించి మరియు ప్రతీదీ ఆయనకోసమే చేస్తూ, మనము భగవంతుని చిత్తముతో సంపూర్ణంగా ఏకమై నివసించాలి. ఇటువంటి స్వచ్ఛమైన పవిత్రమైన భక్తిచే, మనము కర్మ బంధాలనుండి విడిపింపబడి, భగవంతునితో ఆధ్యాత్మిక ఏకత్వం పొందుతాము.\n    ఇంకా, తను ఒకరి పట్ల అనుకూలంగా, మరొకరి పట్ల ప్రతికూలంగా ఉండను అంటున్నాడు - ఆయన సమస్త ప్రాణుల పట్ల నిష్పక్షపాతంగా వ్యవహరిస్తాడు. పరమ పాపిష్ఠి వారు అయినా సరే ఆయనను ఆశ్రయిస్తే, ఆయన వారిని ఆహ్వానించి, స్వీకరించి వారిని శీఘ్రముగా పుణ్యాత్ములుగా, పవిత్రులుగా తీర్చిదిద్దుతాడు. తన భక్తులు ఎన్నటికీ నశింపరు అని ఆయన హామీ ఇస్తున్నాడు. ఆయన వారి యందే స్థితమై ఉండి, వారికి లేనివి సమకూర్చి పెడతాడు, మరియు, వారికి ఉన్నవాటిని సంరక్షిస్తాడు. అందుకే, మనం సర్వదా ఆయనను స్మరించాలి, ఆరాధించాలి, మన మనస్సు-శరీరమును ఆయనకు సమర్పించాలి, ఆయన్నే సర్వోన్నత లక్ష్యంగా చేసుకోవాలి."
  },
  {
    "chapterName": "విభూతి యోగము",
    "chapterNumber": 10,
    "verseCount": 42,
    "language": "te",
    "yogaName": "భక్తి యోగము",
    "meaning": "విభూతి యోగము",
    "summary": "భగవంతుని యొక్క వైభవోపేతమైన మరియు దేదీప్యమానమైన మహిమలను గుర్తుచేసుకుంటూ ఆయనపై ధ్యానం చేయటానికి సహాయముగా అర్జునుడికి ఈ అధ్యాయము శ్రీ కృష్ణుడిచే చెప్పబడినది. తొమ్మిదవ అధ్యాయంలో, శ్రీ కృష్ణుడు భక్తి శాస్త్రాన్ని తెలియపరిచాడు మరియు తన యొక్క కొన్ని వైభవాలని వివరించాడు. ఇక్కడ ఇక, అర్జునుడి భక్తిని మరింత ఇనుమడింపచేయాలని తన అనంతమైన మహిమలని మరింత వివరిస్తున్నాడు శ్రీ కృష్ణుడు. ఈ శ్లోకాలు, చదవటానికి కమనీయంగా మరియు వినటానికి మనోరంజకంగా ఉంటాయి.\nఈ జగత్తులో ఉన్న ప్రతిదానికీ తనే మూలము అని తెలియచెప్తున్నాడు శ్రీ కృష్ణుడు. మానవులలో ఉన్న విభిన్న లక్షణములు ఆయన నుండే ఉద్భవించాయి. సప్తర్షులు, నలుగురు మహాత్ములు మరియు పద్నాలుగు మనువులు ఆయన మనస్సు నుండే జనించారు మరియు వారి నుండే ఈ ప్రపంచంలోని అందరు మనుష్యులూ అవతరించారు. సమస్తమూ ఆయన నుండే ఉద్భవించాయి అన్న విషయం తెలుసుకున్నవారు ఆయన పట్ల భక్తితో దృఢ విశ్వాసంతో నిమగ్నమౌతారు. ఇటువంటి భక్తులు ఆయన మహిమల గురించి చర్చిస్తూ, ఇతరులకు ఆయన గురించి తెలియచేస్తూ ఎంతో తృప్తిని అనుభవిస్తారు. వారి మనస్సులు ఆయనతో ఏకమై పోవటం వలన, వారి హృదయములోనే వసించే భగవంతుడు, వారికి దివ్య జ్ఞానము అనుగ్రహిస్తాడు, దానిచే ఆయనను వారు సునాయాసముగానే పొందుతారు. \nఅర్జునుడు, ఇది విన్న పిదప, శ్రీ కృష్ణుని యొక్క సర్వోన్నత స్థాయిని గురించి తాను సంపూర్ణముగా విశ్వసిస్తున్నానని ప్రకటిస్తాడు; మరియు శ్రీ కృష్ణుడే సర్వోత్కృష్ట పరమేశ్వరుడని చాటిచెప్పాడు. వినటానికి అమృతములా ఉండే ఆయన యొక్క కీర్తి విశేషాలని మరింత చెప్పమని భగవంతుడిని ప్రార్థిస్తాడు. సమస్త పదార్థములకు కృష్ణుడే ఆది, మధ్య, అంతము కావున, ఉన్నదంతా ఆయన యొక్క శక్తి స్వరూపమే అని శ్రీ కృష్ణుడు తెలియచేస్తున్నాడు. సౌందర్యము, యశస్సు, శక్తి, జ్ఞానము, మరియు ఐశ్వర్యములు అనంతమైన పరిమాణంలో కలిగిన భాండాగారము, శ్రీ కృష్ణుడు. ఎప్పుడైనా మనము మహాద్భుతమైన వైభవమును ఎక్కడైనా గమనిస్తే, ఏదైనా మనలను ఆశ్చర్యచకితులను చేస్తే, మనల్ని పారవశ్యములో ముంచి, మనకు పరమానందమును కలుగచేస్తే, అది శ్రీ కృష్ణుడి వైభవోపేతమైన ఐశ్వర్యములో ఒక చిన్న తళుకే అని తెలుసుకోవాలి. సమస్త ప్రాణులు మరియు వస్తువులు తమతమ శక్తిసామర్థ్యాలను ఆయన యొక్క మూలశక్తి భాండాగారము నుండే పొందుతాయి. తదుపరి ఈ అధ్యాయంలో, తన ఐశ్వర్యమును చక్కగా వివరించే వస్తువులు, వ్యక్తిత్వాలు మరియు కార్యకలాపములను వివరిస్తాడు శ్రీ కృష్ణుడు. చివరికి, తన యొక్క ఐశ్వర్యము, వైభవము యొక్క పరిమాణము, కేవలం ఇప్పుడు చెప్పిన దాని యొక్క మొత్తంగా మాత్రమే అనుకోవద్దు అని ఆయన అంటాడు - ఎందుకంటే, అసంఖ్యాకమైన విశ్వములను తన అస్తిత్వంలోని అతి చిన్న భాగంతోనే నిలబెట్టి సంరక్షిస్తుంటాడు, శ్రీ కృష్ణుడు. అందుకే, ఆ సమస్త ఐశ్వర్యమునకు మూలమైన భగవంతుడినే మన ఆరాధనా విషయముగా చేసుకోవాలి."
  },
  {
    "chapterName": "విశ్వ రూప దర్శన యోగము",
    "chapterNumber": 11,
    "verseCount": 55,
    "language": "te",
    "yogaName": "భక్తి యోగము",
    "meaning": "విశ్వ రూప దర్శన యోగము",
    "summary": "ఇంతకు క్రితం అధ్యాయంలో, అర్జునుడి భక్తిని మరింత వికసింపచేయటానికి, శ్రీ కృష్ణుడు తన దివ్య విభూతులను వివరించి ఉన్నాడు. సుందరమైనవి, మహాద్భుతమైనవి, మరియు శక్తివంతమైనవి అన్నీ కూడా తన వైభవములోని చిన్న తళుకులే అని చివరికి సూచనప్రాయంగా తన విశ్వ రూపము గురించి ప్రస్తావించాడు. ఈ అధ్యాయంలో, అర్జునుడు శ్రీ కృష్ణుడి విశ్వ రూపమును చూడాలని ప్రార్థిస్తున్నాడు, అది సమస్త బ్రహ్మాండములను తనలోనే కలిగి ఉన్న అనంతమైన విశ్వ రూపము. శ్రీ కృష్ణుడు దానికి ఒప్పుకుని, అతనికి దివ్య దృష్టిని ప్రసాదిస్తాడు. అర్జునుడు అప్పుడు సమస్త సృష్టిని ఆ దేవ దేవుని శరీరము యందే దర్శిస్తాడు. ఆయన అనంతమైన ముఖములను, కళ్ళను, బాహువులను, మరియు ఉదరములను ఆ యొక్క మహాద్భుతమైన మరియు అనంతమైన భగవంతుని రూపంలో దర్శిస్తాడు. ఆ స్వరూపమునకు ఎలాంటి మొదలు లేదా తుది లేదు మరియు అన్ని దిశలయందు అనంతమైన పరిమాణంలో వ్యాపించి ఉంది. ఆ యొక్క విశ్వ రూప తేజస్సు, వెయ్యి సూర్యులు ఒక్క సారిగా ఆకాశములో వెలిగిన కాంతి కంటే తేజోవంతముగా ఉన్నది. ఆ దర్శనం అర్జునుడి వెంట్రుకలను నిక్కబోడుచుకునేలా చేసింది. ముల్లోకాలూ భగవంతుని శాసనానికి భయంతో వణకటం గమనిస్తాడు. దేవతలు ఆయన యందే ఆశ్రయం పొంది ఉండటం మరియు మహర్షులు శ్లోకాలు, కీర్తనలతో ఆయనను స్తుతించటం ప్రత్యక్షంగా చూస్తాడు. పురుగులు మంటలోనికి వేగంగా వెళ్ళి పడిపోయి భస్మమైపోతునట్టు, ధృతరాష్ట్రుడి కుమారులందరూ, వారి అనుబంధ రాజులతో సహా, ఆ భయంకర స్వరూపము నోటిలోనికి దూసుకెళ్లటం చూస్తాడు. ఆ విశ్వ రూపమును దర్శించటంతో గుండె భయంతో దడదడలాడి పోతున్నదని, మానసిక ప్రశాంతత పోయినదని ఒప్పుకుంటాడు. అర్జునుడు భీతిల్లిపోయి, ఈ మహోన్నత ప్రభువు నిజానికి ఎవరు అని తెసుకోవాలనుకుంటాడు, ఎందుకంటే ఈ రూపానికీ మరియు తనకు తెలిసిన గురువు మరియు సఖుడైన కృష్ణునికి ఏమాత్రం పోలిక లేదు. శ్రీ కృష్ణుడు దీనికి సమాధానముగా, తానే కాల రూపములో ముల్లోకాలను నాశనం చేసేవాడను అని చెప్తాడు. కౌరవ మహాయోధులందరూ తనచే పూర్వమే సంహరింపబడ్డారు కాబట్టి, విజయం నిశ్చితమైనది కావున, అర్జునుడు ఇక లేచి యుద్ధం చేయాలని అంటాడు.\n    దీనికి ప్రతిస్పందనగా, అర్జునుడు, శ్రీకృష్ణుడిని అనంతమైన శక్తి సామర్థ్యములు కలిగిన ఈశ్వరునిగా స్తుతించి ఆయనకు పదేపదే నమస్కరిస్తాడు. తమ సుదీర్ఘ మైత్రిలో తను ఎప్పుడైనా కృష్ణుడిని సామాన్య మానవునిగా పొరపాటుగా అనుకుని ఆయన మనస్సు నొప్పించేట్టు ఏదైనా తప్పు చేస్తే క్షమించమని అడుగుతాడు. కృప కోసం ప్రార్థించి మరొక్కసారి తిరిగి మనోహరమైన భగవంతుని మామూలు రూపాన్ని చూపమని అడుగుతాడు. శ్రీ కృష్ణుడు అతని కోరికను మన్నించి మొదట చతుర్భుజ రూపమునకు వచ్చి, తదుపరి, తన సుకుమారమైన మరియు రమ్యమైన రెండు-భుజముల స్వరూపములోనికి వస్తాడు. అర్జునుడు ఏ విధమైన భగవత్ స్వరూపాన్ని దర్శనం చేసాడో ఆ దర్శనం లభించటం ఎంత దుర్లభమో అర్జునుడికి చెప్తాడు. వేదములు అభ్యసించటం వలన, తపస్సులు ఆచరించటం చేత, దానధర్మాల చేత, లేదా యజ్ఞములు చేయటం ద్వారా కానీ ఆయన నిజ స్వరూపమును దర్శించలేము. నిష్కల్మషమైన భక్తిచే మాత్రమే ఆయనను అర్జునుడు ఎదుటే ఉన్నవాడిలా, నిజరూపములో తెలుసుకోగలము, మరియు ఆయనతో ఏకమవ్వగలము."
  },
  {
    "chapterName": "భక్తి యోగము",
    "chapterNumber": 12,
    "verseCount": 20,
    "language": "te",
    "yogaName": "భక్తి యోగము",
    "meaning": "భక్తి యోగము",
    "summary": "ఈ చిన్న అధ్యాయము, మిగతా అన్ని ఆధ్యాత్మిక మార్గముల కన్నా, ప్రేమ యుక్త భక్తి మార్గము యొక్క సర్వోన్నత ఉత్కృష్టతని నొక్కివక్కాణిస్తుంది. యోగములో ఎవరిని ఎక్కువ శ్రేష్ఠులుగా కృష్ణుడు పరిగణిస్తాడు అని అర్జునుడు అడగటంతో ఈ అధ్యాయము ప్రారంభమవుతుంది —భగవంతుని సాకార రూపము పట్ల భక్తితో ఉండేవారా లేక నిరాకార బ్రహ్మంను ఉపాసించే వారా అని. ఈ రెండు మార్గాలు కూడా భగవత్ ప్రాప్తికే దారితీస్తాయి అని శ్రీ కృష్ణుడు సమాధానమిస్తాడు. కానీ, తన సాకార రూపమును ఆరాధించేవారే అత్యుత్తమ యోగులని ఆయన భావిస్తాడు. నిరాకార, అవ్యక్త భగవత్ తత్త్వముపై ధ్యానం చేయటం చాలా ఇబ్బందులతో కూడి ఉన్నది మరియు అది బద్ద జీవులకు చాలా కష్టతరమైనది అని వివరిస్తాడు. తమ అంతఃకరణ ఆయనతో ఏకమై పోయినవారు, మరియు తమ అన్ని కార్యములను ఆయనకే అర్పించిన సాకార రూప భక్తులు, త్వరితగతిన జనన-మరణ చక్రము నుండి విముక్తి చేయబడతారు. శ్రీ కృష్ణుడు ఈ విధంగా అర్జునుడిని, అతని బుద్ధిని తనకు అర్పించి, మనస్సుని అనన్య ప్రేమ-యుక్త భక్తితో తన యందే లగ్నం చేయమని ప్రార్థిస్తాడు.\n    కానీ, తరచుగా, ఇటువంటి ప్రేమ, ప్రయాసపడే జీవాత్మలో కనిపించదు. కాబట్టి, శ్రీకృష్ణుడు ఇతర పద్ధతులను కూడా సూచించాడు, ఒకవేళ అర్జునుడు తక్షణమే భగవంతుని యందు మనస్సుని పూర్తిగా నిమగ్నం చేసే స్థాయిని చేరుకోలేకపోతే, అతను ఆ యొక్క దోషరహిత పరిపూర్ణ స్థాయిని చేరుకోవటానికి పరిశ్రమించాలి. భక్తి అనేది ఏదో ఒక నిగూఢమైన బహుమానం కాదు, దానిని నిరంతర అభ్యాసము ద్వారా పెంపొందించుకోవచ్చు. ఒకవేళ అర్జునుడు ఇది కూడా చేయలేకపోతే, అతను ఓటమిని ఒప్పుకోకూడదు; సరికదా భక్తితో శ్రీకృష్ణుడి ప్రీతికోసం పనిచేయటం నేర్చుకోవాలి. ఒకవేళ ఇది కూడా సాధ్యం కాకపోతే, అతను తన కర్మ-ఫలములను త్యజింఛాలి మరియు ఆత్మయందే స్థితమై ఉండాలి. కృష్ణుడు ఇంకా ఏమంటున్నాడంటే, యాంత్రికమైన అభ్యాసం కన్నా జ్ఞానాన్ని పెంపొందించుకోవటం ఉన్నతమైనది, జ్ఞానాన్ని పెంపొందించుకోవడం కంటే ధ్యానం ఉన్నతమైనది; ధ్యానం కంటే ఉన్నతమైనది కర్మ ఫలములను త్యజించటం, ఇది తక్షణమే ఎంతో శాంతిని కలుగజేస్తుంది. ఈ అధ్యాయం యొక్క మిగతా శ్లోకాలు భగవంతుడికి చాలా ప్రియమైన, ఆయన ప్రేమ-యుక్త భక్తుల యొక్క మహోన్నతమైన గుణములను విశదీకరిస్తాయి."
  },
  {
    "chapterName": "క్షేత్ర క్షేత్రజ్ఞ విభాగ యోగము",
    "chapterNumber": 13,
    "verseCount": 35,
    "language": "te",
    "yogaName": "జ్ఞాన యోగము",
    "meaning": "క్షేత్ర క్షేత్రజ్ఞ విభాగ యోగము",
    "summary": "ఒక్కోటి ఆరు అధ్యాయములతో కూడిన మూడు విభాగాలుగా, భగవద్గీతలో మొత్తం పద్దెనిమిది అధ్యాయాలు ఉంటాయి. మొదటి ఆరు అధ్యాయముల భాగము కర్మ యోగాన్ని విశదీకరిస్తుంది. రెండవ భాగము, భక్తి యొక్క మహత్వమును, మరియు భక్తిని పెంపొందించుకోవటానికి భగవంతుని యొక్క విభూతులను కూడా (ఐశ్వర్యములను) తెలియపరుస్తుంది. మిగతా ఆరు అధ్యాయముల మూడవ భాగము, తత్త్వ జ్ఞానమునకు అర్థవివరణ చేస్తుంది. ఈ ప్రస్తుత అధ్యాయము, మూడవ భాగములోని మొదటి అధ్యాయము; ఇది రెండు పదాలను మనకు పరిచయం చేస్తున్నది — క్షేత్రము మరియు క్షేత్రజ్ఞుడు (క్షేత్రమును తెలిసినవాడు). క్షేత్రము అంటే ఈ శరీరము అని మరియు క్షేత్రజ్ఞుడు (క్షేత్రమును ఎరిగినవాడు) అంటే అందులో ఉండే ఆత్మ అని అనుకోవచ్చు. కానీ ఇది విషయాన్ని చాలా సరళీకరణం చేసినట్టే, ఎందుకంటే క్షేత్రము అంటే దానిలో చాలా ఉంటాయి — మనస్సు, బుద్ధి, మరియు అహంకారము, మరియు మన వ్యక్తిత్వములో ఉండే భౌతిక శక్తి యొక్క అన్ని అంశములు. ఈ బృహత్‌ నిర్వచనంలో, ఆత్మ తప్ప, మన వ్యక్తిత్వమును నిర్ణయించే మిగతా అన్ని అస్తిత్వాలను కలిపి శరీర క్షేత్రము అనవచ్చు. జీవాత్మను క్షేత్రమును తెలిసినవాడు, లేదా 'క్షేత్రజ్ఞుడు' అంటారు.\n    ఎలాగైతే, ఒక రైతు తన క్షేత్రములో విత్తనములు వేసి, దాని నుండి పంటను పొందుతాడో, అదేవిధంగా మన శరీరము అనే క్షేత్రములో మంచి లేదా చెడు తలంపులు మరియు కార్యములు వేసి, తద్వారా మన భవిష్యత్తుని పొందుతాము. బుద్ధుడు ఇలా వివరించాడు: ‘మన ప్రస్తుత స్థితి మన ఆలోచనల/తలంపుల ఫలితమే; అది మన తలంపుల మీదనే ఆధారపడి ఉన్నది; మరియు అది మన ఆలోచనలతోనే తయారు చేయబడినది.’ కాబట్టి, మన ఆలోచనలు ఎట్లా ఉంటే మనం అట్లానే అవుతాము. ప్రఖ్యాత అమెరికన్ తత్త్వవిచారకుడు రాల్ఫ్ వాల్డో ఎమెర్సన్, ఇలా అన్నాడు: ‘ప్రతి పని యొక్క వెనుక మూలకారణం ఒక ఆలోచన ఉంటుంది. (The ancestor of every action is thought).’ అందుకే, మన క్షేత్రమును, మంచి ఆలోచనలు మరియు చర్యలతో ఉంచుకునే కళను మనం నేర్చుకోవాలి. దీనికి క్షేత్రము మరియు క్షేత్రజ్ఞుడు – యొక్క తేడాను స్పష్టంగా చూపించే జ్ఞానం అవసరము. ఈ ప్రస్తుత అధ్యాయములో, శ్రీ కృష్ణుడు ఈ యొక్క విషయంపై విస్తారమైన విశ్లేషణను అందిస్తున్నాడు. శరీర క్షేత్రములో ఉన్న భౌతిక ప్రాకృతిక మూలకాలన్నింటినీ ఇక్కడ పేర్కొంటున్నాడు. భావాలు, ఉద్వేగాలు, మరియు మానసిక స్థితుల రూపాల్లో, క్షేత్రములో జనించే మార్పులు/కదలికలను ఆయన వివరిస్తాడు. క్షేత్రమును పవిత్రం చేసి, దానిని జ్ఞాన దీపముచే ప్రకాశం చేసే గుణములు మరియు లక్షణములను శ్రీ కృష్ణుడు పేర్కొంటాడు. ఇటువంటి జ్ఞానము మనకు క్షేత్రజ్ఞుడైన ఆత్మను అనుభవము లోనికి తేవటానికి దోహదపడుతుంది. ఆ తదుపరి, ఈ అధ్యాయము, సమస్త ప్రాణుల క్షేత్రములను సంపూర్ణముగా తెలిసినవాడైన భగవంతుడి గురించి మనకు వివరిస్తుంది. ఆ సర్వోన్నత భగవానుడు ఒకేసమయంలో పరస్పర విరుద్ధమైన లక్షణములను కలిగి ఉంటాడు, అంటే, ఒకే సమయంలో విరుద్ధమైన గుణములను కలిగి ఉండటం. అందుకే, సృష్టిలో సర్వవ్యాపిగా ఉంటాడు, మరియు సర్వ భూతముల హృదయములలో కూర్చుని కూడా ఉంటాడు. కాబట్టి, అందుకే ఆయన సమస్త ప్రాణులకు పరమాత్మ.\n    ఆత్మ, పరమాత్మ, మరియు భౌతిక ప్రకృతి-లను వివరించిన పిదప, శ్రీ కృష్ణుడు, జీవ రాశులు చేసే పనులకు వీటిలో ఏది కారణమో వివరిస్తాడు, మరియు అంతేకాక, స్థూలంగా ఈ ప్రపంచంలో కారణము మరియు కార్యములకు ఏది మూలమో కూడా వివరిస్తాడు. ఎవరైతే వీటిని స్పష్టంగా వేర్వేరుగా చూడగలుగుతారో మరియు సరిగ్గా నిశితంగా కార్యము యొక్క కారణములను చూడగలరో, వారే నిజముగా చూసినట్టు; వారే నిజముగా జ్ఞానములో స్థితమై ఉన్నట్టు. వారు ప్రతి ప్రాణిలో ఉన్న పరమాత్మను గమనించగలరు, మరియు తమ మనస్సుచే తమని తామే నీచ స్థాయికి దిగజార్చుకోరు. విభిన్నమైన జీవరాశులు ఒకే ప్రకృతి యందు స్థితమై ఉన్నట్టు చూడగలరు. సమస్త సృష్టిలో అంతర్లీనంగా వ్యాప్తమై ఉన్న ఒకే ఒక ఆధ్యాత్మిక అస్తిత్వమును చూడగలిగిన తరుణంలో వారు బ్రహ్మ జ్ఞానమును పొందుతారు."
  },
  {
    "chapterName": "గుణత్రయ విభాగ యోగము",
    "chapterNumber": 14,
    "verseCount": 27,
    "language": "te",
    "yogaName": "జ్ఞాన యోగము",
    "meaning": "గుణత్రయ విభాగ యోగము",
    "summary": "గత అధ్యాయము, ఆత్మ మరియు భౌతిక శరీరమునకు మధ్య తేడాని విపులంగా విశదీకరించింది. ఈ అధ్యాయము, దేహము మరియు దాని మూలకముల యొక్క మూలశక్తి అయిన భౌతిక శక్తి యొక్క స్వభావమును వివరిస్తుంది; ఇదే మనస్సు మరియు పదార్థమునకు మూలము. భౌతిక ప్రకృతి మూడుగుణములతో కూడి ఉంటుంది అని శ్రీ కృష్ణుడు వివరిస్తున్నాడు - సత్త్వము, రజస్సు, మరియు తమస్సు. భౌతిక శక్తిచే తయారైన శరీరమనోబుద్ధులు కూడా ఈ మూడు గుణములను కలిగి ఉంటాయి; ఈ మూడు గుణముల కలయిక మనలో ఏ పాళ్ళలో ఉన్నది అన్నదాని బట్టి మన వ్యక్తిత్వము ఆధారపడి ఉంటుంది. సత్త్వ గుణము - శాంతి, సదాచారము, సద్గుణము మరియు ప్రసన్నత వంటి లక్షణాలతో ఉంటుంది. రజో గుణము వలన అంతులేని కోరికలు మరియు ప్రాపంచిక అభ్యున్నతి కోసం తృప్తినొందని తృష్ణ, కలుగుతాయి. మరియు తమో గుణము వలన భ్రమ, సోమరితనం, మత్తు మరియు నిద్ర కలుగుతాయి. ఆత్మ, జ్ఞానోదయం పొందేవరకూ, ప్రకృతి యొక్క ఈ బలీయమైన శక్తులతో వ్యవహరించటం నేర్చుకోవాలి. ఈ త్రి-గుణములకు అతీతముగా వెళ్ళటమే మోక్షము.\n    ఈ త్రి-గుణముల బంధనమును ఛేదించి వెళ్లిపోవటానికి ఒక సరళమైన ఉపాయం తెలియచేస్తాడు శ్రీ కృష్ణుడు. సర్వోత్కృష్ట భగవానుడు ఈ మూడు గుణములకు అతీతుడు, ఒకవేళ మనం ఆయనతో అనుసంధానం అయిపోతే, ఆ తదుపరి, మన మనస్సు కూడా దివ్యమైన స్థాయికి ఎదుగుతుంది. ఈ తరుణంలో, అర్జునుడు, త్రిగుణములకు అతీతముగా ఎదిగిన వారి లక్షణములు ఏమిటి అని అడుగుతాడు. అటువంటి జీవన్ముక్తులైన వారి లక్షణములను శ్రీ కృష్ణుడు క్రమపద్ధతిలో వివరిస్తాడు. జ్ఞానోదయమైన వారు ఎల్లప్పుడూ సమత్వచిత్తము (సమతౌల్యం) తోనే ఉంటారు అని చెప్తాడు; జగత్తులో ఈ త్రిగుణములు ప్రవర్తిల్లుచున్నప్పుడు, వాటి ప్రభావం మనుష్యులలో, వస్తువులలో, పరిస్థితులలో వ్యక్తమైనప్పుడు వారు ఉద్వేగానికి లోనుకారు. వారు అన్నింటినీ భగవంతుని యొక్క శక్తి ప్రకటితమవుతున్నట్టుగానే చూస్తారు; అన్నీ చివరికి ఆయన అధీనములోనే ఉన్నట్టు గమనిస్తారు. అందుకే, ప్రాపంచిక పరిస్థితులు వారిని అతిసంతోషానికి లేదా దుఃఖమునకు గురి చేయవు; చలించిపోకుండా ఉండి వారు ఆత్మ యందే స్థితమై ఉంటారు. త్రిగుణములకు అతీతముగా ఎదగటానికి, భక్తి యొక్క ఔన్నత్యాన్ని, శక్తిని మరల ఒకసారి మనకు శ్రీ కృష్ణ పరమాత్మ గుర్తు చేయటంతో ఈ అధ్యాయం ముగుస్తుంది."
  },
  {
    "chapterName": "పురుషోత్తమ యోగము",
    "chapterNumber": 15,
    "verseCount": 20,
    "language": "te",
    "yogaName": "జ్ఞాన యోగము",
    "meaning": "పురుషోత్తమ యోగము",
    "summary": "ఇంతకు క్రితం అధ్యాయములో, ప్రకృతి త్రిగుణములకు అతీతులమవటం ద్వారా భగవత్ లక్ష్యమును చేరుకోవచ్చు అని శ్రీ కృష్ణుడు వివరించి ఉన్నాడు. అనన్య భక్తిలో నిమగ్నమవటమే త్రి-గుణములకు అతీతులమై పోవటానికి ఉన్న అద్భుతమైన పద్ధతి అని కూడా చెప్పి ఉన్నాడు. ఇటువంటి భక్తిలో నిమగ్నమవటానికి, మనము మనస్సుని ఈ ప్రపంచం నుండి దూరం చేసి దానిని భగవంతుని యందే నిమగ్నం చేయాలి. అందుకే, ఈ ప్రపంచం యొక్క స్వభావాన్ని తెలుసుకోవటం చాలా ఆవశ్యకం.\nఈ అధ్యాయంలో, అర్జునుడికి భౌతిక జగత్తు పట్ల వైరాగ్యం పెంపొందించటానికి సహాయం చేయటానికి, శ్రీ కృష్ణుడు, ఈ యొక్క భౌతిక జగత్తుని తద్రూప ఉపమానముతో వివరిస్తున్నాడు. భౌతిక జగత్తుని ఒక తల క్రిందులుగా ఉండే అశ్వత్థ వృక్షం (రావిచెట్టు) తో పోల్చుతున్నాడు. బద్ధ జీవాత్మ - ఆ వృక్షం ఎక్కడి నుండి వచ్చినదో, ఎప్పటినుండి ఇది ఉందో, అది ఎట్లా పెరుగుతూనే ఉంటుందో తెలుసుకోకుండానే - ఒక జన్మ నుండి ఇంకో జన్మకు ఆ చెట్టు కొమ్మలలో పైకీ క్రిందికీ తిరుగుతూనే ఉంటుంది. ఆ చెట్టు యొక్క వేర్లు పైకి ఉంటాయి, ఎందుకంటే దాని యొక్క మూలం భగవంతునిలో ఉంది కాబట్టి. వేదములలో చెప్పబడిన కామ్య కర్మలు ఆ చెట్టుకి ఆకులలాంటివి. ఆ చెట్టుకి పోషణ, ప్రకృతి యొక్క త్రి-గుణములు. ఈ గుణములు ఇంద్రియ విషయములను సృష్టిస్తాయి, అవి ఈ చెట్టుకు అంకురముల (మొగ్గ) వంటివి. ఈ అంకురములు, ఊడలను (aerial roots) ని జనింపచేస్తాయి. అవి వృక్షమును మరింత విస్తరింపచేస్తాయి. ఈ అధ్యాయము, ఈ ఉపమానం ఆధారంగా - భౌతిక ప్రపంచంలో క్లేశములకు గురయ్యే జీవాత్మ, భౌతిక అస్తిత్వములో ఉండే జగత్తు యొక్క నిజ స్వరూపము యొక్క అజ్ఞానము వలన, మరింత దానిలో ఎలా చిక్కుకుని పోతుందో - విస్తారముగా వివరిస్తుంది. వైరాగ్యము అనే గొడ్డలి సహాయంతో ఈ వృక్షాన్ని కొట్టివేయాలి అని శ్రీ కృష్ణుడు చెప్తున్నాడు. ఆ తరువాత మనం ఆ చెట్టు యొక్క మూలం కోసం వెతకాలి; అది స్వయంగా భగవంతుడే. ఆ మూలాన్ని తెలుసుకున్న పిదప ఆయనకి ఈ అధ్యాయములో చెప్పబడిన విధముగా శరణాగతి చేయాలి; అప్పుడు మనము ఆ భగవంతుని యొక్క దివ్య ధామముని చేరుకుంటాము, ఆ తదుపరి మళ్ళీ ఇక ఈ భౌతిక జగత్తులోకి రాము.\n    శ్రీ కృష్ణుడు ఇక తదుపరి, తనయొక్క నిత్య సనాతనమైన అంశములైన, ఈ జగత్తులో ఉన్న జీవాత్మలు, దివ్యమైనవని వివరిస్తున్నాడు. కానీ, భౌతిక ప్రకృతి చే బద్ధులైపోయి, మనస్సుతో కలిపి ఆరు ఇంద్రియములచే అవి కష్టాలను అనుభవిస్తున్నాయి. జీవాత్మ దివ్యమైనది అయినా, అది ఎలా ఇంద్రియముల యొక్క భౌతిక విషయములను భోగిస్తూ ఉంటుందో వివరిస్తున్నాడు. ఆత్మ మరణ సమయంలో ఇంకొక శరీరములోనికి, తన ప్రస్తుత జన్మ యొక్క మనస్సు మరియు ఇంద్రియములతో సహా, ఎలా ప్రవేశిస్తుందో వివరిస్తాడు. అజ్ఞానులు తమ దేహములోని ఆత్మను గుర్తించరు; మరియు అది మరణ సమయంలో వెళ్లిపోవటాన్ని కూడా గుర్తించరు. కానీ యోగులు తమ యొక్క జ్ఞాన-చక్షువులచే మరియు పవిత్రమైన మనస్సుచే దానిని గ్రహిస్తారు. అదే విధంగా భగవంతుడు కూడా తన సృష్టిలో అంతటా ఉంటాడు; కానీ ఆయనను జ్ఞాన చక్షువులచే తెలుసుకోవాలి. అంతటా వ్యక్తమయ్యే ఆయన యొక్క విభూతుల ద్వారా జగత్తులో భగవంతుని యొక్క అస్తిత్వమును మనము ఎలా తెలుసుకోవచ్చో శ్రీ కృష్ణుడు తెలియచేస్తాడు. క్షరము, అక్షరము మరియు పురుషోత్తమ అనే పదముల వివరణతో ఈ అధ్యాయం ముగుస్తుంది. 'క్షరము' అంటే భౌతిక జగత్తులోని నశించిపోయే జీవరాశులు. 'అక్షరము' అంటే భగవంతుని దివ్య ధామములో ఉన్న విముక్తి పొందిన జీవులు. 'పురుషోత్తమ' అంటే సర్వోత్కృష్ట భగవానుడు, ఆయనే మార్పులేని నియామకుడు మరియు పోషకుడు. ఆయన క్షర మరియు అక్షర జీవులకు అతీతుడు. ఆయన మనసారా ఆరాధించబడాలి."
  },
  {
    "chapterName": "దైవాసుర సంపద్విభాగ యోగము",
    "chapterNumber": 16,
    "verseCount": 24,
    "language": "te",
    "yogaName": "జ్ఞాన యోగము",
    "meaning": "దైవాసుర సంపద్విభాగ యోగము",
    "summary": "ఈ అధ్యాయములో, శ్రీ కృష్ణుడు, మనుష్యులలో ఉండే రెండు రకాల స్వభావాలను వివరిస్తున్నాడు - దైవీ గుణాలు మరియు ఆసురీ గుణాలు. శాస్త్ర ఉపదేశాలను/నియమాలను పాటించటం, సత్త్వ గుణమును పెంపొందించుకోవటం, మరియు మనస్సుని ఆధ్యాత్మిక సాధనచే శుద్ధి చేసుకోవటం ద్వారా, దైవీ గుణాలు వృద్ధి చెందుతాయి. అది దైవీ సంపత్తి (దేవుని వంటి గుణములు) పెంచుకోవటానికి దోహదపడుతుంది, చిట్ట చివరగా అది భగవత్-ప్రాప్తిని కలిగిస్తుంది. దీనికి విరుద్ధంగా, ఆసురీ ప్రవృత్తి కూడా ఉంది, రజో గుణము, తమో గుణములతో అనుసంధానం వలన మరియు భౌతిక ప్రాపంచిక దృక్పథాన్ని అవలంబించటం వలన అది పెరుగుతుంది. అది మనిషి యొక్క వ్యక్తిత్వములో అపవిత్ర నడవడికను కలిగిస్తుంది, మరియు అంతిమంగా ఆత్మను నరకం వంటి స్థితిలోకి నెట్టివేస్తుంది.\nఈ అధ్యాయం, దివ్య స్వభావము కలిగి ఉన్న వారి యొక్క దైవీ గుణములను వివరించటంతో ప్రారంభమవుతుంది. ఆ తదుపరి, జాగురూకతతో విడిచిపెట్టవలసిన ఆసురీ (రాక్షస) గుణములను వివరిస్తుంది ఎందుకంటే, అవి మన ఆత్మను మరింత అజ్ఞానములోకి మరియు జనన-మరణ సంసారములోనికి నెట్టివేస్తాయి. శ్రీ కృష్ణుడు ఈ అధ్యాయాన్ని ముగిస్తూ - మన ఏం చేయాలి ఏం చేయకూడదు అన్న విషయం పై శాస్త్రములు చెప్పినవే ప్రమాణములు - అని అంటున్నాడు. శాస్త్ర ఉపదేశాలను మనం అర్థం చేసుకోవాలి మరియు ఆ తరువాతే, ఆ చెప్పబడిన విధంగా ఈ ప్రపంచంలో ప్రవర్తించాలి."
  },
  {
    "chapterName": "శ్రద్ధా త్రయ విభాగ యోగము",
    "chapterNumber": 17,
    "verseCount": 28,
    "language": "te",
    "yogaName": "జ్ఞాన యోగము",
    "meaning": "శ్రద్ధా త్రయ విభాగ యోగము",
    "summary": "పదునాలుగవ అధ్యాయములో, శ్రీ కృష్ణుడు భౌతిక ప్రకృతి యొక్క త్రిగుణములను వివరించి ఉన్నాడు మరియు అవి మనుష్యులను ఏవిధంగా ప్రభావితం చేస్తాయో కూడా చెప్పాడు. ఈ పదిహేడవ అధ్యాయములో, ఈ త్రిగుణముల యొక్క ప్రభావము గురించి మరింత విస్తారముగా వివరిస్తున్నాడు. మొదటిగా, విశ్వాసము/శ్రద్ధ అనే విషయం గురించి వివరిస్తూ, ఎవ్వరూ కూడా విశ్వాస రహితముగా ఉండరు అని చెప్తున్నాడు, ఎందుకంటే అది మానవ నైజం యొక్క విడదీయలేని భాగము. కానీ, వారివారి మనస్తత్వం బట్టి, జనుల యొక్క విశ్వాసము (faith) అనేది, సాత్త్విక, రాజసిక, లేదా తామసిక రంగును కలిగిఉంటుంది. వారికి ఏ రకమైన విశ్వాసము ఉంటుందో వారి జీవితం కూడా ఆ రకంగానే ఉంటుంది. జనులకు ఆహారం పట్ల కూడా వారివారి గుణములకు అనుగుణంగానే మక్కువ ఉంటుంది. శ్రీ కృష్ణుడు ఆహారాన్ని మూడు రకాలుగా వర్గీకరిస్తూ, మనపై వీటి యొక్క ప్రభావాన్ని వివరిస్తున్నాడు. ఆ తరువాత, కృష్ణుడు యజ్ఞముల గురించి చెప్తూ, ఈ మూడు ప్రకృతి త్రిగుణములలో, యజ్ఞములు వేర్వేరు రకాలుగా ఏ విధంగా ఉంటాయో వివరిస్తాడు. ఆ తర్వాత ఈ అధ్యాయము 'తపస్సు' అనే విషయం వైపు వెళుతుంది మరియు శరీర తపస్సు, వాక్ తపస్సు మరియు మనోతపస్సు లను వివరిస్తుంది. ఈ మూడు తపస్సులు సత్త్వ-రజ-తమో గుణములచే ప్రభావితం అయినప్పుడు అవి వేర్వేరు స్వరూపములలో మారతాయి. ఆ తరువాత 'దానము' అనే విషయం చర్చించబడుతుంది, మరియు దాని యొక్క మూడు రకాల విభాగములు వివరించబడుతాయి.\nచివరగా, శ్రీ కృష్ణుడు త్రి-గుణములకు అతీతముగా వెళ్లి, ‘ఓం తత్ సత్’ అన్న పదముల యొక్క ప్రాముఖ్యత మరియు అర్థమును వివరిస్తాడు; ఇది పరమ సత్యము యొక్క విభిన్న అస్తిత్వములను సూచిస్తుంది. ‘ఓం’ అంటే, ఈశ్వరుని నిరాకార తత్త్వమును సూచిస్తుంది; ‘తత్’ అంటే, పరమేశ్వరుని కొరకు చేసే కార్యములు మరియు కర్మ-కాండలను పవిత్రం చేయటానికి ఉచ్చరించబడుతుంది. ‘సత్’ అంటే, నిత్య సనాతన శుభకరము మరియు మంగళము. ఈ మూడు కలిపి అన్నప్పుడు ఒక అలౌకిక సర్వోత్కృష్టతను కలిగిస్తాయి. శాస్త్ర నియమాలను పట్టించుకోకుండా చేయబడే యజ్ఞము, తపస్సు మరియు దానముల యొక్క నిరర్థకతని వివరిస్తూ ఈ అధ్యాయం ముగుస్తుంది."
  },
  {
    "chapterName": "మోక్ష సన్యాస యోగము",
    "chapterNumber": 18,
    "verseCount": 78,
    "language": "te",
    "yogaName": "జ్ఞాన యోగము",
    "meaning": "మోక్ష సన్యాస యోగము",
    "summary": "ఈ భగవద్గీత యొక్క ఈ చిట్టచివరి అధ్యాయము మిగతా అన్ని అధ్యాయాల కన్నా దీర్ఘమైనది మరియు ఇది చాలా విషయములను వివరిస్తుంది. అర్జునుడు సన్యాసము అనే విషయాన్ని ప్రారంభిస్తూ, సంస్కృతంలో సాధారణంగా వాడే పదాలైన ‘సన్యాసము’ (కర్మలను త్యజించటం) మరియు ‘త్యాగము’ (కోరికలను త్యజించటం) అన్న వాటి గురించి ఒక ప్రశ్న అడుగుతాడు. ఈ రెండు పదాలు ‘త్యజించటం’  అన్న అర్థం లో ఉన్న మూల పదముల నుండే జనించాయి. ‘సన్యాసి’ అంటే గృహస్తు జీవితంలో పాలుపంచుకోకుండా సాధన కోసము సమాజము నుండి తనను తాను ఉపసంహరించుకుంటాడు. ‘త్యాగి’ అంటే కార్యకలాపాలు చేస్తుంటాడు కానీ, కర్మ ఫలములను అనుభవించాలనే స్వార్థ చింతనను విడిచిపెట్టినవాడు. (భగవద్గీతలో చెప్పబడిన అర్థం ఇది). శ్రీ కృష్ణుడు రెండవ రకం సన్యాసాన్ని సిఫారసు చేస్తున్నాడు. యజ్ఞము, దానము, తపస్సు, మరియు ఇతర ధార్మిక కర్తవ్య కార్యములను ఎప్పుడూ త్యజించకూడదు అంటున్నాడు, ఎందుకంటే అవి జ్ఞానోదయులను కూడా పవిత్రం చేస్తాయి. వాటి పట్ల ఫలాసక్తి లేకుండా, అవి చేయబడాలి కాబట్టి వాటిని మన కర్తవ్యంలా భావించి చేయాలి.\n    తదుపరి, శ్రీ కృష్ణుడు కర్మను ప్రేరేపించే మూడు విషయముల గురించి, కర్మ యొక్క మూడు అంగముల గురించి, కర్మ ఫలములను నిర్ణయించే ఐదు విషయముల గురించి విస్తారమైన విశ్లేషణ అందచేస్తాడు. వీటన్నిటిని త్రిగుణముల పరంగా వివరిస్తాడు. అపరిపూర్ణ జ్ఞానము కలవారు, వారే తమ కర్మల (కార్యముల) కారణము (చేస్తున్నది) అని భావిస్తారు. కానీ జ్ఞానోదయమైన మహాత్ములు, అంతఃకరణ శుద్ధి కలవారై, చేసేది తాముకాదు మరియు ఆ కర్మఫలముకు భోక్త తాము కాదు అని తెలుసుకుంటారు. సతతమూ తమ కర్మ ఫలముల పట్ల అనాసక్తతతో ఉంటూ, వారు కర్మ బంధములలో చిక్కుకోరు. జనులు తమ ఉద్దేశ్యాలు, కార్యకలాపాలలో ఎందుకు విభిన్నరకాలుగా ఉంటారో ఈ అధ్యాయం తదుపరి వివరిస్తుంది. భౌతిక ప్రకృతి యొక్క త్రిగుణముల ప్రకారంగా - వివిధ రకాల జ్ఞానములను, వివిధ రకాల పనులను, మరియు అవి చేసే వారి వివిధ రకాల స్వభావములను ఈ అధ్యాయం వివరిస్తుంది. అదే విశ్లేషణను - బుద్ధి, సంకల్పము, మరియు ఆనందము - పట్ల కూడా ఈ అధ్యాయం అందిస్తుంది. తదుపరి ఈ అధ్యాయము, ఆధ్యాత్మిక జీవనంలో పరిపూర్ణ సిద్ధి సాధించి, బ్రహ్మ-జ్ఞానములో స్థితులై ఉన్నవారిని వివరిస్తుంది. అటువంటి పరిపూర్ణ యోగులు కూడా తమ సిద్ధిలో పరిపూర్ణతని భక్తిలో నిమగ్నమవ్వటం ద్వారా అనుభవిస్తారు. ఈ విధంగా, సర్వోన్నత దివ్య మంగళ స్వరూప భగవంతుని యొక్క యదార్థ రహస్యమును ప్రేమయుక్త భక్తి ద్వారా మాత్రమే తెలుసుకోగలము.\nభగవంతుడు సర్వ భూతముల హృదయములో స్థితుడై ఉంటాడని, మరియు వాటి వాటి కర్మానుసారం వారిని త్రిప్పుతుంటాడని, శ్రీ కృష్ణుడు అర్జునుడికి గుర్తుచేస్తాడు. భగవంతుడినే స్మరిస్తూ, మన అన్ని కార్యకలాపములను ఆయనకే అర్పితం చేసి, ఆయన ఆశ్రయం పొంది, ఆయనే మన పరమ లక్ష్యముగా చేసుకుంటే, ఆ తదుపరి ఆయన కృప ద్వారా మనము అన్ని క్లేశములను, అవరోధాలను అధిగమించగలము. కానీ, దురభిమానంతో, మన ఇష్టంవచ్చినట్టు ప్రవర్తిస్తే, మనకు విజయం/సఫలత లభించదు. చిట్టచివరికి శ్రీ కృష్ణుడు అత్యంత గుహ్యమైన జ్ఞానమును తెలియచేస్తూ, సర్వ ధర్మములనూ త్యజించి కేవలం భగవంతునికే శరణాగతి చేయమంటాడు. కానీ, ఈ జ్ఞానమును సాధుచిత్తులూ, భక్తులు కాని వారికి ఇవ్వకూడదు అని అంటున్నాడు, ఎందుకంటే దానిని వారు తప్పుగా అర్థం చేసుకుని, బాధ్యతారహితముగా కర్మలను పరిత్యాగం చేసే ప్రమాదం ఉంటుంది. కానీ, ఈ రహస్య జ్ఞానమును అర్హులైన జీవులకు అందిస్తే, అది అత్యున్నత ప్రేమతో చేసేపని అవుతుంది మరియు అది భగవంతునికి అత్యంత ప్రీతికరమయినది. \n    తన మోహము/భ్రాంతి నిర్మూలించబడినవి అని, తాను ఇప్పుడు, చెప్పినట్టు చేయటానికి తయారుగా ఉన్నానని అర్జునుడు ఆ తరువాత శ్రీ కృష్ణుడికి తెలియచేస్తాడు. చివరలో, అంధుడైన ధృతరాష్ట్ర మహారాజుకి ఈ (కృష్ణార్జున) సంవాదమును వినిపిస్తున్న సంజయుడు, ఆ దివ్య సంభాషణను వింటూ తాను ఎంత ఆశ్చర్యానికి, దిగ్భ్రాంతికి లోనయ్యాడో చెప్తాడు. ఆ యొక్క పవిత్ర సంభాషణని, మరియు మహాద్భుత విశ్వరూపమును గుర్తుచేసుకుంటే ఆయన యొక్క రోమములు మహదానందముతో నిక్కబొడుచుకుంటాయి. భగవంతుడు మరియు ఆయన పరిశుద్ధ భక్తుడు ఎక్కడుంటే, వారి పక్షమే విజయం ఎల్లప్పుడూ ఉంటుంది; అంతేకాక, శుభమూ, విజయమూ, మరియు ఐశ్వర్యమూ కూడా వారి వద్దే ఉంటుంది, ఎందుకంటే అసత్యపు చీకటి ఖచ్చితంగా పరమ సత్యము యొక్క వెలుగుచే నిర్మూలించబడుతుంది - అనే ఒక గంభీరమైన ప్రకటనతో సంజయుడు దీనిని ముగిస్తున్నాడు."
  },
  {
    "chapterName": "अर्जुन विषाद योग",
    "chapterNumber": 1,
    "verseCount": 47,
    "language": "hi",
    "yogaName": "कर्मयोग",
    "meaning": "अर्जुन विषाद योग",
    "summary": "भगवद्गीता का उपदेश एक ही वंश के दो परिवारों के चचेरे भाइयों कौरव और पाण्डवों के मध्य हुए महाभारत के युद्ध की रणभूमि पर दिया गया। इस पुस्तक के परिचय से संबंधित प्रारम्भिक पृष्ठों में उल्लिखित 'गीता का परिवेश' खण्ड में उन घटनाओं का विस्तृत रूप से वर्णन किया गया है जिनके कारण यह महायुद्ध हुआ। \n\nभगवद्गीता का प्रकटीकरण राजा धृतराष्ट्र और उसके मंत्री संजय के बीच हुए वार्तालाप से आरम्भ होता है। चूंकि धृतराष्ट्र नेत्रहीन था इसलिए वह व्यक्तिगत रूप से युद्ध में उपस्थित नहीं हो सका। अत: संजय उसे युद्धभूमि पर घट रही घटनाओं का पूर्ण सजीव विवरण सुना रहा था। संजय महाभारत के प्रख्यात रचयिता वेदव्यास का शिष्य था। ऋषि वेदव्यास ऐसी चमत्कारिक शक्ति से संपन्न थे जिससे वह दूर-दूर तक घट रही घटनाओं को प्रत्यक्ष रूप से देखने में समर्थ थे। अपने गुरु की अनुकंपा से संजय ने भी दूरदृष्टि की दिव्य चमत्कारिक शक्ति प्राप्त की थी। इस प्रकार से वह युद्ध भूमि में घटित सभी घटनाओं को दूर से देख सका।"
  },
  {
    "chapterName": "सांख्य योग",
    "chapterNumber": 2,
    "verseCount": 72,
    "language": "hi",
    "yogaName": "कर्मयोग",
    "meaning": "सांख्य योग",
    "summary": "इस अध्याय में अर्जुन अपने सम्मुख उत्पन्न स्थिति का सामना करने में स्पष्ट रूप से अपनी असमर्थता को दोहराता है और युद्ध करने के अपने कर्तव्य का पालन करने से मना कर देता है। तत्पश्चात वह औपचारिक रूप से श्रीकृष्ण को अपना आध्यात्मिक गुरु बनाने और जिस स्थिति में वह स्वयं को पाता है, उसका सामना करने के लिए उचित मार्गदर्शन प्रदान करने की प्रार्थना करता है। परम प्रभु उससे कहते हैं कि आत्मा, जो शरीर के नष्ट होने पर भी नहीं मरती, के अमरत्व की शिक्षा देकर दिव्य ज्ञान प्रदान करते हैं। आत्मा एक जन्म से दूसरे जन्म में उसी प्रकार से शरीर परिवर्तित करती है जिस प्रकार से मनुष्य पुराने वस्त्र त्याग कर नये वस्त्र धारण करता है। इसके पश्चात श्रीकृष्ण सामाजिक दायित्त्वों के विषय की ओर आगे बढ़ते हैं। वे अर्जुन को स्मरण कराते हैं कि धर्म की मर्यादा हेतु योद्धा के रूप में युद्ध लड़ना उसका कर्त्तव्य है। वे स्पष्ट करते हैं कि किसी के द्वारा अपने नैतिक कर्तव्यों का पालन करना एक पुण्य का कार्य है जो स्वर्ग जाने का द्वार खोलेगा किन्तु कर्त्तव्यों से विमुख होने से केवल तिरस्कार और अपयश प्राप्त होगा। \n\nलौकिक स्तर पर अर्जुन को प्रेरित करने के पश्चात श्रीकृष्ण गहनता के साथ कर्मयोग के ज्ञान पर प्रकाश डालते हैं। वे अर्जुन को फल की आसक्ति के बिना निष्काम कर्म करने की प्रेरणा देते हैं। फल की कामना से रहित कर्म करने के विज्ञान को वे 'बुद्धियोग' या 'बुद्धि का योग' नाम देते हैं। बुद्धि का प्रयोग मन को कर्मफल की लालसा करने से रोकने के लिए करना चाहिए। इस चेतना के साथ सम्पन्न किए गए कर्म 'बंधनयुक्त कर्मों' से 'बंधन मुक्त कर्मों' में परिवर्तित हो जाते हैं। अर्जुन दिव्य चेतना में स्थित मनुष्य के लक्षणों के संबंध में जानना चाहता है। श्रीकृष्ण उसे बताते हैं कि किस प्रकार से दिव्य चेतना में स्थित होकर मनुष्य आसक्ति, भय और क्रोध से मुक्त हो जाता है और सभी परिस्थितियों में उसकी इन्द्रियाँ उसके वश में हो जाती हैं और उसका मन सदा के लिए भगवान की भक्ति में तल्लीन हो जाता है। अब वे क्रमानुसार स्पष्ट करते हैं कि किस प्रकार से मानसिक संताप, काम-वासना और लोभ विकसित होता है और किस प्रकार से इनका उन्मूलन किया जा सकता है।"
  },
  {
    "chapterName": "कर्मयोग",
    "chapterNumber": 3,
    "verseCount": 43,
    "language": "hi",
    "yogaName": "कर्मयोग",
    "meaning": "कर्मयोग",
    "summary": "इस अध्याय में श्रीकृष्ण यह समझाते हैं कि सभी जीव अपनी स्वाभाविक प्रकृति के गुणों के कारण कार्य करने के लिए बाध्य होते हैं और कोई भी प्राणी एक क्षण के लिए भी अकर्मा नहीं रह सकता। वे जो गेरुए वस्त्र धारण कर बाह्य रूप से वैराग्य प्रदर्शित करते हैं लेकिन आंतरिक रूप से इन्द्रिय विषयों के भोगों के प्रति आसक्ति रखते हैं, वे ढोंगी हैं। जो कर्मयोग का अनुपालन करते हुए बाह्य रूप से निरन्तर कर्म करते रहते हैं लेकिन उनमें आसक्त नहीं होते, वे उनसे श्रेष्ठ हैं। इसके बाद श्रीकृष्ण इस पर बल देते हैं कि सभी जीवित प्राणियों को भगवान की सृष्टि की व्यवस्था के अभिन्न अंग के रूप में अपने दायित्वों का निर्वाहन करना पड़ता है। जब हम भगवान के प्रति आभार व्यक्त करते हुए अपने कर्तव्यों का पालन करते हैं तब ऐसे कर्म यज्ञ बन जाते हैं। यज्ञों का अनुष्ठान वास्तव में स्वर्ग के देवताओं को प्रसन्न करने के लिए किया जाता है और वे हमें सांसारिक सुख और समृद्धि प्रदान करते हैं। ऐसे यज्ञों के कारण वर्षा होती है और वर्षा से अन्न उत्पन्न होता है जो जीवन निर्वाह के लिए आवश्यक है। वे जो इस सृष्टि चक्र में अपने उत्तरदायित्व को स्वीकार नहीं करते, वे पापी हैं। वे केवल इन्द्रिय सुख प्राप्त करने के लिए जीवित रहते हैं और उनका जीवन व्यर्थ हो जाता है। \n\nफिर आगे श्रीकृष्ण कहते हैं कि शेष मानवजाति से भिन्न ऐसी प्रबुद्ध आत्माएँ जो आत्मज्ञान में स्थित रहती हैं, वे शारीरिक उत्तरदायित्वों का पालन करने के लिए बाध्य नहीं होती क्योंकि वे आत्मा के स्तर पर अपने उच्च दायित्वों का निर्वाहन कर रही होती हैं। हालांकि वे अपने सामाजिक दायित्वों का त्याग कर देती हैं जिससे सामान्य मनुष्यों के मन में असमंजस की भावना उत्पन्न होती है जो महापुरुषों के पदचिह्नों पर चलना चाहते हैं। इसलिए ज्ञानी पुरुषों को संसार के अनुसरणार्थ उच्च आदर्श प्रस्तुत करने के लिए बिना किसी प्रयोजन और व्यक्तिगत लाभ के लिए निरन्तर कर्म करना होगा। यह अज्ञानी को अपरिपक्व अवस्था में अपने नियत दायित्वों का त्याग करने से रोकेगा। अतीत में महान राजर्षियों जैसे कि राजा जनक और अन्य राजाओं का यही उद्देश्य था जिन्होंने अपने सांसारिक दायित्वों का निर्वाहन किया था। \n\nतत्पश्चात अर्जुन पूछता है कि लोग अनिच्छा से पापपूर्ण कर्मों में प्रवत्त क्यों होते हैं? क्या उन्हें बलपूर्वक पाप कर्मों में लगाया जाता है। परम प्रभु श्रीकृष्ण बताते हैं कि संसार का सर्वभक्षी पाप-पूर्ण शत्रु केवल काम-वासना है। जिस प्रकार से अग्नि धुंए से ढकी रहती है, दर्पण धूल से ढका रहता है उसी प्रकार से कामना मनुष्य के ज्ञान पर आवरण डाल देती है और उसकी बुद्धि का विनाश कर देती है। फिर श्रीकृष्ण अर्जुन से आह्वान करते हैं कि वह इस कामना रूपी शत्रु का संहार कर दें जो पाप का मूर्तरूप है और अपनी इन्द्रिय, मन और बुद्धि को वश में करें।"
  },
  {
    "chapterName": "ज्ञान कर्म संन्यास योग",
    "chapterNumber": 4,
    "verseCount": 42,
    "language": "hi",
    "yogaName": "कर्मयोग",
    "meaning": "ज्ञान कर्म संन्यास योग",
    "summary": "चौथे अध्याय में श्रीकृष्ण अर्जुन को दिए जा रहे दिव्य ज्ञान के आदिकालीन उद्गम को प्रकट करते हुए उसमें उसके विश्वास को पुष्ट करते हैं। वे बताते हैं कि यह वही शाश्वत ज्ञान है जिसका उपदेश उन्होंने आरम्भ में सर्वप्रथम सूर्यदेव को दिया था और फिर परम्परागत पद्धति से यह ज्ञान निरन्तर राजर्षियों तक पहँचा। अब वे अर्जुन, जो उनका प्रिय मित्र और परमभक्त है, के सम्मुख इस दिव्य ज्ञान को प्रकट कर रहे हैं। तब अर्जुन प्रश्न करता है कि वे श्रीकृष्ण जो वर्तमान में उसके सम्मुख खड़े हैं वे इस ज्ञान का उपदेश युगों पूर्व सूर्यदेव को कैसे दे सके? इसके प्रत्युत्तर में श्रीकृष्ण अपने अवतारों का रहस्य प्रकट करते हैं। वे बताते हैं कि भगवान अजन्मा और सनातन हैं फिर भी वे अपनी योगमाया शक्ति द्वारा धर्म की स्थापना के लिए पृथ्वी पर प्रकट होते हैं लेकिन उनके जन्म और कर्म दिव्य होते हैं और वे भौतिक विकारों से दूषित नहीं हो सकते। जो इस रहस्य को जानते हैं वे अगाध श्रद्धा के साथ उनकी भक्ति में तल्लीन रहते हैं और उन्हें प्राप्त कर फिर इस संसार में पुनः जन्म नहीं लेते। \n\nइसके पश्चात इस अध्याय में कर्म की प्रकृति का व्याख्यान किया गया है और कर्म, अकर्मण्यता तथा वर्जित कर्म से संबंधित तीन सिद्धातों पर चर्चा की गयी है। इनसे विदित होता है कि कर्मयोगी अनेक प्रकार के सांसारिक दायित्वों का निर्वहन करते हुए अकर्मा की अवस्था प्राप्त कर लेते हैं और इसलिए वे कार्मिक प्रतिक्रियाओं में नहीं फंसते। \n\nइसी ज्ञान के साथ प्राचीन काल में ऋषि मुनि सफलता और असफलता, सुख-दुख से प्रभावित हुए बिना केवल भगवान के सुख के लिए यज्ञ के रूप में कर्म करते थे। यज्ञ कई प्रकार के होते हैं और इनमें से कई यज्ञों का उल्लेख यहाँ किया गया है। जब यज्ञ पूर्ण समर्पण की भावना से सम्पन्न किए जाते हैं तब इनके अवशेष अमृत के समान बन जाते हैं। ऐसे अमृत का पान करने से साधक के भीतर की अशुद्धता समाप्त हो जाती है। इसलिए यज्ञों का अनुष्ठान पूर्ण निष्ठा और ज्ञान के साथ करना चाहिए। ज्ञान रूपी नौका की सहायता से महापापी भी संसार रूपी कष्टों के सागर को सरलता से पार कर लेता है। ऐसा दिव्य ज्ञान वास्तविक आध्यात्मिक गुरु से प्राप्त करना चाहिए जो परम सत्य को जान चुका हो। श्रीकृष्ण गुरु के रूप में अर्जुन से कहते हैं कि ज्ञान की खड्ग से अपने हृदय में उत्पन्न हुए सन्देहों को काट दो, उठो और युद्ध लड़ने के अपने कर्त्तव्य का पालन करो।"
  },
  {
    "chapterName": "कर्म संन्यास योग",
    "chapterNumber": 5,
    "verseCount": 29,
    "language": "hi",
    "yogaName": "कर्मयोग",
    "meaning": "कर्म संन्यास योग",
    "summary": "इस अध्याय में कर्म संन्यास के मार्ग की तुलना कर्मयोग के मार्ग के साथ की गयी है। श्रीकृष्ण बताते हैं कि दोनों मार्ग एक ही लक्ष्य की ओर ले जाते हैं और हम इनमें से किसी एक का चयन कर सकते हैं। लेकिन कर्म का त्याग तब तक पूर्णरूप से नहीं किया जा सकता। जब तक मन पूर्णतः शुद्ध न हो जाए और मन की शुद्धि भक्ति के साथ कर्म करने से प्राप्त होती है। इसलिए कर्मयोग बहुसंख्यक लोगों के लिए उपयुक्त विकल्प है। कर्मयोगी अपने सांसारिक दायित्वों का निर्वहन शुद्ध बुद्धि के साथ करते हुए अपने कर्म फलों की आसक्ति का त्याग कर उन्हें भगवान को अर्पित करते हैं। इस प्रकार से वे पाप से उसी प्रकार से अप्रभावित रहते हैं जिस प्रकार से कमल के पुष्प का पत्ता जल में तैरता है किन्तु जल उसे स्पर्श नहीं कर पाता। ज्ञान के आलोक में वे शरीर को नवद्वारों के एक नगर के रूप में देखते हैं जिसमें आत्मा निवास करती है। इसलिए वे न तो स्वयं को कर्म का कर्ता और न ही कर्म का भोक्ता मानते हैं। वे ब्राह्मण, गाय, हाथी, और कुत्ते का मांस भक्षण करने वाले चांडाल को एक समान दृष्टि से देखते हैं। ऐसे सच्चे संत भगवान के दोषरहित गुणों को अपने भीतर विकसित करते हैं और परम सत्य में स्थित हो जाते हैं किन्तु सांसारिक लोग यह जाने बिना कि इन्द्रिय विषयों के संपर्क से मिलने वाले सुख वास्तव में कष्टों के कारण हैं। अतः वे अज्ञानता के कारण इन्द्रिय विषयों से मिलने वाले सुखों को प्राप्त करने का प्रयास करते हैं। लेकिन कर्मयोगी इनसे प्रसन्न नहीं होते बल्कि इसकी अपेक्षा वे अपने भीतर भगवान के आनन्द की अनुभूति करना पसंद करते हैं। \n\nआगे यह अध्याय संन्यास के मार्ग का वर्णन करता है। कर्म संन्यासी अपने मन, इन्द्रियों और बुद्धि को नियंत्रित करने के लिए तपस्या करते हैं। इस प्रकार से वे बाह्य सुख के विचारों को बहिष्कृत कर इच्छा, भय और क्रोध से मुक्त हो जाते हैं। तब फिर वे भगवान की भक्ति के साथ अपनी तपस्या को सम्पूर्ण करते हैं और चिरस्थायी शांति प्राप्त करते हैं।"
  },
  {
   "chapterName": "ध्यानयोग",
    "chapterNumber": 6,
    "verseCount": 47,
    "language": "hi",
    "yogaName": "कर्मयोग",
    "meaning": "ध्यानयोग",
    "summary": "श्रीकृष्ण कर्मयोग और कर्म संन्यास के तुलनात्मक मूल्यांकन के अनुक्रम को पांचवें अध्याय से इस छठे अध्याय में भी जारी रखते हैं और पहले वाले मार्ग के अनुसरण की संस्तुति करते हैं। जब हम समर्पण के साथ कार्य करते हैं तब इससे हमारा मन शुद्ध हो जाता है और हमारी आध्यात्मिक अनुभूति गहन हो जाती है। फिर जब मन शांत हो जाता है तब साधना उत्थान का मुख्य साधन बन जाती है। ध्यान द्वारा योगी मन को वश में करने का प्रयास करते हैं क्योंकि अप्रशिक्षित मन हमारा बुरा शत्रु है और प्रशिक्षित मन हमारा प्रिय मित्र है। श्रीकृष्ण अर्जुन को सावधान करते हैं कि कठोर तप में लीन रहने से कोई सफलता प्राप्त नहीं कर सकता और इसलिए मनुष्य को अपने खान-पान, कार्य-कलापों, अमोद-प्रमोद और निद्रा को संतुलित रखना चाहिए। आगे फिर वे मन को भगवान में एकीकृत करने के लिए साधना का वर्णन करते हैं। जिस प्रकार से वायु रहित स्थान पर रखे दीपक की ज्वाला में झिलमिलाहट नहीं होती। ठीक उसी प्रकार साधक को मन साधना में स्थिर रखना चाहिए। वास्तव में मन को वश में करना कठिन है लेकिन अभ्यास और विरक्ति द्वारा इसे नियंत्रित किया जा सकता है। इसलिए मन जहाँ कहीं भी भटकने लगे तब हमें वहाँ से इसे वापस लाकर निरन्तर भगवान में केंद्रित करना चाहिए। जब मन शुद्ध हो जाता है तब यह अलौकिकता में स्थिर हो जाता है। आनन्द की इस अवस्था को समाधि कहते हैं जिसमें मनुष्य असीम दिव्य आनन्द प्राप्त करता है। \n\nइसके पश्चात अर्जुन उस साधक के भाग्य के संबंध में प्रश्न करता है जो इस मार्ग का अनुसरण करना आरम्भ तो करता है लेकिन अस्थिर मन के कारण लक्ष्य तक पहुँचने में असमर्थ रहता है। श्रीकृष्ण उसे पुनः आश्वस्त करते हैं कि जो भगवद्प्राप्ति के लिए प्रयास करता है, बुराई कभी उस पर हावी नहीं हो सकती। भगवान सदैव पूर्व जन्मों में संचित हमारे आध्यात्मिक गुणों का लेखा-जोखा रखते हैं और अगले जन्मों में उस ज्ञान को पुनः जागृत करते हैं ताकि हमने अपनी यात्रा को जहाँ से छोड़ा था उसे वहीं से पुनः आगे जारी रख सकें। अनेक पूर्व जन्मों से अर्जित पुण्यों और गुणों के साथ योगी अपने वर्तमान जीवन में भगवान तक पहुँचने में समर्थ हो सकता है। इस अध्याय का समापन इस उद्घोषणा के साथ होता है कि योगी भगवान के साथ एकीकृत होने का प्रयास करता है इसलिए वह तपस्वी, ज्ञानी और कर्मकाण्डों का पालन करने वाले कर्मी से श्रेष्ठ होता है। सभी योगियों में से जो भक्ति में तल्लीन रहता है वह सर्वश्रेष्ठ होता है।"
  },
  {
    "chapterName": "ज्ञान विज्ञान योग",
    "chapterNumber": 7,
    "verseCount": 30,
    "language": "hi",
    "yogaName": "भक्तियोग",
    "meaning": "ज्ञान विज्ञान योग",
    "summary": "यह अध्याय भगवान की शक्तियों के भौतिक और आध्यात्मिक आयामों के वर्णन के साथ आरम्भ होता है। श्रीकृष्ण व्यक्त करते हैं कि ये सब उन्हीं से प्रकट होते हैं और धागे में गुंथे मोतियों की भाँति उनमें स्थित रहते हैं। वे समूची सृष्टि के स्रोत हैं और ये सब उन्हीं में पुनः विलीन हो जाते हैं। उनकी प्राकृत शक्तिमाया पर विजय प्राप्त करना अत्यंत दुष्कर है लेकिन वे जो भगवान के शरणागत हो जाते हैं वे उनकी कृपा प्राप्त करते हैं और इस पर सरलता से विजय पा लेते हैं। आगे श्रीकृष्ण उनके शरणागत न होने वाले चार प्रकार के लोगों और उनकी भक्ति में तल्लीन रहने वाले चार प्रकार के लोगों का वर्णन करते हैं। वे अपने भक्तों में उन्हें अत्यंत प्रिय मानते हैं जो अपने मन और बुद्धि को उनमें विलय कर ज्ञान में स्थित होकर उनकी आराधना करते हैं। कुछ लोग जिनकी बुद्धि सांसारिक कामनाओं द्वारा हर ली जाती हैं वे स्वर्ग के देवताओं की शरण में जाते हैं किन्तु ये स्वर्ग के देवता केवल अस्थायी भौतिक सुख प्रदान कर सकते हैं और इन क्षणभंगुर सुखों को भी वे भगवान से शक्तियाँ प्राप्त होने पर ही प्रदान कर सकते हैं। इस प्रकार से भक्ति का उपयुक्त लक्ष्य स्वयं भगवान हैं। श्रीकृष्ण पुष्टि करते हैं कि वे परम सत्य और अंतिम गंतव्य या सिद्धि हैं और सर्वज्ञ, सर्वव्यापक और सर्वशक्तिमान जैसे शाश्वत दिव्य गुणों से सम्पन्न हैं। क्योंकि उनका वास्तविक स्वरूप उनकी दिव्य योगमाया शक्ति के आवरण द्वारा आच्छादित रहता है और इसलिए उनके अविनाशी दिव्य स्वरूप को सब नहीं जान सकते। यदि हम उनकी शरण ग्रहण करते हैं तब वे हमें उन्हें जानने का अपना दिव्य ज्ञान प्रदान करते हैं और उनको जानकर हम भी आत्मज्ञान और कार्मिक गतिविधियों के क्षेत्र का ज्ञान प्राप्त कर लेते हैं।"
  },
  {
    "chapterName": "अक्षर ब्रह्म योग",
    "chapterNumber": 8,
    "verseCount": 28,
    "language": "hi",
    "yogaName": "भक्तियोग",
    "meaning": "अक्षर ब्रह्म योग",
    "summary": "यह अध्याय संक्षेप में कुछ महत्वपूर्ण शब्दों और अवधारणाओं का वर्णन करता है जिनका उपनिषदों में विस्तार से उल्लेख किया गया है। इसमें यह वर्णन भी किया गया है कि मृत्यु के पश्चात आत्मा के गन्तव्य का निर्धारण किस प्रकार से होता है। \n\nदेह का त्याग करते समय यदि हम भगवान का स्मरण करते हैं तब हम निश्चित रूप से उसे पा लेंगे। इसलिए अपने दैनिक कार्यों को सम्पन्न करने के साथ-साथ हमें सदैव उसकी विशेषताओं, गुणों और दिव्य लीलाओं का चिन्तन करना चाहिए। जब हम अनन्य भक्ति से अपने मन को भगवान में पूर्णतया तल्लीन कर लेते हैं तब हम भौतिक आयामों से परे आध्यात्मिक क्षेत्र में प्रवेश करते हैं। तत्पश्चात इस अध्याय में भौतिक क्षेत्र में स्थित कुछ लोकों की चर्चा की गयी है। इसमें बताया गया है कि सृष्टि के चक्र में ये लोक और इन पर निवास करने वाले असंख्य प्राणी कैसे इनमें प्रकट होते हैं और प्रलय के समय पुनः अव्यक्त हो जाते हैं। किन्तु इस व्यक्त और अव्यक्त सृष्टि से परे भगवान का दिव्य लोक है। वे जो प्रकाश के मार्ग का अनुसरण करते हैं, वे अंततः दिव्यलोक में पहुँचते हैं और फिर कभी नश्वर संसार में लौट कर नहीं आते जबकि अंधकार के मार्ग का अनुसरण करने वाले लोग जन्म, रोग, बुढ़ापे और मृत्यु के अनन्त चक्रों में देहान्तरण करते रहते हैं।"
  },
  {
    "chapterName": "राज विद्या योग",
    "chapterNumber": 9,
    "verseCount": 34,
    "language": "hi",
    "yogaName": "भक्तियोग",
    "meaning": "राज विद्या योग",
    "summary": "सातवें और आठवें अध्याय में श्रीकृष्ण ने भक्ति को योग प्राप्त करने का सरल साधन और योग की उत्तम पद्धति बताया था। नौवें अध्याय में उन्होंने अपनी परम महिमा का व्याख्यान किया है जिससे विस्मय, श्रद्धा और भक्ति उत्पन्न होती है। वे यह बोध कराते हैं कि यद्यपि वे अर्जुन के सम्मुख साकार रूप में खड़े हैं किन्तु उन्हें मनुष्य के रूप में मानने की दुर्भावना धारण नहीं करनी चाहिए। वे स्पष्ट कहते हैं कि वे समस्त प्राकृतिक शक्तियों के अध्यक्ष हैं और सृष्टि सृजन के आरम्भ में अनगिनत जीवों के जीवन रूपों को उत्पन्न करते हैं और प्रलय के समय वापस उन्हें अपने में विलीन कर लेते हैं तथा सृष्टि के अगले चक्र में उन्हें पुनः प्रकट करते हैं। जिस प्रकार से शक्तिशाली वायु सभी स्थानों पर प्रवाहित होती है और सदैव आकाश में स्थित रहती है। उसी प्रकार से सभी जीव भगवान में निवास करते हैं फिर भी वे अपनी योगमाया शक्ति द्वारा तटस्थ पर्यवेक्षक बने रहकर इन सभी गतिविधियों से विलग और विरक्त रहते हैं। \n\nकेवल भगवान ही आराधना का एक मात्र लक्ष्य हैं। इसे स्पष्ट करते हुए भगवान श्रीकृष्ण बहु हिन्दू देवी-देवताओं की पूजा के मिथ्या भ्रम का समाधान करते हैं। भगवान सभी प्राणियों के लक्ष्य, सहायक, शरणदाता और सच्चे मित्र हैं। जिन मनुष्यों की रुचि वैदिक कर्मकाण्डों का पालन करने में होती है वे देवताओं का स्वर्गलोक प्राप्त करते हैं किन्तु जब उनके पुण्य कर्म क्षीण हो जाते हैं तब उन्हें लौटकर पुनः पृथ्वीलोक में आना पड़ता है लेकिन जो परम प्रभु की भक्ति में तल्लीन रहते है वे उनके परम धाम में जाते हैं। इसलिए श्रीकृष्ण उनके प्रति की जाने वाली विशुद्ध भक्ति को सर्वोत्तम बताते हुए उसकी प्रशंसा करते हैं। ऐसी भक्ति में लीन होकर जो कुछ हमारे पास है वह सब भगवान को समर्पित करते हुए हमें भगवान की इच्छा के साथ पूर्ण रूप से एकनिष्ठ होकर जीवनयापन करना चाहिए। ऐसी शुद्ध भक्ति पाकर हम कर्म के बंधनों से मुक्त रहेंगे और भगवान से गूढ़ संबंध स्थापित करने के लक्ष्य को पा सकेंगे। \n\nआगे श्रीकृष्ण दृढ़तापूर्वक कहते हैं कि वे न तो किसी का पक्ष लेते हैं और न ही किसी की उपेक्षा करते हैं। वह सभी प्राणियों के प्रति निष्पक्ष रहते हैं। यहाँ तक कि अधम पापी भी यदि उनकी शरण में आते हैं तब भी वे प्रसन्नता से उनको अपनाते हैं और उन्हें शीघ्र सद्गुणी बनाकर पवित्र कर देते हैं। वे वचन देते हैं कि उनके भक्त का कभी पतन नहीं हो सकता। अपने भक्तों के हृदय में आसीन होकर वे उनके अभावों की पूर्ति करते हैं और जो पहले से उनके स्वामित्व में होता है उसकी रक्षा करते हैं। इसलिए हमें सदैव उनका ही चिन्तन और आराधना करनी चाहिए तथा मन और शरीर को पूर्णतया उनके प्रति समर्पित कर उन्हें अपना परम लक्ष्य बनाना चाहिए।"
  },
  {
    "chapterName": "विभूति योग",
    "chapterNumber": 10,
    "verseCount": 42,
    "language": "hi",
    "yogaName": "भक्तियोग",
    "meaning": "विभूति योग",
    "summary": "इस अध्याय में श्रीकृष्ण ने अपनी भव्य और दीप्तिमान महिमा का वर्णन किया है जिससे अर्जुन को भगवान में अपना ध्यान केन्द्रित करने में सहायता मिल सके। नौवें अध्याय में श्रीकृष्ण ने भक्ति योग या प्रेममयी भक्ति की व्याख्या करते हुए अपने कुछ वैभवों का वर्णन किया था। यहाँ इस अध्याय में वे आगे अर्जुन के भीतर श्रद्धा भक्ति को बढ़ाने के प्रयोजनार्थ अपनी अनन्त महिमा का पुनः वर्णन करते हैं। इन श्लोकों को पढ़ने से आनन्द की अनुभूति होती है और इनका श्रवण करने से मन प्रफुल्लित हो जाता है। \n\nश्रीकृष्ण बताते हैं कि वे सृष्टि में प्रकट प्रत्येक अस्तित्व का स्रोत हैं। मनुष्यों में विविध प्रकार के गुण उन्हीं से उत्पन्न होते हैं। सात महर्षि, चार महान ऋषि और चौदह मनुओं का जन्म उनके मन से हुआ और बाद में संसार के सभी मनुष्य इनसे प्रकट हुए। जो यह जानते हैं कि सबका उद्गम भगवान हैं, वे अगाध श्रद्धा के साथ उनकी भक्ति में तल्लीन रहते हैं। ऐसे भक्त उनकी महिमा की चर्चा कर पूर्ण संतुष्टि एवं मानसिक शांति प्राप्त करते हैं और अन्य लोगों को भी जागृत करते हैं क्योंकि उनका मन उनमें एकीकृत हो जाता है। इसलिए भगवान उनके हृदय में बैठकर उन्हें दिव्य ज्ञान प्रदान करते हैं ताकि वे उन्हें सुगमता से प्राप्त कर सकें। \n\nश्रीकृष्ण से यह सब सुनकर अर्जुन कहता है कि उसे पूर्ण रूप से भगवान की सर्वोच्च स्थिति का बोध हो गया है और वह यह घोषणा करता है कि भगवान श्रीकृष्ण संसार के परम स्वामी हैं। फिर वह भगवान से विनम्र अनुरोध करता है कि वे पुनः अपनी अनुपम महिमा का और अधिक से अधिक वर्णन करें जिसका श्रवण करना अर्जुन के लिए अमृत का सेवन करने के समान है। श्रीकृष्ण प्रकट करते हैं क्योंकि वे ही सभी का आदि, मध्य और अन्त हैं इसलिए सभी अस्तित्व उनकी शक्तियों की अभिव्यक्ति हैं। वे सौंदर्य, वैभव, शक्ति, ज्ञान और समृद्धि का अनन्त महासागर हैं। जब हम कहीं किसी असाधारण ज्योति को देखते हैं जो हमारी कल्पना को हर्षोन्माद कर देती है और हमें आनन्द में निमग्न कर देती है तब हमें उसे और कुछ न मानकर भगवान की महिमा का स्फुलिंग मानना चाहिए। वे ऐसे विद्युत गृह के समान हैं जहाँ से मानवजाति के साथ-साथ ब्रह्माण्ड में सभी पदार्थ अपनी ऊर्जा प्राप्त करते हैं। तत्पश्चात शेष अध्याय में वे उन सभी श्रेष्ठ पदार्थों, व्यक्तित्वों और क्रियाओं का मनमोहक वर्णन करते हैं जो उनके विशाल वैभव को प्रदर्शित करते हैं। इस प्रकार से वे यह कह कर इस सुन्दर अध्याय का समापन करते हैं कि उन्होंने अभी तक अपनी जिस अनुपम महिमा का वर्णन किया है उससे उनकी अनन्त महिमा के महत्व का अनुमान नहीं लगाया जा सकता क्योंकि वे ही अनन्त ब्रह्माण्डों को अपने दिव्य स्वरूप के एक अंश के रूप में धारण किए हुए हैं। इसलिए हम मानवों को भगवान, जो सभी प्रकार के वैभवों का स्रोत हैं, उन्हें ही अपनी आराधना का लक्ष्य मानना चाहिए।"
  },
  {
    "chapterName": "विश्वरूप दर्शन योग",
    "chapterNumber": 11,
    "verseCount": 55,
    "language": "hi",
    "yogaName": "भक्तियोग",
    "meaning": "विश्वरूप दर्शन योग",
    "summary": "पिछले अध्याय में श्रीकृष्ण ने अर्जुन की भक्ति को पोषित और प्रगाढ करने के लिए अपनी दिव्य विभूतियों का वर्णन किया था। अध्याय के अन्त में वे स्पष्ट रूप से अपने असीम विश्व रूप का उल्लेख करते हुए कहते हैं कि उसमें दिखाई देने वाले सभी सौंद्रर्य, ऐश्वर्य, तेज और शक्तियों को उनके तेज का स्फुलिंग मानो। \n\nइस अध्याय में अर्जुन श्रीकृष्ण से प्रार्थना करता है कि वे उसे अपने विश्व रूप या सभी ब्रह्माण्डों में व्याप्त अपने अनंत ब्रह्माण्डीय विराट रूप का दर्शन कराएँ। तब श्रीकृष्ण उस पर कृपा करते हुए उसे अपनी दिव्य दृष्टि प्रदान करते हैं जिसे प्राप्त कर अर्जुन देवों के देव श्रीकृष्ण के शरीर में सम्पूर्ण सृष्टि का अवलोकन करता है। फिर वह भगवान के अद्भुत अनंत स्वरूप में अनगनित मुख, आँखें, भुजाएँ, उदर देखता है। उनके विराट रूप का कोई आदि और अन्त नहीं है और वह प्रत्येक दिशा में अपरिमित रूप से बढ़ रहा है। उस रूप का तेज आकाश में एक साथ चमकने वाले सौ सूर्यों के प्रकाश से अधिक है। उस विराट रूप को देखकर अर्जुन के शरीर के रोम कूप सिहरने लगे। वह देखता है कि भगवान के नियम के भय से तीनों लोक भय से कांप रहें हैं। उसने देखा कि स्वर्ग के सभी देवता भगवान में प्रवेश कर उनकी शरण ग्रहण कर रहे हैं और सिद्धजन पवित्र वैदिक मंत्रों, प्रार्थनाओं और स्रोतों का पाठ कर भगवान की स्तुति कर रहे हैं। \n\nआगे अर्जुन कहता है कि वह धृतराष्ट्र के सभी पुत्रों को उनके सहयोगी राजाओं सहित उनके मुख में प्रवेश करते हुए उसी प्रकार से देख रहा है जैसे पतंगा तीव्र गति से अग्नि की ज्वाला में प्रवेश कर अपना विनाश करता है तब अर्जुन स्वीकार करता है कि भगवान के विश्व रूप को देखकर उसका हृदय भय से कांप रहा है और उसने अपना मानसिक संतुलन खो दिया है। भयतीत अर्जुन श्रीकृष्ण से उनके इस भयानक रूप की वास्तविकता जानना चाहता है जो कि उनके उस रूप जैसा नहीं था तथा जिसे वह अब से पहले अपने गुरु और मित्र के रूप में जानता था। इसका उत्तर देते हुए श्रीकृष्ण कहते हैं कि वे काल के रूप में तीनों लोकों के संहारक हैं। वे घोषणा करते हैं कि कौरव पक्ष के महायोद्धा पहले ही उनके द्वारा मारे जा चुके हैं इसलिए अपनी विजय को सुनिश्चित मानते हुए उठो और युद्ध करो। \n\nइसकी प्रतिक्रिया में अर्जुन अदम्य साहस और अतुल्य शक्ति से सम्पन्न भगवान के रूप में उनकी प्रशंसा करता है और पुनः उनकी वंदना करता है। वह कहता है कि यदि दीर्घकालीन मित्रता के दौरान श्रीकृष्ण को केवल मानव के रूप में देखने के कारण उपेक्षित भाव से भूलवशः उससे उनके प्रति कोई अपराध हो गया हो तो वे उसे क्षमा कर दें। वह उन्हें उस पर दया कर उन्हें एक बार पुनः अपना आनंदमयी भगवान का रूप दिखाने की प्रार्थना करता है। \n\nश्रीकृष्ण उसकी प्रार्थना को स्वीकार करते हुए पहले अपना चतुर्भुज नारायण रूप और तत्पश्चात अपना दो भुजाओं वाला मनोहारी पुरुषोत्तम रूप धारण करते हैं। वे अर्जुन को बताते हैं कि अर्जुन भगवान के जिस विश्वरूप को देख चुका है उसका दर्शन करना अत्यंत कठिन हैं। वेदों के अध्ययन करने से उनके साकार रूप को देखा नहीं जा सकता। उनके साकार रूप को न तो वेदों के अध्ययन द्वारा और न ही तपस्या, दान या अग्निहोत्र यज्ञों द्वारा देखा जा सकता है लेकिन अर्जुन, मैं जिस रूप में तुम्हारे समक्ष खड़ा हूँ उसे केवल विशुद्ध और अनन्य भक्ति से देखा जा सकता है और उसमें एकीकृत हुआ जा सकता है।"
  },
  {
    "chapterName": "भक्तियोग",
    "chapterNumber": 12,
    "verseCount": 20,
    "language": "hi",
    "yogaName": "भक्तियोग",
    "meaning": "भक्तियोग",
    "summary": "इस छोटे अध्याय में आध्यात्मिक साधनाओं के अन्य मार्गों की अपेक्षा भक्ति मार्ग की सर्वोत्कृष्टता के महत्त्व पर प्रकाश डाला गया है। इसका प्रारम्भ अर्जुन द्वारा श्रीकृष्ण से पूछे गए इस प्रश्न से होता है कि वह योग में किन्हें पूर्ण माने, क्या जो भगवान की साकार रूप में भक्ति करते हैं या वे जो निराकार ब्रह्म की उपासना करते हैं? इसका उत्तर देते हुए श्रीकृष्ण कहते हैं कि दोनों मार्ग भगवद्प्राप्ति की ओर ले जाते हैं किन्तु वे उनकी साकार रूप की पूजा करने वाले भक्त का श्रेष्ठ योगी के रूप में सम्मान करते हैं। वे स्पष्ट करते हुए कहते हैं कि मायाबद्ध देह धारियों के लिए उनके निराकार अव्यक्त रूप की आराधना करना कष्टदायक और अत्यंत कठिन है जबकि साकार रूप की आराधना करने वाले भक्त अपनी चेतना के साथ भगवान में विलीन हो जाते हैं और उनके प्रत्येक कर्म भगवान को समर्पित होते हैं तथा वे शीघ्रता से जीवन मरण के बंधनों से मुक्त हो जाते हैं। इसलिए श्रीकृष्ण अर्जुन को अपनी बुद्धि उन्हें समर्पित करने और अपने मन को केवल उनकी प्रेममयी भक्ति में स्थिर करने के लिए कहते हैं। \n\nकिन्तु ऐसा प्रेम प्रायः संघर्षमयी आत्मा लभ्य नहीं होता। इसलिए श्रीकृष्ण अन्य विकल्प देते हुए कहते हैं कि यदि अर्जुन तुरन्त अपने मन को पूर्ण रूप से भगवान में एकाग्र करने की अवस्था प्राप्त नहीं कर सकता तब उसे निरन्तर अभ्यास द्वारा पूर्णता की अवस्था को प्राप्त करने का प्रयास करना चाहिए। भक्ति कोई रहस्यमयी उपहार नहीं है। इसे निरन्तर प्रयास से पोषित किया जा सकता है। यदि अर्जुन इतना भी नहीं कर सकता तब भी उसे पराजय स्वीकार नहीं करनी चाहिए अपितु इसके विपरीत उसे केवल श्रीकृष्ण के सुख के लिए अपने कर्त्तव्यों का पालन करना चाहिए। यदि उसके लिए ऐसा करना भी संभव नहीं है तब उसे अपने कर्म फलों का त्याग कर देना चाहिए और अपनी आत्मा में स्थित हो जाना चाहिए। अब श्रीकृष्ण बताते हैं कि लौकिक कर्मों से श्रेष्ठ ज्ञान अर्जन करना है और ज्ञान अर्जन से श्रेष्ठ ध्यान है और ध्यान से श्रेष्ठ कर्म फलों का त्याग करना है जो तुरन्त परम शांति प्राप्त करने के मार्ग की ओर ले जाता है। इस अध्याय के शेष श्लोकों में उनके प्रिय भक्तों के अद्भुत गुणों का वर्णन किया गया है जो भगवान को अत्यन्त प्रिय हैं।"
  },
  {
    "chapterName": "क्षेत्र क्षेत्रज्ञ विभाग योग",
    "chapterNumber": 13,
    "verseCount": 35,
    "language": "hi",
    "yogaName": "ज्ञान योग",
    "meaning": "क्षेत्र क्षेत्रज्ञ विभाग योग",
    "summary": "भगवद्गीता में कुल अठारह अध्याय हैं। इनका तीन खण्डों में संपादन किया गया है। प्रथम खण्ड के छः अध्यायों में कर्मयोग का वर्णन किया गया है। दूसरे खण्ड में भक्ति की महिमा और भक्ति को पोषित करने का वर्णन हुआ है। यह भगवान के ऐश्वर्यों की ओर भी ध्यान आकर्षित करता है। तीसरे खण्ड के छः अध्यायों में तत्त्वज्ञान पर व्याख्या की गयी है। यह तीसरे खण्ड के अध्यायों का प्रथम अध्याय है। यह दो शब्दों क्षेत्र (शरीर) और क्षेत्रज्ञ (शरीर का ज्ञाता) से परिचित कराता है। हम शरीर को क्षेत्र के रूप में और शरीर में निवास करने वाली आत्मा को शरीर के ज्ञाता के रूप में स्वीकार कर सकते हैं लेकिन यह एक सरलीकरण है क्योंकि क्षेत्र का अर्थ वास्तव में अधिक व्यापक हैं। इसमें मन, बुद्धि, अहंकार और माया (प्राकृत) शक्ति के अन्य सभी घटक भी सम्मिलित हैं जिनसे हमारा व्यक्तित्त्व निर्मित होता है। व्यापक ज्ञान के आधार पर देह के क्षेत्र में आत्मा को छोड़कर जो कि 'शरीर की ज्ञाता' है, हमारे व्यक्तित्व के सभी पहलू सम्मिलित हैं। जिस प्रकार किसान खेत में बीज बो कर खेती करता है। इसी प्रकार से हम अपने शरीर को शुभ-अशुभ विचारों और कर्मों से पोषित करते हैं और परिणाम स्वरूप अपना भाग्य बनाते हैं। \n\nमहात्मा बुद्ध ने यह व्याख्या की है-\"हम जो सोचते हैं वही हमारे सामने परिणाम के रूप में आता है\" इसलिए हम जैसे सोचते हैं वैसे बन जाते हैं। महान अमेरिकी विचारक राल्फ वाल्डो हमर्सन ने कहा है-\"विचार ही सभी कर्मों का जनक है।\" इसलिए हमें शुभ एवं उचित विचारों और कर्मों से अपने शरीर को पोषित करने की विधि सीखनी चाहिए। इसके लिए शरीर और शरीर के ज्ञाता के बीच के भेद को जानना आवश्यक है। \n\nइस अध्याय में श्रीकृष्ण इस अन्तर के विस्तृत विश्लेषण की ओर ले जाते हैं। वे प्राकृत शक्ति के उन तत्त्वों की गणना करते हैं जिनसे शरीर के क्षेत्र की रचना होती है। वे शरीर में होने वाले \n\nउन परिवर्तनों जो भावनाओं, मत, दृष्टिकोण के रूप में उदय होते हैं का वर्णन करते हैं। वे उन गुणों और विशेषताओं का भी उल्लेख करते हैं जो मन को शुद्ध और उसे ज्ञान के प्रकाश से आलोकित करते हैं। ऐसे ज्ञान से आत्मा के ज्ञान की अनुभूति करने में सहायता मिलती है जो शरीर की ज्ञाता है। तत्पश्चात इस अध्याय में भगवान जो सभी प्राणियों के शरीर का ज्ञाता है का अद्भुत वर्णन किया गया है। भगवान विरोधी गुणों के अधिष्ठाता हैं अर्थात वे एक ही समय में विरोधाभासी गुणों को प्रकट करते हैं। इस प्रकार से वे सृष्टि में सर्वत्र व्यापक हैं और सभी के हृदयों में निवास करते हैं। इसलिए वे सभी जीवों की परम आत्मा हैं। आत्मा, परमात्मा और भौतिक शक्ति का वर्णन करने के पश्चात श्रीकृष्ण आगे यह व्याख्या करते हैं कि जीवों द्वारा किए जाने वाले कर्मों के लिए इनमें से कौन उत्तरदायी है? और पूरे संसार में इनके कारण और परिणाम के लिए कौन अत्यधिक उत्तरदायी है? वे जिन्हें इनके भेद का बोध हो जाता है और जो भली भांति कर्म के कारण को जान लेते हैं वही वास्तव में देखते हैं और केवल वही दिव्य ज्ञान में स्थित हो जाते हैं। वे सभी जीवों में परमात्मा को देखते हैं और इसलिए वे मानसिक रूप से किसी को अपने से नीचा नहीं समझते। वे एक ही प्राकृतिक शक्ति में स्थित विविध प्रकार के जीवन रूपों को देख सकते हैं और जब वे सभी अस्तित्त्वों में सामान्य आध्यात्मिक आधार को देखते हैं तब उन्हें ब्रह्म की अनुभूति होती है।"
  },
  {
    "chapterName": "गुण त्रय विभाग योग",
    "chapterNumber": 14,
    "verseCount": 27,
    "language": "hi",
    "yogaName": "ज्ञान योग",
    "meaning": "गुण त्रय विभाग योग",
    "summary": "पिछले अध्याय में आत्मा और भौतिक शरीर के बीच के अन्तर को विस्तार से समझाया गया था। इस अध्याय में भौतिक शक्ति की प्रकृति का वर्णन किया गया है जो शरीर और उसके तत्त्वों का स्रोत है और इस प्रकार से यह मन और पदार्थ दोनों की उत्पत्ति है। श्रीकृष्ण बताते हैं कि प्राकृतिक शक्ति सत्व, रजस, और तमस तीन गुणों से निर्मित है। शरीर, मन और बुद्धि जो प्राकृत शक्ति से बने हैं उनमें भी तीनों गुण विद्यमान होते हैं और हम जीवों में गुणों का मिश्रण हमारे व्यक्तित्व के स्वरूप का निर्धारण करता है। सत्व गुण शांत स्वभाव, सद्गुण और शुद्धता को चित्रित करता है तथा रजो गुण अन्तहीन कामनाओं और सांसारिक आकर्षणों के लिए अतृप्त महत्वाकांक्षाओं को बढ़ाता है एवं तमो गुण भ्रम, आलस्य, नशे और निद्रा का कारण है। जब तक आत्मा जागृत नहीं होती तब तक उसे प्राकृतिक शक्ति की प्रबल शक्तियों से निपटना सीखना चाहिए। मुक्ति इन तीन गुणों से परे है। \n\nआगे श्रीकृष्ण इन गुणों के बंधनों को काटने का एक सरल उपाय बताते हैं। परम शक्तिशाली भगवान इन तीनों गुणों से परे अर्थात गुणातीत हैं। यदि हम मन को उनमें अनुरक्त करते हैं तब हमारा मन भी दिव्यता की अवस्था की ओर बढ़ता है। इस बिन्दु पर अर्जुन तीन गुणों से परे होने की अवस्था प्राप्त व्यक्तियों के गुण-विशेषताओं के संबंध में पूछता है तब श्रीकृष्ण सहानुभूतिपूर्वक ऐसी प्रबुद्ध आत्माओं के लक्षणों का निरूपण करते हैं। वे बताते हैं कि प्रबुद्ध मनुष्य सदैव संतुलित रहते हैं और वे संसार में तीन गुणों के कार्यान्वयन को देखकर व्यक्तियों, पदार्थों तथा परिस्थितियों में प्रकट होने वाले उनके प्रभाव से विचलित नहीं होते। वे सभी पदार्थों को भगवान की शक्ति की अभिव्यक्ति के रूप में देखते हैं जो अंततः उनके नियंत्रण में होती है। इसलिए सांसारिक परिस्थितियाँ न तो उन्हें हर्षित और न ही उन्हें दुखी कर सकती हैं। इस प्रकार बिना विचलित हुए वे अपनी आत्मा में स्थित रहते हैं। श्रीकृष्ण हमें पुनः भक्ति की महिमा और हमें तीन गुणों से परे ले जाने की इसकी क्षमता का स्मरण कराते हुए इस अध्याय का समापन करते हैं।"
  },
  {
    "chapterName": "पुरुषोत्तम योग",
    "chapterNumber": 15,
    "verseCount": 20,
    "language": "hi",
    "yogaName": "ज्ञान योग",
    "meaning": "पुरुषोत्तम योग",
    "summary": "पिछले अध्याय में श्रीकृष्ण ने स्पष्ट किया था कि प्राकृत शक्ति के तीन गुणों से गुणातीत होकर ही कोई अपने दिव्य लक्ष्य को प्राप्त कर सकता है। उन्होंने यह भी प्रकट किया था कि इन गुणों से परे जाने का सबसे उत्तम उपाय भगवान की अनन्य भक्ति में तल्लीन होना है। ऐसी भक्ति में तल्लीन होने के लिए हमें मन को संसार से विरक्त कर उसे केवल भगवान में अनुरक्त करना होगा। इसलिए संसार की प्रकृति को समझना अति आवश्यक है। इस अध्याय में श्रीकृष्ण अर्जुन की संसार के प्रति विरक्ति विकसित करने में उसकी सहायतार्थ उसे भौतिक संसार की प्रकृति को प्रतीकात्मक शैली में समझाते हैं। वे भौतिक संसार की तुलना ऊपर से नीचे 'अश्वत्थ' बरगद के वृक्ष से करते हैं। देहधारी आत्मा इस वृक्ष की उत्पत्ति के स्रोत और यह कब से अस्तित्व में है और कैसे बढ़ रहा है, को समझे बिना एक जन्म से दूसरे जन्म में इस वृक्ष की शाखाओं के ऊपर नीचे घूमती रहती है। इस वृक्ष की जड़ें ऊपर की ओर होती हैं क्योंकि इसका स्रोत भगवान में है। वेदों में वर्णित सकाम कर्मफल इसके पत्तों के समान हैं। इस वृक्ष को प्राकृत शक्ति के तीनों गुणों से सींचा जाता है। ये गुण इन्द्रिय विषयों को जन्म देते हैं जोकि वृक्ष की ऊपर लगी कोंपलों के समान हैं। कोंपलों से वायवीय जड़ें फूट कर प्रसारित होती हैं जिससे वृक्ष और अधिक विकसित होता है। इस अध्याय में इस प्रतीकात्मकता को विस्तृत रूप से वर्णित किया गया है जिससे कि यह ज्ञात हो सके कि कैसे देहधारी आत्मा इस वृक्ष के भौतिक अस्तित्व की प्रकृति की अज्ञानता के कारण निरंतर संसार के बंधनो में फंसी रहकर भौतिक जगत के कष्ट सहन कर रही है। इसलिए श्रीकृष्ण समझाते हैं कि विरक्ति की कुल्हाड़ी से इस वृक्ष को काट डालना चाहिए। तब फिर हमें वृक्ष के आधार की खोज करनी चाहिए जोकि स्वयं परमेश्वर हैं। परम स्रोत भगवान को खोजकर हमें इस अध्याय में वर्णित पद्धति के अनुसार उनकी शरणागति ग्रहण करनी होगी और तभी हम भगवान के दिव्य लोक को पा सकेंगे जहाँ से हम पुनः इस लौकिक संसार में नहीं लौटेंगे। श्रीकृष्ण आगे वर्णन करते हैं कि उनका अभिन्न अंश होने के कारण इस संसार में जीवात्माएँ किस प्रकार से दिव्य हैं किन्तु माया शक्ति के बंधन के कारण वे मन सहित छह इन्द्रियों के साथ संघर्ष करती रहती हैं। वे स्पष्ट करते हैं कि यद्यपि आत्मा दिव्य है किन्तु फिर भी वह किस प्रकार से इन्द्रिय विषयों के भोग का आनंद लेती है। श्रीकृष्ण यह भी बताते हैं कि मृत्यु होने पर आत्मा अपने वर्तमान जीवन के मन और सूक्ष्म इन्द्रियों सहित किस प्रकार से नये शरीर में देहान्तरण करती है। अज्ञानी न तो शरीर में आत्मा की उपस्थिति को अनुभव करते हैं और न ही मृत्यु होने पर उन्हें आत्मा के देह को त्यागने का आभास होता है किन्तु योगी ज्ञान चक्षुओं और मन की शुद्धता के साथ इसका अनुभव करते हैं। इसी प्रकार से भगवान भी अपनी सृष्टि में व्याप्त हैं लेकिन ज्ञान चक्षुओं से ही उनकी उपस्थिति को अनुभव किया जा सकता है। यहाँ श्रीकृष्ण प्रकट करते हैं कि संसार में भगवान के अस्तित्व को और उनकी अनन्त महिमा को जो सर्वत्र प्रकाशित है, कैसे जान सकते हैं। इस अध्याय का समापन क्षर, अक्षर, पुरुषोत्तम शब्दों की व्याख्या के साथ होता है। क्षर भौतिक जगत की नश्वर वस्तुएँ हैं। अक्षर भगवान के लोक में निवास करने वाली मुक्त आत्माएँ हैं। पुरुषोत्तम का अर्थ दिव्य सर्वोच्च व्यक्तित्व है जो संसार का नियामक और निर्वाहक है। वह विनाशकारी और अविनाशी पदार्थों से परे है। हमें अपना सर्वस्व उस पर न्योछावर करते हुए उसकी आराधना करनी चाहिए।"
  },
  {
    "chapterName": "देवासुर संपद विभाग योग",
    "chapterNumber": 16,
    "verseCount": 24,
    "language": "hi",
    "yogaName": "ज्ञान योग",
    "meaning": "देवासुर संपद विभाग योग",
    "summary": "इस अध्याय में श्रीकृष्ण मनुष्यों में दैवीय और आसुरी दो प्रकार की प्रकृति का वर्णन करते हैं। दैवीय गुण धार्मिक ग्रंथों के उपदेशों के अनुसरण, सत्वगुण को पोषित करने और अध्यात्मिक अभ्यास द्वारा मन को शुद्ध करने से विकसित होते हैं। ये दैवीय संपत्ति में वृद्धि की ओर अग्रसर करते हैं और अंततः भगवद्प्राप्ति के लक्ष्य तक पहुँचाते हैं। इसके विपरीत संसार में आसुरी प्रवृत्ति भी पायी जाती है जो मोह अर्थात आसक्ति और अज्ञानता के गुणों की संगति से तथा भौतिक विचारों को अंगीकार करने से विकसित होती है। यह किसी के व्यक्तित्व में प्रतिकूल लक्षणों का पोषण करती है और अंततः आत्मा को नारकीय अस्तित्वों में धकेलती है। \n\nयह अध्याय दिव्य प्रकृति के दैवीय गुणों से सम्पन्न पुण्यात्माओं के निरूपण से प्रारंभ होता है। आगे इसमें आसुरी गुणों का वर्णन किया गया है जिनका अति सतर्कता के साथ त्याग करना चाहिए, क्योंकि ये आगे आत्मा को पुनः अज्ञानता और 'संसार' अर्थात जीवन और मृत्यु के चक्र की ओर खींचते हैं। श्रीकृष्ण इस अध्याय का समापन करते हुए कहते हैं कि क्या किया जाना चाहिए और क्या नहीं किया जाना चाहिए, इसका निर्णय करने का अधिकार केवल वेद शास्त्रों का ही माना जाता है अतः हमें भी वेदों के वाक्यों को स्वीकार करना चाहिए। हमें इन वैदिक शास्त्रों के विधि-निषेधों को समझना चाहिए और तदानुसार इस संसार में अपने कार्यों का निष्पादन और दायित्वों का निर्वहन करना चाहिए।"
  },
  {
    "chapterName": "श्रद्धा त्रय विभाग योग",
    "chapterNumber": 17,
    "verseCount": 28,
    "language": "hi",
    "yogaName": "ज्ञान योग",
    "meaning": "श्रद्धा त्रय विभाग योग",
    "summary": "चौदहवें अध्याय में श्रीकष्ण ने प्राकतिक शक्ति के तीन गुणों की व्याख्या की थी और यह भी समझाया था कि किस प्रकार से ये मनुष्यों पर प्रभाव डालते हैं। इस सत्रहवें अध्याय में श्रीकृष्ण विस्तारपूर्वक गुणों के प्रभाव के संबंध में बताते हैं। सर्वप्रथम वह श्रद्धा के विषय पर चर्चा करते हैं और यह बताते हैं कि कोई ऐसा व्यक्ति नहीं है जो श्रद्धा विहीन हो क्योंकि यह मानवीय प्रकृति का एक अविभाज्य स्वरूप है लेकिन मन की प्रकृति के अनुसार व्यक्तियों की श्रद्धा सात्विक, राजसिक अथवा तामसिक गुणों के अनुरूप होती है। उनकी श्रद्धा की प्रकृति ही उनकी जीवन शैली का निर्धारण करती है। लोग अपनी रूचि के अनुसार ही अपने भोजन का चयन करते हैं। \n\nश्रीकृष्ण भोजन को तीन श्रेणियों में वर्गीकृत करते हैं तथा प्रत्येक भोजन के हमारे स्वास्थ्य पर पड़ने वाले प्रभाव की चर्चा करते हैं। तत्पश्चात वह यज्ञ के विषय पर आते हैं और यह बताते हैं कि कैसे प्रकृति के तीन गुणों में से प्रत्येक में यज्ञ किस प्रकार विभिन्न रूप से सम्पन्न होता है। इस अध्याय में आगे तपस्या के विषय में बताया गया है तथा शरीर, वाणी एवं मन के तप की व्याख्या की गई है। तपस्याओं की श्रेणी में प्रत्येक तपस्या का स्वरूप सत्वगुण, रजोगुण, तमोगुण के प्रभाव के कारण भिन्न होता है। तत्पश्चात दान पर चर्चा की गई है तथा इसके तीन विभागों का वर्णन किया गया है। \n\nअंततः श्रीकृष्ण तीन गुणों से भी आगे बढ़ते हैं तथा “ओम-तत्-सत्\" शब्दों की प्रासंगिकता तथा अर्थ के विषय पर प्रकाश डालते हैं जो परम सत्य के विभिन्न रूपों के प्रतीक हैं। 'ओउम' शब्दांश ईश्वर के निराकार रूप की अभिव्यक्ति है। 'तत्' शब्दांश का उच्चारण, परमपिता परमात्मा को अर्पित की जाने वाली क्रियाओं तथा वैदिक रीतियों के लिए किया जाता है, 'सत्' शब्दांश का तात्पर्य सनातन भगवान तथा धर्माचरण से है। एक साथ प्रयोग करने पर ये अलौकिकता की अवधारणा की ओर ले जाते हैं। इस अध्याय का अंत इस बात पर बल देते हुए होता है कि यदि यज्ञ, तप और दान धर्मग्रन्थों के विधि-निषेधों की उपेक्षा करते हुए किए जाते हैं तब ये सभी कृत्य निरर्थक सिद्ध होते हैं।"
  },
  {
    "chapterName": "मोक्ष संन्यास योग",
    "chapterNumber": 18,
    "verseCount": 78,
    "language": "hi",
    "yogaName": "ज्ञान योग",
    "meaning": "मोक्ष संन्यास योग",
    "summary": "भगवद्गीता का अंतिम अध्याय सबसे बड़ा है और इसमें कई विषयों को सम्मिलित किया गया है। अर्जुन संस्कृत में प्रायः प्रयुक्त होने वाले दो शब्दों संन्यास और त्याग के संबंध में प्रश्न पूछने के साथ संन्यास के विषय पर चर्चा प्रारम्भ करता है। दोनों शब्द एक ही मूल धातु के हैं जिसका अर्थ 'परित्याग करना' है। संन्यासी वह है जो गृहस्थ जीवन में भाग नहीं लेता और समाज को त्याग कर साधना का अभ्यास करता है। त्यागी वह है जो कर्म में संलग्न रहता है लेकिन कर्म-फल का भोग करने की इच्छा का त्याग करता है। (यही गीता की वाणी का मुख्य अभिप्राय है) श्रीकृष्ण दूसरे प्रकार के त्याग की संतुति करते हैं। वे परामर्श देते हैं कि यज्ञ, दान, तपस्या और कर्त्तव्य पालन संबंधी कार्यों का कभी त्याग नहीं करना चाहिए क्योंकि ये ज्ञानी को भी शुद्ध करते हैं। इनका संपादन केवल कर्त्तव्य पालन की दृष्टि से करना चाहिए क्योंकि इन कार्यों को कर्म फल की आसक्ति के बिना संपन्न करना आवश्यक होता है। \n\nतत्पश्चात श्रीकृष्ण तीन कारकों के विस्तृत गहन विश्लेषण की ओर आते हैं जो कर्म, कर्म के तीन संघटक और कर्म फल में योगदान करने वाले पाँच कारकों को प्रेरित करते हैं। वे इनमें से प्रत्येक की तीन गुणों के अंतर्गत विवेचना करते हैं। वे कहते हैं कि जो अल्पज्ञानी है वे स्वयं को अपने कार्यों का कारण मानते हैं लेकिन विशुद्ध बुद्धि युक्त प्रबद्ध आत्माएँ न तो स्वयं को अपने कार्यों का कर्ता और न ही भोक्ता मानती हैं। अपने कर्मों के फलों से सदैव विरक्त रहने के कारण वे कार्मिक प्रतिक्रियाओं के बंधन में नहीं पड़ते। आगे इस अध्याय में यह अवगत कराया गया है कि लोगों के उद्देश्यों और कर्मों में भिन्नता क्यों पाई जाती है? तत्पश्चात इसमें प्रकृति के तीन गुणों के अनुसार ज्ञान, कर्म और कर्ता की श्रेणियों का वर्णन किया गया है। फिर आगे यह अध्याय बुद्धि, दृढ संकल्प और सुख के संबंध में समान विश्लेषण प्रस्तुत करता है। इसके बाद यह अध्याय उन लोगों का चित्रण करता है जिन्होंने आध्यात्मिक जीवन में पूर्णता की \n\nअवस्था प्राप्त कर ली है और ब्रह्म की अनुभूति में लीन हो गए हैं। आगे इस अध्याय में यह कहा गया है कि ऐसे पूर्ण योगी भी भक्ति में तल्लीनता द्वारा अपनी पूर्णता का अनुभव करते हैं। इसलिए भगवान के दिव्य व्यक्तित्त्व के रहस्य को केवल मधुर भक्ति द्वारा जाना जा सकता है। इसके बाद श्रीकृष्ण अर्जुन को स्मरण कराते हैं कि भगवान सभी जीवों के हृदय में स्थित हैं\n\nऔर उनके कर्मों के अनुसार वे उनकी गति को निर्देशित करते हैं। यदि हम उनका स्मरण करते हैं और अपने सभी कर्म उन्हें समर्पित करते हैं तथा उनका आश्रय लेकर उन्हें अपना लक्ष्य बनाते हैं तब उनकी कृपा से हम सभी प्रकार की कठिनाईयों को पार कर लेंगे। लेकिन यदि हम अपने अभिमान से प्रेरित होकर अपनी इच्छानुसार कर्म करते है तब हम सफलता प्राप्त नहीं कर पाएंगे। \n\nअंत में श्रीकृष्ण यह प्रकट करते हैं कि सभी प्रकार की धार्मिकता का त्याग करना और केवल भगवान की भक्ति के साथ-साथ उनके समक्ष शरणागत होना ही अति गुह्यतम ज्ञान है। तथापि यह ज्ञान उन्हें नहीं प्रदान करना चाहिए जो आडम्बर-हीन और भक्त नहीं हैं, क्योंकि वे इसकी अनुचित व्याख्या करेंगे और इसका दुरूपयोग कर अनुत्तरदायिता से कर्मों का त्याग करेंगे। यदि हम यह गुह्य ज्ञान पात्र जीवात्मा को प्रदान करते है तब यह अति प्रेमायुक्त बन जाता है और भगवान को अति प्रसन्न करता है। \n\nइसके बाद अर्जुन भगवान को सूचित करता है कि उसका मोह नष्ट हो गया है और वह उनकी आज्ञाओं का पालन करने के लिए तत्पर है। अंत में संजय जो नेत्रहीन राजा धृतराष्ट्र को युद्ध भूमि पर भगवान श्रीकृष्ण और अर्जुन के बीच हो रहे संवादों को सुना रहा था, व्यक्त करता है कि वह इन संवादों को सुनकर इतना स्तंभित और आश्चर्य चकित है कि जैसे ही वह भगवान के पवित्र संवादों और भगवान के अति विशाल विश्व रूप का स्मरण करता है तब उसके शरीर के रोंगटे खड़े हो जाते हैं। गहन कथन के साथ भगवद्गीता का समापन करते हुए वह कहता है कि विजय सदैव वहीं होती है जहाँ भगवान और उसके भक्त होते हैं और इस प्रकार से अच्छाई, प्रभुता और समृद्धि भी वहीं होगी क्योंकि परम सत्य का प्रकाश सदैव असत्य के अंधकार को परास्त कर देता है।"
  }]

  

  const BhagavadGitaChapters = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const navigate = useNavigate()
    const languages = [...new Set(chapters.map(chapter => chapter.language))];
    const filteredChapters = chapters.filter(
      (chapter) => chapter.language === selectedLanguage
    );
  
    return (
        <div className="bg-gray-900 min-h-screen p-8 text-white">
            <div className='ms-96 w-3/5 flex justify-around items-center'>
            <h1 className="text-4xl font-bold text-center mb-8">Bhagavad Gita Chapters</h1>
            <button className='mb-6 bg-white text-red-500 font-medium py-1 px-4 rounded' onClick={() => navigate('/quiz')} >Try a quiz</button>
            <button className='mb-6 bg-white text-blue-500 font-medium py-1 px-4 rounded' onClick={() => navigate('/analysis')} >Analytics</button>
            </div>
        
        
        <div className="flex justify-center space-x-4 mb-8">
          {languages.map((language) => (
            <button
              key={language}
              className={`px-4 py-2 rounded-full focus:outline-none ${
                selectedLanguage === language
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white transition-colors'
              }`}
              onClick={() => setSelectedLanguage(language)}
            >
              {language.toUpperCase()}
            </button>
          ))}
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredChapters.map((chapter) => (
            <Link
              key={chapter.chapterNumber}
              to={`/chapter/${chapter.chapterNumber}`} // Define the link target route
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold mb-4">{chapter.chapterName}</h2>
              <p className="text-sm text-gray-400 mb-2">
                <span className="font-semibold">Chapter:</span> {chapter.chapterNumber}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                <span className="font-semibold">Verses:</span> {chapter.verseCount}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                <span className="font-semibold">Yoga:</span> {chapter.yogaName}
              </p>
              
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default BhagavadGitaChapters;