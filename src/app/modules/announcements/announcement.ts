export interface Announcement {
  _id?: number;
  userid?: string;
  title?: string;
  price?: string;
  surface?: string;
  pricePerM?: string;
  numberOfRooms?: number;
  address?: Address;
  announcementsCategories?: AnnouncementsCategories;
  announcementType?: AnnouncementType;
  multimedia?: string;
  description?: string;
  floor?: number;
}
export interface Address {
  street?: string;
  houseNumber?: number;
  postCode?: string;
  city?: string;
}
export enum AnnouncementsCategories {
  Mieszkania = 0,
  Domy = 1,
  'Działki' = 2,
  'Garaże' = 3,
}
export enum AnnouncementType {
  Sprzedam = 0,
  Wynajmę = 1,
}
export enum Market {
  Wtóryny,
  Pierwotny,
}
