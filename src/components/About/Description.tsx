import { profileDescription } from "../../constants";
import styles from "./About.module.css";

export default function Description() {
  return (
    <div>
      <p className={styles.description}>{profileDescription}</p>
      <div>Interests: ...</div>
    </div>
  );
}
