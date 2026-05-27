import webback from "@/assets/webback.png";

export default function SceneBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <img
        src={webback}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/75" />
    </div>
  );
}
