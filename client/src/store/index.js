import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#964ce0',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './logo.webp',
  fullDecal: './texture.webp',
});

export default state;
