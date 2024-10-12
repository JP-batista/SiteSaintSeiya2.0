'use client';

import { useState, useRef, useEffect } from 'react';

// Definições das músicas
const classicTracks = {
  openings: [
    {
      name: 'Pegasus Fantasy - Saint Seiya',
      src: '/soundtrack/aberturas/Pegasus Fantasy - Saint Seiya (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/hG-ZCL9irck/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFgWlYdguEhzCxJmZkaTPqrVzktQ',
    }, 
    {
      name: 'Soldier Dream - Saint Seiya',
      src: '/soundtrack/aberturas/Soldier Dream - Saint Seiya (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/BhXm81Ya2NQ/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhMICwofzAP&rs=AOn4CLDezMVvcUOwKI3KurH52rU3quM5wA',
    },
    
    {
      name: 'Chikyuugi - Saint Seiya',
      src: '/soundtrack/aberturas/Chikyuugi - Saint Seiya (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/Fac-xC41ndY/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARg7IEcocjAP&rs=AOn4CLDA5s5KQZV8W5dOllULCeV5GVs-rA',
    },
    {
      name: 'Pegasus Forever - Saint Seiya',
      src: '/soundtrack/aberturas/Pegasus Forever - Saint Seiya (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/JBtDsv2ihh8/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_ICAoOjAP&rs=AOn4CLCirLe-h4s56W2Az3PidulYeY3ddQ',
    },
  ],
  endings: [
    {
      name: 'Blue Forever - Saint Seiya',
      src: '/soundtrack/encerramentos/Blue Forever - Saint Seiya (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/51zLAMRo0jk/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBooGDAP&rs=AOn4CLDI-JEx8fkjJJdVGE5WgOaogVxR-Q',
    },
    {
      name: 'Blue Dream - Saint Seiya',
      src: '/soundtrack/encerramentos/Blue Dream - Saint Seiya (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/BAZUp8S7RPs/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIFgoOTAP&rs=AOn4CLArM1KWKGzfKJ7WwmfsEU6vSWTVVQ',
    },
    {
      name: 'Kimi to Onaji Aozora - Saint Seiya',
      src: '/soundtrack/encerramentos/Kimi to Onaji Aozora - Saint Seiya (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/nDQeWzKeHGE/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgiIGQocjAP&rs=AOn4CLBoH2Negx_6HZJz13ITVDZRgUCk5Q',
    },
    {
      name: 'My Dear - Saint Seiya',
      src: '/soundtrack/encerramentos/My Dear - Saint Seiya (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/cQBckkyYPXY/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgTID8ofzAP&rs=AOn4CLA8bO0LcHpRKTb3-SSn0u4OzzzNPw',
    },
    {
      name: 'Kami no en - Saint Seiya',
      src: '/soundtrack/encerramentos/Kami no en - Saint Seiya (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/fFodzTUDSg8/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIF0oRTAP&rs=AOn4CLC7oWZIqgxArxwYAT8OyowMCMlL4Q',
    },
  ],
  others: [
    {
      name: 'Advent of Artemis - Saint Seiya',
      src: '/soundtrack/outras/Advent of Artemis - Saint Seiya (slowed + reverb).mp3',
      img: 'https://i.ytimg.com/vi/GB016zFW65I/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhWIGUoWjAP&rs=AOn4CLCis1udlixr7x2zxOuJa2nBGOB3jw',
    },
    {
      name: 'Athena Decision - Saint Seiya',
      src: '/soundtrack/outras/Athena Decision - Saint Seiya (slowed + reverb).mp3',
      img: 'https://i.ytimg.com/vi/VGJsNz8Oty4/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oTjAP&rs=AOn4CLCyJePqBfWG6CMocgqKKDYgepSOHA',
    },
    {
      name: 'Best Friend - Saint Seiya',
      src: '/soundtrack/outras/Best Friend - Saint Seiya (slowed + reverb).mp3',
      img: 'https://i.ytimg.com/vi/hMfDG6jaS3Q/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARg9IFcoZTAP&rs=AOn4CLDEwRdad_n7eS-LPfsim0ERTUtUuQ',
    },
    {
      name: 'Cant say Goodbye my friend - Saint Seiya',
      src: '/soundtrack/outras/Cant say Goodbye my friend - Saint Seiya (slowed + reverb).mp3',
      img: 'https://i.ytimg.com/vi/heR38soG7VA/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IDAoIzAP&rs=AOn4CLDEAwKsRCVZKPiAH51-zvvllE4ZuA',
    },
    {
      name: 'Dream Traveller - Saint Seiya',
      src: '/soundtrack/outras/Dream Traveller - Saint Seiya (slowed + reverb).mp3',
      img: 'https://i.ytimg.com/vi/OVD7RN75JXQ/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIEgoQTAP&rs=AOn4CLD_DO2J13dor0Y16gwqayuTVOkNkg',
    },
    {
      name: 'Galaxian Wars - Saint Seiya',
      src: '/soundtrack/outras/Galaxian Wars - Saint Seiya (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/rKq15Ux_rf4/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgWIFgofzAP&rs=AOn4CLALUXyRG_hBTspHLTpBARNHvQSRNQ',
    },
    {
      name: 'Intense Cosmo - Saint Seiya',
      src: '/soundtrack/outras/Intense Cosmo - Saint Seiya (slowed + reverb).mp3',
      img: 'https://i.ytimg.com/vi/xlu6MUqYCbw/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGIoUjAP&rs=AOn4CLC-n672Jw5FT8fUIxacW7sIBnjhHg',
    },
    {
      name: 'Lamentation - Saint Seiya',
      src: '/soundtrack/outras/Lamentation - Saint Seiya (slowed + reverb).mp3',
      img: 'https://i.ytimg.com/vi/3I64KUeTlbY/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IE4oHTAP&rs=AOn4CLD4zDVl8kWeDIpk6NFKn8Y7oW8VmA',
    },
    {
      name: 'Legend Soldier Dream - Saint Seiya',
      src: '/soundtrack/outras/Legend Soldier Dream - Saint Seiya (slowed + reverb).mp3',
      img: 'https://i.ytimg.com/vi/DaAz7wkm6_Y/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEooJTAP&rs=AOn4CLD1ZbSpmpVEU_xyHN1xpzidlDIcKw',
    },
    {
      name: 'Never - Saint Seiya',
      src: '/soundtrack/outras/Never - Saint Seiya (slowed + reverb).mp3',
      img: 'https://i.ytimg.com/vi/OMEOeFQssvA/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIEAoUDAP&rs=AOn4CLBkgHJhV55kdbDjuDH26pvPwdJ4oA',
    },
    {
      name: 'Pegasus Ryu Sei Ken - Saint Seiya',
      src: '/soundtrack/outras/Pegasus Ryu Sei Ken - Saint Seiya (slowed + reverb).mp3',
      img: 'https://i.ytimg.com/vi/ZDDWv1coqoQ/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IDgoMjAP&rs=AOn4CLCZZEd4-Zwfzj_8l2WodQn0Y2URig',
    },
    {
      name: 'Promise in Protection Star - Saint Seiya',
      src: '/soundtrack/outras/Promise in Protection Star - Saint Seiya (slowed + reverb).mp3',
      img: 'https://i.ytimg.com/vi/vsBJQb8Doq8/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgeIFgofzAP&rs=AOn4CLCgn5O6bXoAscLve4hn7Xorm4wAtw',
    },
    {
      name: 'Remember Sadness - Saint Seiya',
      src: '/soundtrack/outras/Remember Sadness - Saint Seiya (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/GW-nl1ll48g/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IDUoOjAP&rs=AOn4CLDDhRUeQ42Hi2GwUN3MmniJkPHSFg',
    },
    {
      name: 'Sacred Sacrifice - Saint Seiya',
      src: '/soundtrack/outras/Sacred Sacrifice - Saint Seiya (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/_lgKs9bnfiU/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhVIBMofzAP&rs=AOn4CLC9Mx1Q9dSGVvAhIYYNR69nso-piA',
    },
    {
      name: 'Sad Brothers - Saint Seiya',
      src: '/soundtrack/outras/Sad Brothers - Saint Seiya (slowed + reverb).mp3',
      img: 'https://i.ytimg.com/vi/wMrtnfnwKO8/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhLIEQofzAP&rs=AOn4CLAKpDEpyczx66x7jxcN3WOYfroUyA',
    },
    {
      name: 'Saint of Hope - Saint Seiya',
      src: '/soundtrack/outras/Saint of Hope - Saint Seiya (slowed + reverb).mp3',
      img: 'https://i.ytimg.com/vi/LPf7X8-3er0/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIFgoMDAP&rs=AOn4CLCRuPsdLaRgFWMGGwctPEuKk5Ceyw',
    },
    {
      name: 'Sei iki no Kutou - Saint Seiya',
      src: '/soundtrack/outras/Sei iki no Kutou - Saint Seiya (slowed + reverb).mp3',
      img: 'https://i.ytimg.com/vi/25lRunD6sxA/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIEAoSjAP&rs=AOn4CLC8jle8pU8gEt1u72p3vqzTmNtGDg',
    },
    {
      name: 'Tranquility - Saint Seiya',
      src: '/soundtrack/outras/Tranquility - Saint Seiya (slowed + reverb).mp3',
      img: 'https://i.pinimg.com/originals/73/93/23/739323d3b40c000f1d0a1f092713adad.png',
    },
    
  ]
};

