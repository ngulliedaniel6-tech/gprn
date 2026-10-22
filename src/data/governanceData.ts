import { GovernmentWing, YehzaboChapter } from '../types';

export const GOVERNMENT_WINGS: GovernmentWing[] = [
  {
    id: 'yaruiwo-presidency',
    title: 'Office of the Yaruiwo (President)',
    nativeTitle: 'Yaruiwo',
    role: 'Head of State & Supreme Commander',
    description: 'The highest executive authority of the Government of the People’s Republic of Nagaland, embodying the sovereign dignity, constitutional sanctity, and unity of all Naga tribes.',
    responsibilities: [
      'Guardian of the Yehzabo (Constitution) and protector of customary tribal rights.',
      'Promulgation of laws passed by the Tatar Hoho.',
      'Accreditation of diplomatic peace delegates and official commissions.',
      'Supreme command of the Naga National Army during defense mobilizations.'
    ],
    symbolism: 'Great Hornbill feather crown, traditional ceremonial spear, and Presidential Seal.'
  },
  {
    id: 'ato-kilonser',
    title: 'Office of the Ato Kilonser (Prime Minister)',
    nativeTitle: 'Ato Kilonser',
    role: 'Head of Government & Cabinet Leader',
    description: 'Leads the Council of Kilonsers (Cabinet), executes governmental policies, directs national administration, and oversees high-level political dialogues.',
    responsibilities: [
      'Chairing the Council of Kilonsers and coordinating ministerial portfolios.',
      'Directing bilateral peace negotiations with the Government of India and foreign bodies.',
      'Supervision of regional administrative commissioners and public welfare measures.',
      'Reporting directly to the Tatar Hoho on state affairs and national resolutions.'
    ],
    symbolism: 'Embroidered chieftain sash, ceremonial Dao, and Cabinet Emblem.'
  },
  {
    id: 'tatar-hoho',
    title: 'The Tatar Hoho (National Parliament)',
    nativeTitle: 'Tatar Hoho',
    role: 'Supreme Legislative Assembly',
    description: 'The unicameral national parliament comprising Tatars (representatives) democratically elected or chosen by consensus from every recognized Naga regional tribal council.',
    responsibilities: [
      'Debating and legislating statutory laws, taxation policies, and constitutional amendments.',
      'Reviewing and ratifying international peace agreements and ceasefires.',
      'Auditing and approving the national annual budget presented by the Chaplee Kilonser.',
      'Forming parliamentary committees on border affairs, environment, and human rights.'
    ],
    symbolism: 'Crossed ceremonial spears, Speaker’s gavel made of native teak, and open scrolls.'
  },
  {
    id: 'ministry-kilo',
    title: 'Ministry of Kilo Affairs (Home)',
    nativeTitle: 'Kilo Kilonser',
    role: 'Internal Governance, Peace & Customary Law',
    description: 'Responsible for domestic tranquility, liaison with village councils (Gaonburas and Chieftains), disaster mitigation, and preservation of customary codes.',
    responsibilities: [
      'Administration of regional commissioners and customary dispute hoho courts.',
      'Maintenance of law, order, and peaceful coexistence among inter-tribal boundaries.',
      'Coordination with civil society groups, tribal hohos, and student bodies.'
    ],
    symbolism: 'Shield of the village gates, signifying protection of ancestral hearths.'
  },
  {
    id: 'ministry-mip',
    title: 'Ministry of Information and Publicity (MIP)',
    nativeTitle: 'MIP Kilonser',
    role: 'Official Spokesmanship & Public Records',
    description: 'The sole authorized organ for issuing official press dispatches, policy communiqués, gazettes, and historical clarifications on behalf of the GPRN.',
    responsibilities: [
      'Dissemination of official statements to national and international press.',
      'Management of the National Archives, commemorative literature, and digital portals.',
      'Media accreditation and countering disinformation against the Naga national cause.'
    ],
    symbolism: 'The traditional Hornbill horn trumpet calling the community to counsel.'
  },
  {
    id: 'ministry-chaplee',
    title: 'Ministry of Chaplee Affairs (Finance & Treasury)',
    nativeTitle: 'Chaplee Kilonser',
    role: 'National Treasury & Economic Sustainability',
    description: 'Manages the national budget, fiscal accounting, agrarian development endowments, and sustainable utilization of ancestral resources.',
    responsibilities: [
      'Formulation of the annual budget submitted to the Tatar Hoho.',
      'Maintaining audited public accounts and anti-corruption compliance.',
      'Funding regional welfare projects, educational stipends, and veteran pensions.'
    ],
    symbolism: 'Granary basket woven with sacred red and black cane patterns.'
  },
  {
    id: 'ministry-rali-wali',
    title: 'Ministry of Rali Wali Affairs (External & Inter-Tribal Relations)',
    nativeTitle: 'Rali Wali Kilonser',
    role: 'Diplomatic & Foreign Relations',
    description: 'Represents the Naga people’s sovereign cause in international diplomatic circles, indigenous forums at the UN, and fraternal ties with neighboring nationalities.',
    responsibilities: [
      'Diplomatic outreach to international indigenous rights organizations.',
      'Documentation of human rights reports and ceasefire monitoring submissions.',
      'Strengthening fraternal cultural bonds with indigenous peoples worldwide.'
    ],
    symbolism: 'Dove with an olive branch resting upon a traditional Naga spear.'
  },
  {
    id: 'ceasefire-monitoring-cell',
    title: 'Ceasefire Monitoring Cell (CFMC)',
    nativeTitle: 'CFMC Secretariat',
    role: 'Truce Preservation & Protocol Enforcement',
    description: 'Liaises directly with the Ceasefire Monitoring Group (CFMG) of the Government of India to maintain peace, prevent armed friction, and guarantee civilian security.',
    responsibilities: [
      'Conducting regular joint inspection meetings with central authorities.',
      'Ensuring strict discipline of cadres within designated peace camps.',
      'Investigating alleged violations and maintaining hotlines for rapid de-escalation.'
    ],
    symbolism: 'White flag of peace intertwined with the Covenant Rainbow.'
  }
];

