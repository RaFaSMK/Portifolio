"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Snake {
  x: number;
  y: number;
  dx: number;
  dy: number;
  color: string;
  trail: { x: number; y: number }[];
  maxTrail: number;
  speed: number;
  turnTimer: number;
  turnInterval: number;
}

const DARK_COLORS = [
  "#4facfe",
  "#00f2fe",
  "#43e97b",
  "#fa709a",
  "#feb47b",
  "#7f5af0",
  "#e84393",
  "#fdcb6e",
  "#0984e3",
  "#6c5ce7",
];

const LIGHT_COLORS = [
  "#2563eb",
  "#059669",
  "#d946ef",
  "#ea580c",
  "#0891b2",
  "#7c3aed",
  "#dc2626",
  "#ca8a04",
  "#0d9488",
  "#be185d",
];

export function PathfinderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cellSize = 16;
    let animationId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = theme === "light" ? LIGHT_COLORS : DARK_COLORS;
    const gridAlpha = theme === "light" ? 0.08 : 0.06;

    // Create snakes
    const snakes: Snake[] = [];
    const numSnakes = Math.min(12, Math.floor((canvas.width * canvas.height) / 40000));
    
    for (let i = 0; i < numSnakes; i++) {
      const dir = Math.random() > 0.5 ? 1 : -1;
      const horizontal = Math.random() > 0.5;
      snakes.push({
        x: Math.floor(Math.random() * (canvas.width / cellSize)) * cellSize,
        y: Math.floor(Math.random() * (canvas.height / cellSize)) * cellSize,
        dx: horizontal ? dir * cellSize : 0,
        dy: horizontal ? 0 : dir * cellSize,
        color: colors[i % colors.length],
        trail: [],
        maxTrail: 12 + Math.floor(Math.random() * 20),
        speed: 80 + Math.random() * 120,
        turnTimer: 0,
        turnInterval: 3 + Math.random() * 8,
      });
    }

    let lastTime = 0;
    const timers = snakes.map(() => 0);

    const drawGrid = () => {
      ctx.strokeStyle =
        theme === "light"
          ? `rgba(0, 0, 0, ${gridAlpha})`
          : `rgba(255, 255, 255, ${gridAlpha})`;
      ctx.lineWidth = 0.5;

      for (let x = 0; x < canvas.width; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();

      snakes.forEach((snake, i) => {
        timers[i] += delta;
        snake.turnTimer += delta;

        if (timers[i] >= snake.speed / 1000) {
          timers[i] = 0;

          // Random turn
          if (snake.turnTimer >= snake.turnInterval) {
            snake.turnTimer = 0;
            snake.turnInterval = 3 + Math.random() * 8;

            if (snake.dx !== 0) {
              snake.dy = (Math.random() > 0.5 ? 1 : -1) * cellSize;
              snake.dx = 0;
            } else {
              snake.dx = (Math.random() > 0.5 ? 1 : -1) * cellSize;
              snake.dy = 0;
            }
          }

          snake.trail.unshift({ x: snake.x, y: snake.y });
          if (snake.trail.length > snake.maxTrail) {
            snake.trail.pop();
          }

          snake.x += snake.dx;
          snake.y += snake.dy;

          // Wrap around
          if (snake.x < -cellSize) snake.x = canvas.width;
          if (snake.x > canvas.width + cellSize) snake.x = -cellSize;
          if (snake.y < -cellSize) snake.y = canvas.height;
          if (snake.y > canvas.height + cellSize) snake.y = -cellSize;
        }

        // Draw trail
        snake.trail.forEach((pos, j) => {
          const alpha = 1 - j / snake.trail.length;
          ctx.globalAlpha = alpha * 0.6;
          ctx.fillStyle = snake.color;
          ctx.fillRect(pos.x + 1, pos.y + 1, cellSize - 2, cellSize - 2);
        });

        // Draw head
        ctx.globalAlpha = 0.9;
        ctx.fillStyle = snake.color;
        ctx.fillRect(snake.x + 1, snake.y + 1, cellSize - 2, cellSize - 2);

        // Draw scattered dots
        ctx.globalAlpha = 0.25;
        if (Math.random() < 0.002) {
          const dotX = Math.floor(Math.random() * (canvas.width / cellSize)) * cellSize;
          const dotY = Math.floor(Math.random() * (canvas.height / cellSize)) * cellSize;
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
          ctx.fillRect(dotX + 3, dotY + 3, cellSize - 6, cellSize - 6);
        }
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
