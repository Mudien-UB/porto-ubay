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

    const numParticles = 100;
    const maxDistance = 100;
    const repulsionStrength = 0.2;
    const returnSpeed = 0.02;
    const driftFactor = 0.05;
    const scrollSpeedFactor = 0.3;

    class Particle {
      constructor() {
        this.baseX = Math.random() * canvas.width;
        this.baseY = Math.random() * canvas.height;
        this.x = this.baseX;
        this.y = this.baseY;
        this.size = Math.random() * 10 + 10;
        this.color = "#2d6a4f";
        this.velocityX = (Math.random() - 0.1) * 5;
        this.velocityY = (Math.random() - 0.1) * 5;
        this.angle = Math.random() * 360;
        this.angleSpeed = Math.random() * 4 - 2;
      }

      update() {
        if (mouse.current.x !== null && mouse.current.y !== null) {
          let dx = this.x - mouse.current.x;
          let dy = this.y - mouse.current.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            let force = (maxDistance - distance) / maxDistance;
            this.x += dx * force * repulsionStrength;
            this.y += dy * force * repulsionStrength;
          }
        }

        this.x += this.velocityX;
        this.y += this.velocityY;
        this.angle += this.angleSpeed;

        this.velocityX += (Math.random() - 0.5) * driftFactor;
        this.velocityY += (Math.random() - 0.5) * driftFactor;

        this.x += (this.baseX - this.x) * returnSpeed;
        this.y += (this.baseY - this.y) * returnSpeed;

        if (this.x <= 0 || this.x >= canvas.width) this.velocityX *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.velocityY *= -1;
      }

      drawLeaf() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.angle * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-this.size / 2, -this.size, -this.size, this.size / 2, 0, this.size);
        ctx.bezierCurveTo(this.size, this.size / 2, this.size / 2, -this.size, 0, 0);
        ctx.fill();
        ctx.restore();
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

    const handleMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    const handleScroll = () => {
      let scrollDiff = window.scrollY - scrollOffset.current;
      particlesArray.current.forEach((particle) => {
        particle.y += scrollDiff * scrollSpeedFactor;
      });
      scrollOffset.current = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.current.forEach((particle) => {
        particle.update();
        particle.drawLeaf();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
}
