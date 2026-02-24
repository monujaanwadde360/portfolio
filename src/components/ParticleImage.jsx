import { useRef, useEffect, useState } from "react"

function ParticleImage({ src, className }) {
  const canvasRef = useRef(null)
  const [particles, setParticles] = useState([])
  const mouseRef = useRef({ x: null, y: null })
  const timeRef = useRef(0)

  // Create particles from image
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d", { willReadFrequently: true })

    const image = new Image()
    image.src = src

    image.onload = () => {
      const width = 400
      const height = 500

      canvas.width = width
      canvas.height = height

      ctx.drawImage(image, 0, 0, width, height)
      const imageData = ctx.getImageData(0, 0, width, height)
      const data = imageData.data

      const newParticles = []
      const gap = 4

      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const index = (y * width + x) * 4
          const alpha = data[index + 3]
          const r = data[index]
          const g = data[index + 1]
          const b = data[index + 2]

          if (alpha > 128 && r + g + b > 80) {
            newParticles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              originX: x,
              originY: y,
              color: `rgb(${r},${g},${b})`,
              baseSize: Math.random() * 1.6 + 0.8,
              floatOffset: Math.random() * 1000,
              vx: 0,
              vy: 0,
            })
          }
        }
      }

      setParticles(newParticles)
    }
  }, [src])

  // Mouse interaction
  useEffect(() => {
    const canvas = canvasRef.current

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null }
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Ultra Smooth Animation
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      timeRef.current += 0.02
      const mouse = mouseRef.current
      const radius = 80

      particles.forEach((p) => {
        // 🌊 Floating idle motion
        const floatX = Math.sin(timeRef.current + p.floatOffset) * 0.3
        const floatY = Math.cos(timeRef.current + p.floatOffset) * 0.3

        const dx = p.originX + floatX - p.x
        const dy = p.originY + floatY - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Smooth spring physics
        const spring = 0.04
        p.vx += dx * spring
        p.vy += dy * spring

        // Friction for smooth motion
        p.vx *= 0.92
        p.vy *= 0.92

        // Mouse soft repulsion
        if (mouse.x !== null) {
          const dxMouse = mouse.x - p.x
          const dyMouse = mouse.y - p.y
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)

          if (distMouse < radius) {
            const angle = Math.atan2(dyMouse, dxMouse)
            const force = (radius - distMouse) / radius

            p.vx -= Math.cos(angle) * force * 1.5
            p.vy -= Math.sin(angle) * force * 1.5
          }
        }

        p.x += p.vx
        p.y += p.vy

        // ✨ Breathing glow effect
        const pulse = 0.5 + Math.sin(timeRef.current * 2 + p.floatOffset) * 0.3
        const size = p.baseSize * pulse

        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)

        // Premium gradient glow
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          size * 4
        )

        gradient.addColorStop(0, p.color)
        gradient.addColorStop(1, "rgba(120, 180, 255, 0.05)")

        ctx.fillStyle = gradient
        ctx.shadowColor = "rgba(150, 200, 255, 0.4)"
        ctx.shadowBlur = 18
        ctx.fill()

        ctx.shadowBlur = 0
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationFrameId)
  }, [particles])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}

export default ParticleImage