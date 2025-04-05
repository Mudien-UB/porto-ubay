import React, { useEffect, useRef } from "react";

export default function BackgroundAnimation() {
  const canvasRef = useRef(null);
  const particlesArray = useRef([]);
  const mouse = useRef({ x: null, y: null });
  const scrollOffset = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const area = canvas.width * canvas.height;
    const baseParticles = 150;
    const standardArea = 1920 * 1080;

    const scale = area / standardArea;
    const numParticles = Math.floor(baseParticles * Math.pow(scale, 0.5));


    const maxDistance = 150;
    const repulsionStrength = 0.1;
    const driftFactor = 0.02;
    const scrollSpeedFactor = 0.2;

    const smoothMouse = { x: null, y: null };
    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

    class Particle {
      constructor() {
        this.spawnFromEdge();
        this.size = 3;
        this.color = "#2d6a4f";
        this.angle = Math.random() * 360;
        this.angleSpeed = Math.random() * 0.2 - 0.1;
        this.connections = 0;
        this.opacity = 1;
        this.isFadingOut = false;
      }

      spawnFromEdge() {
        const edge = Math.floor(Math.random() * 4);
        const margin = 50;
        switch (edge) {
          case 0:
            this.x = -margin;
            this.y = Math.random() * canvas.height;
            this.velocityX = Math.random() * 0.1 + 0.1;
            this.velocityY = (Math.random() - 0.5) * 0.1;
            break;
          case 1:
            this.x = canvas.width + margin;
            this.y = Math.random() * canvas.height;
            this.velocityX = -Math.random() * 0.1 - 0.1;
            this.velocityY = (Math.random() - 0.5) * 0.1;
            break;
          case 2:
            this.x = Math.random() * canvas.width;
            this.y = -margin;
            this.velocityY = Math.random() * 0.1 + 0.1;
            this.velocityX = (Math.random() - 0.5) * 0.1;
            break;
          case 3:
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + margin;
            this.velocityY = -Math.random() * 0.1 - 0.1;
            this.velocityX = (Math.random() - 0.5) * 0.1;
            break;
        }
      }

      update() {
        if (mouse.current.x !== null && mouse.current.y !== null) {
          if (smoothMouse.x === null) {
            smoothMouse.x = mouse.current.x;
            smoothMouse.y = mouse.current.y;
          } else {
            smoothMouse.x = lerp(smoothMouse.x, mouse.current.x, 0.1);
            smoothMouse.y = lerp(smoothMouse.y, mouse.current.y, 0.1);
          }

          const dx = this.x - smoothMouse.x;
          const dy = this.y - smoothMouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            this.x += dx * force * repulsionStrength;
            this.y += dy * force * repulsionStrength;
          }
        }

        this.velocityX += (Math.random() - 0.5) * driftFactor;
        this.velocityY += (Math.random() - 0.5) * driftFactor;
        this.x += this.velocityX;
        this.y += this.velocityY;

        const margin = 100;
        if (
          this.x < -margin ||
          this.x > canvas.width + margin ||
          this.y < -margin ||
          this.y > canvas.height + margin
        ) {
          this.spawnFromEdge();
        }

        if (this.isFadingOut) {
          this.opacity -= 0.02;
        }

        this.connections = 0;
      }

      drawPoint() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45, 106, 79, ${Math.max(this.opacity, 0)})`;
        ctx.fill();
      }
    }

    particlesArray.current = [];
    for (let i = 0; i < numParticles; i++) {
      particlesArray.current.push(new Particle());
    }

    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    const handleScroll = () => {
      const scrollDiff = window.scrollY - scrollOffset.current;
      particlesArray.current.forEach((p) => {
        p.y -= scrollDiff * scrollSpeedFactor;
      });
      scrollOffset.current = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.current.forEach((p) => p.update());

      for (let i = 0; i < particlesArray.current.length; i++) {
        const p1 = particlesArray.current[i];
        for (let j = i + 1; j < particlesArray.current.length; j++) {
          const p2 = particlesArray.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            p1.connections++;
            p2.connections++;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(45, 106, 79, ${1 - distance / maxDistance})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particlesArray.current.length; i++) {
        const p = particlesArray.current[i];

        if (p.connections === 0) {
          p.isFadingOut = true;
        } else {
          p.isFadingOut = false;
          p.opacity = 1;
        }

        if (p.opacity <= 0) {
          particlesArray.current[i] = new Particle();
        } else {
          p.drawPoint();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
}
