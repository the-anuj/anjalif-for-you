import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Diamond } from "lucide-react";

export default function ProposeDay() {
  const [showMessage, setShowMessage] = useState(false);
  const [shayariIndex, setShayariIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  const shayaris = [
    "💖 Mohabbat ka ehsaas hai tu,\nDil ke har ek jazbaat hai tu...\nTere bina adhura hoon main,\nBas meri zindagi ki saugat hai tu. 💞",
    "❤️ Tu meri duniya ka sitara hai,\nHar khwab ka sahara hai...\nMujhse door mat jana,\nTu hi jeene ka kinara hai. 💖",
    "💓 Tumhari ek muskurahat,\nDil ko sukoon de jaye...\nKoi pooche pyaar kya hai,\nToh sirf tera naam aaye. 💘",
    "🌹 Dil mein ek armaan hai,\nTujhse zindagi bhar ka rishta ka armaan hai...\nBas ek baar haan kehde,\nMeri duniya tujhpar qurbaan hai. 💍",
    "💞 Tumse juda hokar bhi,\nHar pal tumhara intezaar hai...\nHar saans mein sirf tera zikr,\nBas tumhi se pyar hai. ❤️"
  ];

  const bgColors = [
    "linear-gradient(135deg, #ff758c, #ff7eb3)",
    "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    "linear-gradient(135deg, #ff7e5f, #feb47b)",
    "linear-gradient(135deg, #76b852, #8dc26f)"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShayariIndex((prev) => (prev + 1) % shayaris.length);
      setBgIndex((prev) => (prev + 1) % bgColors.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: bgColors[bgIndex],
        textAlign: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
        transition: "background 1s ease-in-out",
      }}
    >
      {/* Title Animation */}
      <motion.h1
        style={{
          fontSize: "2.8rem",
          fontWeight: "bold",
          color: "white",
          textShadow: "3px 3px 10px rgba(0,0,0,0.3)",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        ❤️ Anjali, Will You be my love? 💍
      </motion.h1>

      {/* Floating Ring Animation */}
      <motion.div
        style={{
          fontSize: "80px",
          marginTop: "20px",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 1] }}
        transition={{ duration: 1 }}
      >
        💍
      </motion.div>

      {/* Shayari Card with Auto-Change */}
      <motion.div
        key={shayariIndex}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "15px",
          borderRadius: "15px",
          marginTop: "20px",
          boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
          maxWidth: "400px",
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <p style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
          {shayaris[shayariIndex]}
        </p>
      </motion.div>

      {/* Proposal Button */}
      <motion.button
        style={{
          marginTop: "20px",
          backgroundColor: "#ff3b5c",
          color: "white",
          padding: "14px 28px",
          fontSize: "20px",
          fontWeight: "bold",
          borderRadius: "30px",
          border: "none",
          boxShadow: "0px 6px 15px rgba(0,0,0,0.3)",
          cursor: "pointer",
          transition: "0.3s ease-in-out",
        }}
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowMessage(true)}
      >
        Tap to See Magic ✨
      </motion.button>

      {/* Surprise Proposal Message */}
      {showMessage && (
        <motion.div
          style={{
            marginTop: "20px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
            maxWidth: "400px",
            textAlign: "center",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Diamond size={50} color="#ff3b5c" />
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
            Anjali, You are the diamond of my life. 💎 <br />
            I promise to love you forever. 💖"
          </p>
        </motion.div>
      )}

      {/* Floating Hearts Animation */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 20}px`,
            color: "red",
            opacity: 0.7,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -200, opacity: 1 }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}
