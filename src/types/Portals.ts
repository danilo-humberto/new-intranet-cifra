export interface Portals {
  _id?: string;
  name: string;
  responsible: string;
  description: string;
  shortDescription: string;
  image: string;
  details: {
    url?: string;
    baseLink?: string;
    updateSchedule?: string;
    nameForm?: string;
    emailResponsible?: string;
  }[];
}