const lostCanvasTracks = {
  openings: [
    {
      name: 'The Realm of Athena - Saint Seiya - The Lost Canvas',
      src: '/lost-canvas/The Realm of Athena - Saint Seiya- The Lost Canvas (slowed + reverb).mp3',
      img: 'https://i.ytimg.com/vi/alMTBrhmxR4/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhDIFMocjAP&rs=AOn4CLC2IZAW6KS76CmfylC9ikoa74aWLA',
    },
  ],
  endings: [
    {
      name: 'Hana no Kusari - Saint Seiya - The Lost Canvas',
      src: '/lost-canvas/Hana no Kusari - Saint Seiya- The Lost Canvas (slowed + reverb).mp3',
      img: 'https://i.ytimg.com/vi/MnkHc4gEknM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1Fu1tXf0CbWzWo96f5PHySr_XHQ',
    },
  ],
  others: [
    {
      name: 'Constellation Cloth - Saint Seiya Omega',
      src: '/omega/outras/Constellation Cloth - Saint Seiya Omega (slowed + reverb).mp3',
      img: 'https://i.ytimg.com/vi/sbn0_9Hf4PQ/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBMoPTAP&rs=AOn4CLAVFtgE9WYeIC-XknmLmUq5JLxnow',
    },
  ]
};

