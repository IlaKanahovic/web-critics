import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop"
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile"
import { FaEnvelope, FaPhone, FaTelegram, FaWhatsapp, FaMapMarkerAlt, FaCommentDots, FaPaperPlane } from "react-icons/fa"
import { ContactsForm } from "./components/ContactsForm"
import { Footer } from "@/components/layout/footer/Footer"

const nodes = [
    { Icon: FaEnvelope, x: 12, y: 22, size: 32, color: "#a78bfa", delay: 0 },
    { Icon: FaPhone, x: 28, y: 40, size: 26, color: "#7aa2ff", delay: 0.8 },
    { Icon: FaTelegram, x: 82, y: 28, size: 30, color: "#a78bfa", delay: 1.6 },
    { Icon: FaWhatsapp, x: 68, y: 58, size: 28, color: "#7aa2ff", delay: 2.4 },
    { Icon: FaMapMarkerAlt, x: 18, y: 72, size: 30, color: "#a78bfa", delay: 0.4 },
    { Icon: FaCommentDots, x: 88, y: 78, size: 26, color: "#c4b5fd", delay: 2 },
    { Icon: FaPaperPlane, x: 50, y: 88, size: 32, color: "#7aa2ff", delay: 1.2 },
    { Icon: FaEnvelope, x: 50, y: 14, size: 24, color: "#c4b5fd", delay: 3 },
]

const links: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 5],
    [1, 4], [4, 6], [6, 5], [0, 7],
    [7, 2], [3, 6], [1, 7],
]

export default function Contacts() {
    return (
        <div className="relative min-h-screen bg-[#050505] overflow-hidden" style={{ isolation: "isolate" }}>
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="contactLine" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0" />
                            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.12" />
                            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {links.map(([a, b], i) => (
                        <line
                            key={i}
                            x1={nodes[a].x}
                            y1={nodes[a].y}
                            x2={nodes[b].x}
                            y2={nodes[b].y}
                            stroke="url(#contactLine)"
                            strokeWidth="0.08"
                            vectorEffect="non-scaling-stroke"
                        />
                    ))}

                    {links.map(([a, b], i) => (
                        <circle key={`p-${i}`} r="0.25" fill="#c4b5fd" opacity="0.7">
                            <animateMotion
                                dur={`${5 + (i % 4)}s`}
                                begin={`${(i * 0.6) % 5}s`}
                                repeatCount="indefinite"
                                path={`M ${nodes[a].x} ${nodes[a].y} L ${nodes[b].x} ${nodes[b].y}`}
                            />
                            <animate
                                attributeName="opacity"
                                values="0;0.7;0"
                                dur={`${5 + (i % 4)}s`}
                                begin={`${(i * 0.6) % 5}s`}
                                repeatCount="indefinite"
                            />
                        </circle>
                    ))}
                </svg>

                {nodes.map((n, i) => (
                    <div
                        key={i}
                        className="absolute contacts-node"
                        style={{
                            left: `${n.x}%`,
                            top: `${n.y}%`,
                            transform: "translate(-50%, -50%)",
                            animationDelay: `${n.delay}s`,
                        }}
                    >
                        <div
                            className="relative flex items-center justify-center"
                            style={{ width: n.size * 2.5, height: n.size * 2.5 }}
                        >
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: `radial-gradient(circle, ${n.color}20, transparent 70%)`,
                                }}
                            />
                            <div
                                className="absolute inset-[15%] rounded-full border"
                                style={{ borderColor: `${n.color}25` }}
                            />
                            <n.Icon
                                style={{
                                    color: n.color,
                                    fontSize: n.size,
                                    opacity: 0.55,
                                }}
                            />
                        </div>
                    </div>
                ))}

                <div className="contacts-glow-1 absolute top-[15%] left-[5%] w-225 h-225 rounded-full" />
                <div className="contacts-glow-2 absolute bottom-[10%] right-[5%] w-225 h-225 rounded-full" />
            </div>
            <style>{`
                @keyframes contactsNodePulse {
                    0%, 100% { opacity: 0.55; transform: translate(-50%, -50%) scale(1); }
                    50% { opacity: 0.95; transform: translate(-50%, -50%) scale(1.06); }
                }
                @keyframes contactsGlow1 {
                    0%, 100% { transform: translate(0, 0); opacity: 0.3; }
                    50% { transform: translate(100px, 60px); opacity: 0.5; }
                }
                @keyframes contactsGlow2 {
                    0%, 100% { transform: translate(0, 0); opacity: 0.25; }
                    50% { transform: translate(-100px, -60px); opacity: 0.45; }
                }
                .contacts-node {
                    animation: contactsNodePulse 5s ease-in-out infinite;
                }
                .contacts-glow-1 {
                    background: radial-gradient(circle, rgba(167,139,250,0.08), transparent 70%);
                    animation: contactsGlow1 26s ease-in-out infinite;
                }
                .contacts-glow-2 {
                    background: radial-gradient(circle, rgba(122,162,255,0.07), transparent 70%);
                    animation: contactsGlow2 30s ease-in-out infinite;
                }
            `}</style>
            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <ContactsForm />
                <Footer />
            </div>
        </div>
    )
}