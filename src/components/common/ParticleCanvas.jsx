import React, { useEffect, useRef } from 'react';

/**
 * Atmospheric Subtle Red Particles Canvas.
 * Configured at Layer 4 (z-index 3 in Hero atmosphere),
 * staying strictly behind the portrait, hero name, cards, and interactive UI.
 */
export default function ParticleCanvas({ className = "absolute inset-0 pointer-events-none z-[3]" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const getDimensions = () => {
      const parent = canvas.parentElement;
      return {
        width: parent ? parent.clientWidth : window.innerWidth,
        height: parent ? parent.clientHeight : window.innerHeight,
      };
    };

    let { width, height } = getDimensions();
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      if (!canvas) return;
      const dim = getDimensions();
      width = canvas.width = dim.width;
      height = canvas.height = dim.height;
    };

    window.addEventListener('resize', handleResize);

    const mouse = {
      x: null,
      y: null,
      radius: 100,
    };

    const handleMouseMove = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const isMobile = width < 768;
    // Controlled, subtle particle count to avoid visual clutter
    const particleCount = isMobile ? 18 : 36;

    const particles = [];

    const particleColors = [
      'rgba(229, 9, 20, 0.75)',   // Primary Red (#E50914)
      'rgba(255, 38, 51, 0.65)',  // Bright Red (#FF2633)
      'rgba(239, 68, 68, 0.55)',  // Crimson
      'rgba(255, 255, 255, 0.35)', // Subtle Star Spark
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        baseSize: Math.random() * 1.3 + 0.8,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.015,
        colorIndex: Math.floor(Math.random() * 4),
      });
    }

    let t = 0;

    const render = () => {
      t += 0.01;
      ctx.clearRect(0, 0, width, height);

      const activeColors = particleColors;

      // Draw subtle drifting and pulsing background particles
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
            p.x -= (dx / dist) * force * 0.8;
            p.y -= (dy / dist) * force * 0.8;
          }
        }

        // Subtle breathing radius
        const currentRadius = p.baseSize * (1 + 0.18 * Math.sin(t * 1.8 + p.pulsePhase));

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.6, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = activeColors[p.colorIndex];
        ctx.shadowColor = 'rgba(229, 9, 20, 0.45)';
        ctx.shadowBlur = isMobile ? 3 : 5;
        ctx.fill();

        // Very delicate connecting lines between close particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 75) {
            const alpha = (1 - dist / 75) * 0.09;
            ctx.shadowBlur = 0;
            ctx.strokeStyle = `rgba(229, 9, 20, ${alpha})`;
            ctx.lineWidth = 0.5;
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
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        display: 'block',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
}