const omegaTracks = {
  openings: [
    {
      name: 'Pegasus Fantasy - Saint Seiya Omega',
      src: '/omega/aberturas/Pegasus Fantasy - Saint Seiya Omega (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/KaN8hZdg5OI/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARg-IEsocjAP&rs=AOn4CLCPM2K7kf0JBh3YbofZbBtEAkIp_w',
    },
    {
      name: 'New Myth - Saint Seiya Omega',
      src: 'omega/aberturas/New Myth - Saint Seiya Omega (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/DI8IUVU37N8/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgzIEIofzAP&rs=AOn4CLBlnTMYEl5nb8FdAbbJEUc2fQiu1Q',
    },
  ],
  endings: [

  ],
  others: [
    {
      name: 'Constellation Cloth - Saint Seiya Omega',
      src: '/omega/outras/Constellation Cloth - Saint Seiya Omega (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/sbn0_9Hf4PQ/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBMoPTAP&rs=AOn4CLAVFtgE9WYeIC-XknmLmUq5JLxnow',
    },
    {
      name: 'Departure to Hope - Saint Seiya Omega',
      src: '/omega/outras/Departure to Hope - Saint Seiya Omega (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/V3QnO8ZMH7o/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFYoPDAP&rs=AOn4CLCF7N5IA0xKL9AKeZAKJZ-_5tPvEg',
    },
    {
      name: 'Eternal Saints - Saint Seiya Omega',
      src: '/omega/outras/Eternal Saints - Saint Seiya Omega (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/ncQXUOcnxbI/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIFAoPDAP&rs=AOn4CLD5ymQmOknIguMnHl_9ufpHD3Z6AQ',
    },
    {
      name: 'Face Determination - Saint Seiya Omega',
      src: '/omega/outras/Face Determination - Saint Seiya Omega (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/SDNX8_Gkzhs/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IE0oJDAP&rs=AOn4CLCYcWbIri_mpSLXI65SjI1SFsDalA',
    },
    {
      name: 'Legend of the Saints - Saint Seiya Omega',
      src: '/omega/outras/Legend of the Saints - Saint Seiya Omega (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/BYsydX3z3Ok/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEgoSzAP&rs=AOn4CLBMSF-kj3AYBBuCrlYA_YG6BKtZ4g',
    },
    {
      name: 'Pegasus no Youni - Saint Seiya Omega',
      src: '/omega/outras/Pegasus no Youni - Saint Seiya Omega (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/X2RybSNxCqQ/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGAoMDAP&rs=AOn4CLCzv2dLXWs45vjDmLjFumTHNLv83Q',
    },
    {
      name: 'Prayer for the Saints - Saint Seiya Omega',
      src: '/omega/outras/Prayer for the Saints - Saint Seiya Omega (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/tP-etTfQkPM/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARg-IDgofzAP&rs=AOn4CLCCdyw34K37AbO8Ft8GjmecNUfwdQ',
    },
    {
      name: 'The Fighter of Hope - Saint Seiya Omega',
      src: '/omega/outras/The Fighter of Hope - Saint Seiya Omega (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/DpSqtB0-7CA/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBYoNDAP&rs=AOn4CLCDtFQO2RxRD5AGCZk_RApR2AcUGw',
    },
    
  ]
};

