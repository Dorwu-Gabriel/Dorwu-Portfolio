// Overlay component placeholder for your scrolling glowing line animation.
// You can replace the contents with a canvas/SVG implementation.
export default function ScrollGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 mix-blend-screen"
      style={{
        background:
          'radial-gradient(600px 100px at 50% 0, rgba(20,184,166,0.12), transparent 60%)',
      }}
    />
  )
}
