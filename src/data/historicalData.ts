import { HistoricalEvent, DocumentArchive, PeaceMilestone } from '../types';

export const HISTORICAL_TIMELINE: HistoricalEvent[] = [
  {
    id: 'naga-club-1918',
    year: 1918,
    dateStr: 'October 1918',
    title: 'Formation of the Naga Club',
    category: 'Foundational',
    summary: 'The birth of modern pan-Naga political consciousness, catalyzed by returnees from the First World War Naga Labour Corps in France.',
    details: [
      'Naga veterans who returned from the European theatre of World War I (1917–1918) realized their distinct identity, shared heritage, and collective destiny.',
      'Founded in Kohima by educated government employees, village headmen (Gaonburas), and community leaders.',
      'Provided the first institutional forum for all Naga tribes to deliberate on their collective future together.'
    ],
    historicDocumentExcerpt: 'Recognizing that the Nagas, divided among independent villages for centuries, possess one soil, one customary bloodline, and one common spirit.',
    significance: 'First organized political platform for modern Naga national solidarity.',
    location: 'Kohima, Naga Hills'
  },
  {
    id: 'simon-commission-1929',
    year: 1929,
    dateStr: 'January 10, 1929',
    title: 'Memorandum to the British Simon Commission',
    category: 'Foundational',
    summary: 'The formal presentation by 20 Naga leaders demanding to be left alone as an independent entity outside any prospective Indian political framework.',
    details: [
      'Submitted by 20 signatories representing the diverse Naga tribes to Sir John Simon and the Indian Statutory Commission at Kohima.',
      'Expressed that the Nagas were never part of India historically, socially, or culturally.',
      'Urged the British Crown: "Leave us alone to determine for ourselves as in ancient times."'
    ],
    historicDocumentExcerpt: 'We pray that we should not be included within the Reformed Scheme... You conquered us to keep peace, but we were never part of India. If British rule ceases, leave us alone to determine for ourselves as in ancient times.',
    significance: 'The foundational legal and political charter of Naga sovereign self-determination.',
    location: 'Kohima'
  },
  {
    id: 'independence-declaration-1947',
    year: 1947,
    dateStr: 'August 14, 1947',
    title: 'Declaration of Naga Independence',
    category: 'Political',
    summary: 'One day prior to the independence of India, the Naga National Council formally declared Naga independence to the world.',
    details: [
      'Formal communications cabled to the British King George VI, the United Nations, and Lord Mountbatten in New Delhi.',
      'Reiterated the status of Nagaland as an independent sovereign republic upon the lapse of British colonial authority.',
      'August 14 is observed annually across all Naga lands as Naga Independence Day.'
    ],
    historicDocumentExcerpt: 'Nagaland is a separate country and has declared its sovereign independence on this 14th day of August, 1947, exercising its inviolable right as a free people.',
    significance: 'The historic declaration establishing August 14 as the paramount National Day.',
    location: 'Kohima & Naga Ancestral Territories'
  },
  {
    id: 'voluntary-plebiscite-1951',
    year: 1951,
    dateStr: 'May 16, 1951',
    title: 'The Great Naga Voluntary Plebiscite',
    category: 'Political',
    summary: 'A democratic plebiscite administered across villages where over 99.9% of the Naga populace affirmed sovereign independence with thumbprints and blood oaths.',
    details: [
      'Initiated by A.Z. Phizo and the Naga National Council to democratically prove Naga self-determination.',
      'Villagers from the highest mountain peaks to the plains assembled at village Morungs and church squares to cast their written ballots and thumb impressions.',
      'Sent to the United Nations and the Government of India as incontrovertible democratic proof.'
    ],
    historicDocumentExcerpt: 'Do you want to remain independent or join the Indian Union? Over 99.9% answered unequivocally: Free and Independent Nagaland.',
    significance: 'The democratic cornerstone of the Naga national mandate.',
    location: 'Kohima & all Naga Village Councils'
  },
  {
    id: 'yehzabo-republic-1956',
    year: 1956,
    dateStr: 'March 22, 1956',
    title: 'Proclamation of Federal Government & Hoisting of the National Flag',
    category: 'Constitutional',
    summary: 'Promulgation of the supreme Yehzabo (Constitution) and first official hoisting of the Naga National Flag with the Covenant Rainbow.',
    details: [
      'Proclaimed at Parashen, Rengma region, bringing together tribal elders, leaders, and people.',
      'The National Flag was unfurled: Sky blue field, the covenant rainbow arch (Red, Gold, Green), and the Star of Bethlehem in canton.',
      'Instituted the Tatar Hoho (National Parliament) and Council of Kilonsers.'
    ],
    historicDocumentExcerpt: 'Nagaland is an independent Sovereign Republic. Sovereignty resides in the people and shall be exercised in accordance with this Yehzabo and Christian faith.',
    significance: 'Codification of the constitutional republic and national emblems.',
    location: 'Parashen, Rengma Region'
  },
  {
    id: 'nscn-foundation-1980',
    year: 1980,
    dateStr: 'January 31, 1980',
    title: 'Formation of NSCN & Proclamation of GPRN',
    category: 'Political',
    summary: 'Establishment of the National Socialist Council of Nagaland and proclamation of the Government of the People’s Republic of Nagaland under the motto "Nagaland for Christ".',
    details: [
      'Formed following rejection of the 1975 Shillong Accord to preserve unconditional national sovereignty.',
      'Formulated a comprehensive socio-economic and spiritual manifesto based on indigenous collective solidarity and Christian values.',
      'Adopted the motto "Nagaland for Christ" as the foundational moral compass for the government and national army.'
    ],
    historicDocumentExcerpt: 'We stand for the unshakeable right of our people to live free under the grace of Almighty God, rejecting all treaties signed without the full mandate of our nation.',
    significance: 'Establishment of the GPRN / NSCN governance apparatus.',
    location: 'Naga Homeland'
  },
  {
    id: 'ceasefire-accords-1997-2007',
    year: 1997,
    dateStr: '1997 – 2007',
    title: 'Bilateral Ceasefires & Era of Peace Negotiations',
    category: 'Peace Accord',
    summary: 'Signing of bilateral ceasefire agreements with the Government of India, initiating political negotiations at the highest prime-ministerial levels.',
    details: [
      'Historical recognition that the Naga issue is a political issue, not an internal law-and-order dispute.',
      'Formation of the Ceasefire Monitoring Cell (CFMC) / Group (CFMG) to preserve peace on the ground.',
      'Establishment of the GPRN / NSCN Unification initiative to unite all Naga armed and political entities under one umbrella.'
    ],
    historicDocumentExcerpt: 'Ceasefire ground rules agreed upon to create a peaceful environment conducive to meaningful political dialogue without military conflict.',
    significance: 'Transition to political and diplomatic resolution on the world stage.',
    location: 'Geneva, Bangkok, New Delhi & Nagaland'
  },
  {
    id: 'covenant-reconciliation-2009',
    year: 2009,
    dateStr: 'June 13, 2009',
    title: 'The Covenant of Reconciliation (CoR)',
    category: 'Social Unity',
    summary: 'Historic reconciliation pact between major Naga leaders mediated by the Forum for Naga Reconciliation (FNR) and the Church.',
    details: [
      'Top leaders of NSCN/GPRN and other national groups signed a binding commitment in the presence of international peacemakers.',
      'Pledged to cease fratricidal bloodshed and work together for the historical and political rights of the Nagas in the spirit of forgiveness.',
      'Reaffirmed the common heritage and God-given destiny of all Naga tribes.'
    ],
    historicDocumentExcerpt: 'Having reconciled before God and our people, we covenant to work together in love, peace, and mutual forgiveness, seeking an honorable political future for our nation.',
    significance: 'The moral pledge of non-violence and fraternal reconciliation.',
    location: 'Chiang Mai / Dimapur'
  },
  {
    id: 'agreed-position-2017',
    year: 2017,
    dateStr: 'November 17, 2017',
    title: 'Signing of the Agreed Position (Preamble)',
    category: 'Peace Accord',
    summary: 'Historic Preamble signed between the Working Committee (WC) of NNPGs / GPRN and the Government of India.',
    details: [
      'The Government of India officially recognized the unique historical and political rights of the Nagas to self-govern their ancestral lands.',
      'Framework for a political settlement that respects Naga customary identity, land ownership, natural resources, and socio-cultural institutions.',
      'A landmark milestone paving the way toward a permanent, honorable, and dignified political resolution.'
    ],
    historicDocumentExcerpt: 'The Government of India recognizes the historical and political rights of the Nagas to self-govern their ancestral land, with due regard to contemporary political realities.',
    significance: 'Official recognition of Naga historical & political rights by the Union of India.',
    location: 'New Delhi'
  }
];

