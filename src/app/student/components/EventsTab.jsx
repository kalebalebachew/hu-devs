import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calendar, MapPin, Play, Pause, Volume2, VolumeX, Waveform } from "lucide-react";

const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export function EventsTab({ events = [], pastEvents = [] }) {
  const [activeAudio, setActiveAudio] = useState(null);
  const audioRefs = useRef({});
  const [audioStates, setAudioStates] = useState({});

  useEffect(() => {
    return () => {
      Object.values(audioRefs.current).forEach(audio => audio?.pause());
    };
  }, []);

  const handlePlay = (audioUrl) => {
    const audio = audioRefs.current[audioUrl];
    if (!audio) return;

    if (activeAudio && activeAudio !== audioUrl) {
      audioRefs.current[activeAudio]?.pause();
      setAudioStates(prev => ({
        ...prev,
        [activeAudio]: { ...prev[activeAudio], isPlaying: false }
      }));
    }

    const isPlaying = audioStates[audioUrl]?.isPlaying;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setActiveAudio(audioUrl);
    setAudioStates(prev => ({
      ...prev,
      [audioUrl]: { ...prev[audioUrl], isPlaying: !isPlaying }
    }));
  };

  const updateAudioState = (audioUrl, updates) => {
    setAudioStates(prev => ({
      ...prev,
      [audioUrl]: { ...prev[audioUrl], ...updates }
    }));
  };

  const renderAudioPlayer = (audioUrl) => {
    if (!audioUrl) return null;

    const state = audioStates[audioUrl] || {
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      volume: 1,
      isMuted: false
    };

    return (
      <div className="mt-4 relative group">
        <audio
          ref={el => audioRefs.current[audioUrl] = el}
          src={audioUrl}
          onTimeUpdate={() => {
            const audio = audioRefs.current[audioUrl];
            updateAudioState(audioUrl, { currentTime: audio.currentTime });
          }}
          onLoadedMetadata={() => {
            const audio = audioRefs.current[audioUrl];
            updateAudioState(audioUrl, {
              duration: audio.duration,
              volume: audio.volume,
              isMuted: audio.muted
            });
          }}
          onEnded={() => updateAudioState(audioUrl, { isPlaying: false })}
        />
        
        <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 transition-all duration-200 group-hover:border-white/20">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handlePlay(audioUrl)}
            className="h-10 w-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            {state.isPlaying ? (
              <Pause className="h-5 w-5 text-white" />
            ) : (
              <Play className="h-5 w-5 text-white translate-x-0.5" />
            )}
          </Button>

          <div className="flex-1 space-y-1">
            <Slider
              value={[state.currentTime || 0]}
              max={state.duration || 100}
              step={0.1}
              onValueChange={([value]) => {
                const audio = audioRefs.current[audioUrl];
                if (audio) {
                  audio.currentTime = value;
                  updateAudioState(audioUrl, { currentTime: value });
                }
              }}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>{formatTime(state.currentTime)}</span>
              <span>{formatTime(state.duration)}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                const audio = audioRefs.current[audioUrl];
                if (audio) {
                  audio.muted = !state.isMuted;
                  updateAudioState(audioUrl, { isMuted: !state.isMuted });
                }
              }}
              className="h-8 w-8 hover:bg-white/10 rounded-lg"
            >
              {state.isMuted ? (
                <VolumeX className="h-4 w-4 text-gray-400" />
              ) : (
                <Volume2 className="h-4 w-4 text-gray-400" />
              )}
            </Button>
            <Slider
              value={[state.isMuted ? 0 : (state.volume || 1)]}
              max={1}
              step={0.01}
              onValueChange={([value]) => {
                const audio = audioRefs.current[audioUrl];
                if (audio) {
                  audio.volume = value;
                  updateAudioState(audioUrl, {
                    volume: value,
                    isMuted: value === 0
                  });
                }
              }}
              className="w-20"
            />
          </div>
        </div>
      </div>
    );
  };

  const renderEventCard = (event) => (
    <Card className="group relative bg-gradient-to-b from-gray-900 to-black border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
      {event.img && (
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10" />
          <Image
            src={event.img}
            alt={event.title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}
      <div className="relative z-20 p-6 -mt-20">
        <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
          {event.title}
        </h3>
        <div className="space-y-2 mb-4">
          <p className="text-sm text-gray-400 flex items-center">
            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
            <time dateTime={event.time}>
              {new Date(event.time).toLocaleDateString(undefined, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </p>
          {event.location && (
            <p className="text-sm text-gray-400 flex items-center">
              <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
              {event.location}
            </p>
          )}
        </div>
        <p className="text-sm text-gray-400 mb-4 line-clamp-3">
          {event.description}
        </p>
        {event.audio && renderAudioPlayer(event.audio)}
      </div>
    </Card>
  );

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-bold text-white mb-8">
          Upcoming Events
        </h2>
        {events.length === 0 ? (
          <p className="text-gray-400">No upcoming events at the moment.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div key={index}>{renderEventCard(event)}</div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-8">
          Past Events
        </h2>
        {pastEvents.length === 0 ? (
          <p className="text-gray-400">No past events to display.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event, index) => (
              <div key={index}>{renderEventCard(event)}</div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}