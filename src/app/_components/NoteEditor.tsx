"use client";

import { bebas } from "../fonts";

const NoteEditor = () => {
  // TODO: Logic to make it auto-save every 5-10 seconds if typing.
  const today = true;

  return (
    <div className="w-full">
      <h3 className={`${bebas.className} mb-2 text-xl`}>Notes:</h3>
      <textarea
        className="textarea textarea-primary w-full disabled:border-primary disabled:bg-neutral"
        rows={10}
        placeholder="You can write a little about your day here such as your mood, circumstances, how you felt etc."
        disabled={!today}
      />
    </div>
  );
};

export default NoteEditor;