export const PRIMARY_DOCUMENTS: DocumentArchive[] = [
  {
    id: 'simon-commission-full',
    title: 'The Naga Club Memorandum to the British Simon Commission',
    date: 'January 10, 1929',
    category: 'Treaty / Memorandum',
    signatories: [
      'Rheichalie, Peskar',
      'Nisier, Master',
      'Khosa, Doctor',
      'Luzevi, Head Interpreter (Sumi)',
      'Gepo, Dobashi',
      'Khehovi, Dobashi',
      'Apamo, Dobashi (Lotha)',
      '13 other Tribal Representatives and Interpreters'
    ],
    historicalContext: 'Presented to Sir John Simon, Chairman of the Indian Statutory Commission, during their historic visit to Kohima. This document constitutes the first written diplomatic manifesto articulating Naga national sovereignty.',
    fullText: `MEMORANDUM SUBMITTED TO THE STATUTORY COMMISSION BY THE NAGA CLUB

To: The Chairman, The Indian Statutory Commission, Kohima.
Dated: Kohima, the 10th January, 1929.

Sir,
We the undersigned Nagas of the Naga Club at Kohima, representing different tribes — Angamis, Aos, Semas (Sumis), Lothas, Rengmas, and others — beg to submit our prayer before your Commission.

1. Our country within the administered area consists of more than three thousand square miles of hilly territory. Before the British Government conquered our country in 1879-1880, we were living in a state of intermittent warfare with each other, but we were never conquered by the Kings of Assam nor by any rulers from India. We were entirely free and independent.

2. We have no social or matrimonial connections with the Hindus or the Muslims of the plains. Our customs, traditions, laws of inheritance, and traditional tribal religion are completely different from theirs.

3. We pray that we should not be included within the Reformed Scheme of India. If British rule ceases in this country, leave us alone to determine for ourselves as in ancient times. We do not want to be placed under a council where people from the plains will rule over us, as they do not know our language, our customs, or our rights over our mountains and forests.

4. We place this humble prayer in your hands, trusting in British justice that our land, our forests, our customary laws, and our ancient freedom shall be preserved inviolate.

We remain, Sir,
Your most obedient servants,
[Signed by 20 Representatives of the Naga Club]`,
    downloadFilename: 'Simon_Commission_Memorandum_1929_Naga_Club.txt',
    tags: ['Simon Commission', '1929', 'Naga Club', 'Foundational Charter']
  },
  {
    id: 'independence-declaration-full',
    title: 'The Declaration of Naga Independence',
    date: 'August 14, 1947',
    category: 'Declaration',
    signatories: [
      'Aliba Imti, President, Naga National Council',
      'T. Sakhrie, General Secretary',
      'Representatives of all Constituent Tribal Councils'
    ],
    historicalContext: 'Cabled to His Majesty King George VI, British Prime Minister Clement Attlee, the United Nations General Assembly in New York, and the Government of India in New Delhi, twenty-four hours before the formal transfer of power in India.',
    fullText: `THE DECLARATION OF NAGA INDEPENDENCE
Dated: Kohima, the 14th day of August, 1947.

TO ALL SOVEREIGN NATIONS AND GOVERNMENTS OF THE WORLD:

BE IT KNOWN UNTO ALL MEN:
1. That the Naga people, comprising all tribes inhabiting our ancestral lands between the Brahmaputra valley and the Chindwin River, have from time immemorial lived as a free and sovereign people, acknowledging no foreign sovereign.

2. That upon the expiration of British paramountcy over the Indian sub-continent on this 14th day of August 1947, all authority over our territory reverts entirely and without diminution to the Naga people.

3. That the Naga National Council, acting on behalf of the entire Naga nation, hereby solemnly declares to the world that Nagaland is an independent and sovereign nation.

4. We seek peace, trade, and honorable fraternity with all neighboring peoples, especially the nascent nations of India and Burma, on the basis of mutual respect for sovereignty and territorial integrity.

SO HELP US GOD.
"NAGALAND FOR CHRIST"

Signed on behalf of the Naga Nation:
Aliba Imti (President, NNC)
T. Sakhrie (General Secretary)`,
    downloadFilename: 'Naga_Independence_Declaration_August_14_1947.txt',
    tags: ['Independence 1947', 'August 14', 'NNC', 'United Nations']
  },
  {
    id: 'plebiscite-1951-full',
    title: 'The Great Naga Voluntary Plebiscite Declaration',
    date: 'May 16, 1951',
    category: 'Plebiscite',
    signatories: [
      'A.Z. Phizo, President',
      'Tatar Representatives from all Naga Regions',
      'Over 99.9% of adult Naga citizens by thumbprint'
    ],
    historicalContext: 'Conducted under the auspices of the Naga National Council to prove to the international community and New Delhi the sovereign democratic will of the Naga nation. Completed with zero violence and universal participation.',
    fullText: `THE HISTORIC VOLUNTARY PLEBISCITE RECORD OF 16TH MAY, 1951

Question put to the Naga people:
"Do you want Nagaland to remain independent, or do you want to join the Indian Union?"

RESULTS CERTIFIED BY THE PLEBISCITE COMMISSION:
- Total Villages Participated: Across all administered and unadministered Naga territories.
- Total Affirmative Votes for Sovereign Independence: 99.9% recorded via signed ballots, tribal council seals, and indelible thumb impressions.
- Dissenting / Neutral Votes: Under 0.1%.

SOLEMN OATH OF RE-AFFIRMATION:
"Before Almighty God, holding the sacred soil of our ancestral hills and the Holy Word in our hands, we solemnly pledge our lives, our customary honour, and our generational heritage to safeguard the sovereign freedom of our beloved homeland. We shall never surrender our freedom, nor compromise our birthright."

Certified and transmitted to the President of India and the Secretary-General of the United Nations.`,
    downloadFilename: 'Naga_Plebiscite_Record_1951.txt',
    tags: ['Plebiscite 1951', 'Democracy', 'NNC', 'Phizo']
  },
  {
    id: 'agreed-position-2017-full',
    title: 'The Agreed Position (Preamble) with the Government of India',
    date: 'November 17, 2017',
    category: 'Peace Framework',
    signatories: [
      'N. Kitovi Zhimomi, Convener, Working Committee (WC), NNPGs / GPRN',
      'Co-Conveners representing constituent Naga National Political Groups',
      'R.N. Ravi, Interlocutor, Government of India'
    ],
    historicalContext: 'A historic breakthrough in the Indo-Naga peace negotiations, wherein the Government of India for the first time formally recognized the historical and political rights of the Nagas in a signed preamble.',
    fullText: `AGREED POSITION (PREAMBLE) BETWEEN THE GOVERNMENT OF INDIA AND THE WORKING COMMITTEE (WC), NAGA NATIONAL POLITICAL GROUPS (NNPGs) / GPRN

Dated: New Delhi, 17th November, 2017.

PREAMBLE:
The Government of India and the Working Committee of the Naga National Political Groups (NNPGs) recognizing the historical and political rights of the Nagas to self-govern their ancestral land, and acknowledging that the political conflict that has continued for seven decades requires an honorable, democratic, and lasting resolution;

HAVE AGREED AS FOLLOWS:

1. Recognition of Historical Rights:
The Government of India recognizes the historical and political rights of the Nagas to self-govern their ancestral land with due regard to contemporary political realities.

2. Peaceful Co-existence and Federal Principles:
Both parties agree to determine an enduring relationship characterized by peaceful co-existence, mutual respect, and the recognition of the customary systems, territorial integrity of tribal lands, and cultural sovereignty of the Naga people.

3. Constitutional Realities:
A modern democratic governance compact shall ensure the protection of Naga land ownership, natural resources, customary judicial systems, and economic advancement without alienation of ancestral heritage.

In faith whereof the representatives have set their signatures:
For the Working Committee:
N. Kitovi Zhimomi (Convener)
Co-Conveners:
Zhopra Vero, Hoomto Yeptho, Wangtin Naga, Isak Sumi, Kiumukam Yimkhiung, Roland Lotha

For the Government of India:
R.N. Ravi (Special Interlocutor)`,
    downloadFilename: 'Agreed_Position_Preamble_Nov_17_2017.txt',
    tags: ['Agreed Position', 'NNPGs', 'Peace Talks', '2017']
  }
];

