export type NavTab = 
  | 'home' 
  | 'press' 
  | 'governance' 
  | 'yehzabo' 
  | 'history' 
  | 'documents' 
  | 'peace' 
  | 'tribes' 
  | 'map'
  | 'memorial'
  | 'customary'
  | 'anthem'
  | 'glossary'
  | 'certificate'
  | 'quiz'
  | 'calendar'
  | 'comparative'
  | 'services';

export interface ObservanceDay {
  id: string;
  dateStr: string;
  month: number; // 1-12
  day: number;
  title: string;
  category: 'National Day' | 'Historical Milestone' | 'Tribal Festival' | 'Peace Observance';
  originYear: number;
  significance: string;
  protocolInstruction: string;
}

export interface AccordComparisonItem {
  id: string;
  title: string;
  year: number;
  signatories: string[];
  politicalStatus: string;
  landAndMinerals: string;
  customaryLaw: string;
  governanceCompact: string;
  keyStrength: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  languageOrTribe: string;
  category: 'Governance' | 'Customary Law' | 'Culture & Attire' | 'Civic Expression';
  literalMeaning: string;
  detailedDefinition: string;
  contextUsage: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  historicalReference: string;
}

export interface RegionalTerritory {
  id: string;
  name: string;
  traditionalTribe: string;
  headquarters: string;
  geographicalFeatures: string[];
  prominentLandmarks: string[];
  customaryCouncil: string;
  historicalSignificance: string;
  coordinates: { x: number; y: number }; // SVG map point
}

export interface MemorialFigure {
  id: string;
  name: string;
  role: string;
  era: string;
  contribution: string;
  historicQuote?: string;
  category: 'Pioneers (1918-1929)' | 'Leaders (1947-1956)' | 'Peacemakers' | 'Martyrs of Freedom';
}

export interface CustomaryCase {
  id: string;
  title: string;
  tribeTradition: string;
  subject: 'Land & Terrace Rights' | 'Forest Stewardship' | 'Clan Covenant' | 'Restorative Justice';
  scenario: string;
  traditionalJurisprudence: string;
  customaryResolution: string;
  significance: string;
}

export interface HistoricalEvent {
  id: string;
  year: number;
  dateStr: string;
  title: string;
  category: 'Foundational' | 'Political' | 'Constitutional' | 'Peace Accord' | 'Social Unity';
  summary: string;
  details: string[];
  historicDocumentExcerpt?: string;
  significance: string;
  location: string;
}

export interface DocumentArchive {
  id: string;
  title: string;
  date: string;
  category: 'Treaty / Memorandum' | 'Declaration' | 'Constitution' | 'Peace Framework' | 'Plebiscite';
  signatories: string[];
  historicalContext: string;
  fullText: string;
  downloadFilename: string;
  tags: string[];
}

export interface PressRelease {
  id: string;
  dispatchNo: string;
  date: string;
  title: string;
  category: 'MIP Statement' | 'National Assembly' | 'Peace Dialogue' | 'Presidential Address' | 'Public Notification';
  summary: string;
  content: string[];
  issuedBy: string;
  isImportant?: boolean;
}

export interface GovernmentWing {
  id: string;
  title: string;
  nativeTitle: string;
  role: string;
  description: string;
  responsibilities: string[];
  symbolism: string;
}

export interface YehzaboChapter {
  id: string;
  chapterNumber: string;
  title: string;
  description: string;
  articles: {
    articleNo: string;
    title: string;
    text: string;
    commentary?: string;
  }[];
}

export interface TribeProfile {
  id: string;
  name: string;
  traditionalRegion: string;
  majorFestival: string;
  festivalMonth: string;
  traditionalShawl: string;
  culturalHighlights: string[];
  customaryLawNote: string;
}

export interface PeaceMilestone {
  id: string;
  year: string;
  title: string;
  parties: string[];
  principles: string[];
  status: string;
  description: string;
}
