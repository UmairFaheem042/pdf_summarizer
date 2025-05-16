// export const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.2,
//             delayChildren: 0.1
//         },
//     }
// }

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

export const buttonVariant = {
    scale: 1.05,
    transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
    }
}

export const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 50,
            duration: 0.8
        },
    }
}