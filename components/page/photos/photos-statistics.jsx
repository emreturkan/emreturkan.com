"use client";

import { motion } from "framer-motion";
import PhotoNumber from "./photo-number";

export default function PhotosStatisticsClient({ stats }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <h1 className="text-xl font-medium tracking-tight">Photos</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        My photography from Unsplash
      </p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        className="mt-8 flex gap-8"
      >
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Downloads
          </p>
          <p className="mt-1 text-2xl font-semibold tracking-tight">
            {stats?.downloads?.total ? (
              <PhotoNumber number={stats.downloads.total} />
            ) : (
              "—"
            )}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Views
          </p>
          <p className="mt-1 text-2xl font-semibold tracking-tight">
            {stats?.views?.total ? (
              <PhotoNumber number={stats.views.total} />
            ) : (
              "—"
            )}
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
