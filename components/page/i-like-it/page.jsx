"use client";

import Link from "next/link";
import ConvertDate from "@/lib/date";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ILikeItClient({ bookmarks }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <h1 className="text-xl font-medium tracking-tight">I Like It</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Games and ideas from developers that inspire me
      </p>

      <div className="mt-8 space-y-2">
        {bookmarks?.map((bookmark) => (
          <Link
            key={bookmark._id}
            href={bookmark.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 py-3 transition-opacity duration-200 hover:opacity-70"
          >
            <Image
              src={bookmark.cover}
              alt={bookmark.title || "Game cover"}
              width={64}
              height={64}
              className="h-16 w-16 rounded-lg object-cover"
            />
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-medium text-foreground">
                {bookmark.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                {bookmark.excerpt}
              </p>
              <div className="mt-1.5 flex items-center gap-2 text-xs text-muted-foreground/70">
                <span>{bookmark.domain}</span>
                <span>·</span>
                <span>{ConvertDate(bookmark.created)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
