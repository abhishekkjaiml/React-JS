import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import allMovies from "../db/Movies/all_movies.json";
import trendingMovies from "../db/HomeTrandingMovies.json";

import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Languages,
  Maximize,
  Pause,
  Play,
  Settings,
  Star,
  Volume2,
  VolumeX,
} from "lucide-react";

const StreamMovies = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const videoRef = useRef(null);

  const [moviesData, setMoviesData] = useState(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [quality, setQuality] = useState("Auto");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  /* =====================================================
     GET MOVIE
  ===================================================== */

  useEffect(() => {
    if (!id) return;

    const allCompleteAllDB = [
      ...allMovies,
      ...trendingMovies,
    ];

    const selectedMovie = allCompleteAllDB.find(
      (item) => String(item._id) === String(id)
    );

    setMoviesData(selectedMovie || null);
  }, [id]);


  /* =====================================================
     VIDEO EVENTS
  ===================================================== */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener(
      "loadedmetadata",
      handleLoadedMetadata
    );
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener(
        "timeupdate",
        handleTimeUpdate
      );

      video.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );

      video.removeEventListener(
        "play",
        handlePlay
      );

      video.removeEventListener(
        "pause",
        handlePause
      );
    };
  }, [moviesData]);


  /* =====================================================
     PLAY / PAUSE
  ===================================================== */

  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };


  /* =====================================================
     SEEK
  ===================================================== */

  const skipTime = (seconds) => {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime = Math.max(
      0,
      Math.min(
        video.currentTime + seconds,
        video.duration || 0
      )
    );
  };


  /* =====================================================
     VOLUME
  ===================================================== */

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;

    setIsMuted(video.muted);
  };


  /* =====================================================
     FULLSCREEN
  ===================================================== */

  const handleFullscreen = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };


  /* =====================================================
     PROGRESS
  ===================================================== */

  const handleProgressChange = (event) => {
    const video = videoRef.current;

    if (!video) return;

    const value = Number(event.target.value);

    video.currentTime = value;

    setCurrentTime(value);
  };


  /* =====================================================
     TIME FORMAT
  ===================================================== */

  const formatTime = (time) => {
    if (!time || Number.isNaN(time)) {
      return "00:00";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };


  /* =====================================================
     MOVIE NOT FOUND
  ===================================================== */

  if (!moviesData) {
    return (
      <div className="stream-movies-page flex min-h-screen items-center justify-center px-5">

        <div className="stream-movie-info max-w-md text-center">

          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Movie not found
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            The movie you're looking for doesn't exist.
          </p>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="stream-quality-button mt-6 justify-center bg-violet-600 text-white hover:bg-violet-500"
          >
            Go Back
          </button>

        </div>

      </div>
    );
  }


  return (
    <main className="stream-movies-page">


      {/* =================================================
          TOP HEADER
      ================================================= */}

      <header className="stream-header">

        <div className="stream-header-inner">

          {/* Back */}

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="stream-header-back"
            aria-label="Go back"
          >
            <ArrowLeft size={19} />
          </button>


          {/* Movie */}

          <div className="min-w-0">

            <p className="stream-header-label">
              Now Streaming
            </p>

            <h1 className="stream-header-title">
              {moviesData.Title}
            </h1>

          </div>

        </div>

      </header>


      {/* =================================================
          STREAM CONTENT
      ================================================= */}

      <section className="stream-content">

        <div className="stream-layout">


          {/* =================================================
              VIDEO COLUMN
          ================================================= */}

          <div className="stream-video-column">


            {/* =================================================
                VIDEO PLAYER
            ================================================= */}

            <div className="stream-player">


              {/* Video */}

              <div className="stream-video-area">

                <video
                  ref={videoRef}
                  className="stream-video"
                  poster={moviesData.Poster?.PosterData1}
                  playsInline
                  onClick={togglePlay}
                >

                  <source
                    src={moviesData.Trailer}
                    type="video/mp4"
                  />

                  Your browser does not support video playback.

                </video>


                {/* Center Play */}

                {!isPlaying && (
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="stream-center-play"
                    aria-label="Play"
                  >
                    <Play
                      size={27}
                      fill="currentColor"
                    />
                  </button>
                )}

              </div>


              {/* =================================================
                  PLAYER CONTROLS
              ================================================= */}

              <div className="stream-controls">


                {/* Progress */}

                <div className="stream-progress-row">

                  <span className="stream-time hidden sm:block">
                    {formatTime(currentTime)}
                  </span>

                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleProgressChange}
                    className="stream-progress"
                  />

                  <span className="stream-time hidden sm:block">
                    {formatTime(duration)}
                  </span>

                </div>


                {/* Controls */}

                <div className="stream-control-row">


                  {/* Left */}

                  <div className="stream-left-controls">


                    {/* Back 10 */}

                    <button
                      type="button"
                      onClick={() => skipTime(-10)}
                      className="stream-control-button"
                      aria-label="Back 10 seconds"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    <span className="stream-skip-label">
                      10
                    </span>


                    {/* Play */}

                    <button
                      type="button"
                      onClick={togglePlay}
                      className="stream-main-play"
                      aria-label={
                        isPlaying
                          ? "Pause"
                          : "Play"
                      }
                    >
                      {isPlaying ? (
                        <Pause
                          size={17}
                          fill="currentColor"
                        />
                      ) : (
                        <Play
                          size={17}
                          fill="currentColor"
                        />
                      )}
                    </button>


                    {/* Forward 10 */}

                    <span className="stream-skip-label">
                      10
                    </span>

                    <button
                      type="button"
                      onClick={() => skipTime(10)}
                      className="stream-control-button"
                      aria-label="Forward 10 seconds"
                    >
                      <ChevronRight size={18} />
                    </button>

                  </div>


                  {/* Right */}

                  <div className="stream-right-controls">


                    {/* Settings */}

                    <button
                      type="button"
                      onClick={() =>
                        setShowSettings(
                          !showSettings
                        )
                      }
                      className="stream-control-button"
                      aria-label="Settings"
                    >
                      <Settings size={18} />
                    </button>


                    {/* Volume */}

                    <button
                      type="button"
                      onClick={toggleMute}
                      className="stream-control-button"
                      aria-label="Mute"
                    >
                      {isMuted ? (
                        <VolumeX size={18} />
                      ) : (
                        <Volume2 size={18} />
                      )}
                    </button>


                    {/* Fullscreen */}

                    <button
                      type="button"
                      onClick={handleFullscreen}
                      className="stream-control-button hidden sm:flex"
                      aria-label="Fullscreen"
                    >
                      <Maximize size={18} />
                    </button>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                MOVIE INFORMATION
            ================================================= */}

            <div className="stream-movie-info">


              {/* Meta */}

              <div className="stream-movie-meta">

                <span className="stream-type-badge">
                  {moviesData.Type || "Movie"}
                </span>

                <span className="stream-separator">
                  •
                </span>

                <span>
                  {moviesData.Year}
                </span>

                <span className="stream-separator">
                  •
                </span>

                <span>
                  {moviesData.Runtime || "N/A"}
                </span>

                <span className="stream-separator">
                  •
                </span>

                <span>
                  {moviesData.Rated || "N/A"}
                </span>

              </div>


              {/* Title */}

              <h2 className="stream-movie-title">
                {moviesData.Title}
              </h2>


              {/* Rating */}

              <div className="stream-movie-rating-row">

                <div className="stream-movie-rating">

                  <Star
                    size={15}
                    fill="currentColor"
                  />

                  <span>
                    {moviesData.imdbRating || "N/A"}
                  </span>

                  <span className="stream-imdb">
                    IMDb
                  </span>

                </div>


                <span className="stream-separator">
                  |
                </span>


                <span className="stream-movie-genre">
                  {moviesData.Genre ||
                    "Genre unavailable"}
                </span>

              </div>


              {/* Plot */}

              <p className="stream-movie-plot">
                {moviesData.Plot ||
                  "No description available."}
              </p>

            </div>

          </div>


          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="stream-sidebar">


            {/* =================================================
                QUALITY
            ================================================= */}

            <div className="stream-sidebar-card">

              <div className="stream-sidebar-header">

                <div className="stream-sidebar-icon">
                  <Settings size={18} />
                </div>

                <div>

                  <h3 className="stream-sidebar-title">
                    Video Quality
                  </h3>

                  <p className="stream-sidebar-description">
                    Select streaming quality
                  </p>

                </div>

              </div>


              <div className="stream-quality-list">

                {[
                  "Auto",
                  "4K Ultra HD",
                  "Full HD",
                  "HD",
                  "Data Saver",
                ].map((item) => (

                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      setQuality(item)
                    }
                    className={`stream-quality-button ${
                      quality === item
                        ? "stream-quality-button-active"
                        : ""
                    }`}
                  >

                    <span>
                      {item}
                    </span>

                    {quality === item && (
                      <span className="stream-quality-dot" />
                    )}

                  </button>

                ))}

              </div>

            </div>


            {/* =================================================
                AUDIO & SUBTITLES
            ================================================= */}

            <div className="stream-sidebar-card">

              <div className="stream-sidebar-header">

                <div className="stream-sidebar-icon">
                  <Languages size={18} />
                </div>

                <div>

                  <h3 className="stream-sidebar-title">
                    Audio & Subtitles
                  </h3>

                  <p className="stream-sidebar-description">
                    Language preferences
                  </p>

                </div>

              </div>


              {/* Audio */}

              <div>

                <p className="stream-language-label">
                  Audio
                </p>

                <div className="stream-language-list">

                  {moviesData.Language?.length > 0 ? (

                    moviesData.Language.map(
                      (language) => (

                        <span
                          key={language}
                          className="stream-language-item"
                        >
                          {language}
                        </span>

                      )
                    )

                  ) : (

                    <span className="text-xs text-gray-500">
                      N/A
                    </span>

                  )}

                </div>

              </div>


              {/* Subtitles */}

              <div className="stream-language-section">

                <p className="stream-language-label">
                  Subtitles
                </p>

                <div className="stream-language-list">

                  {Array.isArray(
                    moviesData.Subtitle
                  ) &&
                  moviesData.Subtitle.length > 0 ? (

                    moviesData.Subtitle.map(
                      (subtitle) => (

                        <span
                          key={subtitle}
                          className="stream-language-item"
                        >
                          {subtitle}
                        </span>

                      )
                    )

                  ) : (

                    <span className="text-xs text-gray-500">
                      No subtitles available
                    </span>

                  )}

                </div>

              </div>

            </div>


            {/* =================================================
                REPORT
            ================================================= */}

            <button
              type="button"
              className="stream-report-button"
            >
              Report a playback issue
            </button>

          </aside>

        </div>

      </section>


      {/* =================================================
          MOBILE SETTINGS
      ================================================= */}

      {showSettings && (

        <div className="stream-mobile-settings lg:hidden">


          {/* Header */}

          <div className="stream-mobile-settings-header">

            <Settings size={15} />

            <span>
              Playback Settings
            </span>

          </div>


          {/* Settings */}

          <div className="stream-mobile-settings-list">

            {[
              "Auto",
              "4K Ultra HD",
              "Full HD",
              "HD",
              "Data Saver",
            ].map((item) => (

              <button
                key={item}
                type="button"
                onClick={() => {
                  setQuality(item);
                  setShowSettings(false);
                }}
                className={`stream-mobile-settings-button ${
                  quality === item
                    ? "stream-mobile-settings-button-active"
                    : ""
                }`}
              >

                <span>
                  {item}
                </span>

                {quality === item && (
                  <span className="stream-quality-dot" />
                )}

              </button>

            ))}

          </div>

        </div>

      )}

    </main>
  );
};

export default StreamMovies;