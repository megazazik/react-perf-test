export type Language = 'rus' | 'eng';

let language: Language = 'rus';
export default function lang(): Language { return language; }
export const setLanguage = (lang: Language): void => { language = lang };