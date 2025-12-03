"use client"

import { useState, useRef, useEffect } from "react"

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const togglePortal = (currentState: boolean) => {
    setIsOpen((prevState) => !prevState)
  }

  useEffect(() => {
    if (!isOpen) return

    const createRibbon = () => {
      const ribbon = document.createElement("div")
      ribbon.className = "ribbon"
      const startX = Math.random() * window.innerWidth
      const duration = 3000 + Math.random() * 2000

      ribbon.style.left = startX + "px"
      ribbon.style.top = "-20px"
      ribbon.style.animation = `fallRibbon ${duration}ms linear forwards`

      document.body.appendChild(ribbon)

      setTimeout(() => ribbon.remove(), duration)
    }

    const ribbonInterval = setInterval(createRibbon, 600)
    return () => clearInterval(ribbonInterval)
  }, [isOpen])

  const handleScroll = () => {
    if (!scrollContainerRef.current) return

    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current
    const scrollPercent = scrollTop / (scrollHeight - clientHeight)

    const scrollBar = scrollContainerRef.current.querySelector(".scroll-bar") as HTMLElement
    if (scrollBar) {
      scrollBar.style.height = (clientHeight / scrollHeight) * 100 + "%"
      scrollBar.style.top = scrollPercent * 100 + "%"
    }
  }

  return (
    <div className="container">
      <div
        className={`portal-gate ${isOpen ? "open" : ""}`}
        onClick={() => togglePortal(isOpen)}
        style={{ cursor: isOpen ? "default" : "pointer" }}
      >
        <div className="outer-ribbons"></div>

        <div className="door door-left">
          <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
            <img
              src="/images/calice-eucaristico.jpeg"
              alt="Cálice eucarístico"
              style={{
                height: "100%",
                width: "auto",
                minWidth: "200%",
                objectFit: "cover",
                position: "absolute",
                left: "0",
                top: "0"
              }}
            />
          </div>
        </div>
        <div className="door door-right">
          <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
            <img
              src="/images/calice-eucaristico.jpeg"
              alt="Cálice eucarístico"
              style={{
                height: "100%",
                width: "auto",
                minWidth: "200%",
                objectFit: "cover",
                position: "absolute",
                right: "0",
                top: "0"
              }}
            />
          </div>
        </div>

        <div className="sacred-room">
          <div className="room-background">
            <img src="/images/whatsapp-20image-202025-12-02-20at-208.jpeg" alt="Jesus abençoando criança e cordeiro" />
          </div>

          <div className="divine-light"></div>

          <div className="message-container">
            <div className="cross-decoration cross-top-left">✦</div>
            <div className="cross-decoration cross-top-right">✦</div>
            <div className="cross-decoration cross-bottom-left">✦</div>
            <div className="cross-decoration cross-bottom-right">✦</div>

            <div className="message-frame" ref={scrollContainerRef} onScroll={handleScroll}>
              <div className="frame-cross">✦</div>

              <div className="message-content">
                <h1>02/12/2025</h1>
                <h2>Dedicada al Padre Norton en su Cumpleaños</h2>

                <p className="opening-greeting">
                  Querido <span className="golden-text">Padre</span>:
                </p>

                <p>
                  Hoy <span className="golden-text">Igor y yo nos hemos despertado pensando en usted</span>, porque es
                  un día muy importante en el que agradecemos a Dios por su vida; por habernos dado un gran sacerdote
                  que, a imagen del <span className="golden-text">Buen Pastor</span>, apacienta con dedicación a sus
                  ovejas. Si tuviéramos que empezar a mencionar todas sus cualidades, creo que nunca acabaríamos, porque{" "}
                  <span className="golden-text">son como las estrellas del cielo</span>. Aprovechamos para agradecerle
                  por <span className="golden-text">todas las bondades que ha hecho por nuestras almas</span>.
                </p>

                <div className="quote-section">
                  <p className="quote-intro">
                    Usted es un verdadero <span className="golden-text">regalo de Dios</span>, el Padre espiritual que
                    tanto había pedido a Nuestro Señor entre lágrimas, y que se ajusta de manera tan sublime y perfecta
                    a lo que enseñaba <span className="golden-text">San Francisco de Sales</span>:
                  </p>

                  <blockquote className="sacred-quote">
                    «Este amigo ha de ser siempre para ti un ángel; es decir, cuando lo hayas encontrado, no lo
                    consideres como un simple hombre, y no confíes en él ni en su saber humano, sino en Dios, el cual te
                    favorecerá y te hablará por medio de este hombre, en cuyo corazón y en cuyos labios pondrá lo que
                    fuere necesario para tu bien. Debes, pues, escucharlo como a un ángel que desciende del cielo para
                    conducirte a él. Confía en él con el respeto de una hija para con su padre, y respétalo con la
                    confianza de un hijo para con su madre. En una palabra, esta amistad ha de ser fuerte y dulce, toda
                    santa, toda sagrada, toda divina, toda espiritual. Ha de estar lleno de caridad, de ciencia y de
                    prudencia; si le falta una sola de estas cualidades, es muy grande el peligro.»
                  </blockquote>

                  <p className="quote-continuation">
                    Con esto, <span className="golden-text">Igor y yo estamos más que seguros</span> de que tener un
                    padre espiritual como usted es como tener un ángel que nos cuida. Por eso es imposible no sentir
                    aquella alegría que enciende y llena nuestros corazones, alegría que sólo puede venir de Dios.
                  </p>
                </div>

                <p className="gratitude">
                  Gracias, querido <span className="golden-text">Padre</span>, por guiarnos con tanta sabiduría en medio
                  de las diversas tormentas que se han presentado en nuestras vidas, y por haber sido{" "}
                  <span className="golden-text">la medicina de Dios</span> que consuela nuestros corazones y sana poco a
                  poco nuestras dolencias espirituales, ayudándonos a parecernos cada vez más a lo que Dios espera de
                  nosotros.
                </p>

                <p>
                  Y es por todo esto y mucho más que{" "}
                  <span className="golden-text">Igor y yo, con filial afecto, oramos día a día por usted</span>: para
                  que Dios lo proteja siempre, le conceda salud física y espiritual, y lo ayude en todas sus necesidades.
                </p>

                <p className="birthday-wish">
                  <span className="golden-text">Feliz cumpleaños, querido Padre</span>. Deseamos de todo corazón que
                  haya podido pasar muy bien este día y todos los que vendrán. Le apreciamos mucho.
                </p>

                <div className="signature-section">
                  <p>⚜️ 🖤 ⚜️</p>
                  <p className="names">
                    Con filial afecto,
                    <br />
                    <span className="golden-text">Guadalupe Torres e Igor Bondiman</span>
                  </p>
                </div>

                <div className="postscript-section">
                  <p className="ps-header">P.D.:</p>
                  <p className="ps-content">
                    A pedido de Igor, deseo añadir que él quiere brindarle un agasajo con{" "}
                    <span className="golden-text">un asado preparado con sus propias manos</span> cuando Dios lo
                    permita, para compartirlo con sus queridos padres y también con el Padre Genaro. ✨
                  </p>
                </div>

                <div className="footer-credits">
                  <p>
                    Esta página web fue desarrollada en la verdad por{" "}
                    <span className="golden-text">Igor Bondiman y Guadalupe Torres de Bondiman</span> -{" "}
                    <span className="golden-text">Veritas Systems</span>
                  </p>
                </div>
              </div>

              <div className="scroll-bar"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #ffffff 0%, #e6f0ff 50%, #d4e9ff 100%);
          font-family: "Lora", serif;
          color: #333;
        }

        .container {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1000px;
        }

        .portal-gate {
          position: relative;
          width: 900px;
          max-width: 90vw;
          height: 900px;
          max-height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(240, 248, 255, 0.7) 100%);
          border: 3px solid rgba(218, 165, 32, 0.3);
          border-radius: 10px;
          perspective: 1200px;
        }

        .outer-ribbons {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 15;
        }

        .door {
          position: absolute;
          width: 50%;
          height: 100%;
          background: linear-gradient(135deg, #f5f5dc 0%, #fffacd 100%);
          border: 8px solid rgba(218, 165, 32, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          position: relative;
          box-shadow: 0 0 30px rgba(218, 165, 32, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.5);
          transform-origin: 0% 50%;
          transition: transform 2s ease-in-out;
        }

        .door-left {
          left: 0;
          transform-origin: 0% 50%;
        }

        .door-right {
          right: 0;
          transform-origin: 100% 50%;
        }

        .portal-gate.open .door-left {
          transform: rotateY(-130deg);
        }

        .portal-gate.open .door-right {
          transform: rotateY(130deg);
        }

        .sacred-room {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out 1s;
          pointer-events: none;
          overflow: hidden;
        }

        .portal-gate.open .sacred-room {
          opacity: 1;
          pointer-events: auto;
        }

        .room-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0.3;
        }

        .room-background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }

        .divine-light {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          filter: blur(60px);
          z-index: 1;
          animation: glowPulse 3s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        .message-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          width: 550px;
          max-width: 85vw;
          aspect-ratio: 1 / 1.4;
        }

        .cross-decoration {
          position: absolute;
          color: rgba(218, 165, 32, 0.6);
          font-size: 24px;
          font-weight: bold;
        }

        .cross-top-left {
          top: -50px;
          left: -50px;
        }

        .cross-top-right {
          top: -50px;
          right: -50px;
        }

        .cross-bottom-left {
          bottom: -50px;
          left: -50px;
        }

        .cross-bottom-right {
          bottom: -50px;
          right: -50px;
        }

        .message-frame {
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(6px);
          border: 2px solid rgba(218, 165, 32, 0.7);
          border-radius: 8px;
          padding: 50px;
          overflow-y: auto;
          overflow-x: hidden;
          position: relative;
          box-shadow: 0 10px 40px rgba(218, 165, 32, 0.2), inset 0 0 30px rgba(255, 215, 0, 0.1);
        }

        .message-frame::-webkit-scrollbar {
          width: 8px;
        }

        .message-frame::-webkit-scrollbar-track {
          background: transparent;
        }

        .message-frame::-webkit-scrollbar-thumb {
          background: rgba(218, 165, 32, 0.5);
          border-radius: 4px;
        }

        .message-frame::-webkit-scrollbar-thumb:hover {
          background: rgba(218, 165, 32, 0.8);
        }

        .scroll-bar {
          position: absolute;
          right: 5px;
          width: 3px;
          background: rgba(218, 165, 32, 0.8);
          border-radius: 2px;
          transition: all 0.2s ease;
          box-shadow: 0 0 10px rgba(218, 165, 32, 0.4);
        }

        .frame-cross {
          text-align: center;
          color: rgba(218, 165, 32, 0.5);
          font-size: 28px;
          margin-bottom: 20px;
        }

        .message-content h1 {
          font-family: "Cinzel", serif;
          font-size: 28px;
          color: rgba(218, 165, 32, 0.9);
          text-align: center;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .message-content h2 {
          font-family: "Cinzel", serif;
          font-size: 18px;
          color: rgba(139, 69, 19, 0.7);
          text-align: center;
          margin-bottom: 30px;
          font-weight: normal;
          letter-spacing: 1px;
        }

        .message-content p {
          font-size: 15px;
          line-height: 1.8;
          color: #333;
          margin-bottom: 20px;
          text-align: justify;
        }

        .golden-text {
          color: rgba(218, 165, 32, 0.9);
          font-weight: 600;
          text-shadow: 0 0 10px rgba(218, 165, 32, 0.3);
          -webkit-text-stroke: 0.5px rgba(0, 0, 0, 0.5);
        }

        .opening-greeting {
          font-size: 16px;
          font-style: italic;
          margin-bottom: 25px;
          color: rgba(139, 69, 19, 0.8);
        }

        .quote-section {
          background: rgba(218, 165, 32, 0.05);
          border-left: 4px solid rgba(218, 165, 32, 0.5);
          padding: 20px;
          margin: 30px 0;
          border-radius: 4px;
        }

        .quote-intro {
          margin-bottom: 15px;
          font-size: 14px;
        }

        .sacred-quote {
          font-size: 14px;
          font-style: italic;
          color: rgba(139, 69, 19, 0.8);
          padding: 15px 0;
          line-height: 1.8;
          border-left: 3px solid rgba(218, 165, 32, 0.6);
          padding-left: 15px;
          margin: 15px 0;
        }

        .quote-continuation {
          font-size: 14px;
          margin-top: 15px;
        }

        .gratitude {
          font-weight: 500;
          margin: 30px 0;
          font-size: 15px;
        }

        .birthday-wish {
          font-size: 16px;
          font-weight: 600;
          margin: 25px 0;
          text-align: center;
        }

        .signature-section {
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 2px solid rgba(218, 165, 32, 0.3);
        }

        .signature-section p {
          margin: 8px 0;
          text-align: center;
        }

        .signature {
          font-style: italic;
          color: rgba(139, 69, 19, 0.7);
          font-size: 14px;
        }

        .names {
          font-family: "Cinzel", serif;
          font-size: 16px;
          font-weight: 600;
          margin-top: 10px;
        }

        .postscript-section {
          margin-top: 40px;
          padding: 20px;
          background: rgba(218, 165, 32, 0.08);
          border-radius: 4px;
          border: 1px solid rgba(218, 165, 32, 0.3);
        }

        .ps-header {
          font-family: "Cinzel", serif;
          font-size: 14px;
          font-weight: 600;
          color: rgba(218, 165, 32, 0.85);
          margin-bottom: 10px;
        }

        .ps-content {
          font-size: 14px;
          line-height: 1.7;
        }

        .footer-credits {
          margin-top: 50px;
          padding-top: 20px;
          border-top: 2px solid rgba(218, 165, 32, 0.4);
          text-align: center;
        }

        .footer-credits p {
          font-size: 12px;
          color: rgba(139, 69, 19, 0.6);
          line-height: 1.6;
          margin-bottom: 0;
        }

        @media (min-width: 769px) {
          .container {
            justify-content: flex-end;
            padding-right: 6.5vw;
          }
        }

        @media (max-width: 768px) {
          .portal-gate {
            width: 90vw;
            height: 90vh;
          }

          .message-container {
            width: 90vw;
            max-width: 85vw;
            height: 75vh;
          }

          .message-frame {
            padding: 30px 20px;
            backdrop-filter: blur(1.5px);
          }

          .message-content h1 {
            font-size: 24px;
          }

          .message-content h2 {
            font-size: 16px;
          }

          .message-content p {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}
