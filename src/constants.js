export const VIEWPORT_WIDTH = 960;
export const VIEWPORT_HEIGHT = 540;
export const WORLD_WIDTH = 3500;
export const TILE_SIZE = 32;
export const GRAVITY = 0.8;
export const MOVE_SPEED = 4;
export const JUMP_SPEED = -14;

// Sorted ascending by date of joining
export const CAREER_BANNERS = [
  { x: 380,  company: 'Infosys', doj: 'Feb 2017',   dos: 'Dec 2018',   designation: 'Software Engineer / Frontend Developer', location: 'Bangalore, IN' },
  { x: 780,  company: 'Zycus Infotech', doj: 'Dec 2018',   dos: 'Jan 2020',   designation: 'Lead UI Developer', location: 'Bangalore, IN' },
  { x: 1180, company: 'Azuga Telematics', doj: 'March 2020', dos: 'July 2020',  designation: 'UI Developer', location: 'Bangalore, IN' },
  { x: 1880, company: 'NeoSOFT Technologies', doj: 'Jan 2022',   dos: 'Feb 2023',   designation: 'UI Developer / Microfrontend Developer', location: 'Work from Home' },
  { x: 2280, company: 'Dynamisch IT',      doj: 'Aug 2023',   dos: 'Sept 2025',  designation: 'Senior UI / Full Stack Developer', location: 'Pune, IN' },
  { x: 2680, company: 'Yash Technologies', doj: 'Sept 2025',  dos: 'Present',    designation: 'Full Stack Lead', location: 'Pune, IN' },
];

export const BACKGROUND_CLOUDS = [
  { x: 80,   y: 38, img: 'clouds-1.png' },
  { x: 380,  y: 60, img: 'clouds-3.png' },
  { x: 680,  y: 30, img: 'clouds-1.png' },
  { x: 940,  y: 75, img: 'clouds-3.png' },
  { x: 1200, y: 44, img: 'clouds-1.png' },
  { x: 1510, y: 62, img: 'clouds-3.png' },
  { x: 1770, y: 35, img: 'clouds-1.png' },
  { x: 2080, y: 70, img: 'clouds-3.png' },
  { x: 2350, y: 48, img: 'clouds-1.png' },
  { x: 2650, y: 65, img: 'clouds-3.png' },
  { x: 2950, y: 40, img: 'clouds-1.png' },
  { x: 3250, y: 55, img: 'clouds-3.png' },
];

// Alternating bush-1 / bush-2 spread pseudo-randomly across the world
export const BUSHES = [
  { x: 96,   img: 'bush.png'   },
  { x: 320,  img: 'bush-2.png' },
  { x: 540,  img: 'bush.png'   },
  { x: 780,  img: 'bush-2.png' },
  { x: 960,  img: 'bush.png'   },
  { x: 1180, img: 'bush-2.png' },
  { x: 1430, img: 'bush.png'   },
  { x: 1640, img: 'bush-2.png' },
  { x: 1850, img: 'bush.png'   },
  { x: 2060, img: 'bush-2.png' },
  { x: 2290, img: 'bush.png'   },
  { x: 2500, img: 'bush-2.png' },
  { x: 2730, img: 'bush.png'   },
  { x: 2960, img: 'bush-2.png' },
  { x: 3100, img: 'bush.png'   },
];

// Ground tilemap: 2 rows × GROUND_COLS columns. 1 = solid tile.
export const GROUND_ROWS = 2;
export const GROUND_COLS = Math.ceil(WORLD_WIDTH / TILE_SIZE);
export const GROUND_MAP = [
  Array(GROUND_COLS).fill(1), // row 0 – visual top layer
  Array(GROUND_COLS).fill(1), // row 1 – visual bottom layer
];

// Client images positioned near career billboards (NeoSOFT, Dynamisch IT, Yash Technologies)
export const CLIENT_IMAGES = [
  { x: 1830, img: 'client-1.jpg' },
  { x: 2200, img: 'client-3.jpg' },
  { x: 2400, img: 'client-4.jpg' },
  { x: 2550, img: 'client-5.jpg' },
  { x: 2800, img: 'client-2.jpg' },
];

// Goombas between career boards (initial spawn positions)
export const GOOMBAS_CONFIG = [
  { x: 1750, y: 0, vx: -2 }, // Between Azuga and NeoSOFT, moving left towards player
];

export const AZUGA_X = 1180; // Azuga Telematics billboard x position

export const LOCKDOWN_BILLBOARD_X = 1530; // Lockdown warning billboard between Azuga and NeoSOFT

export const HOME_X = WORLD_WIDTH - 300;
