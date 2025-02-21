import { Component } from '@angular/core';

@Component({
    selector: 'audio-root',
    template:`
      <audio controls>
      <source src="assets/audio/AudioTest.wav" type="audio/wav">
        Your browser does not support the audio element.
      </audio> 
    `,
  })
  export class AudioComponent {
  }