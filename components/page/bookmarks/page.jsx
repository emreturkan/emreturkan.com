"use client";

import Link from "next/link";
import ConvertDate from "@/lib/date";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BookmarksClient({ bookmarks }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <h1 className="text-xl font-medium tracking-tight">Bookmarks</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Articles and resources I find interesting
      </p>

      <div className="mt-8 space-y-1">
        {bookmarks?.map((bookmark) => (
          <Link
            key={bookmark._id}
            href={bookmark.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block py-3 transition-opacity duration-200 hover:opacity-70"
          >
            <h3 className="text-sm font-medium text-foreground">
              {bookmark.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
              {bookmark.excerpt}
            </p>
            <div className="mt-1.5 flex items-center gap-2 font-mono text-xs text-muted-foreground/70">
              <span>{bookmark.domain}</span>
              <span>·</span>
              <span>{ConvertDate(bookmark.created)}</span>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
