interface Event {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD format
  startTime: string; // HH:MM format (24-hour)
  endTime?: string; // HH:MM format (24-hour)
  venue: {
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode?: string;
    website?: string;
    phone?: string;
  };
  eventType: 'bar' | 'brewery' | 'restaurant' | 'wedding' | 'private-party' | 'corporate' | 'festival' | 'winery';
  coverCharge: string; // Free, $10, $15-20, etc.
  ageRestriction?: string; // 21+, 18+, All Ages
  capacity?: number;
  description?: string;
  specialNotes?: string;
  musicStyle: string; // Acoustic rock, country covers, dinner music, etc.
  bookingContact?: {
    name: string;
    email?: string;
    phone?: string;
  };
  status: 'confirmed' | 'tentative' | 'cancelled';
  ticketUrl?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
  };
}

export const events: Event[] = [
  {
    id: '2026-001',
    title: 'Friday Night Acoustic',
    date: '2026-01-10',
    startTime: '20:00',
    endTime: '23:00',
    venue: {
      name: 'The Rusty Anchor',
      address: '123 Main Street',
      city: 'Rehoboth Beach',
      state: 'DE',
      zipCode: '19971',
      phone: '(302) 555-0123'
    },
    eventType: 'bar',
    coverCharge: '$10',
    ageRestriction: '21+',
    capacity: 120,
    description: 'Classic rock and country covers in intimate beachside setting',
    musicStyle: 'Classic rock, country covers',
    status: 'confirmed'
  },
  {
    id: '2026-002',
    title: 'Wedding Reception Entertainment',
    date: '2026-01-25',
    startTime: '18:00',
    endTime: '22:00',
    venue: {
      name: 'Historic Chesapeake Manor',
      address: '456 Waterfront Drive',
      city: 'Annapolis',
      state: 'MD',
      zipCode: '21401'
    },
    eventType: 'wedding',
    coverCharge: 'Private Event',
    ageRestriction: 'All Ages',
    capacity: 150,
    description: 'Cocktail hour and reception music for Sarah & Mike\'s wedding',
    specialNotes: 'First dance: "At Last" - Acoustic arrangement',
    musicStyle: 'Dinner music, romantic ballads, singalongs',
    status: 'confirmed'
  },
  {
    id: '2026-003',
    title: 'Saturday Night Sessions',
    date: '2026-02-08',
    startTime: '21:00',
    endTime: '24:00',
    venue: {
      name: 'Dogfish Head Brewings & Eats',
      address: '320 Rehoboth Avenue',
      city: 'Rehoboth Beach',
      state: 'DE',
      zipCode: '19971',
      website: 'dogfish.com'
    },
    eventType: 'brewery',
    coverCharge: 'Free',
    ageRestriction: '21+',
    capacity: 200,
    description: 'High-energy acoustic rock with craft beer pairings',
    musicStyle: '90s/2000s hits, crowd singalongs',
    status: 'confirmed'
  },
  {
    id: '2026-004',
    title: 'Corporate Happy Hour',
    date: '2026-02-14',
    startTime: '17:00',
    endTime: '20:00',
    venue: {
      name: 'The Westin Philadelphia',
      address: '99 South 17th Street',
      city: 'Philadelphia',
      state: 'PA',
      zipCode: '19103'
    },
    eventType: 'corporate',
    coverCharge: 'Private Event',
    ageRestriction: '21+',
    capacity: 100,
    description: 'Valentine\'s Day themed corporate mixer',
    musicStyle: 'Easy listening, dinner music',
    status: 'confirmed'
  },
  {
    id: '2026-005',
    title: 'Irish Pub Session',
    date: '2026-03-15',
    startTime: '19:00',
    endTime: '22:00',
    venue: {
      name: 'O\'Malley\'s Irish Pub',
      address: '789 Market Street',
      city: 'Wilmington',
      state: 'DE',
      zipCode: '19801',
      phone: '(302) 555-0567'
    },
    eventType: 'bar',
    coverCharge: '$8',
    ageRestriction: '21+',
    capacity: 80,
    description: 'St. Patrick\'s Day celebration with Irish favorites',
    specialNotes: 'Special Celtic arrangements, fiddle featured',
    musicStyle: 'Folk, Celtic, traditional Irish',
    status: 'confirmed'
  },
  {
    id: '2026-006',
    title: 'Spring Brewery Festival',
    date: '2026-03-28',
    startTime: '14:00',
    endTime: '18:00',
    venue: {
      name: 'Heavy Seas Beer Garden',
      address: '4615 Hollins Ferry Road',
      city: 'Baltimore',
      state: 'MD',
      zipCode: '21227'
    },
    eventType: 'brewery',
    coverCharge: '$15 (includes beer tastings)',
    ageRestriction: '21+',
    capacity: 300,
    description: 'Outdoor spring festival with beer gardens',
    musicStyle: 'Upbeat covers, crowd favorites',
    status: 'confirmed'
  },
  {
    id: '2026-007',
    title: '50th Anniversary Celebration',
    date: '2026-04-12',
    startTime: '19:00',
    endTime: '23:00',
    venue: {
      name: 'Country Club of Delaware',
      address: '1001 Harvey Road',
      city: 'Newark',
      state: 'DE',
      zipCode: '19711'
    },
    eventType: 'private-party',
    coverCharge: 'Private Event',
    ageRestriction: 'All Ages',
    capacity: 120,
    description: 'Golden anniversary celebration for the Johnson family',
    specialNotes: 'Mix of 70s classics and family favorites',
    musicStyle: 'Classic rock, country, family-friendly',
    status: 'confirmed'
  },
  {
    id: '2026-008',
    title: 'Wine & Music Night',
    date: '2026-04-25',
    startTime: '18:00',
    endTime: '21:00',
    venue: {
      name: 'Chateau Bu-De Winery',
      address: '2755 Hebron Avenue',
      city: 'Salisbury',
      state: 'MD',
      zipCode: '21801'
    },
    eventType: 'winery',
    coverCharge: '$20 (includes wine tasting)',
    ageRestriction: '21+',
    capacity: 60,
    description: 'Intimate acoustic evening among the vines',
    musicStyle: 'Soft rock, acoustic ballads, dinner music',
    status: 'confirmed'
  },
  {
    id: '2026-009',
    title: 'Memorial Day Weekend Kickoff',
    date: '2026-05-23',
    startTime: '20:00',
    endTime: '23:30',
    venue: {
      name: 'The Barefoot Bar',
      address: '108 2nd Street',
      city: 'Ocean City',
      state: 'MD',
      zipCode: '21842'
    },
    eventType: 'bar',
    coverCharge: '$12',
    ageRestriction: '21+',
    capacity: 150,
    description: 'Beach bar summer season opener',
    specialNotes: 'Outdoor stage, ocean view',
    musicStyle: 'Summer hits, beach music, party anthems',
    status: 'confirmed'
  },
  {
    id: '2026-010',
    title: 'Garden Wedding Ceremony',
    date: '2026-06-07',
    startTime: '16:30',
    endTime: '21:00',
    venue: {
      name: 'Longwood Gardens',
      address: '1001 Longwood Road',
      city: 'Kennett Square',
      state: 'PA',
      zipCode: '19348'
    },
    eventType: 'wedding',
    coverCharge: 'Private Event',
    ageRestriction: 'All Ages',
    capacity: 100,
    description: 'Garden ceremony and cocktail reception',
    specialNotes: 'Processional, ceremony music, cocktail hour',
    musicStyle: 'Classical, acoustic ballads, jazz standards',
    status: 'confirmed'
  },
  {
    id: '2026-011',
    title: 'Summer Solstice Concert',
    date: '2026-06-20',
    startTime: '19:00',
    endTime: '22:00',
    venue: {
      name: 'Flying Fish Brewing Company',
      address: '900 Business Avenue',
      city: 'Cherry Hill',
      state: 'NJ',
      zipCode: '08002'
    },
    eventType: 'brewery',
    coverCharge: 'Free',
    ageRestriction: '21+',
    capacity: 180,
    description: 'Longest day celebration with craft brews',
    musicStyle: 'Folk rock, acoustic originals, summer classics',
    status: 'confirmed'
  },
  {
    id: '2026-012',
    title: 'Independence Day Celebration',
    date: '2026-07-04',
    startTime: '18:00',
    endTime: '22:00',
    venue: {
      name: 'Cape Henlopen State Park',
      address: '42 Cape Henlopen Drive',
      city: 'Lewes',
      state: 'DE',
      zipCode: '19958'
    },
    eventType: 'festival',
    coverCharge: '$5 park entrance',
    ageRestriction: 'All Ages',
    capacity: 500,
    description: 'Outdoor July 4th celebration with fireworks',
    specialNotes: 'Patriotic songs, family-friendly set',
    musicStyle: 'Americana, country, patriotic classics',
    status: 'confirmed'
  },
  {
    id: '2026-013',
    title: 'Rooftop Summer Series',
    date: '2026-07-18',
    startTime: '20:00',
    endTime: '23:00',
    venue: {
      name: 'The Graduate Philadelphia',
      address: '4200 Chestnut Street',
      city: 'Philadelphia',
      state: 'PA',
      zipCode: '19104'
    },
    eventType: 'bar',
    coverCharge: '$15',
    ageRestriction: '21+',
    capacity: 120,
    description: 'City skyline views with acoustic entertainment',
    musicStyle: 'Urban acoustic, modern covers',
    status: 'confirmed'
  },
  {
    id: '2026-014',
    title: 'Crab Feast & Music',
    date: '2026-08-02',
    startTime: '17:00',
    endTime: '21:00',
    venue: {
      name: 'Thames Street Oyster House',
      address: '1728 Thames Street',
      city: 'Baltimore',
      state: 'MD',
      zipCode: '21231'
    },
    eventType: 'restaurant',
    coverCharge: 'Free with dinner',
    ageRestriction: 'All Ages',
    capacity: 90,
    description: 'Maryland crab feast with waterfront dining',
    musicStyle: 'Bay area classics, seafaring songs',
    status: 'confirmed'
  },
  {
    id: '2026-015',
    title: 'Corporate Retreat Entertainment',
    date: '2026-08-15',
    startTime: '19:00',
    endTime: '22:00',
    venue: {
      name: 'The Greenbrier Resort',
      address: '300 W Main Street',
      city: 'White Sulphur Springs',
      state: 'WV',
      zipCode: '24986'
    },
    eventType: 'corporate',
    coverCharge: 'Private Event',
    ageRestriction: '18+',
    capacity: 200,
    description: 'Executive retreat networking event',
    musicStyle: 'Background jazz, light rock',
    status: 'tentative'
  },
  {
    id: '2026-016',
    title: 'Late Summer Harvest Festival',
    date: '2026-09-05',
    startTime: '15:00',
    endTime: '19:00',
    venue: {
      name: 'Harvest Ridge Winery',
      address: '13294 Harpers Ferry Road',
      city: 'Markeys',
      state: 'WV',
      zipCode: '25425'
    },
    eventType: 'winery',
    coverCharge: '$25 (includes tastings)',
    ageRestriction: '21+',
    capacity: 80,
    description: 'Harvest celebration in the vineyard',
    specialNotes: 'Outdoor stage, mountain views',
    musicStyle: 'Folk, country, harvest-themed songs',
    status: 'confirmed'
  },
  {
    id: '2026-017',
    title: 'Oktoberfest Celebration',
    date: '2026-09-26',
    startTime: '18:00',
    endTime: '22:00',
    venue: {
      name: 'Yards Brewing Company',
      address: '901 N Delaware Avenue',
      city: 'Philadelphia',
      state: 'PA',
      zipCode: '19123'
    },
    eventType: 'brewery',
    coverCharge: '$12',
    ageRestriction: '21+',
    capacity: 250,
    description: 'Traditional Oktoberfest with German beer',
    specialNotes: 'Some German folk songs, polka arrangements',
    musicStyle: 'Folk rock, German classics, beer hall favorites',
    status: 'confirmed'
  },
  {
    id: '2026-018',
    title: 'Autumn Wedding Reception',
    date: '2026-10-11',
    startTime: '17:00',
    endTime: '22:00',
    venue: {
      name: 'The Mansion at Judges Hill',
      address: '1900 Rio Grande Street',
      city: 'West Chester',
      state: 'PA',
      zipCode: '19380'
    },
    eventType: 'wedding',
    coverCharge: 'Private Event',
    ageRestriction: 'All Ages',
    capacity: 120,
    description: 'Fall foliage wedding with mansion backdrop',
    specialNotes: 'Autumn-themed playlist, acoustic arrangements',
    musicStyle: 'Romantic ballads, acoustic rock, family favorites',
    status: 'confirmed'
  },
  {
    id: '2026-019',
    title: 'Halloween Spooktacular',
    date: '2026-10-31',
    startTime: '21:00',
    endTime: '24:00',
    venue: {
      name: 'The Dead Presidents Pub',
      address: '618 N Union Street',
      city: 'Wilmington',
      state: 'DE',
      zipCode: '19805'
    },
    eventType: 'bar',
    coverCharge: '$10 (costume contest prizes)',
    ageRestriction: '21+',
    capacity: 100,
    description: 'Halloween costume party with themed music',
    specialNotes: 'Rock covers with spooky twist',
    musicStyle: 'Classic rock, Halloween-themed songs',
    status: 'confirmed'
  },
  {
    id: '2026-020',
    title: 'Veterans Day Tribute',
    date: '2026-11-11',
    startTime: '19:00',
    endTime: '22:00',
    venue: {
      name: 'American Legion Post 28',
      address: '2508 W 4th Street',
      city: 'Wilmington',
      state: 'DE',
      zipCode: '19805'
    },
    eventType: 'bar',
    coverCharge: 'Free for veterans, $5 general',
    ageRestriction: 'All Ages',
    capacity: 150,
    description: 'Honoring our veterans with patriotic music',
    specialNotes: 'Military tribute songs, patriotic classics',
    musicStyle: 'Country, patriotic, military tributes',
    status: 'confirmed'
  },
  {
    id: '2026-021',
    title: 'Thanksgiving Eve Bash',
    date: '2026-11-25',
    startTime: '20:00',
    endTime: '23:30',
    venue: {
      name: 'Greene Turtle Sports Bar',
      address: '1346 Coastal Highway',
      city: 'Dewey Beach',
      state: 'DE',
      zipCode: '19971'
    },
    eventType: 'bar',
    coverCharge: '$8',
    ageRestriction: '21+',
    capacity: 200,
    description: 'Traditional biggest party night of the year',
    specialNotes: 'High-energy crowd favorites',
    musicStyle: 'Party anthems, sing-alongs, dance-acoustic',
    status: 'confirmed'
  },
  {
    id: '2026-022',
    title: 'Holiday Corporate Party',
    date: '2026-12-05',
    startTime: '18:00',
    endTime: '22:00',
    venue: {
      name: 'Hotel DuPont',
      address: '11th & Market Streets',
      city: 'Wilmington',
      state: 'DE',
      zipCode: '19801'
    },
    eventType: 'corporate',
    coverCharge: 'Private Event',
    ageRestriction: '18+',
    capacity: 180,
    description: 'Elegant holiday celebration in historic ballroom',
    specialNotes: 'Holiday classics, jazz standards',
    musicStyle: 'Holiday music, jazz, easy listening',
    status: 'confirmed'
  },
  {
    id: '2026-023',
    title: 'Christmas Tree Farm Concert',
    date: '2026-12-14',
    startTime: '15:00',
    endTime: '18:00',
    venue: {
      name: 'Bennett\'s Christmas Tree Farm',
      address: '9812 Augusta Road',
      city: 'Cordova',
      state: 'MD',
      zipCode: '21625'
    },
    eventType: 'festival',
    coverCharge: 'Free with tree purchase',
    ageRestriction: 'All Ages',
    capacity: 100,
    description: 'Family Christmas tree selection with live music',
    specialNotes: 'Acoustic Christmas carols, hot cocoa served',
    musicStyle: 'Christmas carols, winter classics, family songs',
    status: 'confirmed'
  },
  {
    id: '2026-024',
    title: 'New Year\'s Eve Celebration',
    date: '2026-12-31',
    startTime: '21:00',
    endTime: '01:00',
    venue: {
      name: 'The Queen Theater',
      address: '500 N Market Street',
      city: 'Wilmington',
      state: 'DE',
      zipCode: '19801'
    },
    eventType: 'bar',
    coverCharge: '$25 (includes champagne toast)',
    ageRestriction: '21+',
    capacity: 300,
    description: 'Historic theater NYE party with midnight countdown',
    specialNotes: 'Special midnight performance, party favorites',
    musicStyle: 'Party classics, countdown songs, celebration music',
    status: 'confirmed'
  },
  {
    id: '2026-025',
    title: 'Wine Pairing Dinner',
    date: '2026-02-22',
    startTime: '19:00',
    endTime: '22:00',
    venue: {
      name: 'Iron Hill Brewery & Restaurant',
      address: '147 E Main Street',
      city: 'Newark',
      state: 'DE',
      zipCode: '19711'
    },
    eventType: 'restaurant',
    coverCharge: 'Free with dinner reservation',
    ageRestriction: '21+',
    capacity: 60,
    description: 'Five-course wine pairing with acoustic ambiance',
    musicStyle: 'Soft jazz, dinner music, wine country classics',
    status: 'confirmed'
  },
  {
    id: '2026-026',
    title: 'Spring Wedding Showcase',
    date: '2026-04-05',
    startTime: '14:00',
    endTime: '17:00',
    venue: {
      name: 'Winterthur Museum & Gardens',
      address: '5105 Kennett Pike',
      city: 'Winterthur',
      state: 'DE',
      zipCode: '19735'
    },
    eventType: 'wedding',
    coverCharge: 'Free admission',
    ageRestriction: 'All Ages',
    capacity: 200,
    description: 'Bridal showcase in historic mansion gardens',
    specialNotes: 'Wedding music demonstrations, acoustic ceremony samples',
    musicStyle: 'Wedding classics, romantic ballads, ceremony music',
    status: 'confirmed'
  },
  {
    id: '2026-027',
    title: 'Father\'s Day BBQ & Blues',
    date: '2026-06-21',
    startTime: '16:00',
    endTime: '20:00',
    venue: {
      name: 'Big Oyster Brewery',
      address: '35841 Lighthouse Road',
      city: 'Rehoboth Beach',
      state: 'DE',
      zipCode: '19971'
    },
    eventType: 'brewery',
    coverCharge: 'Free',
    ageRestriction: 'All Ages until 8pm',
    capacity: 150,
    description: 'Father\'s Day celebration with BBQ and brews',
    specialNotes: 'Family-friendly until 8pm, blues-rock focus',
    musicStyle: 'Blues rock, dad rock classics, BBQ music',
    status: 'confirmed'
  },
  {
    id: '2026-028',
    title: 'Summer Sunset Series',
    date: '2026-08-29',
    startTime: '18:30',
    endTime: '21:30',
    venue: {
      name: 'Sunset Grille',
      address: '2487 Pulaski Highway',
      city: 'North East',
      state: 'MD',
      zipCode: '21901'
    },
    eventType: 'restaurant',
    coverCharge: 'Free',
    ageRestriction: 'All Ages',
    capacity: 80,
    description: 'Waterfront dining with sunset acoustic music',
    specialNotes: 'Chesapeake Bay views, outdoor patio setting',
    musicStyle: 'Soft rock, sunset classics, bay area favorites',
    status: 'confirmed'
  },
  {
    id: '2026-029',
    title: 'Grape Harvest Celebration',
    date: '2026-09-19',
    startTime: '13:00',
    endTime: '17:00',
    venue: {
      name: 'Nassau Valley Vineyards',
      address: '32165 Winery Way',
      city: 'Lewes',
      state: 'DE',
      zipCode: '19958'
    },
    eventType: 'winery',
    coverCharge: '$15 (includes tastings)',
    ageRestriction: '21+',
    capacity: 120,
    description: 'Harvest season celebration among the vines',
    specialNotes: 'Vineyard tours, grape stomping, wine education',
    musicStyle: 'Folk, acoustic rock, harvest-themed music',
    status: 'confirmed'
  },
  {
    id: '2026-030',
    title: 'Holiday Market Concert',
    date: '2026-12-20',
    startTime: '16:00',
    endTime: '19:00',
    venue: {
      name: 'Christiana Mall Center Court',
      address: '132 Christiana Mall',
      city: 'Newark',
      state: 'DE',
      zipCode: '19702'
    },
    eventType: 'festival',
    coverCharge: 'Free',
    ageRestriction: 'All Ages',
    capacity: 300,
    description: 'Holiday shopping entertainment in mall center',
    specialNotes: 'Family-friendly holiday classics, shopping atmosphere',
    musicStyle: 'Christmas carols, holiday classics, family favorites',
    status: 'confirmed'
  }
];

export default events;
