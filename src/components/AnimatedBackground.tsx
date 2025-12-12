import React, { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      isGold: boolean;
      glowIntensity: number;
    }> = [];

    const particleCount = 80;
    const connectionDistance = 150;
    const goldParticleRatio = 0.18;

    for (let i = 0; i < particleCount; i++) {
      const isGold = Math.random() < goldParticleRatio;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: isGold ? Math.random() * 2 + 1 : Math.random() * 1.5 + 0.5,
        isGold,
        glowIntensity: Math.random(),
      });
    }

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        particle.glowIntensity = 0.5 + Math.sin(time + i * 0.1) * 0.5;

        if (particle.isGold) {
          const glowSize = particle.radius + 2 * particle.glowIntensity;
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, glowSize
          );
          gradient.addColorStop(0, `rgba(251, 191, 36, ${0.6 * particle.glowIntensity})`);
          gradient.addColorStop(0.5, `rgba(251, 191, 36, ${0.3 * particle.glowIntensity})`);
          gradient.addColorStop(1, 'rgba(251, 191, 36, 0)');

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(251, 191, 36, ${0.7 + 0.3 * particle.glowIntensity})`;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(16, 185, 129, 0.4)';
          ctx.fill();
        }

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = (1 - distance / connectionDistance) * 0.2;

            const isGoldConnection = particle.isGold || particles[j].isGold;
            if (isGoldConnection) {
              ctx.strokeStyle = `rgba(251, 191, 36, ${opacity * 0.8})`;
              ctx.lineWidth = 0.8;
            } else {
              ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
              ctx.lineWidth = 0.5;
            }
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
}
