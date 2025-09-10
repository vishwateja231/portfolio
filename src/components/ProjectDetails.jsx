import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  const descIcons = [
    "/assets/arrow-right.svg",
    "/assets/arrow-up.svg",
    "/assets/copy.svg",
    "/assets/copy-done.svg",
  ];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          <div className="flex flex-col gap-2">
            {subDescription.map((subDesc, index) => (
              <div key={index} className="flex items-start gap-2 text-neutral-300">
                <img
                  src={descIcons[index % descIcons.length]}
                  className="mt-1 size-4 opacity-80"
                  alt=""
                />
                <p className="font-normal text-neutral-400">{subDesc}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <div className="flex gap-3">
              {href?.live && (
                <a
                  href={href.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                >
                  Live Demo
                  <img src="assets/arrow-up.svg" className="size-4" />
                </a>
              )}
              {href?.github && (
                <a
                  href={href.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                >
                  GitHub
                  <img src="/assets/logos/github.svg" className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
