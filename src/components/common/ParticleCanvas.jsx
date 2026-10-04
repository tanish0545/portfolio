import React, { useEffect, useRef } from 'react';

/**
 * Cinematic Black + Red Particle & Ambient Light Canvas.
 * Features red glowing nodes, animated thin connecting lines,
 * and mouse-responsive ambient light.
 */
export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = {
      x: null,
      y: null,
      radius: 130,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Dynamic density tuning for high 60fps performance
    const isMobile = width < 768;
    const particleCount = isMobile 
      ? Math.min(Math.floor((width * height) / 30000), 25)
      : Math.min(Math.floor((width * height) / 20000), 65);

    const particles = [];

    const colors = [
      'rgba(229, 9, 20, 0.65)',    // Primary Red (#E50914)
      'rgba(255, 38, 51, 0.55)',   // Bright Red (#FF2633)
      'rgba(139, 0, 0, 0.45)',     // Deep Crimson
      'rgba(255, 255, 255, 0.35)', // Faint White Star Node
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.8 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let t = 0;

    const render = () => {
      t += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Subtle slow-moving ambient red radial light in background
      const ambientX = width * (0.5 + 0.2 * Math.sin(t));
      const ambientY = height * (0.3 + 0.15 * Math.cos(t * 0.8));
      const gradient = ctx.createRadialGradient(ambientX, ambientY, 0, ambientX, ambientY, width * 0.5);
      gradient.addColorStop(0, 'rgba(229, 9, 20, 0.04)');
      gradient.addColorStop(1, 'rgba(8, 8, 8, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Mouse-responsive ambient glow
      if (mouse.x !== null && mouse.y !== null) {
        const mouseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 160);
        mouseGrad.addColorStop(0, 'rgba(229, 9, 20, 0.08)');
        mouseGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = mouseGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // Draw and connect particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= (dx / dist) * force * 1.2;
            p.y -= (dy / dist) * force * 1.2;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.15;
            ctx.strokeStyle = `rgba(229, 9, 20, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-80"
        style={{ display: 'block' }}
      />
      {/* Soft Vignette around Viewport */}
      <div className="fixed inset-0 pointer-events-none z-0 vignette-overlay" />
    </>
  );
}
