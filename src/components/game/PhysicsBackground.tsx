"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";
import { physicsIcons } from "@/data/gameData";

export const PhysicsBackground = () => {
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const renderRef = useRef<Matter.Render | null>(null);

    useEffect(() => {
        if (!sceneRef.current) return;

        // Module aliases
        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Composite = Matter.Composite,
            Bodies = Matter.Bodies,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint,
            Events = Matter.Events,
            Body = Matter.Body,
            Vector = Matter.Vector;

        // Create engine
        const engine = Engine.create();
        engineRef.current = engine;
        engine.gravity.y = 0.5; // Gentle gravity

        // Create renderer
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                background: "transparent",
                wireframes: false,
                pixelRatio: window.devicePixelRatio,
            },
        });
        renderRef.current = render;

        // Boundaries
        const width = window.innerWidth;
        const height = window.innerHeight;
        const wallOptions = { isStatic: true, render: { visible: false } };

        const ground = Bodies.rectangle(width / 2, height + 60, width + 200, 120, wallOptions);
        const leftWall = Bodies.rectangle(-60, height / 2, 120, height * 2, wallOptions);
        const rightWall = Bodies.rectangle(width + 60, height / 2, 120, height * 2, wallOptions);
        // Add a top wall way up to recycle bodies if needed, or just keep them in
        // No top wall so they can fall in if we want, but let's add one way up to prevent flying out
        // Actually, no top wall is better for "dropping" feel if we spawned them, but we'll spawn inside.

        Composite.add(engine.world, [ground, leftWall, rightWall]);

        // Add Bodies (Icons)
        const scale = Math.max(width, height) / 1440 * 0.7; // Responsive scale

        physicsIcons.forEach((icon, i) => {
            // Create multiple copies of icons for more fun
            for (let j = 0; j < 3; j++) {
                const x = Math.random() * width;
                const y = Math.random() * -500 - 100; // Start above screen

                const body = Bodies.rectangle(x, y, 60 * scale, 60 * scale, {
                    restitution: 0.6,
                    friction: 0.1,
                    render: {
                        sprite: {
                            texture: icon,
                            xScale: scale * 0.3, // Adjust based on actual image size (512x512 is big)
                            yScale: scale * 0.3
                        }
                    }
                });
                Composite.add(engine.world, body);
            }
        });


        // Mouse Control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });

        Composite.add(engine.world, mouseConstraint);

        // Keep the mouse in sync with rendering
        render.mouse = mouse;

        // Repulsion Logic
        Events.on(engine, "beforeUpdate", () => {
            const mousePosition = mouse.position;
            const bodies = Composite.allBodies(engine.world);

            bodies.forEach(body => {
                if (body.isStatic) return;

                const d = Vector.magnitude(Vector.sub(body.position, mousePosition));
                const repulsionRange = 150;

                if (d < repulsionRange) {
                    const forceMagnitude = (repulsionRange - d) / repulsionRange * 0.0005 * body.mass;
                    const force = Vector.mult(Vector.normalise(Vector.sub(body.position, mousePosition)), forceMagnitude);
                    Body.applyForce(body, body.position, force);
                }
            });
        });

        // Run the engine
        Render.run(render);
        const runner = Runner.create();
        Runner.run(runner, engine);

        // Resize handler
        const handleResize = () => {
            render.canvas.width = window.innerWidth;
            render.canvas.height = window.innerHeight;

            // Reposition ground/walls
            Body.setPosition(ground, Vector.create(window.innerWidth / 2, window.innerHeight + 60));
            Body.setPosition(rightWall, Vector.create(window.innerWidth + 60, window.innerHeight / 2));

            // Update box dimensions of ground (requires re-creation or scaling, easier to just move for now for walls)
            // For production robustness, we'd recreate boundaries. 
            // Simple workaround: just scale ground? No, static bodies are tricky. 
            // Let's just update bounds.
        };

        window.addEventListener("resize", handleResize);


        return () => {
            window.removeEventListener("resize", handleResize);
            Render.stop(render);
            Runner.stop(runner);
            Engine.clear(engine);
            render.canvas.remove();
            render.canvas = null as any;
            render.context = null as any;
            render.textures = {};
        };
    }, []);

    return (
        <div
            ref={sceneRef}
            className="fixed inset-0 z-0" // pointer-events-none removed to allow interaction
        // Wait, if it's pointer-events-none, the matter.js mouse events won't fire on the canvas?
        // Actually, Matter.js attaches listeners to the canvas. 
        // If we put it behind everything (z-0) and CardStack is z-10, we want the background to be interactive *where there are no cards*.
        // So we should NOT set pointer-events-none on the container, but maybe the canvas.
        // Matter.Mouse attaches to the element. 
        // Let's remove pointer-events-none and handle z-indexes carefully.
        />
    );
};