export default function SoundtrackPage() {
  const [currentCategory, setCurrentCategory] = useState<'classic' | 'lost-canvas' | 'omega'>('classic');
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // Estado para a barra de progresso
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = (trackSrc: string) => {
    if (currentTrack === trackSrc) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.src = trackSrc;
        audioRef.current.play();
        setIsPlaying(true);
        setCurrentTrack(trackSrc);
        setProgress(0); // Reset progress when a new track starts
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      const progressPercentage = (currentTime / duration) * 100;
      setProgress(progressPercentage);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (audioRef.current) {
      const { left, width } = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - left;
      const newTime = (clickX / width) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
    }
  };

  const renderTrackSection = (title: string, tracks: any[]) => (
    <section className="mb-8">
      <h2 className="text-3xl font-extrabold text-yellow-400 text-center mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tracks.map((track) => (
          <div key={track.name} className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <img src={track.img} alt={track.name} className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-2xl text-yellow-300 mb-2">{track.name}</h3>

            {currentTrack === track.src && (
              <div
                className="relative w-full bg-gray-700 rounded-lg h-2 mb-4 cursor-pointer"
                onClick={handleProgressClick}
              >
                <div
                  className="absolute top-0 left-0 h-full bg-yellow-500 rounded-lg"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            <button
              onClick={() => handlePlayPause(track.src)}
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
            >
              {currentTrack === track.src && isPlaying ? 'Pausar' : 'Tocar'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );

  const getTracksForCategory = () => {
    if (currentCategory === 'classic') return classicTracks;
    if (currentCategory === 'lost-canvas') return lostCanvasTracks;
    if (currentCategory === 'omega') return omegaTracks;

  };

  const tracks = getTracksForCategory();

  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">Trilha Sonora de Saint Seiya</h1>

      {/* Elemento de áudio que reproduz a música */}
      <audio ref={audioRef} controls style={{ display: 'none' }} onTimeUpdate={handleTimeUpdate} />

      {/* Botões de navegação entre as categorias */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setCurrentCategory('classic')}
          className={`px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 ${
            currentCategory === 'classic' ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-yellow-400'
          }`}
        >
          Clássico
        </button>
        <button
          onClick={() => setCurrentCategory('lost-canvas')}
          className={`px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 ${
            currentCategory === 'lost-canvas' ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-yellow-400'
          }`}
        >
          Lost Canvas
        </button>
        <button
          onClick={() => setCurrentCategory('omega')}
          className={`px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 ${
            currentCategory === 'omega' ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-yellow-400'
          }`}
        >
          Omega
        </button>
      </div>

      {/* Exibição das trilhas para a categoria selecionada */}
      {tracks && renderTrackSection('Aberturas', tracks?.openings)}
      {tracks && renderTrackSection('Encerramentos', tracks?.endings)}
      {tracks && renderTrackSection('Trilhas', tracks?.others)}
    </div>
  );
}
