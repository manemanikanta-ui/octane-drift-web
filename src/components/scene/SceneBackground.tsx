import webback from "@/assets/webback.png";

export default function SceneBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${webback})` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/85" />
    </div>
  );
}
