// True constants
export const TILE_SIZE = 100;

// Window-dependent constants (calculated at runtime)
export const calculateCourageConstants = () => ({
  WORLD_WIDTH: window.innerWidth * 3,
  GRASS_TILE_COUNT: Math.ceil((window.innerWidth * 3) / TILE_SIZE) + 1,
  MURIAL_X: window.innerWidth - 130,
  HOME_X: window.innerWidth - 130 - 300,
  SOIL_X: window.innerWidth * 1.2,
});

// Assets preload lists
export const COURAGE_IMAGE_ASSETS = [
  'intro.png', 'clouds.png', 'grass.png', 'windmill.png',
  'courage-home.png', 'soil.webp', 'running-spider.gif', 'king-ramses.gif',
  'bat.gif', 'slab.png', 'murial.png', 'wind.gif', 'murielcourage.webp',
  'courage-game-over.jfif', 'courage-running.gif', 'courage-walking.gif', 'courage-standing.gif',
];

export const COURAGE_AUDIO_ASSETS = [
  'courage-theme.mp3', 'courage_scream.mp3', 'wind.mp3',
  'boss_defeated.mp3', 'suspense.mp3', 'thunder.mp3', 'patthar_lauta_do.mp3',
];

// Animation timings (ms)
export const TIMINGS = {
  WIND_GUST_DELAY: 140,
  WIND_GUST_MIN_DURATION: 3000,
  WIND_GUST_MAX_DURATION_OFFSET: 1500,
  SHOW_THOUGHT_DELAY: 3000,
  HIDE_THOUGHT_DELAY: 3000,
  SPIDER_SPEED: 7,
  CINEMATIC_DURATION: 3000,
  SURVIVE_TEXT_DURATION: 5000,
  BAT_SPAWN_INTERVAL: 3000,
  BAT_SPAWN_DELAY: 2000,
  AUDIO_SWAP_DELAY: 2000,
  BOSS_DEFEATED_FADE_DURATION: 3000,
  BOSS_DEFEATED_TEXT_DURATION: 3000,
  SCREAM_DURATION: 1500,
  MUSIC_RESUME_DELAY: 1500,
};

// Health values
export const HEALTH = {
  KING_RAMSES_MAX: 100,
  BAT_DAMAGE: 25,
};

// Collision ranges (px)
export const COLLISION_RANGES = {
  MURIEL_TEXT: 80,
  SOIL_CALLOUT: 80,
  SOIL_INTERACT: 80,
  KING_RAMSES: 200,
  BAT_PROXIMITY: { horizontal: 60, vertical: 40 },
};

// Movement speeds (px/frame)
export const SPEEDS = {
  MOVE: 3,
  RUN: 5,
  CINEMATIC_WALK: 4,
  SPIDER: 7,
};

// Audio volumes
export const VOLUMES = {
  MUSIC: 0.35,
  MUSIC_LOWERED: 0.1,
  SCREAM: 0.7,
  WIND: 0.5,
  BOSS_DEFEATED: 0.8,
  SUSPENSE: 0.6,
  THUNDER: 0.75,
  PATTHAR: 0.7,
};

// UI text strings
export const UI_TEXT = {
  ROTATE_PORTRAIT: '🔄 Rotate for better experience',
  START_PROMPT: 'Press [Enter] to start',
  CONTROLS_KB: '[W][A][S][D] or Arrow Keys to move. [Shift] to run',
  SOIL_CALLOUT: "Huh! What's this?",
  SOIL_CALLOUT_MOBILE: '✋',
  SOIL_CALLOUT_KEYBOARD: 'Press [F]',
  SUSPENSE_MESSAGE: 'Press [Shift] + D/→ to run',
  SURVIVE: 'Survive',
  RETURN_TO_MURIEL: '← Return to Muriel',
  THROW_TABLET: 'Press F to throw the tablet!',
  THROW_BACK: 'Press F to throw back!',
  FOUND_SLAB: 'You found a strange stone slab',
  SLAB_OK: 'OK',
  KING_RAMSES_DEFEATED: 'King Ramses Defeated!',
  STAGE_COMPLETE: 'Stage Complete!',
  COMPLETION_MESSAGE: 'You successfully completed this stage. Thanks for playing!',
  GAME_OVER: 'GAME OVER',
  GAME_OVER_THANKS: 'Thanks for playing!',
  MURIEL_GREETING: 'You want some tea?',
  PLAYER_THOUGHT: "I know something's wrong... 😨",
};

// Positions (px) - calculated relative to window
export const getPositions = () => {
  const windowWidth = window.innerWidth;
  return {
    PLAYER_START_X: 100,
    PLAYER_START_Y: 0,
    PLAYER_WIDTH: 80,
    PLAYER_GROUND_Y: 50,
    PLAYER_THOUGHT_OFFSET_Y: 155,
    PLAYER_SPRITE_BOTTOM: 50,
    MURIEL_OFFSET_Y: -200,
    SOIL_CONTAINER_BOTTOM: 0,
    WINDMILL_START_X: 100,
    WINDMILL_START_PAGE: 1,
    KING_RAMSES_PAGE_X: windowWidth * 2.75,
    KING_RAMSES_WIDTH: 200,
    KING_RAMSES_HEALTH_BAR_OFFSET: 60,
    CINEMATIC_TARGET_X: windowWidth * 2 + 20,
    CINEMATIC_SPAWN_X: windowWidth * 2 + windowWidth / 2 - 40,
    BAT_SPAWN_X: windowWidth * 2.75,
  };
};
