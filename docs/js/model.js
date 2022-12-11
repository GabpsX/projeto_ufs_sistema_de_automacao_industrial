
const modelViewerPrompt = document.querySelector("##");

const PROMT_MS = 3000;
const REPEAT_MS = 5000;

const finger0 = {
  x: {
    initialValue: 0.6,
    keyframes: [
      {frames: 1, value: 0.7},
      {frames: 1, value: 0.5},
      {frames: 1, value: 0.7},
      {frames: 1, value: 0.6},
    ]
  },
  y: {
    initialValue: 0.45,
    keyframes: [
      {frames: 1, value: 0.4},
      {frames: 1, value: 0.3},
      {frames: 1, value: 0.4},
      {frames: 1, value: 0.45},
    ]
  }
};

const finger1 = {
  x: {
    initialValue: 0.4,
    keyframes: [
      {frames: 1, value: 0.3},
      {frames: 1, value: 0.1},
      {frames: 1, value: 0.3},
      {frames: 1, value: 0.4},
    ]
  },
  y: {
    initialValue: 0.55,
    keyframes: [
      {frames: 1, value: 0.6},
      {frames: 1, value: 0.5},
      {frames: 1, value: 0.6},
      {frames: 1, value: 0.55},
    ]
  }
};

let hasInteracted = false;

const prompt = () => {
  if (!hasInteracted) {
    modelViewerPrompt.interact(PROMT_MS, finger0, finger1);
    setTimeout(prompt, REPEAT_MS);
  }
};

modelViewerPrompt.addEventListener('poster-dismissed', () => {
  prompt();
}, {once: true});

const interacted = (event) => {
  if (event.detail.source === 'user-interaction') {
    hasInteracted = true;
    modelViewerPrompt.removeEventListener('camera-change', interacted);
  }
};

modelViewerPrompt.addEventListener('camera-change', interacted);


