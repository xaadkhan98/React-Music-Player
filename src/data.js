import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Showreel Music",
      artist: "MFCC",
      cover:
        "https://cdn.pixabay.com/audio/2024/11/08/10-01-20-397_200x200.png",
      audio:
        "https://cdn.pixabay.com/download/audio/2024/11/08/audio_05b10daae7.mp3?filename=showreel-music-promo-advertising-opener-vlog-background-intro-theme-261601.mp3",
      id: uuidv4(),
      active: true,
      colors: ["#732D2E", "#EE4135"],
    },
    {
      name: "Holidays in Miami",
      artist: "White_Records",
      cover:
        "https://cdn.pixabay.com/audio/2024/11/15/18-11-49-119_200x200.jpg",
      audio:
        "https://cdn.pixabay.com/download/audio/2024/11/15/audio_8fd9a3d62f.mp3?filename=holidays-in-miami-background-tropical-house-music-for-video-40-second-264697.mp3",
      id: uuidv4(),
      active: false,
      colors: ["#112D46", "#084773"],
    },
    {
      name: "Powerful Energy - Upbeat Rock",
      artist: "FASSounds",
      cover:
        "https://cdn.pixabay.com/audio/2024/09/29/08-47-38-387_200x200.jpg",
      audio:
        "https://cdn.pixabay.com/download/audio/2024/09/29/audio_1f10a186f0.mp3?filename=powerful-energy-upbeat-rock-advertising-music-245728.mp3",
      id: uuidv4(),
      active: false,
      colors: ["#2D0449", "#910039"],
    },
    {
      name: "Showreel Music",
      artist: "MFCC",
      cover:
        "https://cdn.pixabay.com/audio/2024/11/08/10-01-20-397_200x200.png",
      audio:
        "https://cdn.pixabay.com/download/audio/2024/11/08/audio_05b10daae7.mp3?filename=showreel-music-promo-advertising-opener-vlog-background-intro-theme-261601.mp3",
      id: uuidv4(),
      active: false,
      colors: ["#732D2E", "#EE4135"],
    },
    {
      name: "Holidays in Miami",
      artist: "White_Records",
      cover:
        "https://cdn.pixabay.com/audio/2024/11/15/18-11-49-119_200x200.jpg",
      audio:
        "https://cdn.pixabay.com/download/audio/2024/11/15/audio_8fd9a3d62f.mp3?filename=holidays-in-miami-background-tropical-house-music-for-video-40-second-264697.mp3",
      id: uuidv4(),
      active: false,
      colors: ["#112D46", "#084773"],
    },
    {
      name: "Millionaire",
      artist: "Yo Yo - Honey Singh",
      cover:
        "https://cdn.pixabay.com/audio/2024/09/29/08-47-38-387_200x200.jpg",
      audio:
        "https://raag.fm/files/mp3/128/Punjabi/27521/Millionaire%20-%20(Raag.Fm).mp3",
      id: uuidv4(),
      active: false,
      colors: ["#2D0449", "#910039"],
    },
  ];
}

export default chillHop;