export const YEHZABO_CHAPTERS: YehzaboChapter[] = [
  {
    id: 'yehzabo-preamble',
    chapterNumber: 'Preamble',
    title: 'Solemn Dedication & Sovereign Preamble',
    description: 'The spiritual and moral bedrock of the Naga Constitution, establishing God as the supreme protector of the nation.',
    articles: [
      {
        articleNo: 'Preamble Clause',
        title: 'Dedication to Almighty God',
        text: 'WE, THE PEOPLE OF NAGALAND, having solemnly resolved to constitute our ancestral homeland into a Free and Sovereign Democratic Republic under the benevolent grace of Almighty God, and in faithful adherence to our motto "NAGALAND FOR CHRIST";',
        commentary: 'Adopted at the historic National Assembly, recognizing that spiritual faith and ethical governance are indivisible.'
      },
      {
        articleNo: 'Preamble Goal',
        title: 'Justice, Customary Liberty & Brotherhood',
        text: 'Do hereby ordain this Yehzabo to secure unto all citizens: JUSTICE, social, economic, and moral; LIBERTY of customary belief, worship, and speech; EQUALITY of tribal standing; and FRATERNITY assuring the sacred dignity of each village and tribe.',
        commentary: 'Enshrines egalitarian democracy characteristic of traditional Naga village republics.'
      }
    ]
  },
  {
    id: 'yehzabo-ch1',
    chapterNumber: 'Chapter I',
    title: 'The Nation, Territory & National Symbols',
    description: 'Defines the territorial sovereignty, ancestral boundaries, and official insignia of the Republic.',
    articles: [
      {
        articleNo: 'Article 1',
        title: 'Name and Form of Government',
        text: 'The territory shall be known as the People’s Republic of Nagaland (GPRN). It is an independent democratic republic founded upon customary self-governance and Christian ethics.',
        commentary: 'Affirms historical continuity from ancient time immemorial.'
      },
      {
        articleNo: 'Article 2',
        title: 'National Flag and Emblem',
        text: 'The National Flag shall consist of a sky blue field, featuring the Covenant Rainbow (Red, Gold, Green) springing across the canvas, and a six-pointed white Star of Bethlehem in the canton. The National Emblem shall feature the sacred Mithun, crossed spears, Dao, open Bible, and Hornbill crest.',
        commentary: 'The symbols represent covenant peace, courage, spiritual light, and ancestral fortitude.'
      },
      {
        articleNo: 'Article 3',
        title: 'Inalienability of Land and Resources',
        text: 'The soil, sub-soil, minerals, forests, rivers, and ancestral lands of Nagaland belong permanently to the Naga people and shall never be alienated, mortgaged, or transferred to any foreign or non-indigenous entity.',
        commentary: 'Precursor and spiritual counterpart to Article 371(A) protections.'
      }
    ]
  },
  {
    id: 'yehzabo-ch2',
    chapterNumber: 'Chapter II',
    title: 'Fundamental Rights & Customary Duties',
    description: 'Protects the natural liberties of individuals and communities while codifying communal duties.',
    articles: [
      {
        articleNo: 'Article 8',
        title: 'Right to Customary Self-Determination',
        text: 'Every Naga citizen and village council shall enjoy the inviolable right to manage their internal affairs, village lands, forests, and dispute resolution according to their ancestral unwritten customary laws.',
        commentary: 'Guarantees the autonomy of village republics (Khel and Morung councils).'
      },
      {
        articleNo: 'Article 12',
        title: 'Freedom of Conscience & Worship',
        text: 'Freedom of conscience and the right freely to profess, practice, and propagate faith are guaranteed to all, with the state recognizing Christian moral charity as its guiding ethos.',
        commentary: 'Protects moral character and freedom of worship.'
      },
      {
        articleNo: 'Article 15',
        title: 'Sacred Duty to Defend Homeland',
        text: 'It is the sacred duty of every citizen to honor the martyrs of the national struggle, safeguard communal harmony, and defend the soil and dignity of the nation.',
        commentary: 'Emphasizes community solidarity over selfish ambition.'
      }
    ]
  },
  {
    id: 'yehzabo-ch3',
    chapterNumber: 'Chapter III',
    title: 'The Tatar Hoho & Legislative Supremacy',
    description: 'Establishes the composition, authority, and procedural rules of the National Parliament.',
    articles: [
      {
        articleNo: 'Article 24',
        title: 'Composition of the Tatar Hoho',
        text: 'The Tatar Hoho consists of Tatars elected or designated through democratic tribal consensus by the respective Regional Councils. Every recognized tribe shall have equitable representation.',
        commentary: 'Prevents domination by populous tribes; guarantees equal dignity for every minority tribe.'
      },
      {
        articleNo: 'Article 30',
        title: 'Enactment of Laws and Treaties',
        text: 'No treaty, peace covenant, or territorial agreement with any foreign power shall be binding upon the nation unless debated and ratified by a two-thirds majority of the Tatar Hoho.',
        commentary: 'Ensures that national destiny can never be compromised by executive decree alone.'
      }
    ]
  }
];
