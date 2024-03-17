"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Welcome = () => {
  return (
    <div className="  flex flex-col items-start justify-center mt-4 gap-2">
      <h1 className="text-lg md:text-xl  font-bold text-accent-foreground tracking-wide mb-1 md:mb-2 flex items-center justify-center">
        Merhaba, Ben Emre
        <motion.div
          animate={{ rotateZ: [-10, 20, -10] }}
          transition={{ repeat: Infinity }}
        >
          👋
        </motion.div>
      </h1>
      <p className="text-lg md:text-base  text-accent-foreground ">
        Şu anda İstanbul'da yaşıyorum ve{" "}
        <Link
          target="_blank"
          className=" text-blue-300 hover:text-blue-400 transition duration-300 ease-in-out"
          href="https://entererp.com"
        >
          EnterERP
        </Link>{" "}
        firmasında Frontend Developer olarak çalışıyorum.💻
      </p>
      <p className="text-lg md:text-base  text-accent-foreground ">
        3D modellemeyi 🗿, fotoğraf çekmeyi 📸, oyun oynamayı 🎮 ve proje
        geliştirmeyi seviyorum.⌨ Son zamanlarda FPV Drone ile ilgileniyorum ve
        drone uçuruyorum.🚁
        <br />
        <br />
        Şu an için boş vakitlerimde oyun geliştirme ile ilgileniyorum ve Unity
        öğreniyorum.🎮
      </p>
    </div>
  );
};

export default Welcome;
