import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  private synthesis = window.speechSynthesis;
  private utterance = new SpeechSynthesisUtterance();
  private voices: SpeechSynthesisVoice[] = [];

  constructor() {
    this.synthesis.cancel();
    this.voices = this.synthesis.getVoices();
    this.utterance.voice = this.voices[1];
  }

  speak(message: string) {
    this.utterance.text = message;
    this.synthesis.speak(this.utterance);
  }
}
