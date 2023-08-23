import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  private synthesis = window.speechSynthesis;
  private utterance = new SpeechSynthesisUtterance();
  private voices: SpeechSynthesisVoice[] = [];
  

  constructor() { }

  speak(message: string) {
    if (this.synthesis.speaking) {
      this.synthesis.cancel();
    }
    if (message !== '') {
      this.utterance.text = message;
      this.synthesis.speak(this.utterance);
    }
  }

  setVoice(): void {
    this.voices = speechSynthesis.getVoices();
    console.log(this.voices);
    
    this.utterance.voice = this.voices[2];
  }

}