export const PEACE_MILESTONES: PeaceMilestone[] = [
  {
    id: 'peace-1',
    year: '1964',
    title: 'The Historic 1964 Ceasefire & Peace Mission',
    parties: ['Federal Naga Government', 'Government of India', 'Nagaland Baptist Church Council (NBCC) Peace Mission (Jayaprakash Narayan, Rev. Michael Scott, B.P. Chaliha)'],
    principles: ['Cessation of hostilities', 'Unimpeded passage for peace workers', 'Roundtable political dialogues in Chedema'],
    status: 'Historical Precedent',
    description: 'The first formal bilateral truce facilitated by the Christian Church and eminent Indian statesmen.'
  },
  {
    id: 'peace-2',
    year: '1997 / 2001',
    title: 'Ceasefire Without Territorial Limits',
    parties: ['NSCN Leadership', 'Prime Ministers of India (P.V. Narasimha Rao, I.K. Gujral, Atal Bihari Vajpayee)'],
    principles: ['Talks at the highest Prime-Ministerial level', 'Without pre-conditions', 'In neutral third countries (Bangkok, Amsterdam, Zurich)'],
    status: 'Groundwork for Dialogue',
    description: 'Set the international baseline that negotiations must proceed on unconditional political grounds.'
  },
  {
    id: 'peace-3',
    year: '2009',
    title: 'Covenant of Reconciliation (CoR)',
    parties: ['Forum for Naga Reconciliation (FNR)', 'All Naga National Political Groups', 'Naga Apex Civil Bodies'],
    principles: ['Commitment to non-violence between brothers', 'Forgiveness before God', 'Working for the shared future of all Naga tribes'],
    status: 'Living Moral Charter',
    description: 'Ended internal fratricidal friction and laid the moral foundation for institutional unity.'
  },
  {
    id: 'peace-4',
    year: '2017 – Present',
    title: 'Agreed Position & Inclusive Solution',
    parties: ['GPRN / Working Committee NNPGs', 'Ministry of Home Affairs / Govt of India', 'Tribal Hohos & Naga Civil Society'],
    principles: ['Protection of Article 371(A) sovereignty over land and minerals', 'Naga customary bicameral council representation', 'Economic sovereign packages', 'Pan-Naga cultural and customary hoho'],
    status: 'Final Stage Negotiations',
    description: 'The contemporary blueprint for a permanent, honorable, and constitutional settlement.'
  }
];
