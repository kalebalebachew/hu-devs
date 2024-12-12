"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calendar, MapPin, Play, Pause, Volume2, VolumeX } from "lucide-react";

const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

export function EventsTab({ events = [], pastEvents = [] }) {
  const [activeAudio, setActiveAudio] = useState(null);
  const audioRefs = useRef({});
  const [audioStates, setAudioStates] = useState({});

  useEffect(() => {
    const currentAudioRefs = audioRefs.current;
    return () => {
      Object.values(currentAudioRefs).forEach((audio) => audio?.pause());
    };
  }, []);

  const handlePlay = (audioUrl) => {
    const audio = audioRefs.current[audioUrl];
    if (!audio) return;

    if (activeAudio && activeAudio !== audioUrl) {
      audioRefs.current[activeAudio]?.pause();
      setAudioStates((prev) => ({
        ...prev,
        [activeAudio]: { ...prev[activeAudio], isPlaying: false },
      }));
    }

    const isPlaying = audioStates[audioUrl]?.isPlaying;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setActiveAudio(audioUrl);
    setAudioStates((prev) => ({
      ...prev,
      [audioUrl]: { ...prev[audioUrl], isPlaying: !isPlaying },
    }));
  };

  const updateAudioState = (audioUrl, updates) => {
    setAudioStates((prev) => ({
      ...prev,
      [audioUrl]: { ...prev[audioUrl], ...updates },
    }));
  };

  const renderAudioPlayer = (audioUrl) => {
    if (!audioUrl) return null;

    const state = audioStates[audioUrl] || {
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      volume: 1,
      isMuted: false,
    };

    return (
      <div className="mt-4">
        <audio
          ref={(el) => (audioRefs.current[audioUrl] = el)}
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
              isMuted: audio.muted,
            });
          }}
          onEnded={() => updateAudioState(audioUrl, { isPlaying: false })}
        />

        <div className="flex flex-col sm:flex-row gap-4 sm:items-center bg-card/50 p-4 rounded-lg border border-card/20">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handlePlay(audioUrl)}
            className="h-10 w-10 flex-shrink-0 bg-card/30 hover:bg-card/40 rounded-lg"
          >
            {state.isPlaying ? <Pause /> : <Play />}
          </Button>

          <div className="flex-1">
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
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(state.currentTime)}</span>
              <span>{formatTime(state.duration)}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
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
              className="h-8 w-8 hover:bg-card/40 rounded-lg"
            >
              {state.isMuted ? <VolumeX /> : <Volume2 />}
            </Button>
            <Slider
              value={[state.isMuted ? 0 : state.volume || 1]}
              max={1}
              step={0.01}
              onValueChange={([value]) => {
                const audio = audioRefs.current[audioUrl];
                if (audio) {
                  audio.volume = value;
                  updateAudioState(audioUrl, {
                    volume: value,
                    isMuted: value === 0,
                  });
                }
              }}
              className="w-full"
            />
          </div>
        </div>
      </div>
    );
  };

  const renderEventCard = (event) => (
    <Card className="group relative bg-card/30 border border-card/20 rounded-lg transition-all duration-300">
      {event.img && (
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <Image
            src={event.img}
            alt={event.title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {event.title}
        </h3>
        <p className="text-sm text-muted-foreground flex items-center mb-1">
          <Calendar className="mr-2 h-4 w-4" />
          {new Date(event.time).toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        {event.location && (
          <p className="text-sm text-muted-foreground flex items-center mb-2">
            <MapPin className="mr-2 h-4 w-4" />
            {event.location}
          </p>
        )}
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {event.description}
        </p>
        {event.audio && renderAudioPlayer(event.audio)}
      </div>
    </Card>
  );

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-foreground">Upcoming Events</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
          {events.length
            ? events.map((event) => renderEventCard(event))
            : <p className="text-muted-foreground">No upcoming events.</p>}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">Past Events</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
          {pastEvents.length
            ? pastEvents.map((event) => renderEventCard(event))
            : <p className="text-muted-foreground">No past events.</p>}
        </div>
      </section>
    </div>
  );
}
