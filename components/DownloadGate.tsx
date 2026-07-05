"use client";

import { useState } from "react";
import { FaSoundcloud, FaCommentDots } from "react-icons/fa";
function SoundCloudIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 640 512"
      fill="currentColor"
    >
      <path d="M537.6 226.6c-8.8 0-17.4 1.6-25.3 4.4-13.1-76.8-79.9-135.2-160.3-135.2-33.2 0-64.2 9.8-90.1 26.8-6.6 4.3-8.2 8.8-8.2 17.4V382c0 9 7.2 16.2 16.2 16.2h267.7c47.2 0 85.5-38.3 85.5-85.5s-38.3-85.6-85.5-85.6zM210.5 398.2h18.8V155.6h-18.8v242.6zm-37.3 0H192V183.4h-18.8v214.8zm-37.4 0h18.8V207.6h-18.8v190.6zm-37.3 0h18.8V231.8H98.5v166.4zm-37.4 0h18.8V258.4H61.1v139.8zm-37.3-17.8c0 9.8 8 17.8 17.8 17.8h.9V280.4h-.9c-9.8 0-17.8 8-17.8 17.8v82.2z" />
    </svg>
  );
}
export default function DownloadGate({ track }: any) {
  const [followDone, setFollowDone] = useState(false);
  const [commentDone, setCommentDone] = useState(false);
  const [count, setCount] = useState<number | null>(null);

  function startDownload() {
    let time = 10;
    setCount(time);

    const timer = setInterval(() => {
      time--;
      setCount(time);

      if (time <= 0) {
        clearInterval(timer);
        window.location.href = track.mediafire;
      }
    }, 1000);
  }

  const ready = followDone && commentDone;

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-700 p-6 text-center shadow-2xl">
        <h1 className="longhd-logo-text text-5xl mb-3">
  𝓛𝓸𝓷𝓰 𝓗𝓓
</h1>
<div className="mx-auto mb-3 h-[1px] w-36 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-80" />

        <p className="text-zinc-400 mb-6">FREE DOWNLOAD</p>

        <img
          src={track.artwork}
          alt={track.title}
          className="w-full aspect-square object-cover rounded-2xl mb-5"
        />

        <h2 className="text-2xl font-bold mb-1">{track.title}</h2>
        <p className="text-zinc-400 mb-6">{track.artist}</p>

        <button
  disabled={followDone}
  onClick={() => {
    if (followDone) return;
    window.open(track.soundcloudProfile, "_blank", "popup,width=520,height=720");
    setFollowDone(true);
  }}
  className={`w-full font-bold py-4 rounded-xl mb-3 transition ${
    followDone
      ? "bg-green-600 cursor-not-allowed opacity-70"
      : "bg-orange-500 hover:bg-orange-600"
  }`}
>
  <span className="flex items-center justify-center gap-2">
  <span>
    {followDone ? "✓ Follow Completed" : "Follow on SoundCloud"}
  </span>

  {!followDone && (
    <FaSoundcloud className="text-white text-xl" />
  )}
</span>
</button>

        <button
  disabled={commentDone}
  onClick={() => {
    if (commentDone) return;

    window.open(
      track.soundcloudTrack,
      "_blank",
      "popup,width=800,height=520"
    );

    setCommentDone(true);
  }}
  className={`w-full font-bold py-4 rounded-xl mb-5 transition ${
    commentDone
      ? "bg-green-600 cursor-not-allowed opacity-70"
      : "bg-zinc-800 hover:bg-zinc-700"
  }`}
>
  {commentDone ? (
  <>
    ✓ Comment Completed
  </>
) : (
  <>
    Open Track & Comment
    <FaCommentDots className="ml-2 inline text-lg" />
  </>
)}
</button>

        <button
          disabled={!ready || count !== null}
          onClick={startDownload}
          className="w-full disabled:opacity-40 bg-white text-black font-black py-4 rounded-xl"
        >
          {count === null ? "DOWNLOAD" : `Redirecting in ${count}s`}
        </button>
      </div>
    </main>
  );
}