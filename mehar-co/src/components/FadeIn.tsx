import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
};
const FadeIn = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "100% 0px -150px 0px" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
