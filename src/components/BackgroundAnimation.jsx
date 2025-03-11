import React, { useEffect, useRef } from "react";

export default function BackgroundAnimation() {
  const canvasRef = useRef(null);
  const particlesArray = useRef([]);
  const mouse = useRef({ x: null, y: null });
  const scrollOffset = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Canvas context is null");
      return;
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const numParticles = 150;
    const maxDistance = 100;
    const repulsionStrength = 0.2; // Semakin besar, semakin cepat menjauh
    const returnSpeed = 0.02;
    const scrollSpeedFactor = 0.3;

    class Particle {
      constructor() {
        this.baseX = Math.random() * canvas.width;
        this.baseY = Math.random() * canvas.height;
        this.x = this.baseX;
        this.y = this.baseY;
        this.width = Math.random() * 10 + 5;
        this.height = 2;
        this.angle = Math.random() * 360;
        this.color = "#8c7130";
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }

      update() {
        if (mouse.current.x !== null && mouse.current.y !== null) {
          let dx = this.x - mouse.current.x; // Mengubah arah menjauh dari mouse
          let dy = this.y - mouse.current.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            let force = (maxDistance - distance) / maxDistance; // Efek lebih kuat saat dekat
            this.x += dx * force * repulsionStrength;
            this.y += dy * force * repulsionStrength;
          } else {
            this.x += (this.baseX - this.x) * returnSpeed;
            this.y += (this.baseY - this.y) * returnSpeed;
          }
        } else {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
          if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.angle * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        ctx.restore();
      }
    }

    // Inisialisasi partikel
    particlesArray.current = [];
    for (let i = 0; i < numParticles; i++) {
      particlesArray.current.push(new Particle());
    }

    // Event listener untuk mouse
    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    // Event listener untuk scroll
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
        particle.draw();
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
