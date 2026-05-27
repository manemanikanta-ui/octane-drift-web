import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";

/**
 * Continuous 3D background. A wheel morphs into a burger (hero),
 * then transitions into floating coffee cup (about), tarmac grid (menu),
 * stadium bokeh (events), and pin map (locations) driven by scroll progress.
 */

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

function WheelBurger({ progress }: { progress: number }) {
  const group = useRef<THREE.Group>(null);
  // morph from wheel (0) to burger (1) over progress 0 -> 0.18
  const morph = Math.min(1, Math.max(0, progress / 0.18));

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.z += delta * (0.6 - morph * 0.5);
    group.current.rotation.x = morph * 0.35;
    group.current.position.y = -progress * 6;
    group.current.scale.setScalar(1 - progress * 0.4);
  });

  const spokes = useMemo(() => Array.from({ length: 12 }), []);

  return (
    <group ref={group}>
      {/* Outer rim / top bun */}
      <mesh>
        <torusGeometry args={[1.6, 0.18 + morph * 0.25, 24, 80]} />
        <meshStandardMaterial
          color={new THREE.Color().lerpColors(new THREE.Color("#d9d9d9"), new THREE.Color("#d99a4a"), morph)}
          metalness={1 - morph}
          roughness={0.15 + morph * 0.6}
          emissive={new THREE.Color("#1a0a00")}
        />
      </mesh>
      {/* Hub / patty */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.55 + morph * 0.4, 0.55 + morph * 0.4, 0.15 + morph * 0.25, 48]} />
        <meshStandardMaterial
          color={new THREE.Color().lerpColors(new THREE.Color("#2a2a2a"), new THREE.Color("#5a2a14"), morph)}
          metalness={1 - morph}
          roughness={0.2 + morph * 0.6}
        />
      </mesh>
      {/* Cheese layer appears with morph */}
      <mesh position={[0, 0.18, 0]} scale={[1, morph, 1]}>
        <cylinderGeometry args={[1.2, 1.2, 0.06, 48]} />
        <meshStandardMaterial color="#e8a527" roughness={0.5} />
      </mesh>
      {/* Lettuce */}
      <mesh position={[0, 0.28, 0]} scale={[1, morph, 1]}>
        <torusGeometry args={[1.35, 0.08, 12, 60]} />
        <meshStandardMaterial color="#3e7d2f" roughness={0.7} />
      </mesh>
      {/* Spokes fade out */}
      {spokes.map((_, i) => {
        const a = (i / spokes.length) * Math.PI * 2;
        return (
          <mesh
            key={i}
            rotation={[0, 0, a]}
            scale={[1, 1 - morph, 1]}
          >
            <boxGeometry args={[0.04, 1.5, 0.04]} />
            <meshStandardMaterial color="#cfcfcf" metalness={1} roughness={0.1} />
          </mesh>
        );
      })}
    </group>
  );
}

function SpeedLines({ active }: { active: number }) {
  const ref = useRef<THREE.Group>(null);
  const lines = useMemo(
    () =>
      Array.from({ length: 40 }).map(() => ({
        y: (Math.random() - 0.5) * 10,
        z: (Math.random() - 0.5) * 6,
        x: Math.random() * 20 - 10,
        speed: 6 + Math.random() * 10,
        len: 0.8 + Math.random() * 2.2,
      })),
    [],
  );
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.children.forEach((m, i) => {
      m.position.x += lines[i].speed * delta;
      if (m.position.x > 12) m.position.x = -12;
    });
  });
  return (
    <group ref={ref} visible={active > 0.05}>
      {lines.map((l, i) => (
        <mesh key={i} position={[l.x, l.y, l.z]}>
          <boxGeometry args={[l.len, 0.012, 0.012]} />
          <meshBasicMaterial color="#e8001c" transparent opacity={0.55 * active} />
        </mesh>
      ))}
    </group>
  );
}

function CoffeeCup({ active }: { active: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.4;
  });
  return (
    <group ref={ref} position={[2.2, 0, -1]} scale={active}>
      <mesh>
        <cylinderGeometry args={[0.7, 0.55, 0.9, 48]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.46, 0]}>
        <cylinderGeometry args={[0.66, 0.66, 0.04, 48]} />
        <meshStandardMaterial color="#5a2e16" roughness={0.4} emissive="#3a1a08" />
      </mesh>
      <mesh position={[0.78, 0, 0]}>
        <torusGeometry args={[0.22, 0.06, 12, 32, Math.PI]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  );
}

function Embers({ active }: { active: number }) {
  const ref = useRef<THREE.Points>(null);
  const count = 200;
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      a[i * 3] = (Math.random() - 0.5) * 16;
      a[i * 3 + 1] = Math.random() * 10 - 5;
      a[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return a;
  }, []);
  useFrame((_, delta) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < count; i++) {
      let y = pos.getY(i);
      y += delta * (0.4 + (i % 5) * 0.1);
      if (y > 6) y = -6;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
  });
  return (
    <points ref={ref} visible={active > 0.05}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#e8001c"
        transparent
        opacity={0.7 * active}
        sizeAttenuation
      />
    </points>
  );
}

function Tarmac({ active }: { active: number }) {
  return (
    <mesh rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -2.5, -2]} visible={active > 0.05}>
      <planeGeometry args={[24, 18, 1, 1]} />
      <meshBasicMaterial color="#0a0a0a" transparent opacity={active} />
    </mesh>
  );
}

function Pins({ active }: { active: number }) {
  const a = active;
  return (
    <group visible={a > 0.05}>
      {[[-2, 0, 0], [2, 0.4, 0]].map((p, i) => (
        <Float key={i} speed={2} rotationIntensity={0} floatIntensity={0.6}>
          <group position={p as [number, number, number]} scale={a}>
            <mesh>
              <coneGeometry args={[0.5, 1.2, 24]} />
              <meshStandardMaterial color="#e8001c" emissive="#e8001c" emissiveIntensity={0.8} />
            </mesh>
            <mesh position={[0, 0.7, 0]}>
              <sphereGeometry args={[0.32, 24, 24]} />
              <meshStandardMaterial color="#c9a84c" emissive="#c9a84c" emissiveIntensity={0.4} metalness={1} roughness={0.2} />
            </mesh>
          </group>
        </Float>
      ))}
    </group>
  );
}

function Scene() {
  const progress = useScrollProgress();
  // Section ranges (6 sections, each ~1/6)
  const hero = 1 - Math.min(1, progress / 0.18);
  const about = clampRange(progress, 0.15, 0.35);
  const menu = clampRange(progress, 0.32, 0.55);
  const events = clampRange(progress, 0.52, 0.72);
  const locations = clampRange(progress, 0.7, 0.9);

  return (
    <>
      <color attach="background" args={["#050505"]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} color="#ffffff" />
      <pointLight position={[-4, -2, 2]} intensity={2} color="#e8001c" />
      <pointLight position={[4, 3, -2]} intensity={1.2} color="#c9a84c" />

      <Stars radius={50} depth={30} count={1200} factor={3} fade speed={0.6} />

      <WheelBurger progress={progress} />
      <SpeedLines active={hero} />
      <CoffeeCup active={about} />
      <Embers active={Math.max(about, events)} />
      <Tarmac active={menu} />
      <Pins active={locations} />
    </>
  );
}

function clampRange(p: number, a: number, b: number) {
  if (p < a) return 0;
  if (p > b) return 1;
  return (p - a) / (b - a);
}

export default function SceneBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: false }}
      >
        <Scene />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
    </div>
  );
}
