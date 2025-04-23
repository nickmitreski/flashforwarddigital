// Windows 95/98 sound effects
const sounds = {
  startup: '/sound_effects/The Microsoft Sound.wav',
  error: '/sound_effects/windows-7-exclamation.wav',
  open: '/sound_effects/CHORD.WAV',
  notification: '/sound_effects/windows-7-ding.wav',
  alert: '/sound_effects/windows-95-sfx-ding.wav',
  success: '/sound_effects/TADA.WAV',
  background: '/sound_effects/CHIMES.WAV',
  launch: '/sound_effects/windows-95-sfx-chord.wav',
  shutdown: '/sound_effects/windows-95-sfx-chord.wav',
  ding: '/sound_effects/DING.WAV'
};

// Sound player class
class SoundPlayer {
  private sounds: Record<string, HTMLAudioElement> = {};
  private enabled: boolean = true;
  private volume: number = 0.5;

  constructor() {
    // Preload all sounds
    Object.entries(sounds).forEach(([key, path]) => {
      this.sounds[key] = new Audio(path);
      this.sounds[key].volume = this.volume;
    });
  }

  // Play a sound by name
  play(soundName: keyof typeof sounds): void {
    if (!this.enabled) return;
    
    const sound = this.sounds[soundName];
    if (sound) {
      // Reset the sound to the beginning if it's already playing
      sound.currentTime = 0;
      sound.play().catch(err => {
        console.warn(`Failed to play sound ${soundName}:`, err);
      });
    }
  }

  // Enable/disable sounds
  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }

  // Set volume (0-1)
  setVolume(volume: number): void {
    this.volume = Math.max(0, Math.min(1, volume));
    Object.values(this.sounds).forEach(sound => {
      sound.volume = this.volume;
    });
  }

  // Get current volume
  getVolume(): number {
    return this.volume;
  }

  // Check if sounds are enabled
  isEnabled(): boolean {
    return this.enabled;
  }
}

// Create a singleton instance
const soundPlayer = new SoundPlayer();

export default soundPlayer; 